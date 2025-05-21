react-api 📸

This is a small React project built with Vite to practice working with APIs, managing component state, and rendering dynamic lists. It connects to the Unsplash Free API to fetch and display images based on user search input.

The UI is kept intentionally minimal — styling with Tailwind CSS is set up but hasn’t been fully developed yet. The current focus is functionality, state flow, and API integration.
🔧 Stack

    React

    Vite

    Tailwind CSS

    ESLint

    Unsplash API

No UI libraries or external state tools — this project is focused on understanding core React concepts and API handling.
🚀 How to Run It

Clone the repo, install dependencies, and start the dev server:

git clone https://github.com/your-username/react-api.git
cd react-api
npm install

Create a .env file in the root directory and add your Unsplash API key:

VITE_UNSPLASH_ACCESS_KEY=your_unsplash_access_key

Then start the project:

npm run dev

The app will run locally at: http://localhost:5173
🔍 What I Learned

    How to fetch and consume APIs using fetch()

    How to securely use environment variables for access keys

    The concept of lifting state up to share between sibling components

    How to render lists with .map()

    How to structure data flow in a React component hierarchy

    Tailwind CSS setup for future UI styling

Feel free to fork, experiment, or build upon this foundation!
