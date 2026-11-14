# FocusFlow

FocusFlow is a personal productivity app. It keeps the things that compete for attention — tasks, mood, focus sessions, goals, and short trips — in one place, with a shared layout, a saved dark theme, and a water reminder that runs while the app is open.

The interface is a React single-page app. Each screen is a route inside a common shell (header, sidebar, and page content). Theme preference is stored in the browser with `localStorage`.

A deployed copy of the fuller app is at [focusflow-jfj4.vercel.app](https://focusflow-jfj4.vercel.app/).

## What the app is for

| Screen | Route | What it does |
| --- | --- | --- |
| Dashboard | `/` and `/dashboard` | Overview of the current day: cards for tasks, mood, and focus. |
| Mood check-in | `/moodcapturer` | Record how you feel and see the latest check-in. |
| Tasks | `/tasklistnew` | Add tasks, mark them complete, filter them, and delete them. |
| Focus session | `/focussession` | Run a focus timer and reflect the session in the browser tab title. |
| Quotes | `/quotegenerator` | Load a short motivational quote and refresh it. |
| Weather | `/weatherapp` | Show current weather from Open-Meteo. No API key. |
| Goals | `/goalform` | Add a goal, attach tasks, and track how many are done. |
| Trips | `/tripform` | Plan a destination, list activities, and check them off. |
| Advice | `/randomadvice` | Fetch a piece of random advice. |
| Notes | `/notes` | Keep short notes next to the rest of the day. |

Dark mode is available on every screen that uses the shared layout. A water reminder asks for browser notification permission and, when that is unavailable, shows a small toast.

## Tech stack

- React 19 and TypeScript
- Vite 7 for the dev server and production build
- React Router 7 for client-side routes
- SCSS and CSS Modules for component styles
- React Context for the theme
- Redux Toolkit for notes and the customer example
- `localStorage` for data that should survive a refresh

## Repository layout

```text
src/
  App.tsx                         # Routes, theme provider, water reminder
  app/
    store.ts                      # Redux store (notes and customers)
  assets/                         # Images imported by components
  components/                     # Shared, reusable UI
    DateRangePicker/              # Date-range input
    Layout/                       # Shared app shell styles
    SmallCard/                    # Compact status card
    WaterReminder/                # Hydration toast
  contexts/
    ThemeContext.tsx              # Dark-mode context
  features/                       # Feature-specific code
    tasks/components/             # Task form, item, and filter bar
  learning/                       # Practice code, not part of the app flow
    redux-toolkit/                # Customer-list example (/customerexample)
  styles/                         # Shared stylesheets
public/                           # Icons and empty-state images
```

Conventions:

- Each component gets its own PascalCase folder, with its `.tsx` and `.module.scss` together.
- Code used by one feature goes under `features/<name>/`. Code used in more than one place goes under `components/`.
- Learning and experiment code goes under `learning/`, so it stays separate from the app.

## Run it locally

```bash
npm install
npm run dev
```

Then open `http://localhost:5173`.

```bash
npm run build    # production bundle
npm run preview  # serve the production bundle
npm run lint     # ESLint
```

### Known gaps in this checkout

The app does not compile yet. These files are imported but not present:

- `src/main.tsx` (the entry point in `index.html`), `vite.config.ts`, and the TypeScript config
- `src/components/Layout/Layout.tsx`, the shared shell component (only its stylesheet is here)
- The route screens imported by `src/App.tsx`: `miniprojects/day2`–`day9`, `miniprojects/notesapp`, `miniprojects/debounce`, `furtherdeeper/forms`, `typscript/`, and `usereducerexample/`
- `src/features/notes/notesSlice.ts`, used by the store
- `customcomponents/tablelikecom`, used by `TaskForm.tsx`

Most of these are in commit `bfc8507`. Restore them into the layout above, or remove the routes that use them.

## Data and privacy

Task, theme, and reminder state stay in the browser. Nothing in the current client is sent to an account backend. Quote, weather, and advice screens call public APIs when those screens are present.
