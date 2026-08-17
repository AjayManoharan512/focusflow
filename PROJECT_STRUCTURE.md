# Project Structure

## Current Structure Analysis

The project contains:
- Main application with Redux state management
- Multiple mini-projects (day1-day9)
- Learning examples (TypeScript, useMemo, useReducer)
- Common components and styles
- Feature-based modules (notes)

## Proposed Structure

```
src/
├── app/                          # App configuration and state management
│   ├── store.ts                 # Redux store configuration
│   └── hooks.ts                 # Custom Redux hooks (if needed)
│
├── features/                    # Feature-based modules
│   ├── notes/                   # Notes feature
│   │   ├── notesSlice.ts
│   │   ├── NotesComponent.tsx
│   │   └── notes.module.scss
│   ├── mood/                    # Mood tracker feature
│   │   ├── moodSlice.ts
│   │   └── MoodCapturer.tsx
│   ├── tasks/                   # Tasks feature
│   │   ├── tasksSlice.ts
│   │   └── Tasklist.tsx
│   └── goals/                   # Goals feature
│       ├── goalsSlice.ts
│       └── Goalboard.tsx
│
├── components/                  # Shared/reusable components
│   ├── Layout/
│   │   ├── Layout.tsx
│   │   └── layout.module.scss
│   ├── ThemeToggle/
│   │   └── ThemeToggle.tsx
│   └── WaterReminder/
│       └── WaterReminderToast.tsx
│
├── pages/                       # Page components (mini-projects)
│   ├── dashboard/
│   │   └── Dashboard.tsx
│   ├── focus-timer/
│   │   └── FocusTimer.tsx
│   ├── quote-generator/
│   │   └── QuoteGenerator.tsx
│   ├── weather-app/
│   │   ├── WeatherCard.tsx
│   │   └── NewsAPI.tsx
│   ├── trip-planner/
│   │   └── TripBoard.tsx
│   ├── advice-generator/
│   │   └── RandomAdvice.tsx
│   └── forms/
│       └── Forms.tsx
│
├── utils/                       # Utility functions
│   ├── debounce.ts
│   └── helpers.ts
│
├── contexts/                    # React contexts
│   └── ThemeContext.tsx
│
├── styles/                      # Global styles
│   ├── global.scss
│   ├── main.scss
│   └── variables.scss
│
├── assets/                      # Static assets
│   ├── images/
│   ├── icons/
│   └── react.svg
│
├── types/                       # TypeScript type definitions
│   └── index.ts
│
├── App.tsx                      # Main app component with routes
└── main.tsx                     # Application entry point
```

## Key Changes

1. **Feature-based organization**: Group related components, slices, and styles together
2. **Consistent naming**: Use kebab-case for folders, PascalCase for components
3. **Clear separation**: 
   - `features/` for Redux-connected features
   - `components/` for reusable UI components
   - `pages/` for route-level components
   - `utils/` for helper functions
4. **Remove learning folders**: Move learning examples to a separate `learning/` directory or remove them
5. **Consolidate styles**: Each component/module has its own SCSS file

## Migration Steps

1. Create new folder structure
2. Move and rename files according to the new structure
3. Update all import paths
4. Update Redux store configuration
5. Update routing in App.tsx
6. Test all functionality