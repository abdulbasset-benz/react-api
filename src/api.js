import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID 5gW9K87cYluhrXYSrBBs28sTMSKXY1HXMsV9zOdV4XQ",
    },
    params: {
      query: term,
    },
  });
  return response.data.results;
};

export default searchImages;
