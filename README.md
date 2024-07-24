# Vite + React + TypeScript + Tailwind CSS + Routing + Custom Themes

This project is a boilerplate setup using Vite, React, TypeScript, Tailwind CSS, react-router-dom for routing, and a custom light/dark theme.


## Demo

- <a href="https://sivamani-18.github.io/vite-react-ts-boilerplate/" target="_blank">Example Demo Link</a>

## Table of Contents

- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Custom Theme](#custom-theme)
- [Routing](#routing)


## Getting Started

### Prerequisites

- Node.js (>= 14.x)
- npm (>= 6.x)

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/Sivamani-18/vite-react-ts-boilerplate.git
   cd vite-react-ts-boilerplate

   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Start the development server:

   ```sh
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000`.

## Project Structure

```
my-vite-app/
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   │   ├── react.svg
│   │   └── vite.svg
│   ├── components/
│   │   ├── Header.tsx
│   │   └── ThemeToggle.tsx
│   ├── context/
│   │   └── ThemeContext.tsx
│   ├── pages/
│   │   ├── About.tsx
│   │   └── Home.tsx
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm run build`

Builds the app for production to the `dist` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run preview`

Locally preview the production build.

## Custom Theme

This project supports light and dark themes, and you can toggle between them using the `ThemeToggle` component in the header.

### Adding Custom Colors

You can add custom colors for light and dark themes in the `tailwind.config.js` file:

```js
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // This enables class-based dark mode
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#4f46e5',
          dark: '#6366f1',
        },
        background: {
          light: '#f3f4f6',
          dark: '#1f2937',
        },
        text: {
          light: '#1f2937',
          dark: '#f3f4f6',
        },
      },
    },
  },
  plugins: [],
}
```

### Using Custom Theme Colors

Apply the custom theme colors in your components using Tailwind CSS classes:

```tsx
<div className="bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark">
  <h1 className="text-primary-light dark:text-primary-dark">Hello, World!</h1>
</div>
```

## Routing

This project uses `react-router-dom` for routing. The `Header` component contains navigation links, and the routes are defined in `App.tsx`.

### Adding New Routes

1. Create a new page component in the `src/pages` directory.
2. Import the new component in `App.tsx` and add a new `<Route>` element.

```tsx
import NewPage from './pages/NewPage';

// Inside the Routes component
<Route path="/new-page" element={<NewPage />} />
```

3. Add a navigation link in the `Header` component.

```tsx
<Link to="/new-page" className="text-gray-800 dark:text-gray-200 hover:text-blue-500">
  New Page
</Link>
```

