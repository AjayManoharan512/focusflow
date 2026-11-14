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
- `localStorage` for data that should survive a refresh

## Repository layout

```text
src/
  App.tsx                         # Routes, theme provider, water reminder
  app/store.ts                    # Redux store (notes and customers)
  contexts/ThemeContext.tsx       # Dark-mode context
  components/
    Layout/                       # Shared app shell
    TaskFlow/                     # Task list, form, item, and filter
    WaterReminder/                # Hydration toast
    SmallCard.tsx                 # Compact status card
    DateRangePicker/              # Date-range input
public/                           # Icons and empty-state images
```

`redux toolkit explained/` is a separate customer-list example wired to the same store. It is practice code, not part of the daily productivity flow.

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

The page entry in `index.html` is `src/main.tsx`. That file, plus `vite.config.ts` and the TypeScript config, need to be present before `npm run dev` can start. Several route components imported by `src/App.tsx` (the day-by-day screens under `src/miniprojects`) are also absent from this checkout, so the router will not compile until those modules are restored or the unused routes are removed.

## Data and privacy

Task, theme, and reminder state stay in the browser. Nothing in the current client is sent to an account backend. Quote, weather, and advice screens call public APIs when those screens are present.
