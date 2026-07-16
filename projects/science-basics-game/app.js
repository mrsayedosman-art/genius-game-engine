const things = [
  { name: "lion", emoji: "🦁", living: true, feel: true, move: true, breathe: true, grow: true, food: true, reproduce: true },
  { name: "chair", emoji: "🪑", living: false, feel: false, move: false, breathe: false, grow: false, food: false, reproduce: false },
  { name: "deer", emoji: "🦌", living: true, feel: true, move: true, breathe: true, grow: true, food: true, reproduce: true },
  { name: "bicycle", emoji: "🚲", living: false, feel: false, move: false, breathe: false, grow: false, food: false, reproduce: false },
  { name: "cow", emoji: "🐄", living: true, feel: true, move: true, breathe: true, grow: true, food: true, reproduce: true },
  { name: "car", emoji: "🚗", living: false, feel: false, move: false, breathe: false, grow: false, food: false, reproduce: false },
  { name: "ball", emoji: "⚽", living: false, feel: false, move: false, breathe: false, grow: false, food: false, reproduce: false },
  { name: "sheep", emoji: "🐑", living: true, feel: true, move: true, breathe: true, grow: true, food: true, reproduce: true },
  { name: "books", emoji: "📚", living: false, feel: false, move: false, breathe: false, grow: false, food: false, reproduce: false },
  { name: "fish", emoji: "🐠", living: true, feel: true, move: true, breathe: true, grow: true, food: true, reproduce: true },
  { name: "plant", emoji: "🪴", living: true, feel: true, move: false, breathe: true, grow: true, food: true, reproduce: true },
  { name: "bus", emoji: "🚌", living: false, feel: false, move: false, breathe: false, grow: false, food: false, reproduce: false },
  { name: "rabbit", emoji: "🐰", living: true, feel: true, move: true, breathe: true, grow: true, food: true, reproduce: true },
  { name: "table", emoji: "🟤", living: false, feel: false, move: false, breathe: false, grow: false, food: false, reproduce: false },
  { name: "pig", emoji: "🐖", living: true, feel: true, move: true, breathe: true, grow: true, food: true, reproduce: true },
  { name: "frog", emoji: "🐸", living: true, feel: true, move: true, breathe: true, grow: true, food: true, reproduce: true },
  { name: "suitcase", emoji: "🧳", living: false, feel: false, move: false, breathe: false, grow: false, food: false, reproduce: false },
  { name: "box", emoji: "📦", living: false, feel: false, move: false, breathe: false, grow: false, food: false, reproduce: false }
];

const traitRounds = [
  { key: "feel", label: "Tap things that cannot feel.", target: false },
  { key: "move", label: "Tap things that cannot move by themselves.", target: false },
  { key: "breathe", label: "Tap things that cannot breathe.", target: false },
  { key: "grow", label: "Tap things that cannot grow.", target: false },
  { key: "food", label: "Tap things that do not take food.", target: false },
  { key: "reproduce", label: "Tap things that cannot reproduce.", target: false }
];

const words = [
  { word: "Feel", emoji: "🤚", meaning: "Living things can sense the world." },
  { word: "Move", emoji: "🏃", meaning: "Many living things move by themselves." },
  { word: "Breathe", emoji: "💨", meaning: "Living things need air." },
  { word: "Grow", emoji: "🌱", meaning: "Living things get bigger over time." },
  { word: "Take Food", emoji: "🍎", meaning: "Living things need food or make food." },
  { word: "Reproduce", emoji: "🐣", meaning: "Living things can make young ones." }
];

const senses = [
  { organ: "eye", organPlural: "eyes", icon: "👁️", sense: "Sight", verb: "see", clue: "I can see colors, shapes, and light." },
  { organ: "ear", organPlural: "ears", icon: "👂", sense: "Hearing", verb: "hear", clue: "I can hear voices, music, and alarms." },
  { organ: "nose", organPlural: "nose", icon: "👃", sense: "Smell", verb: "smell", clue: "I can smell father perfume." },
  { organ: "tongue", organPlural: "tongue", icon: "👅", sense: "Taste", verb: "taste", clue: "I can taste mother food." },
  { organ: "hand", organPlural: "hands", icon: "✋", sense: "Touch", verb: "touch", clue: "I can touch the texture of cloth." }
];

const senseScenarios = [
  { title: "Father perfume", icon: "🧴", text: "Choose the suitable sense.", answer: "Smell" },
  { title: "Mother food", icon: "🥣", text: "Choose the suitable sense.", answer: "Taste" },
  { title: "Teacher sound", icon: "👩‍🏫", text: "Choose the suitable sense.", answer: "Hearing" },
  { title: "Texture of cloth", icon: "🧣", text: "Choose the suitable sense.", answer: "Touch" },
  { title: "A picture", icon: "👁️", text: "Choose the suitable sense.", answer: "Sight" }
];

const movementAnimals = [
  { animal: "pelican", icon: "🪽", movement: "Fly", clue: "Birds use wings to fly in the sky." },
  { animal: "owl", icon: "🦉", movement: "Fly", clue: "This animal moves through the air." },
  { animal: "dolphin", icon: "🐬", movement: "Swim", clue: "This animal moves in water." },
  { animal: "fish", icon: "🐟", movement: "Swim", clue: "Fish swim in water." },
  { animal: "fox", icon: "🦊", movement: "Walk", clue: "This animal walks or runs on legs." },
  { animal: "horse", icon: "🐴", movement: "Walk", clue: "This animal walks and runs." },
  { animal: "rabbit", icon: "🐰", movement: "Hop", clue: "This animal jumps from place to place." },
  { animal: "kangaroo", icon: "🦘", movement: "Hop", clue: "This animal hops with strong legs." },
  { animal: "snake", icon: "🐍", movement: "Slither", clue: "This animal moves without legs." },
  { animal: "worm", icon: "🪱", movement: "Slither", clue: "This animal slides along the ground." },
  { animal: "ant", icon: "🐜", movement: "Crawl", clue: "This small animal crawls on the ground." },
  { animal: "turtle", icon: "🐢", movement: "Crawl", clue: "This animal crawls slowly." }
];

const movementWords = [
  { word: "Fly", icon: "🪽", meaning: "Move through the air." },
  { word: "Swim", icon: "🐬", meaning: "Move in water." },
  { word: "Walk", icon: "🦊", meaning: "Move on feet or legs." },
  { word: "Hop", icon: "🐰", meaning: "Move by jumping." },
  { word: "Slither", icon: "🐍", meaning: "Move smoothly without legs." },
  { word: "Crawl", icon: "🐜", meaning: "Move close to the ground." }
];

const reproductionAnimals = [
  { animal: "cat", icon: "🐈", className: "Mammals", reproduction: "Give Birth", movement: "Walk" },
  { animal: "cow", icon: "🐄", className: "Mammals", reproduction: "Give Birth", movement: "Walk" },
  { animal: "fox", icon: "🦊", className: "Mammals", reproduction: "Give Birth", movement: "Walk" },
  { animal: "human", icon: "🧑", className: "Mammals", reproduction: "Give Birth", movement: "Walk" },
  { animal: "giraffe", icon: "🦒", className: "Mammals", reproduction: "Give Birth", movement: "Walk" },
  { animal: "rabbit", icon: "🐰", className: "Mammals", reproduction: "Give Birth", movement: "Hop" },
  { animal: "bird", icon: "🐓", className: "Birds", reproduction: "Lay Eggs", movement: "Fly" },
  { animal: "bird", icon: "🐦", className: "Birds", reproduction: "Lay Eggs", movement: "Fly" },
  { animal: "turkey", icon: "🦃", className: "Birds", reproduction: "Lay Eggs", movement: "Walk" },
  { animal: "duck", icon: "🦆", className: "Birds", reproduction: "Lay Eggs", movement: "Swim" },
  { animal: "fish", icon: "🐟", className: "Fish", reproduction: "Lay Eggs", movement: "Swim" },
  { animal: "clownfish", icon: "🐠", className: "Fish", reproduction: "Lay Eggs", movement: "Swim" },
  { animal: "snake", icon: "🐍", className: "Reptiles", reproduction: "Lay Eggs", movement: "Slither" },
  { animal: "turtle", icon: "🐢", className: "Reptiles", reproduction: "Lay Eggs", movement: "Crawl" },
  { animal: "chameleon", icon: "🦎", className: "Reptiles", reproduction: "Lay Eggs", movement: "Crawl" },
  { animal: "crocodile", icon: "🐊", className: "Reptiles", reproduction: "Lay Eggs", movement: "Crawl" },
  { animal: "frog", icon: "🐸", className: "Amphibians", reproduction: "Lay Eggs", movement: "Hop" },
  { animal: "salamander", icon: "🦎", className: "Amphibians", reproduction: "Lay Eggs", movement: "Crawl" }
];

const babyFactoryAnimals = [
  { animal: "cat", icon: "🐈", reproduction: "Give Birth" },
  { animal: "bird", icon: "🐓", reproduction: "Lay Eggs" },
  { animal: "cow", icon: "🐄", reproduction: "Give Birth" },
  { animal: "snake", icon: "🐍", reproduction: "Lay Eggs" },
  { animal: "fish", icon: "🐟", reproduction: "Lay Eggs" },
  { animal: "fox", icon: "🦊", reproduction: "Give Birth" }
];

const animalClasses = [
  { name: "Mammals", icon: "🐈", clue: "cat, human, giraffe, rabbit" },
  { name: "Birds", icon: "🐦", clue: "birds" },
  { name: "Fish", icon: "🐟", clue: "fish" },
  { name: "Reptiles", icon: "🐢", clue: "snake, turtle, chameleon, crocodile" },
  { name: "Amphibians", icon: "🐸", clue: "frog, salamander" }
];

const lifeStages = [
  { stage: "Baby", icon: "👶", order: 1 },
  { stage: "Child", icon: "🧒", order: 2 },
  { stage: "Adolescent", icon: "🧑", order: 3 },
  { stage: "Adult", icon: "🧑‍🏫", order: 4 }
];

const reproductionWords = [
  { word: "Lay Eggs", icon: "🥚", meaning: "Some animals make babies from eggs." },
  { word: "Give Birth", icon: "👶", meaning: "Some animals have babies born from the mother." },
  { word: "Mammals", icon: "🐈", meaning: "Mammals give birth and feed babies milk." },
  { word: "Life Cycle", icon: "🔁", meaning: "The stages a living thing passes through." },
  { word: "Baby", icon: "👶", meaning: "The first stage in the human life cycle." },
  { word: "Adult", icon: "🧑‍🏫", meaning: "A grown-up stage." }
];

const chickenCycleLabels = [
  { label: "Eggs", icon: "🥚", image: "assets/lesson4/chicken-eggs.png" },
  { label: "Roosting", icon: "🐔", image: "assets/lesson4/chicken-roosting.png" },
  { label: "Hatching", icon: "🐣", image: "assets/lesson4/chicken-hatching.png" },
  { label: "Chick", icon: "🐥", image: "assets/lesson4/chicken-chick.png" },
  { label: "Adult", icon: "🐓", image: "assets/lesson4/chicken-adult.png" }
];

const frogCycleLabels = [
  { label: "Egg Mass", icon: "🟢", image: "assets/lesson4/frog-egg-mass.png" },
  { label: "Tadpole", icon: "〰️", image: "assets/lesson4/frog-tadpole.png" },
  { label: "Tadpole With Legs", icon: "🦎", image: "assets/lesson4/frog-tadpole-with-legs.png" },
  { label: "Froglet", icon: "🐸", image: "assets/lesson4/frog-froglet.png" },
  { label: "Adult Frog", icon: "🐸", image: "assets/lesson4/frog-adult-frog.png" }
];

const plantCycleLabels = [
  { label: "seed", icon: "🫘", image: "assets/lesson4/plant-seed.png" },
  { label: "germination", icon: "🌱", image: "assets/lesson4/plant-germination.png" },
  { label: "seedling", icon: "🌿", image: "assets/lesson4/plant-seedling.png" },
  { label: "adult plant", icon: "🪴", image: "assets/lesson4/plant-adult-plant.png" }
];

const birdPartLabels = [
  { label: "Eye", icon: "👁️", image: "assets/lesson4/bird-eye.png" },
  { label: "Beak", icon: "🔶", image: "assets/lesson4/bird-beak.png" },
  { label: "Tail", icon: "🪶", image: "assets/lesson4/bird-tail.png" },
  { label: "Leg", icon: "🦵", image: "assets/lesson4/bird-leg.png" },
  { label: "Wing", icon: "🪽", image: "assets/lesson4/bird-wing.png" },
  { label: "Claw", icon: "〽️", image: "assets/lesson4/bird-claw.png" }
];

const plantPartLabels = [
  { label: "Leaf", icon: "🍃", image: "assets/lesson4/plant-leaf.png" },
  { label: "Flower", icon: "🌼", image: "assets/lesson4/plant-flower.png" },
  { label: "Fruit", icon: "🍎", image: "assets/lesson4/plant-fruit.png" },
  { label: "Stem", icon: "🟩", image: "assets/lesson4/plant-stem.png" },
  { label: "Root", icon: "〰️", image: "assets/lesson4/plant-root.png" },
  { label: "Shoot System", icon: "🌿", image: "assets/lesson4/plant-shoot-system.png" },
  { label: "Root System", icon: "🌱", image: "assets/lesson4/plant-root-system.png" }
];

const plantFoodItems = [
  { name: "sunlight", icon: "☀️", group: "takes" },
  { name: "carbon dioxide", icon: "💨", group: "takes" },
  { name: "water", icon: "💧", group: "takes" },
  { name: "mineral salts", icon: "🧂", group: "takes" },
  { name: "oxygen", icon: "🫧", group: "produces" },
  { name: "sugars", icon: "🍬", group: "produces" }
];

const nutritionAnimals = [
  { name: "cow", icon: "🐄", group: "herbivores" },
  { name: "rabbit", icon: "🐰", group: "herbivores" },
  { name: "giraffe", icon: "🦒", group: "herbivores" },
  { name: "horse", icon: "🐴", group: "herbivores" },
  { name: "lion", icon: "🦁", group: "carnivores" },
  { name: "fox", icon: "🦊", group: "carnivores" },
  { name: "crocodile", icon: "🐊", group: "carnivores" },
  { name: "shark", icon: "🦈", group: "carnivores" }
];

const foodToolQuestions = [
  { icon: "🦷", title: "Molars", answer: "grind food", choices: ["grind food", "cut plants", "tear meat"] },
  { icon: "🦷", title: "Wide incisors", answer: "cut plants", choices: ["cut plants", "suck nectar", "catch fish"] },
  { icon: "🦷", title: "Canines", answer: "cut and tear meat", choices: ["cut and tear meat", "grind food", "drink water"] },
  { icon: "✂️", title: "Scissors beak", answer: "cut food", choices: ["cut food", "suck nectar", "catch fish"] },
  { icon: "🥄", title: "Spoon beak", answer: "pick food from water", choices: ["pick food from water", "crack nuts", "cut meat"] },
  { icon: "🥤", title: "Straw beak", answer: "suck nectar", choices: ["suck nectar", "grind food", "tear meat"] },
  { icon: "🗜️", title: "Pliers beak", answer: "hold nuts", choices: ["hold nuts", "cut plants", "drink milk"] },
  { icon: "🤏", title: "Tweezers beak", answer: "pick small food", choices: ["pick small food", "grind food", "make sugar"] }
];

const humanFoods = [
  { name: "bread", icon: "🍞", group: "starch" },
  { name: "rice", icon: "🍚", group: "starch" },
  { name: "pasta", icon: "🍝", group: "starch" },
  { name: "apple", icon: "🍎", group: "fruits & vegetables" },
  { name: "orange", icon: "🍊", group: "fruits & vegetables" },
  { name: "green beans", icon: "🫛", group: "fruits & vegetables" },
  { name: "milk", icon: "🥛", group: "dairy" },
  { name: "cheese", icon: "🧀", group: "dairy" },
  { name: "yoghurt", icon: "🥣", group: "dairy" },
  { name: "fish", icon: "🐟", group: "protein" },
  { name: "chicken", icon: "🍗", group: "protein" },
  { name: "egg", icon: "🥚", group: "protein" },
  { name: "oil", icon: "🫗", group: "fats" },
  { name: "butter", icon: "🧈", group: "fats" }
];

const foodGroups = [
  { name: "starch", clue: "Give us energy." },
  { name: "fruits & vegetables", clue: "Contain vitamins and minerals." },
  { name: "dairy", clue: "Contains calcium for healthy teeth and strong bones." },
  { name: "protein", clue: "Build muscles and repair." },
  { name: "fats", clue: "Keep our organs safe." }
];

const predatorQuestions = [
  { icon: "🦅", title: "Eagles, hawks and owls", text: "Choose the suitable word.", answer: "predators", choices: ["predators", "preys", "herbivores"] },
  { icon: "🐭", title: "A small animal being hunted", text: "Choose the suitable word.", answer: "prey", choices: ["prey", "sugar", "starch"] },
  { icon: "🦁", title: "Surprise attack", text: "Choose the suitable word.", answer: "camouflage", choices: ["camouflage", "photosynthesis", "dairy"] },
  { icon: "🍃", title: "Hide safely", text: "Choose the suitable word.", answer: "camouflage", choices: ["camouflage", "canines", "molars"] },
  { icon: "🦅", title: "Predatory birds", text: "Choose the suitable adaptation.", answer: "strong sharp claws and bendable fingers", choices: ["strong sharp claws and bendable fingers", "flat molars", "wide leaves"] }
];

const nutritionWords = [
  { word: "Photosynthesis", icon: "☀️", meaning: "Putting things together to make food by light." },
  { word: "Autotrophic", icon: "🌿", meaning: "Can make food by itself." },
  { word: "Herbivores", icon: "🐄", meaning: "Animals that eat plants." },
  { word: "Carnivores", icon: "🦁", meaning: "Animals that eat meat." },
  { word: "Predator", icon: "🦅", meaning: "An animal that hunts and catches prey." },
  { word: "Prey", icon: "🐭", meaning: "An animal hunted by a predator." },
  { word: "Camouflage", icon: "🍃", meaning: "Animals try to hide themselves to be unseen." },
  { word: "Balanced meal", icon: "🍽️", meaning: "A meal that includes all five food groups." }
];

const lessonData = {
  lesson1: {
    number: 1,
    title: "Living Organisms and Non-Living Things",
    modes: [
      { key: "a", label: "Sort", render: renderSort },
      { key: "b", label: "Traits", render: renderTraits },
      { key: "c", label: "Words", render: renderWords }
    ]
  },
  lesson2: {
    number: 2,
    title: "How Can We Feel?",
    modes: [
      { key: "a", label: "Sentences", render: renderSenseSentences },
      { key: "b", label: "Organs", render: renderSenseMatch },
      { key: "c", label: "Detective", render: renderSenseDetective },
      { key: "d", label: "Words", render: renderSenseWords }
    ]
  },
  lesson3: {
    number: 3,
    title: "Movement of Living Organisms",
    modes: [
      { key: "a", label: "Move Match", render: renderMovementMatch },
      { key: "b", label: "Detective", render: renderMovementDetective },
      { key: "c", label: "Words", render: renderMovementWords }
    ]
  },
  lesson4: {
    number: 4,
    title: "Reproduction and Life Cycle",
    modes: [
      { key: "a", label: "Reproduction Way", render: renderBabyFactory },
      { key: "b", label: "Human Life Cycle", render: renderLifeBuilder },
      { key: "c", label: "Animal Classes", render: renderClassPassport },
      { key: "d", label: "Chicken Cycle", render: renderChickenCycleLabeling },
      { key: "e", label: "Frog Cycle", render: renderFrogCycleLabeling },
      { key: "f", label: "Plant Cycle", render: renderPlantCyclePictures },
      { key: "g", label: "Bird Parts", render: renderBirdPartsLabeling },
      { key: "h", label: "Plant Parts", render: renderPlantPartsLabeling },
      { key: "i", label: "Words", render: renderReproductionWords }
    ]
  },
  lesson5: {
    number: 5,
    title: "Nutrition in Living Organisms",
    modes: [
      { key: "a", label: "Plant Food", render: renderPlantFoodGame },
      { key: "b", label: "Animal Food", render: renderAnimalNutritionGame },
      { key: "c", label: "Teeth & Beaks", render: renderFoodToolsGame },
      { key: "d", label: "Food Groups", render: renderFoodGroupsGame },
      { key: "e", label: "Predators", render: renderPredatorGame },
      { key: "f", label: "Words", render: renderNutritionWords }
    ]
  }
};

let score = 0;
let gameMax = 0;
let gameGoal = 0;
let gameCompleted = 0;
let gameFinished = false;
const requestedLesson = document.body.dataset.startLesson || new URLSearchParams(window.location.search).get("lesson");
const standaloneLesson = document.body.dataset.standaloneLesson === "true";
let currentLesson = lessonData[requestedLesson] ? requestedLesson : "lesson1";
let currentGame = "a";
let traitIndex = 0;
let selectedSense;
let audioContext;
let leaderboardState;

const scoreEl = document.getElementById("score");
const panel = document.getElementById("game-panel");
const title = document.getElementById("game-title");
const prompt = document.getElementById("game-prompt");
const lessonTitle = document.getElementById("lesson-title");
const lessonBadge = document.getElementById("lesson-badge");
const activePlayerNameEl = document.getElementById("active-player-name");
const playerNameInput = document.getElementById("player-name-input");
const savePlayerButton = document.getElementById("save-player");
const openDashboardButton = document.getElementById("open-dashboard");
const closeDashboardButton = document.getElementById("close-dashboard");
const dashboardModal = document.getElementById("dashboard-modal");
const dashboardStats = document.getElementById("dashboard-stats");
const leaderboardList = document.getElementById("leaderboard-list");
const currentRankEl = document.getElementById("current-rank");
const rankCard = document.getElementById("rank-card");

const LEADERBOARD_KEY = "science-basics-leaderboard-v1";

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function makePlayerId() {
  return `player-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function cleanName(name) {
  return name.trim().replace(/\s+/g, " ").slice(0, 32);
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }[char]));
}

function readLeaderboard() {
  try {
    const saved = JSON.parse(localStorage.getItem(LEADERBOARD_KEY));
    if (saved?.players?.length) return saved;
  } catch (error) {
    localStorage.removeItem(LEADERBOARD_KEY);
  }

  const guest = {
    id: makePlayerId(),
    name: "Guest Player",
    games: {},
    createdAt: Date.now(),
    updatedAt: Date.now()
  };
  return { activePlayerId: guest.id, players: [guest] };
}

function saveLeaderboard() {
  localStorage.setItem(LEADERBOARD_KEY, JSON.stringify(leaderboardState));
}

function getActivePlayer() {
  let player = leaderboardState.players.find(item => item.id === leaderboardState.activePlayerId);
  if (!player) {
    player = leaderboardState.players[0];
    leaderboardState.activePlayerId = player.id;
    saveLeaderboard();
  }
  player.games ||= {};
  return player;
}

function getPlayerTotals(player) {
  const entries = Object.values(player.games || {});
  const total = entries.reduce((sum, item) => sum + Number(item.score || 0), 0);
  const possible = entries.reduce((sum, item) => sum + Number(item.max || 0), 0);
  const completed = entries.length;
  const percent = possible ? Math.round((total / possible) * 100) : 0;
  return { total, possible, completed, percent };
}

function getRankedPlayers() {
  return [...leaderboardState.players].sort((a, b) => {
    const aTotals = getPlayerTotals(a);
    const bTotals = getPlayerTotals(b);
    return bTotals.total - aTotals.total || bTotals.completed - aTotals.completed || b.updatedAt - a.updatedAt;
  });
}

function getActiveRank() {
  const ranked = getRankedPlayers();
  return Math.max(1, ranked.findIndex(player => player.id === leaderboardState.activePlayerId) + 1);
}

function renderLeaderboard() {
  const ranked = getRankedPlayers();
  const activePlayer = getActivePlayer();
  const activeTotals = getPlayerTotals(activePlayer);
  const topTotals = getPlayerTotals(ranked[0]);

  activePlayerNameEl.textContent = activePlayer.name;
  playerNameInput.value = activePlayer.name === "Guest Player" ? "" : activePlayer.name;
  currentRankEl.textContent = `#${getActiveRank()}`;

  dashboardStats.innerHTML = `
    <section class="stat-card"><span>Players</span><strong>${ranked.length}</strong></section>
    <section class="stat-card"><span>Top score</span><strong>${topTotals.total}</strong></section>
    <section class="stat-card"><span>Your score</span><strong>${activeTotals.total}</strong></section>
  `;

  if (!ranked.length) {
    leaderboardList.innerHTML = `<section class="leader-row"><div class="leader-name"><strong>No players yet</strong><span>Start a game to record scores.</span></div></section>`;
    return;
  }

  leaderboardList.innerHTML = ranked.map((player, index) => {
    const totals = getPlayerTotals(player);
    const active = player.id === leaderboardState.activePlayerId ? " active" : "";
    return `
      <section class="leader-row${active}">
        <span class="rank-badge">#${index + 1}</span>
        <div class="leader-name">
          <strong>${escapeHtml(player.name)}</strong>
          <span>${totals.completed} games completed</span>
        </div>
        <div class="leader-metric">
          <span>Score</span>
          <strong>${totals.total}</strong>
        </div>
        <div class="leader-metric">
          <span>Rate</span>
          <strong>${totals.percent}%</strong>
        </div>
      </section>
    `;
  }).join("");
}

function setActivePlayerByName(rawName) {
  const name = cleanName(rawName);
  if (!name) {
    say("Please type a student name.");
    playerNameInput.focus();
    return;
  }

  const current = getActivePlayer();
  const existing = leaderboardState.players.find(player => player.name.toLowerCase() === name.toLowerCase());
  if (existing) {
    leaderboardState.activePlayerId = existing.id;
  } else if (current.name === "Guest Player" && !Object.keys(current.games || {}).length) {
    current.name = name;
    current.updatedAt = Date.now();
    leaderboardState.activePlayerId = current.id;
  } else {
    const player = {
      id: makePlayerId(),
      name,
      games: {},
      createdAt: Date.now(),
      updatedAt: Date.now()
    };
    leaderboardState.players.push(player);
    leaderboardState.activePlayerId = player.id;
  }

  saveLeaderboard();
  renderLeaderboard();
  say(`${name} is ready.`);
}

function recordCurrentGameScore() {
  const player = getActivePlayer();
  const gameId = `${currentLesson}:${currentGame}`;
  const previous = player.games[gameId];
  if (!previous || score > previous.score) {
    player.games[gameId] = {
      score,
      max: gameMax,
      lesson: lessonData[currentLesson].title,
      game: title.textContent,
      updatedAt: Date.now()
    };
    player.updatedAt = Date.now();
    saveLeaderboard();
  }
  renderLeaderboard();
}

function openDashboard() {
  renderLeaderboard();
  dashboardModal.hidden = false;
}

function closeDashboard() {
  dashboardModal.hidden = true;
}

function initLeaderboard() {
  leaderboardState = readLeaderboard();
  getActivePlayer();
  saveLeaderboard();
  renderLeaderboard();
}

function setScore(value) {
  score = Math.max(0, gameMax ? Math.min(value, gameMax) : value);
  scoreEl.textContent = gameMax ? `${score}/${gameMax}` : score;
}

function startGameSession(goal, maxScore) {
  gameGoal = goal;
  gameMax = maxScore;
  gameCompleted = 0;
  gameFinished = false;
  setScore(0);
}

function addGamePoints(delta) {
  setScore(score + delta);
}

function completeGameStep() {
  if (gameFinished) return;
  gameCompleted += 1;
  if (gameCompleted >= gameGoal) {
    gameFinished = true;
    sound("win");
    window.setTimeout(showGameSummary, 500);
  }
}

function getCurrentModeIndex() {
  return lessonData[currentLesson].modes.findIndex(mode => mode.key === currentGame);
}

function goToNextGame() {
  const modes = lessonData[currentLesson].modes;
  const currentIndex = getCurrentModeIndex();
  if (currentIndex >= 0 && currentIndex < modes.length - 1) {
    renderGame(modes[currentIndex + 1].key);
    return;
  }

  if (standaloneLesson) {
    renderGame(modes[0].key);
    return;
  }

  const lessonKeys = Object.keys(lessonData);
  const lessonIndex = lessonKeys.indexOf(currentLesson);
  const nextLesson = lessonKeys[lessonIndex + 1];
  if (nextLesson) {
    renderLesson(nextLesson);
  } else {
    renderGame(currentGame);
  }
}

function showGameSummary() {
  const oldSummary = panel.querySelector(".finish-card");
  if (oldSummary) oldSummary.remove();
  recordCurrentGameScore();
  const activeRank = getActiveRank();

  const summary = document.createElement("section");
  summary.className = "finish-card";
  const resultPercent = gameMax ? Math.round(score / gameMax * 100) : 0;
  summary.innerHTML = `
    <div class="result-lines" aria-hidden="true">
      <span></span><span></span><span></span>
    </div>
    <p class="finish-label">Game finished</p>
    <h4>Your score is ${score} / ${gameMax}</h4>
    <p><strong>${resultPercent}%</strong> · Your current rank is #${activeRank}. You can try this game again or go to the next game.</p>
    <div class="finish-actions">
      <button class="action" type="button" id="play-again">Play again</button>
      <button class="action next-action" type="button" id="next-game">Next game</button>
      <button class="action dashboard-action" type="button" id="summary-dashboard">Dashboard</button>
    </div>
  `;
  panel.appendChild(summary);
  summary.scrollIntoView({ behavior: "smooth", block: "center" });
  say(`Game finished. Your score is ${score} out of ${gameMax}. Your rank is number ${activeRank}.`);
  document.getElementById("play-again").addEventListener("click", () => renderGame(currentGame));
  document.getElementById("next-game").addEventListener("click", goToNextGame);
  document.getElementById("summary-dashboard").addEventListener("click", openDashboard);
}

function sound(kind) {
  audioContext ||= new (window.AudioContext || window.webkitAudioContext)();
  const now = audioContext.currentTime;
  const osc = audioContext.createOscillator();
  const gain = audioContext.createGain();
  osc.connect(gain);
  gain.connect(audioContext.destination);

  const tones = {
    good: [523.25, 659.25, 783.99],
    bad: [220, 185],
    tap: [392, 440],
    win: [523.25, 659.25, 783.99, 1046.5]
  }[kind] || [440];

  gain.gain.setValueAtTime(0.0001, now);
  tones.forEach((tone, index) => {
    const t = now + index * 0.09;
    osc.frequency.setValueAtTime(tone, t);
    gain.gain.exponentialRampToValueAtTime(0.16, t + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.08);
  });
  osc.type = kind === "bad" ? "sawtooth" : "sine";
  osc.start(now);
  osc.stop(now + tones.length * 0.1 + 0.05);
}

function say(text) {
  if (!("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-US";
  utterance.rate = 0.88;
  utterance.pitch = 1.18;
  window.speechSynthesis.speak(utterance);
}

function card(item, onClick) {
  const button = document.createElement("button");
  button.className = "thing";
  button.type = "button";
  button.innerHTML = `<span class="emoji">${item.emoji}</span><span class="name">${item.name}</span>`;
  button.addEventListener("click", () => onClick(button, item));
  return button;
}

function sortCard(item, onChoose) {
  const wrapper = document.createElement("div");
  wrapper.className = "thing";
  wrapper.innerHTML = `
    <span class="emoji">${item.emoji}</span>
    <span class="name">${item.name}</span>
    <span class="choice-row">
      <button class="choice living" type="button">Living</button>
      <button class="choice nonliving" type="button">Non-living</button>
    </span>
  `;
  wrapper.querySelector(".living").addEventListener("click", () => onChoose(wrapper, item, true));
  wrapper.querySelector(".nonliving").addEventListener("click", () => onChoose(wrapper, item, false));
  return wrapper;
}

function renderSort() {
  title.textContent = "Creature Sort";
  prompt.textContent = "Living things feel, breathe, grow, take food, and reproduce.";
  const sample = shuffle(things).slice(0, 10);
  startGameSession(sample.length, sample.length * 10);
  panel.innerHTML = `
    <div class="sort-layout">
      <div>
        <div class="round-header">
          <h4>Tap a thing, then choose its home.</h4>
          <span class="pill">Living or non-living</span>
        </div>
        <div class="thing-grid" id="sort-things"></div>
      </div>
      <div class="sort-layout">
        <section class="bucket" id="living-bucket">
          <h4>Living Things</h4>
          <div class="bucket-row"></div>
        </section>
        <section class="bucket" id="nonliving-bucket">
          <h4>Non-Living Things</h4>
          <div class="bucket-row"></div>
        </section>
      </div>
    </div>
    <div class="footer-actions">
      <button class="action" type="button" id="reset-sort">New Mix</button>
    </div>
  `;

  const grid = document.getElementById("sort-things");
  sample.forEach(item => {
    grid.appendChild(sortCard(item, (button, selected, answer) => {
      sound("tap");
      const correct = answer === selected.living;
      button.classList.add(correct ? "correct" : "wrong");
      button.querySelectorAll("button").forEach(choice => choice.disabled = true);
      addGamePoints(correct ? 10 : -2);
      sound(correct ? "good" : "bad");
      say(correct ? `Yes. ${selected.name} is ${selected.living ? "living" : "non-living"}.` : `Try again soon. ${selected.name} is ${selected.living ? "living" : "non-living"}.`);

      const bucketId = selected.living ? "living-bucket" : "nonliving-bucket";
      document.querySelector(`#${bucketId} .bucket-row`).insertAdjacentHTML("beforeend", `<span class="mini">${selected.emoji} ${selected.name}</span>`);
      completeGameStep();
    }));
  });
  document.getElementById("reset-sort").addEventListener("click", renderSort);
}

function renderTraits() {
  const round = traitRounds[traitIndex];
  const livingChoices = shuffle(things.filter(item => item.living)).slice(0, 3);
  const nonLivingChoices = shuffle(things.filter(item => !item.living)).slice(0, 5);
  const choices = shuffle([...livingChoices, ...nonLivingChoices]);
  const correctGoal = choices.filter(item => item[round.key] === round.target).length;
  startGameSession(correctGoal, correctGoal * 8);
  title.textContent = "Trait Quest";
  prompt.textContent = "Find what the sentence asks for.";
  panel.innerHTML = `
    <div class="round-header">
      <h4>${round.label}</h4>
      <span class="pill">Round ${traitIndex + 1} / ${traitRounds.length}</span>
    </div>
    <div class="thing-grid" id="trait-things"></div>
    <div class="footer-actions">
      <button class="action" type="button" id="next-round">Next Round</button>
    </div>
  `;
  say(round.label);

  const grid = document.getElementById("trait-things");

  choices.forEach(item => {
    grid.appendChild(card(item, (button, selected) => {
      const correct = selected[round.key] === round.target;
      button.classList.add(correct ? "correct" : "wrong");
      button.disabled = true;
      addGamePoints(correct ? 8 : -2);
      sound(correct ? "good" : "bad");
      say(correct ? `Correct. ${selected.name}.` : `${selected.name} is not the best answer.`);
      if (correct) completeGameStep();
    }));
  });

  document.getElementById("next-round").addEventListener("click", () => {
    traitIndex = (traitIndex + 1) % traitRounds.length;
    if (traitIndex === 0) sound("win");
    renderTraits();
  });
}

function renderWords() {
  title.textContent = "Word Pop";
  prompt.textContent = "Tap a word to hear it and see a kid-friendly meaning.";
  startGameSession(words.length, words.length * 3);
  panel.innerHTML = `
    <div class="round-header">
      <h4>Science words</h4>
      <span class="pill">Listen and learn</span>
    </div>
    <div class="word-cards"></div>
  `;

  const grid = panel.querySelector(".word-cards");
  words.forEach(item => {
    const button = document.createElement("button");
    button.className = "word-card";
    button.type = "button";
    button.innerHTML = `<strong>${item.emoji} ${item.word}</strong><p>${item.meaning}</p>`;
    button.addEventListener("click", () => {
      button.disabled = true;
      button.classList.add("correct");
      addGamePoints(3);
      sound("good");
      say(`${item.word}. ${item.meaning}`);
      completeGameStep();
    });
    grid.appendChild(button);
  });
}

function renderSenseMatch() {
  title.textContent = "Sense Match";
  prompt.textContent = "Match each sense organ with what it helps you do.";
  selectedSense = undefined;
  startGameSession(senses.length, senses.length * 10);
  panel.innerHTML = `
    <div class="round-header">
      <h4>Choose an organ, then choose its sense.</h4>
      <span class="pill">Five senses</span>
    </div>
    <div class="sense-match">
      <div class="sense-bank" id="organ-bank"></div>
      <div class="sense-targets" id="sense-targets"></div>
    </div>
  `;

  const organBank = document.getElementById("organ-bank");
  const targetBank = document.getElementById("sense-targets");

  shuffle(senses).forEach(item => {
    const button = document.createElement("button");
    button.className = "sense-card";
    button.type = "button";
    button.innerHTML = `<span class="emoji">${item.icon}</span><span><strong>${item.organPlural}</strong><span>I can ${item.verb} with my ${item.organPlural}.</span></span>`;
    button.addEventListener("click", () => {
      selectedSense = item;
      sound("tap");
      document.querySelectorAll(".sense-card").forEach(cardEl => cardEl.classList.remove("selected"));
      button.classList.add("selected");
      say(`${item.organPlural}. I can ${item.verb} with my ${item.organPlural}.`);
    });
    organBank.appendChild(button);
  });

  shuffle(senses).forEach(item => {
    const targetButton = document.createElement("button");
    targetButton.className = "sense-target";
    targetButton.type = "button";
    targetButton.dataset.answer = item.sense;
    targetButton.innerHTML = `<span><strong>${item.sense}</strong><span>${item.clue}</span></span><span class="target-fill">?</span>`;
    targetButton.addEventListener("click", () => {
      if (targetButton.classList.contains("correct")) return;
      if (!selectedSense) {
        sound("bad");
        say("Choose an organ first.");
        return;
      }
      const correct = selectedSense.sense === item.sense;
      targetButton.classList.add(correct ? "correct" : "wrong");
      if (correct) {
        targetButton.classList.remove("wrong");
        targetButton.querySelector(".target-fill").textContent = selectedSense.icon;
        addGamePoints(10);
        completeGameStep();
      } else {
        addGamePoints(-2);
      }
      sound(correct ? "good" : "bad");
      say(correct ? `Correct. ${selectedSense.organPlural} help us ${selectedSense.verb}.` : `Try again. ${selectedSense.organPlural} are for ${selectedSense.sense}.`);
    });
    targetBank.appendChild(targetButton);
  });
}

function renderSenseDetective() {
  title.textContent = "Sense Detective";
  prompt.textContent = "Use your senses to solve each little mystery.";
  const scenarioItems = shuffle(senseScenarios);
  startGameSession(scenarioItems.length, scenarioItems.length * 8);
  panel.innerHTML = `
    <div class="round-header">
      <h4>Which sense helps?</h4>
      <span class="pill">Safety and life</span>
    </div>
    <div class="scenario-grid"></div>
  `;

  const grid = panel.querySelector(".scenario-grid");
  scenarioItems.forEach(item => {
    const cardEl = document.createElement("section");
    cardEl.className = "scenario-card";
    cardEl.innerHTML = `
      <span class="emoji">${item.icon}</span>
      <h5>${item.title}</h5>
      <p>${item.text}</p>
      <div class="sense-options"></div>
    `;
    const options = cardEl.querySelector(".sense-options");
    shuffle(senses).forEach(sense => {
      const option = document.createElement("button");
      option.className = "sense-option";
      option.type = "button";
      option.textContent = sense.sense;
      option.addEventListener("click", () => {
        const correct = sense.sense === item.answer;
        cardEl.classList.add(correct ? "correct" : "wrong");
        addGamePoints(correct ? 8 : -2);
        sound(correct ? "good" : "bad");
        say(correct ? `Yes. We use ${sense.sense}.` : `Not this time. The answer is ${item.answer}.`);
        cardEl.querySelectorAll("button").forEach(button => button.disabled = true);
        completeGameStep();
      });
      options.appendChild(option);
    });
    grid.appendChild(cardEl);
  });
}

function renderSenseWords() {
  title.textContent = "Sense Words";
  prompt.textContent = "Tap to hear the sense word and a simple sentence.";
  startGameSession(senses.length, senses.length * 3);
  panel.innerHTML = `
    <div class="round-header">
      <h4>Five senses vocabulary</h4>
      <span class="pill">Listen and learn</span>
    </div>
    <div class="word-cards"></div>
  `;

  const grid = panel.querySelector(".word-cards");
  senses.forEach(item => {
    const button = document.createElement("button");
    button.className = "word-card";
    button.type = "button";
    button.innerHTML = `<strong>${item.icon} ${item.sense}</strong><p>${item.clue}</p>`;
    button.addEventListener("click", () => {
      button.disabled = true;
      button.classList.add("correct");
      addGamePoints(3);
      sound("good");
      say(`${item.sense}. ${item.clue}`);
      completeGameStep();
    });
    grid.appendChild(button);
  });
}

function renderSenseSentences() {
  title.textContent = "Sentence Match";
  prompt.textContent = "Drag each organ to the right sentence.";
  selectedSense = undefined;
  startGameSession(senses.length, senses.length * 10);
  panel.innerHTML = `
    <div class="round-header">
      <h4>Drag the organ card to the blank.</h4>
      <span class="pill">I can ... with my ...</span>
    </div>
    <div class="sentence-game">
      <section class="sentence-column" aria-label="What I can feel">
        <h5>What I can do</h5>
        <div class="sentence-list" id="sentence-list"></div>
      </section>
      <section class="sentence-column" aria-label="Organ I use">
        <h5>Drag an organ</h5>
        <div class="organ-choice-list" id="organ-choice-list"></div>
      </section>
    </div>
  `;

  const sentenceList = document.getElementById("sentence-list");
  const organList = document.getElementById("organ-choice-list");

  function checkSentence(sentenceCard, organ) {
    if (sentenceCard.classList.contains("correct")) return;
    const correct = sentenceCard.dataset.organ === organ.organ;
    sentenceCard.classList.add(correct ? "correct" : "wrong");
    sentenceCard.classList.remove("drag-over");
    if (correct) {
      sentenceCard.classList.remove("wrong");
      sentenceCard.querySelector(".sentence-blank").innerHTML = `${organ.icon} ${organ.organPlural}`;
      sentenceCard.querySelector(".sentence-blank").classList.add("filled");
      const organCard = document.querySelector(`.organ-card[data-organ="${organ.organ}"]`);
      if (organCard) {
        organCard.classList.add("correct");
        organCard.draggable = false;
        organCard.disabled = true;
      }
      addGamePoints(10);
      completeGameStep();
    } else {
      window.setTimeout(() => sentenceCard.classList.remove("wrong"), 650);
      addGamePoints(-2);
    }
    sound(correct ? "good" : "bad");
    say(correct ? `Correct. I can ${organ.verb} with my ${organ.organPlural}.` : `Try again. We use ${sentenceCard.dataset.organPlural} here.`);
  }

  shuffle(senses).forEach(item => {
    const sentenceButton = document.createElement("button");
    sentenceButton.className = "sentence-card";
    sentenceButton.type = "button";
    sentenceButton.dataset.organ = item.organ;
    sentenceButton.dataset.organPlural = item.organPlural;
    sentenceButton.innerHTML = `
      <span>I can ${item.verb} with my</span>
      <strong class="sentence-blank">drop here</strong>
    `;
    sentenceButton.addEventListener("dragover", event => {
      event.preventDefault();
      sentenceButton.classList.add("drag-over");
    });
    sentenceButton.addEventListener("dragleave", () => {
      sentenceButton.classList.remove("drag-over");
    });
    sentenceButton.addEventListener("drop", event => {
      event.preventDefault();
      const organName = event.dataTransfer.getData("text/plain");
      const organ = senses.find(sense => sense.organ === organName);
      if (organ) checkSentence(sentenceButton, organ);
    });
    sentenceButton.addEventListener("click", () => {
      if (!selectedSense) {
        sound("bad");
        say("Drag an organ here, or tap an organ first.");
        return;
      }
      checkSentence(sentenceButton, selectedSense);
      selectedSense = undefined;
      document.querySelectorAll(".organ-card").forEach(cardEl => cardEl.classList.remove("selected"));
    });
    sentenceList.appendChild(sentenceButton);
  });

  shuffle(senses).forEach(item => {
    const organButton = document.createElement("button");
    organButton.className = "organ-card";
    organButton.type = "button";
    organButton.draggable = true;
    organButton.setAttribute("draggable", "true");
    organButton.dataset.organ = item.organ;
    organButton.innerHTML = `<span class="emoji">${item.icon}</span><strong>${item.organ}</strong>`;
    organButton.addEventListener("dragstart", event => {
      selectedSense = item;
      organButton.classList.add("selected");
      event.dataTransfer.setData("text/plain", item.organ);
      event.dataTransfer.effectAllowed = "move";
      sound("tap");
      say(`Drag ${item.organ} to the sentence.`);
    });
    organButton.addEventListener("dragend", () => {
      organButton.classList.remove("selected");
    });
    organButton.addEventListener("click", () => {
      selectedSense = item;
      document.querySelectorAll(".organ-card").forEach(cardEl => cardEl.classList.remove("selected"));
      organButton.classList.add("selected");
      sound("tap");
      say(`${item.organ}. Now tap the matching sentence.`);
    });
    organList.appendChild(organButton);
  });
}

function renderMovementMatch() {
  title.textContent = "Move Match";
  prompt.textContent = "Drag each animal to the way it moves.";
  selectedSense = undefined;
  const animalSample = shuffle(movementAnimals).slice(0, 8);
  startGameSession(animalSample.length, animalSample.length * 10);
  panel.innerHTML = `
    <div class="round-header">
      <h4>Drag the animal to its movement.</h4>
      <span class="pill">Fly, swim, walk, hop, slither, crawl</span>
    </div>
    <div class="movement-game">
      <section class="sentence-column" aria-label="Animals">
        <h5>Drag an animal</h5>
        <div class="organ-choice-list" id="animal-choice-list"></div>
      </section>
      <section class="sentence-column" aria-label="Ways of movement">
        <h5>Way of movement</h5>
        <div class="movement-target-list" id="movement-target-list"></div>
      </section>
    </div>
  `;

  const animalList = document.getElementById("animal-choice-list");
  const targetList = document.getElementById("movement-target-list");

  function checkMovement(targetCard, animal) {
    const animalCard = document.querySelector(`.animal-card[data-animal="${animal.animal}"]`);
    if (animalCard?.classList.contains("correct")) return;
    const correct = targetCard.dataset.movement === animal.movement;
    targetCard.classList.add(correct ? "correct" : "wrong");
    targetCard.classList.remove("drag-over");
    if (correct) {
      targetCard.classList.remove("wrong");
      targetCard.querySelector(".movement-fill").insertAdjacentHTML("beforeend", `<span class="mini">${animal.icon} ${animal.animal}</span>`);
      if (animalCard) {
        animalCard.classList.add("correct");
        animalCard.draggable = false;
        animalCard.disabled = true;
      }
      addGamePoints(10);
      completeGameStep();
    } else {
      window.setTimeout(() => targetCard.classList.remove("wrong"), 650);
      addGamePoints(-2);
    }
    sound(correct ? "good" : "bad");
    say(correct ? `Correct. ${animal.animal} can ${animal.movement.toLowerCase()}.` : `Try again. ${animal.animal} does not ${targetCard.dataset.movement.toLowerCase()}.`);
  }

  animalSample.forEach(item => {
    const animalButton = document.createElement("button");
    animalButton.className = "organ-card animal-card";
    animalButton.type = "button";
    animalButton.draggable = true;
    animalButton.setAttribute("draggable", "true");
    animalButton.dataset.animal = item.animal;
    animalButton.innerHTML = `<span class="emoji">${item.icon}</span><strong>${item.animal}</strong>`;
    animalButton.addEventListener("dragstart", event => {
      selectedSense = item;
      animalButton.classList.add("selected");
      event.dataTransfer.setData("text/plain", item.animal);
      event.dataTransfer.effectAllowed = "move";
      sound("tap");
      say(`Drag ${item.animal}.`);
    });
    animalButton.addEventListener("dragend", () => animalButton.classList.remove("selected"));
    animalButton.addEventListener("click", () => {
      selectedSense = item;
      document.querySelectorAll(".animal-card").forEach(cardEl => cardEl.classList.remove("selected"));
      animalButton.classList.add("selected");
      sound("tap");
      say(`${item.animal}. Now tap how it moves.`);
    });
    animalList.appendChild(animalButton);
  });

  movementWords.forEach(item => {
    const targetButton = document.createElement("button");
    targetButton.className = "movement-target";
    targetButton.type = "button";
    targetButton.dataset.movement = item.word;
    targetButton.innerHTML = `<strong>${item.icon} ${item.word}</strong><span>${item.meaning}</span><div class="movement-fill"></div>`;
    targetButton.addEventListener("dragover", event => {
      event.preventDefault();
      targetButton.classList.add("drag-over");
    });
    targetButton.addEventListener("dragleave", () => targetButton.classList.remove("drag-over"));
    targetButton.addEventListener("drop", event => {
      event.preventDefault();
      const animalName = event.dataTransfer.getData("text/plain");
      const animal = movementAnimals.find(candidate => candidate.animal === animalName);
      if (animal) checkMovement(targetButton, animal);
    });
    targetButton.addEventListener("click", () => {
      if (!selectedSense) {
        sound("bad");
        say("Choose an animal first.");
        return;
      }
      checkMovement(targetButton, selectedSense);
      selectedSense = undefined;
      document.querySelectorAll(".animal-card").forEach(cardEl => cardEl.classList.remove("selected"));
    });
    targetList.appendChild(targetButton);
  });
}

function renderMovementDetective() {
  title.textContent = "Movement Detective";
  prompt.textContent = "Look at the animal and choose how it moves.";
  const animalQuestions = shuffle(movementAnimals).slice(0, 6);
  startGameSession(animalQuestions.length, animalQuestions.length * 8);
  panel.innerHTML = `
    <div class="round-header">
      <h4>How does it move?</h4>
      <span class="pill">Animal movement</span>
    </div>
    <div class="scenario-grid"></div>
  `;

  const grid = panel.querySelector(".scenario-grid");
  animalQuestions.forEach(item => {
    const cardEl = document.createElement("section");
    cardEl.className = "scenario-card";
    cardEl.innerHTML = `
      <span class="emoji">${item.icon}</span>
      <h5>${item.animal}</h5>
      <p>Choose how this animal moves.</p>
      <div class="sense-options"></div>
    `;
    const options = cardEl.querySelector(".sense-options");
    shuffle(movementWords).forEach(word => {
      const option = document.createElement("button");
      option.className = "sense-option";
      option.type = "button";
      option.textContent = word.word;
      option.addEventListener("click", () => {
        const correct = word.word === item.movement;
        cardEl.classList.add(correct ? "correct" : "wrong");
        addGamePoints(correct ? 8 : -2);
        sound(correct ? "good" : "bad");
        say(correct ? `Yes. ${item.animal} can ${item.movement.toLowerCase()}.` : `Not this time. ${item.animal} can ${item.movement.toLowerCase()}.`);
        cardEl.querySelectorAll("button").forEach(button => button.disabled = true);
        completeGameStep();
      });
      options.appendChild(option);
    });
    grid.appendChild(cardEl);
  });
}

function renderMovementWords() {
  title.textContent = "Movement Words";
  prompt.textContent = "Tap to hear each movement word.";
  startGameSession(movementWords.length, movementWords.length * 3);
  panel.innerHTML = `
    <div class="round-header">
      <h4>Movement vocabulary</h4>
      <span class="pill">Listen and learn</span>
    </div>
    <div class="word-cards"></div>
  `;

  const grid = panel.querySelector(".word-cards");
  movementWords.forEach(item => {
    const button = document.createElement("button");
    button.className = "word-card";
    button.type = "button";
    button.innerHTML = `<strong>${item.icon} ${item.word}</strong><p>${item.meaning}</p>`;
    button.addEventListener("click", () => {
      button.disabled = true;
      button.classList.add("correct");
      addGamePoints(3);
      sound("good");
      say(`${item.word}. ${item.meaning}`);
      completeGameStep();
    });
    grid.appendChild(button);
  });
}

function renderBabyFactory() {
  title.textContent = "Reproduction Way";
  prompt.textContent = "Match each animal with its way of reproduction.";
  selectedSense = undefined;
  const animalSample = shuffle(babyFactoryAnimals);
  startGameSession(animalSample.length, animalSample.length * 10);
  panel.innerHTML = `
    <div class="round-header">
      <h4>Drag each animal to the suitable group.</h4>
      <span class="pill">Lay eggs or give birth</span>
    </div>
    <div class="factory-game">
      <section class="sentence-column" aria-label="Animal cards">
        <h5>Animal cards</h5>
        <div class="organ-choice-list" id="baby-animal-list"></div>
      </section>
      <section class="factory-lanes" aria-label="Way of reproduction">
        <button class="factory-lane egg-lane" type="button" data-reproduction="Lay Eggs">
          <strong>🥚 Lay Eggs</strong>
          <span>lay eggs</span>
          <div class="movement-fill"></div>
        </button>
        <button class="factory-lane birth-lane" type="button" data-reproduction="Give Birth">
          <strong>👶 Give Birth</strong>
          <span>give birth</span>
          <div class="movement-fill"></div>
        </button>
      </section>
    </div>
  `;

  const animalList = document.getElementById("baby-animal-list");

  function checkBabyPath(lane, animal) {
    const animalCard = document.querySelector(`.baby-animal-card[data-animal="${animal.animal}"]`);
    if (animalCard?.classList.contains("correct")) return;
    const correct = lane.dataset.reproduction === animal.reproduction;
    lane.classList.add(correct ? "correct" : "wrong");
    lane.classList.remove("drag-over");
    if (correct) {
      lane.classList.remove("wrong");
      lane.querySelector(".movement-fill").insertAdjacentHTML("beforeend", `<span class="mini">${animal.icon} ${animal.animal}</span>`);
      if (animalCard) {
        animalCard.classList.add("correct");
        animalCard.draggable = false;
        animalCard.disabled = true;
      }
      addGamePoints(10);
      completeGameStep();
    } else {
      window.setTimeout(() => lane.classList.remove("wrong"), 650);
      addGamePoints(-2);
    }
    sound(correct ? "good" : "bad");
    say(correct ? `Correct. ${animal.animal} can ${animal.reproduction.toLowerCase()}.` : `Try again. ${animal.animal} should go to ${animal.reproduction}.`);
  }

  animalSample.forEach(item => {
    const animalButton = document.createElement("button");
    animalButton.className = "organ-card baby-animal-card";
    animalButton.type = "button";
    animalButton.draggable = true;
    animalButton.setAttribute("draggable", "true");
    animalButton.dataset.animal = item.animal;
    animalButton.innerHTML = `<span class="emoji">${item.icon}</span><strong>${item.animal}</strong>`;
    animalButton.addEventListener("dragstart", event => {
      selectedSense = item;
      animalButton.classList.add("selected");
      event.dataTransfer.setData("text/plain", item.animal);
      event.dataTransfer.effectAllowed = "move";
      sound("tap");
      say(`Drag ${item.animal}.`);
    });
    animalButton.addEventListener("dragend", () => animalButton.classList.remove("selected"));
    animalButton.addEventListener("click", () => {
      selectedSense = item;
      document.querySelectorAll(".baby-animal-card").forEach(cardEl => cardEl.classList.remove("selected"));
      animalButton.classList.add("selected");
      sound("tap");
      say(`${item.animal}. Choose eggs or birth.`);
    });
    animalList.appendChild(animalButton);
  });

  panel.querySelectorAll(".factory-lane").forEach(lane => {
    lane.addEventListener("dragover", event => {
      event.preventDefault();
      lane.classList.add("drag-over");
    });
    lane.addEventListener("dragleave", () => lane.classList.remove("drag-over"));
    lane.addEventListener("drop", event => {
      event.preventDefault();
      const animalName = event.dataTransfer.getData("text/plain");
      const animal = reproductionAnimals.find(candidate => candidate.animal === animalName);
      if (animal) checkBabyPath(lane, animal);
    });
    lane.addEventListener("click", () => {
      if (!selectedSense) {
        sound("bad");
        say("Choose an animal first.");
        return;
      }
      checkBabyPath(lane, selectedSense);
      selectedSense = undefined;
      document.querySelectorAll(".baby-animal-card").forEach(cardEl => cardEl.classList.remove("selected"));
    });
  });
}

function renderLifeBuilder() {
  title.textContent = "Human Life Cycle";
  prompt.textContent = "Build the human life cycle in the right order.";
  selectedSense = undefined;
  startGameSession(lifeStages.length, lifeStages.length * 10);
  panel.innerHTML = `
    <div class="round-header">
      <h4>Drag each stage to the correct step.</h4>
      <span class="pill">Baby → Child → Adolescent → Adult</span>
    </div>
    <div class="life-builder">
      <section class="sentence-column" aria-label="Life stages">
        <h5>Stage cards</h5>
        <div class="organ-choice-list" id="stage-card-list"></div>
      </section>
      <section class="life-track" aria-label="Life cycle order">
        <div class="life-slot" data-order="1"><span>1</span><strong>Drop stage</strong></div>
        <div class="life-slot" data-order="2"><span>2</span><strong>Drop stage</strong></div>
        <div class="life-slot" data-order="3"><span>3</span><strong>Drop stage</strong></div>
        <div class="life-slot" data-order="4"><span>4</span><strong>Drop stage</strong></div>
      </section>
    </div>
  `;

  const stageList = document.getElementById("stage-card-list");

  function checkLifeStage(slot, stage) {
    const stageCard = document.querySelector(`.stage-card[data-stage="${stage.stage}"]`);
    if (stageCard?.classList.contains("correct")) return;
    const correct = Number(slot.dataset.order) === stage.order;
    slot.classList.add(correct ? "correct" : "wrong");
    slot.classList.remove("drag-over");
    if (correct) {
      slot.classList.remove("wrong");
      slot.innerHTML = `<span>${stage.order}</span><strong>${stage.icon} ${stage.stage}</strong>`;
      if (stageCard) {
        stageCard.classList.add("correct");
        stageCard.draggable = false;
        stageCard.disabled = true;
      }
      addGamePoints(10);
      completeGameStep();
    } else {
      window.setTimeout(() => slot.classList.remove("wrong"), 650);
      addGamePoints(-2);
    }
    sound(correct ? "good" : "bad");
    say(correct ? `Correct. Stage ${stage.order} is ${stage.stage}.` : `Try again. ${stage.stage} is stage ${stage.order}.`);
  }

  shuffle(lifeStages).forEach(item => {
    const stageButton = document.createElement("button");
    stageButton.className = "organ-card stage-card";
    stageButton.type = "button";
    stageButton.draggable = true;
    stageButton.setAttribute("draggable", "true");
    stageButton.dataset.stage = item.stage;
    stageButton.innerHTML = `<span class="emoji">${item.icon}</span><strong>${item.stage}</strong>`;
    stageButton.addEventListener("dragstart", event => {
      selectedSense = item;
      stageButton.classList.add("selected");
      event.dataTransfer.setData("text/plain", item.stage);
      event.dataTransfer.effectAllowed = "move";
      sound("tap");
      say(`Drag ${item.stage}.`);
    });
    stageButton.addEventListener("dragend", () => stageButton.classList.remove("selected"));
    stageButton.addEventListener("click", () => {
      selectedSense = item;
      document.querySelectorAll(".stage-card").forEach(cardEl => cardEl.classList.remove("selected"));
      stageButton.classList.add("selected");
      sound("tap");
      say(`${item.stage}. Now choose its place.`);
    });
    stageList.appendChild(stageButton);
  });

  panel.querySelectorAll(".life-slot").forEach(slot => {
    slot.addEventListener("dragover", event => {
      event.preventDefault();
      slot.classList.add("drag-over");
    });
    slot.addEventListener("dragleave", () => slot.classList.remove("drag-over"));
    slot.addEventListener("drop", event => {
      event.preventDefault();
      const stageName = event.dataTransfer.getData("text/plain");
      const stage = lifeStages.find(candidate => candidate.stage === stageName);
      if (stage) checkLifeStage(slot, stage);
    });
    slot.addEventListener("click", () => {
      if (!selectedSense) {
        sound("bad");
        say("Choose a stage first.");
        return;
      }
      checkLifeStage(slot, selectedSense);
      selectedSense = undefined;
      document.querySelectorAll(".stage-card").forEach(cardEl => cardEl.classList.remove("selected"));
    });
  });
}

function renderClassPassport() {
  title.textContent = "Animal Classes";
  prompt.textContent = "Choose the suitable animal class.";
  const passportAnimals = shuffle(reproductionAnimals).slice(0, 8);
  startGameSession(passportAnimals.length, passportAnimals.length * 8);
  panel.innerHTML = `
    <div class="round-header">
      <h4>Choose the animal class.</h4>
      <span class="pill">Mammals, Birds, Fish, Reptiles, Amphibians</span>
    </div>
    <div class="passport-grid"></div>
  `;

  const grid = panel.querySelector(".passport-grid");
  passportAnimals.forEach(item => {
    const cardEl = document.createElement("section");
    cardEl.className = "passport-card";
    cardEl.innerHTML = `
      <span class="passport-stamp">?</span>
      <span class="emoji">${item.icon}</span>
      <h5>${item.animal}</h5>
      <p>Choose the suitable animal class.</p>
      <div class="sense-options"></div>
    `;
    const options = cardEl.querySelector(".sense-options");
    shuffle(animalClasses).forEach(classItem => {
      const option = document.createElement("button");
      option.className = "sense-option";
      option.type = "button";
      option.textContent = classItem.name;
      option.addEventListener("click", () => {
        const correct = classItem.name === item.className;
        cardEl.classList.add(correct ? "correct" : "wrong");
        cardEl.querySelector(".passport-stamp").textContent = correct ? "OK" : "X";
        addGamePoints(correct ? 8 : -2);
        sound(correct ? "good" : "bad");
        say(correct ? `Correct. ${item.animal} is ${item.className}.` : `Not this time. ${item.animal} is ${item.className}.`);
        cardEl.querySelectorAll("button").forEach(button => button.disabled = true);
        completeGameStep();
      });
      options.appendChild(option);
    });
    grid.appendChild(cardEl);
  });
}

function renderReproductionWords() {
  title.textContent = "Life Words";
  prompt.textContent = "Tap to hear each reproduction and life cycle word.";
  startGameSession(reproductionWords.length, reproductionWords.length * 3);
  panel.innerHTML = `
    <div class="round-header">
      <h4>Reproduction vocabulary</h4>
      <span class="pill">Listen and learn</span>
    </div>
    <div class="word-cards"></div>
  `;

  const grid = panel.querySelector(".word-cards");
  reproductionWords.forEach(item => {
    const button = document.createElement("button");
    button.className = "word-card";
    button.type = "button";
    button.innerHTML = `<strong>${item.icon} ${item.word}</strong><p>${item.meaning}</p>`;
    button.addEventListener("click", () => {
      button.disabled = true;
      button.classList.add("correct");
      addGamePoints(3);
      sound("good");
      say(`${item.word}. ${item.meaning}`);
      completeGameStep();
    });
    grid.appendChild(button);
  });
}

function renderLabelingGame(config) {
  title.textContent = config.title;
  prompt.textContent = config.prompt;
  selectedSense = undefined;
  startGameSession(config.items.length, config.items.length * 10);

  const sourceTitle = config.dragPictures ? "Drag a picture" : "Drag a word";
  const targetTitle = config.dragPictures ? "Drop on the word" : "Drop on the drawing";
  panel.innerHTML = `
    <div class="round-header">
      <h4>${config.heading}</h4>
      <span class="pill">${config.pill}</span>
    </div>
    <div class="label-game">
      <section class="sentence-column" aria-label="${sourceTitle}">
        <h5>${sourceTitle}</h5>
        <div class="label-bank" id="label-bank"></div>
      </section>
      <section class="label-board" aria-label="${targetTitle}">
        <h5>${targetTitle}</h5>
        <div class="label-targets" id="label-targets"></div>
      </section>
    </div>
  `;

  const bank = document.getElementById("label-bank");
  const targets = document.getElementById("label-targets");

  function labelImage(item, className = "label-img") {
    if (!item.image) return `<span class="${className} text-icon">${item.icon}</span>`;
    return `<img class="${className}" src="${item.image}" alt="${item.label}">`;
  }

  function checkLabel(targetCard, item) {
    const sourceCard = document.querySelector(`.label-token[data-label="${item.label}"]`);
    if (sourceCard?.classList.contains("correct")) return;
    const correct = targetCard.dataset.label === item.label;
    targetCard.classList.add(correct ? "correct" : "wrong");
    targetCard.classList.remove("drag-over");
    if (correct) {
      targetCard.classList.remove("wrong");
      targetCard.querySelector(".label-drop").innerHTML = config.dragPictures ? labelImage(item, "label-drop-img") : item.label;
      targetCard.querySelector(".label-drop").classList.add("filled");
      if (sourceCard) {
        sourceCard.classList.add("correct");
        sourceCard.draggable = false;
        sourceCard.disabled = true;
      }
      addGamePoints(10);
      completeGameStep();
    } else {
      window.setTimeout(() => targetCard.classList.remove("wrong"), 650);
      addGamePoints(-2);
    }
    sound(correct ? "good" : "bad");
    say(correct ? `Correct. ${item.label}.` : `Try again. This is ${targetCard.dataset.label}.`);
  }

  shuffle(config.items).forEach(item => {
    const token = document.createElement("button");
    token.className = "label-token";
    token.type = "button";
    token.draggable = true;
    token.setAttribute("draggable", "true");
    token.dataset.label = item.label;
    token.innerHTML = config.dragPictures ? labelImage(item, "label-token-img") : `<strong>${item.label}</strong>`;
    token.addEventListener("dragstart", event => {
      selectedSense = item;
      token.classList.add("selected");
      event.dataTransfer.setData("text/plain", item.label);
      event.dataTransfer.effectAllowed = "move";
      sound("tap");
      say(`Drag ${item.label}.`);
    });
    token.addEventListener("dragend", () => token.classList.remove("selected"));
    token.addEventListener("click", () => {
      selectedSense = item;
      document.querySelectorAll(".label-token").forEach(cardEl => cardEl.classList.remove("selected"));
      token.classList.add("selected");
      sound("tap");
      say(`${item.label}. Now choose the matching place.`);
    });
    bank.appendChild(token);
  });

  config.items.forEach((item, index) => {
    const targetCard = document.createElement("button");
    targetCard.className = "label-target";
    targetCard.type = "button";
    targetCard.dataset.label = item.label;
    targetCard.innerHTML = `
      <span class="label-number">${index + 1}</span>
      <span class="label-picture">${config.dragPictures ? item.label : labelImage(item)}</span>
      <strong class="label-drop">drop here</strong>
    `;
    targetCard.addEventListener("dragover", event => {
      event.preventDefault();
      targetCard.classList.add("drag-over");
    });
    targetCard.addEventListener("dragleave", () => targetCard.classList.remove("drag-over"));
    targetCard.addEventListener("drop", event => {
      event.preventDefault();
      const label = event.dataTransfer.getData("text/plain");
      const itemToCheck = config.items.find(candidate => candidate.label === label);
      if (itemToCheck) checkLabel(targetCard, itemToCheck);
    });
    targetCard.addEventListener("click", () => {
      if (!selectedSense) {
        sound("bad");
        say(config.dragPictures ? "Choose a picture first." : "Choose a word first.");
        return;
      }
      checkLabel(targetCard, selectedSense);
      selectedSense = undefined;
      document.querySelectorAll(".label-token").forEach(cardEl => cardEl.classList.remove("selected"));
    });
    targets.appendChild(targetCard);
  });
}

function renderChickenCycleLabeling() {
  renderLabelingGame({
    title: "Life Cycle Of a Chicken",
    prompt: "Drag each word to the suitable stage.",
    heading: "Label the chicken life cycle.",
    pill: "Eggs, Roosting, Hatching, Chick, Adult",
    items: chickenCycleLabels,
    dragPictures: false
  });
}

function renderFrogCycleLabeling() {
  renderLabelingGame({
    title: "Life Cycle of Frog",
    prompt: "Drag each word to the suitable stage.",
    heading: "Label the frog life cycle.",
    pill: "Egg Mass, Tadpole, Tadpole With Legs, Froglet, Adult Frog",
    items: frogCycleLabels,
    dragPictures: false
  });
}

function renderPlantCyclePictures() {
  renderLabelingGame({
    title: "Plant Life Cycle",
    prompt: "Drag each picture to the suitable word.",
    heading: "Match the plant life cycle pictures.",
    pill: "seed, germination, seedling, adult plant",
    items: plantCycleLabels,
    dragPictures: true
  });
}

function renderBirdPartsLabeling() {
  renderLabelingGame({
    title: "Bird Body Parts",
    prompt: "Drag each word to the suitable body part.",
    heading: "Write the body parts of a bird in the boxes.",
    pill: "Eye, Beak, Tail, Leg, Wing, Claw",
    items: birdPartLabels,
    dragPictures: false
  });
}

function renderPlantPartsLabeling() {
  renderLabelingGame({
    title: "Parts Of Plant",
    prompt: "Drag each word to the suitable plant part.",
    heading: "Label parts of an adult plant.",
    pill: "Leaf, Flower, Fruit, Stem, Root",
    items: plantPartLabels,
    dragPictures: false
  });
}

function renderTwoLaneDropGame(config) {
  title.textContent = config.title;
  prompt.textContent = config.prompt;
  selectedSense = undefined;
  const items = shuffle(config.items);
  startGameSession(items.length, items.length * 10);
  panel.innerHTML = `
    <div class="round-header">
      <h4>${config.heading}</h4>
      <span class="pill">${config.pill}</span>
    </div>
    <div class="factory-game">
      <section class="sentence-column" aria-label="${config.cardTitle}">
        <h5>${config.cardTitle}</h5>
        <div class="organ-choice-list" id="nutrition-card-list"></div>
      </section>
      <section class="factory-lanes" aria-label="${config.laneTitle}">
        ${config.groups.map(group => `
          <button class="factory-lane nutrition-lane" type="button" data-group="${group.key}">
            <strong>${group.icon} ${group.label}</strong>
            <span>Drop suitable cards here.</span>
            <div class="movement-fill"></div>
          </button>
        `).join("")}
      </section>
    </div>
  `;

  const cardList = document.getElementById("nutrition-card-list");

  function checkDrop(lane, item) {
    const itemCard = document.querySelector(`.nutrition-card[data-name="${item.name}"]`);
    if (itemCard?.classList.contains("correct")) return;
    const correct = lane.dataset.group === item.group;
    lane.classList.add(correct ? "correct" : "wrong");
    lane.classList.remove("drag-over");
    if (correct) {
      lane.classList.remove("wrong");
      lane.querySelector(".movement-fill").insertAdjacentHTML("beforeend", `<span class="mini">${item.icon} ${item.name}</span>`);
      if (itemCard) {
        itemCard.classList.add("correct");
        itemCard.draggable = false;
        itemCard.disabled = true;
      }
      addGamePoints(10);
      completeGameStep();
    } else {
      window.setTimeout(() => lane.classList.remove("wrong"), 650);
      addGamePoints(-2);
    }
    sound(correct ? "good" : "bad");
    say(correct ? `Correct. ${item.name}.` : `Try again. ${item.name} goes with ${item.group}.`);
  }

  items.forEach(item => {
    const button = document.createElement("button");
    button.className = "organ-card nutrition-card";
    button.type = "button";
    button.draggable = true;
    button.setAttribute("draggable", "true");
    button.dataset.name = item.name;
    button.innerHTML = `<span class="emoji">${item.icon}</span><strong>${item.name}</strong>`;
    button.addEventListener("dragstart", event => {
      selectedSense = item;
      button.classList.add("selected");
      event.dataTransfer.setData("text/plain", item.name);
      event.dataTransfer.effectAllowed = "move";
      sound("tap");
      say(`Drag ${item.name}.`);
    });
    button.addEventListener("dragend", () => button.classList.remove("selected"));
    button.addEventListener("click", () => {
      selectedSense = item;
      document.querySelectorAll(".nutrition-card").forEach(cardEl => cardEl.classList.remove("selected"));
      button.classList.add("selected");
      sound("tap");
      say(`${item.name}. Choose the correct group.`);
    });
    cardList.appendChild(button);
  });

  panel.querySelectorAll(".nutrition-lane").forEach(lane => {
    lane.addEventListener("dragover", event => {
      event.preventDefault();
      lane.classList.add("drag-over");
    });
    lane.addEventListener("dragleave", () => lane.classList.remove("drag-over"));
    lane.addEventListener("drop", event => {
      event.preventDefault();
      const itemName = event.dataTransfer.getData("text/plain");
      const item = config.items.find(candidate => candidate.name === itemName);
      if (item) checkDrop(lane, item);
    });
    lane.addEventListener("click", () => {
      if (!selectedSense) {
        sound("bad");
        say("Choose a card first.");
        return;
      }
      checkDrop(lane, selectedSense);
      selectedSense = undefined;
      document.querySelectorAll(".nutrition-card").forEach(cardEl => cardEl.classList.remove("selected"));
    });
  });
}

function renderPlantFoodGame() {
  renderTwoLaneDropGame({
    title: "How Plants Feed",
    prompt: "Plants make their own food by photosynthesis.",
    heading: "Drag each word to what a plant takes or produces.",
    pill: "photosynthesis",
    cardTitle: "Plant food cards",
    laneTitle: "Plant feeding",
    items: plantFoodItems,
    groups: [
      { key: "takes", label: "A plant takes", icon: "🌻", clue: "sunlight, carbon dioxide, water, mineral salts" },
      { key: "produces", label: "A plant produces", icon: "🍬", clue: "oxygen and sugars" }
    ]
  });
}

function renderAnimalNutritionGame() {
  renderTwoLaneDropGame({
    title: "Herbivores and Carnivores",
    prompt: "Sort animals by the food they eat.",
    heading: "Drag each animal to its suitable group.",
    pill: "eat plants or eat meat",
    cardTitle: "Animal cards",
    laneTitle: "Food type",
    items: nutritionAnimals,
    groups: [
      { key: "herbivores", label: "Herbivores", icon: "🌿", clue: "eat plants" },
      { key: "carnivores", label: "Carnivores", icon: "🥩", clue: "eat meat" }
    ]
  });
}

function renderFoodToolsGame() {
  title.textContent = "Teeth and Beaks";
  prompt.textContent = "Choose what each tooth or beak can do.";
  const questions = shuffle(foodToolQuestions);
  startGameSession(questions.length, questions.length * 8);
  panel.innerHTML = `
    <div class="round-header">
      <h4>Match each tooth or beak with its use.</h4>
      <span class="pill">canines, incisors, molars, beaks</span>
    </div>
    <div class="scenario-grid"></div>
  `;

  const grid = panel.querySelector(".scenario-grid");
  questions.forEach(item => {
    const cardEl = document.createElement("section");
    cardEl.className = "scenario-card word-card";
    cardEl.innerHTML = `
      <h5>${item.icon} ${item.title}</h5>
      <p>Choose the suitable use.</p>
      <div class="sense-options"></div>
    `;
    const options = cardEl.querySelector(".sense-options");
    shuffle(item.choices).forEach(choice => {
      const option = document.createElement("button");
      option.className = "sense-option";
      option.type = "button";
      option.textContent = choice;
      option.addEventListener("click", () => {
        const correct = choice === item.answer;
        cardEl.classList.add(correct ? "correct" : "wrong");
        addGamePoints(correct ? 8 : -2);
        sound(correct ? "good" : "bad");
        say(correct ? `Correct. ${item.title} can ${item.answer}.` : `Try again. ${item.title} can ${item.answer}.`);
        cardEl.querySelectorAll("button").forEach(button => button.disabled = true);
        completeGameStep();
      });
      options.appendChild(option);
    });
    grid.appendChild(cardEl);
  });
}

function renderFoodGroupsGame() {
  title.textContent = "Human Food";
  prompt.textContent = "Make a balanced meal from the five food groups.";
  selectedSense = undefined;
  const sample = shuffle(humanFoods).slice(0, 12);
  startGameSession(sample.length, sample.length * 10);
  panel.innerHTML = `
    <div class="round-header">
      <h4>Drag each food to its food group.</h4>
      <span class="pill">balanced meal</span>
    </div>
    <div class="food-group-game">
      <section class="sentence-column" aria-label="Food cards">
        <h5>Food I eat</h5>
        <div class="organ-choice-list" id="food-card-list"></div>
      </section>
      <section class="food-group-board" aria-label="Food groups">
        ${foodGroups.map(group => `
          <button class="movement-target food-group-target" type="button" data-group="${group.name}">
            <strong>${group.name}</strong>
            <span>Drop suitable food here.</span>
            <div class="movement-fill"></div>
          </button>
        `).join("")}
      </section>
    </div>
  `;

  const foodList = document.getElementById("food-card-list");

  function checkFood(target, item) {
    const foodCard = document.querySelector(`.food-card[data-name="${item.name}"]`);
    if (foodCard?.classList.contains("correct")) return;
    const correct = target.dataset.group === item.group;
    target.classList.add(correct ? "correct" : "wrong");
    target.classList.remove("drag-over");
    if (correct) {
      target.classList.remove("wrong");
      target.querySelector(".movement-fill").insertAdjacentHTML("beforeend", `<span class="mini">${item.icon} ${item.name}</span>`);
      if (foodCard) {
        foodCard.classList.add("correct");
        foodCard.draggable = false;
        foodCard.disabled = true;
      }
      addGamePoints(10);
      completeGameStep();
    } else {
      window.setTimeout(() => target.classList.remove("wrong"), 650);
      addGamePoints(-2);
    }
    sound(correct ? "good" : "bad");
    say(correct ? `Correct. ${item.name} is ${item.group}.` : `Try again. ${item.name} belongs to ${item.group}.`);
  }

  sample.forEach(item => {
    const button = document.createElement("button");
    button.className = "organ-card food-card";
    button.type = "button";
    button.draggable = true;
    button.setAttribute("draggable", "true");
    button.dataset.name = item.name;
    button.innerHTML = `<span class="emoji">${item.icon}</span><strong>${item.name}</strong>`;
    button.addEventListener("dragstart", event => {
      selectedSense = item;
      button.classList.add("selected");
      event.dataTransfer.setData("text/plain", item.name);
      event.dataTransfer.effectAllowed = "move";
      sound("tap");
      say(`Drag ${item.name}.`);
    });
    button.addEventListener("dragend", () => button.classList.remove("selected"));
    button.addEventListener("click", () => {
      selectedSense = item;
      document.querySelectorAll(".food-card").forEach(cardEl => cardEl.classList.remove("selected"));
      button.classList.add("selected");
      sound("tap");
      say(`${item.name}. Choose its food group.`);
    });
    foodList.appendChild(button);
  });

  panel.querySelectorAll(".food-group-target").forEach(target => {
    target.addEventListener("dragover", event => {
      event.preventDefault();
      target.classList.add("drag-over");
    });
    target.addEventListener("dragleave", () => target.classList.remove("drag-over"));
    target.addEventListener("drop", event => {
      event.preventDefault();
      const foodName = event.dataTransfer.getData("text/plain");
      const food = sample.find(candidate => candidate.name === foodName);
      if (food) checkFood(target, food);
    });
    target.addEventListener("click", () => {
      if (!selectedSense) {
        sound("bad");
        say("Choose a food card first.");
        return;
      }
      checkFood(target, selectedSense);
      selectedSense = undefined;
      document.querySelectorAll(".food-card").forEach(cardEl => cardEl.classList.remove("selected"));
    });
  });
}

function renderPredatorGame() {
  title.textContent = "Predators and Camouflage";
  prompt.textContent = "Choose the correct word from the lesson.";
  const questions = shuffle(predatorQuestions);
  startGameSession(questions.length, questions.length * 8);
  panel.innerHTML = `
    <div class="round-header">
      <h4>Read the clue and choose the suitable word.</h4>
      <span class="pill">predator, prey, camouflage</span>
    </div>
    <div class="scenario-grid"></div>
  `;

  const grid = panel.querySelector(".scenario-grid");
  questions.forEach(item => {
    const cardEl = document.createElement("section");
    cardEl.className = "scenario-card word-card";
    cardEl.innerHTML = `
      <h5>${item.icon} ${item.title}</h5>
      <p>${item.text}</p>
      <div class="sense-options"></div>
    `;
    const options = cardEl.querySelector(".sense-options");
    shuffle(item.choices).forEach(choice => {
      const option = document.createElement("button");
      option.className = "sense-option";
      option.type = "button";
      option.textContent = choice;
      option.addEventListener("click", () => {
        const correct = choice === item.answer;
        cardEl.classList.add(correct ? "correct" : "wrong");
        addGamePoints(correct ? 8 : -2);
        sound(correct ? "good" : "bad");
        say(correct ? `Correct. ${item.answer}.` : `Try again. The answer is ${item.answer}.`);
        cardEl.querySelectorAll("button").forEach(button => button.disabled = true);
        completeGameStep();
      });
      options.appendChild(option);
    });
    grid.appendChild(cardEl);
  });
}

function renderNutritionWords() {
  title.textContent = "Nutrition Words";
  prompt.textContent = "Tap to hear each word from the lesson.";
  startGameSession(nutritionWords.length, nutritionWords.length * 3);
  panel.innerHTML = `
    <div class="round-header">
      <h4>Nutrition vocabulary</h4>
      <span class="pill">Listen and learn</span>
    </div>
    <div class="word-cards"></div>
  `;

  const grid = panel.querySelector(".word-cards");
  nutritionWords.forEach(item => {
    const button = document.createElement("button");
    button.className = "word-card";
    button.type = "button";
    button.innerHTML = `<strong>${item.icon} ${item.word}</strong><p>${item.meaning}</p>`;
    button.addEventListener("click", () => {
      button.disabled = true;
      button.classList.add("correct");
      addGamePoints(3);
      sound("good");
      say(`${item.word}. ${item.meaning}`);
      completeGameStep();
    });
    grid.appendChild(button);
  });
}

function setupStandaloneLesson() {
  if (!standaloneLesson) return;
  const lesson = lessonData[currentLesson];
  document.body.classList.add("standalone-lesson");
  document.title = `Lesson ${lesson.number}: ${lesson.title}`;
  document.querySelectorAll(".lesson").forEach(button => {
    if (button.dataset.lesson !== currentLesson) button.remove();
  });
  const brandSubtitle = document.querySelector(".brand p");
  if (brandSubtitle) brandSubtitle.textContent = `Lesson ${lesson.number} Games`;
}

function renderTabs() {
  const tabs = document.querySelectorAll(".tab");
  tabs.forEach((tab, index) => {
    const mode = lessonData[currentLesson].modes[index];
    tab.hidden = !mode;
    if (!mode) return;
    tab.textContent = mode.label;
    tab.dataset.game = mode.key;
    tab.classList.toggle("active", mode.key === currentGame);
  });
}

function renderLesson(lessonKey) {
  currentLesson = lessonKey;
  currentGame = "a";
  traitIndex = 0;
  const lesson = lessonData[currentLesson];
  lessonTitle.textContent = lesson.title;
  lessonBadge.textContent = `Lesson ${lesson.number}`;
  document.querySelectorAll(".lesson").forEach(button => {
    button.classList.toggle("active", button.dataset.lesson === currentLesson);
  });
  renderTabs();
  renderGame(currentGame);
}

function renderGame(game) {
  currentGame = game;
  renderTabs();
  const mode = lessonData[currentLesson].modes.find(item => item.key === game);
  mode.render();
}

setupStandaloneLesson();

document.querySelectorAll(".tab").forEach(tab => {
  tab.addEventListener("click", () => renderGame(tab.dataset.game));
});

document.querySelectorAll(".lesson:not(.locked)").forEach(button => {
  button.addEventListener("click", () => renderLesson(button.dataset.lesson));
});

savePlayerButton.addEventListener("click", () => setActivePlayerByName(playerNameInput.value));
playerNameInput.addEventListener("keydown", event => {
  if (event.key === "Enter") setActivePlayerByName(playerNameInput.value);
});
openDashboardButton.addEventListener("click", openDashboard);
rankCard.addEventListener("click", openDashboard);
closeDashboardButton.addEventListener("click", closeDashboard);
dashboardModal.addEventListener("click", event => {
  if (event.target === dashboardModal) closeDashboard();
});
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && !dashboardModal.hidden) closeDashboard();
});

initLeaderboard();
renderLesson(currentLesson);
