const http = require("http");
const fs = require("fs");
const path = require("path");
const os = require("os");

const PORT = Number(process.env.PORT || 8080);
const ROOT = __dirname;
const DATA_DIR = path.join(ROOT, "data");
const DATA_FILE = path.join(DATA_DIR, "sessions.json");
const clients = new Set();

const mime = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon"
};

function loadSessions() {
  try { return JSON.parse(fs.readFileSync(DATA_FILE, "utf8")); }
  catch { return []; }
}

let sessions = loadSessions();

function saveSessions() {
  fs.mkdirSync(DATA_DIR, { recursive: true });
  fs.writeFileSync(DATA_FILE, JSON.stringify(sessions, null, 2));
}

function publicSession(item) {
  return {
    id: String(item.id || "").slice(0, 80),
    name: String(item.name || "Student").slice(0, 60),
    score: Math.max(0, Number(item.score) || 0),
    elapsed: Math.max(0, Number(item.elapsed) || 0),
    mission: Math.min(8, Math.max(0, Number(item.mission) || 0)),
    status: ["playing", "finished", "offline"].includes(item.status) ? item.status : "playing",
    updatedAt: Number(item.updatedAt) || Date.now(),
    startedAt: Number(item.startedAt) || Date.now()
  };
}

function snapshot() {
  return sessions.map(publicSession).sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    if (a.elapsed !== b.elapsed) return a.elapsed - b.elapsed;
    return a.startedAt - b.startedAt;
  });
}

function broadcast() {
  const packet = `data: ${JSON.stringify(snapshot())}\n\n`;
  for (const res of clients) res.write(packet);
}

function json(res, status, data) {
  res.writeHead(status, { "Content-Type": mime[".json"], "Cache-Control": "no-store" });
  res.end(JSON.stringify(data));
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", chunk => {
      body += chunk;
      if (body.length > 100000) reject(new Error("Request too large"));
    });
    req.on("end", () => {
      try { resolve(JSON.parse(body || "{}")); }
      catch { reject(new Error("Invalid JSON")); }
    });
    req.on("error", reject);
  });
}

async function api(req, res, pathname) {
  if (req.method === "GET" && pathname === "/api/sessions") return json(res, 200, snapshot());

  if (req.method === "GET" && pathname === "/api/events") {
    res.writeHead(200, {
      "Content-Type": "text/event-stream; charset=utf-8",
      "Cache-Control": "no-cache",
      "Connection": "keep-alive"
    });
    clients.add(res);
    res.write(`data: ${JSON.stringify(snapshot())}\n\n`);
    const keepAlive = setInterval(() => res.write(": ping\n\n"), 20000);
    req.on("close", () => { clearInterval(keepAlive); clients.delete(res); });
    return;
  }

  if (req.method === "POST" && pathname === "/api/session") {
    try {
      const body = publicSession(await readBody(req));
      if (!body.id || !body.name.trim()) return json(res, 400, { error: "Name and id are required" });
      const index = sessions.findIndex(item => item.id === body.id);
      if (index >= 0) sessions[index] = { ...sessions[index], ...body, startedAt: sessions[index].startedAt };
      else sessions.push(body);
      saveSessions();
      broadcast();
      return json(res, 200, { ok: true });
    } catch (error) { return json(res, 400, { error: error.message }); }
  }

  if (req.method === "POST" && pathname === "/api/reset") {
    sessions = [];
    saveSessions();
    broadcast();
    return json(res, 200, { ok: true });
  }

  return false;
}

function serveStatic(res, pathname) {
  const relative = pathname === "/" ? "index.html" : decodeURIComponent(pathname.slice(1));
  const file = path.resolve(ROOT, relative);
  if (!file.startsWith(ROOT + path.sep) || relative.startsWith("data")) return json(res, 403, { error: "Forbidden" });
  fs.readFile(file, (error, content) => {
    if (error) return json(res, 404, { error: "Not found" });
    res.writeHead(200, { "Content-Type": mime[path.extname(file).toLowerCase()] || "application/octet-stream" });
    res.end(content);
  });
}

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host || "localhost"}`);
  if (url.pathname.startsWith("/api/")) {
    const handled = await api(req, res, url.pathname);
    if (handled === false) json(res, 404, { error: "Unknown API route" });
    return;
  }
  serveStatic(res, url.pathname);
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`\nGenius Chemistry Games is running:`);
  console.log(`Student game:      http://localhost:${PORT}`);
  console.log(`Teacher dashboard: http://localhost:${PORT}/?view=teacher`);
  for (const group of Object.values(os.networkInterfaces())) {
    for (const net of group || []) if (net.family === "IPv4" && !net.internal) {
      console.log(`Classroom network: http://${net.address}:${PORT}`);
    }
  }
  console.log("\nKeep this window open during the activity.\n");
});
