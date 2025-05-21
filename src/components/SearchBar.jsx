import { useState } from "react";

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!term.trim()) return;
    onSubmit(term);
  };

  const handleChange = (e) => {
    setTerm(e.target.value);
  };

  return (
    <form className="flex" onSubmit={handleSubmit}>
      <input
        type="search"
        name="search"
        id="search"
        value={term}
        onChange={handleChange}
        placeholder="Search for photos..."
        className="flex-grow p-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-50 text-gray-700"
      />
      <button
        onSubmit={handleSubmit}
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-5 rounded-r-md transition-colors duration-200"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;
