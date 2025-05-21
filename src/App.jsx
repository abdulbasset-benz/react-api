import { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
import searchImages from "./api";

function App() {
  const [images, setImages] = useState([]);
  const handleSubmit = async (term) => {
    const result = await searchImages(term);

    setImages(result);
  };
  return (
    <div className="min-w-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-xl bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">
          Image Search
        </h1>
        <SearchBar onSubmit={handleSubmit} />
        <ImageList images={images} />
      </div>
    </div>
  );
}

export default App;
