# 📝 Keeper App

👉 **[Live Project Link](https://keeper-by-rehman.vercel.app)**

A modern, responsive, and functional note-taking application inspired by Google Keep. This project is built using **ReactJS** and bundled with **Vite**, focusing on clean component architecture, state lifting, and local data persistence.

The core HTML structure and CSS styling templates are credited to the popular web development instructor **Angela Yu**, while the full interactive JavaScript logic, React lifecycle, hooks, and dynamic data syncing have been manually engineered.

---

## ✨ Features & React Concepts Implemented

This project showcases the implementation of fundamental and advanced **ReactJS** workflows:

*   **Component Architecture:** Codebase split into highly reusable, single-responsibility components (`Header`, `Footer`, `Note`, `CreateArea`).
*   **State Management (`useState`):** Used to capture real-time form input data and maintain a dynamic list of notes array.
*   **Lifting State Up:** Successfully passed data upwards from the child component (`CreateArea`) back to the parent component (`App`) using custom event handler functions.
*   **Side Effects & Persistence (`useEffect`):** Integrated browser **LocalStorage** seamlessly to save notes. Your added notes won't disappear even if you refresh or close the browser tab.
*   **Dynamic Lists Rendering:** Managed dynamic arrays utilizing JavaScript's native `.map()` method paired with safe, unique tracking `key` props (`id: Date.now()`).
*   **Immutability & Conditional Filtering:** Safely deleted specific notes by maintaining React immutable state rules via the array `.filter()` utility.

---

## 🛠️ Tech Stack Used

*   **Frontend Library:** ReactJS (Functional Components)
*   **Build Tool & Dev Server:** Vite (Ultra-fast modern builder)
*   **Styling:** Custom CSS3
*   **Version Control:** Git & GitHub

---

## 🚀 How to Run Locally

Follow these quick steps to get this project running on your local system machine using VS Code:

### 1. Clone or Download the Project
Make sure you are inside your working directory (`Keeper APP`).

### 2. Install Project Dependencies
Run the following command in your integrated VS Code terminal to install all background packages listed inside `package.json`:
```bash
npm install
```

### 3. Spin Up the Local Server
Start Vite's super fast hot-reloading development server by running:
```bash
npm run dev
```

### 4. View in Browser
Open your browser and navigate to the local link outputted by your terminal (usually **`http://localhost:5173/`**).

---

## 📁 File Structure Overview

Here is a quick map of how the source logic is organized inside this repository:
```text
src/
├── assets/          # Project images and logos
├── components/      # UI Layout Building Blocks
│   ├── CreateArea.jsx  # Dynamic inputs handling form
│   ├── Footer.jsx      # Auto-updating dynamic year layout
│   ├── Header.jsx      # Title branding header navigation
│   └── Note.jsx        # Individual note display containing delete triggers
├── App.jsx          # Core parent element orchestration & hooks hub
├── index.css        # Global CSS resets
└── main.jsx         # Mounts React Virtual DOM onto physical index.html
```

---

## 📜 License
This project was built for educational purposes as a practical application of React fundamentals. Feel free to use, modify, or extend its features!
