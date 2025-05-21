# React-API Image Search 📸

A minimalist React application built with Vite for searching and displaying images from the Unsplash API. This project demonstrates core React concepts including component state management, working with external APIs, and rendering dynamic content.

## 🔍 Overview

This project focuses on **functionality over styling**, with an intentionally minimal UI to highlight the underlying React concepts:

- Connecting to and consuming the Unsplash API
- Managing component state and data flow
- Handling API responses and errors
- Rendering dynamic lists based on user input

## 🔧 Tech Stack

- **React** - UI library for building component-based interfaces
- **Vite** - Modern, fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework (basic setup included)
- **ESLint** - Code quality and style consistency
- **Unsplash API** - Free tier API for high-quality images

## ✨ Features

- Search for images using keywords
- View results in a responsive grid layout
- Error handling for API requests
- Loading states during API calls
- Responsive design basics

## 📋 Prerequisites

- Node.js (v14+)
- npm or yarn
- Unsplash API credentials (free tier)

## 🚀 Getting Started

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/react-api.git
   cd react-api
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn
   ```

3. Create a `.env` file in the project root and add your Unsplash API access key:

   ```
   VITE_UNSPLASH_ACCESS_KEY=your_access_key_here
   ```

4. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open your browser and navigate to `http://localhost:5173`

## 🔑 API Setup

This project uses the [Unsplash API](https://unsplash.com/developers) (free tier). To use it:

1. Sign up for a developer account at [Unsplash Developers](https://unsplash.com/developers)
2. Create a new application to get your API keys
3. Add your access key to the `.env` file as described above
4. The free tier allows 50 requests per hour

## 🛠️ Core Concepts Demonstrated

- **State Management**: Using React's useState hook to manage application state
- **Effect Handling**: Using useEffect for data fetching and lifecycle management
- **Component Composition**: Building reusable components with clear responsibilities
- **Lifting State Up**: Sharing state between sibling components via parent
- **Conditional Rendering**: Displaying different UI based on application state
- **API Integration**: Making async requests and handling responses
- **Error Handling**: Gracefully managing API errors and edge cases

## 🎨 Styling

The project includes Tailwind CSS setup but keeps styling intentionally minimal to focus on React concepts. The UI provides a clean foundation that can be enhanced:

- Basic responsive grid layout
- Simple form styling
- Loading states
- Error messages

## 🔍 What's Next

Future enhancements could include:

- Advanced filtering options
- Pagination for results
- Image preview modal
- Saving favorite images
- Improved responsive design
- Animation and transitions

## 📄 License

[MIT](LICENSE)

## 🙏 Acknowledgments

- [Unsplash](https://unsplash.com) for providing the free API
- [Vite](https://vitejs.dev/) for the excellent development experience
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
