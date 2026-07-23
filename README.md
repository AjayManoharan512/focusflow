# FocusFlow

FocusFlow is a React learning and productivity playground built with React, TypeScript, Vite, SCSS, CSS Modules, and React Router. It combines small focused mini-projects into one routed app: dashboard, mood logging, tasks, focus timer, quotes, weather, goals, trips, random advice, news, forms, debounce practice, and reducer examples.

Live demo: https://focusflow-jfj4.vercel.app/

## Features

| Feature | Description |
| --- | --- |
| Shared Layout | Common app shell with header, sidebar navigation, dark mode toggle, and routed page content. |
| Dashboard | Overview cards and productivity stats with reusable card UI. |
| Mood Check-in | Log mood changes with state, events, and conditional UI. |
| Task Manager | Add, complete, filter, and delete tasks with controlled inputs. |
| Focus Timer | Focus-session timer with session tracking and browser title updates. |
| Quote Widget | Fetch motivational quotes from a live API with refresh support. |
| Weather Widget | Display live weather data using Open-Meteo without an API key. |
| Goal Tracker | Add goals, manage nested tasks, toggle completion, and track progress. |
| Trip Planner | Plan destinations, add activities, toggle completed items, and delete entries. |
| Random Advice | Fetch random advice through the shared API-fetch hook. |
| News API Practice | API-fetching practice page for news-style data. |
| Forms Practice | Reusable form-state practice with a custom `useForm` hook. |
| Debounce Practice | Reusable `useDebounce` hook for delaying input-driven effects. |
| Dark Mode | Persisted theme toggle powered by React Context and localStorage. |
| Water Reminder | Browser notification/toast reminder running from the root app. |
| Mobile Navigation | Responsive sidebar navigation with horizontal scrolling on mobile. |

## Tech Stack

- React 19 with TypeScript
- React Router 7 for client-side routing and active navigation states
- Vite for development and production builds
- SCSS and CSS Modules for styling
- React Context for theme state
- localStorage for persistent app data
- Vercel for deployment

## React Concepts Practiced

This project was built as a week-by-week React learning project:

1. JSX and components: reusable UI built from component props and array mapping.
2. State and events: `useState`, event handlers, conditional rendering, and previous-state updates.
3. Forms, lists, and keys: controlled inputs, immutable array updates, filters, and list rendering.
4. Effects and side effects: `useEffect`, timers, cleanup functions, and document title updates.
5. Layout and architecture: shared layout, dashboard summaries, reusable styles, and route structure.
6. API fetching: loading, data, error, refresh, and `try/catch/finally` patterns.
7. Lifting state up: parent-owned state passed to child components through props and callbacks.
8. Routing: `BrowserRouter`, `Routes`, `Route`, `NavLink`, and CSS Modules with `:global(.active)`.
9. Custom hooks: reusable `useLocalStorage` and `useApiFetch` hooks.
10. Responsive and themed UI: mobile navigation, dark mode, hover states, and shared component styling.

## Custom Hooks

- `src/miniprojects/shared/hooks/useLocalStorage.ts` stores and restores state from `localStorage`.
- `src/miniprojects/shared/hooks/useApiFetch.ts` centralizes API loading, error, data, and refresh state.
- `src/miniprojects/debounce/useDebounce.ts` returns a delayed version of a changing value.
- `src/furtherdeeper/forms/useForm.ts` manages reusable form input state.

Example debounce usage:

```jsx
const debouncedValue = useDebounce(inputValue, 500);

useEffect(() => {
    if (!debouncedValue) return;
    console.log("api fetch", debouncedValue);
}, [debouncedValue]);
```

## Project Structure

```text
src/
+-- common/
|   +-- components/
|   |   +-- Layout.tsx          # Shared app shell and navigation
|   +-- styles/
|       +-- layout.module.scss  # Layout CSS module
+-- miniprojects/
|   +-- day1/             # Habit card practice
|   +-- day2/             # Mood check-in
|   +-- day3/             # Task manager
|   +-- day4/             # Focus timer
|   +-- day5/             # Dashboard
|   +-- day6/             # Quote and weather widgets
|   +-- day7/             # Goal board
|   +-- day8/             # Trip planner
|   +-- day9/             # Random advice
|   +-- debounce/         # useDebounce hook and demo
|   +-- shared/
|       +-- hooks/        # useLocalStorage and useApiFetch
|       +-- styles/       # Shared SCSS module styles
+-- furtherdeeper/
|   +-- forms/            # Form hook practice
+-- customcomponents/     # Reusable UI/component experiments
+-- taskflow/             # Older taskflow practice components and utilities
+-- usereducerexample/    # useReducer practice
+-- themecontext.ts       # Dark mode context
+-- App.tsx               # App routes
+-- global.scss           # Global styles
+-- main.tsx              # React entry point
```

## Routes

The default route (`/`) opens the Dashboard.

- `/dashboard` - Dashboard
- `/moodcapturer` - Mood check-in
- `/tasklistnew` - Task manager
- `/focussession` - Focus timer
- `/quotegenerator` - Quote widget
- `/weatherapp` - Weather widget
- `/goalform` - Goal tracker
- `/tripform` - Trip planner
- `/randomadvice` - Random advice
- `/newsapi` - News API practice
- `/forms` - Forms practice
- `/debounce` - Debounce hook demo
- `/usereducerexample` - Reducer practice
- `/majoroperations` - Reducer practice route alias

## Running Locally

```bash
git clone https://github.com/AjayManoharan512/focusflow.git
cd focusflow
npm install
npm run dev
```

Open `http://localhost:5173` in your browser.

## Available Scripts

```bash
npm run dev
npm run build
npm run lint
npm run preview
```

## Recent Architecture Update

The app shell was moved out of `src/taskflow/components` into `src/common/components/Layout.tsx`, with its stylesheet in `src/common/styles/layout.module.scss`. This makes the layout a shared app-level component instead of coupling it to the older taskflow practice area.

## Future Improvements

- Replace remaining `any` types with proper TypeScript interfaces.
- Move more reusable UI into `src/common`.
- Add unit tests with React Testing Library.
- Add a backend for accounts and cross-device sync.
- Improve accessibility labels and keyboard navigation.
- Add more polished empty states and error states.
- Clean up older practice folders once their reusable pieces are extracted.

Built by Ajay Manoharan while learning React from scratch.
