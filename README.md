# DevStack

DevStack is a React-based web application where users can explore different development technologies and build their own development stack. Users can select technologies from different categories and see their selected technologies in one place.

## Live Website

[Live Demo](https://dev-stack-app-naim.netlify.app/)

## GitHub Repository

[GitHub Repository](https://github.com/naimparves-dev/Dev-Stack-App)

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- React Icons
- React Toastify
- Vite

## Features

- Browse different frontend, backend, database, and development technologies.
- Add technologies to your own stack and see the selected items instantly.
- Prevents adding the same technology multiple times and shows a notification when a technology is added.

## React Questions & Answers

### 1. What is JSX, and why is it used in React?

jsx is a syntext that used to write html code inside the ts or js. It makes the React code easier. 
### 2. What is the difference between props and state?

Props are values passed to a component from its parent. State is data managed inside a component that can change over time.

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` is used to store and update data inside a React component. In this project, I used it to keep track of the technologies selected by the user.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` is used to run code after a component renders, usually for side effects like fetching data. In this project, `useEffect` can be used to load the technology data from the JSON file when the page loads.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

React uses the `key` to identify each item in a list. It helps React understand which items have changed, been added, or removed, so it can update the UI properly.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI based on a condition.

For example, I used it to show an empty stack message when no technology has been selected:

```tsx
{SelectedTecnologies.length === 0 ? (
  <p>Your stack is empty</p>
) : (
  <SelectedTechnologies />
)}