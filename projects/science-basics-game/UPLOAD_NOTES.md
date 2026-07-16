# Science Basics Game Upload Notes

## Separate lesson files

- `lesson1.html` - Lesson 1 games
- `lesson2.html` - Lesson 2 games
- `lesson3.html` - Lesson 3 games
- `lesson4.html` - Lesson 4 games
- `lesson5.html` - Lesson 5 games
- `index.html` - all lessons together

Upload the whole `science-basics-game` folder, including:

- all `.html` files
- `app.js`
- `styles.css`
- the `assets` folder

## Dashboard note

The current dashboard uses browser `localStorage`.

That means scores are saved only on the same device and browser. If many students open the uploaded link from different phones or computers, their scores will not automatically appear together in one teacher dashboard.

For one shared teacher dashboard across all students, the game needs a small online database/back end, for example Firebase, Supabase, Google Sheets API, or a custom server.
