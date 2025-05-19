import axios from "axios";

const searchImages = async () => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID 5gW9K87cYluhrXYSrBBs28sTMSKXY1HXMsV9zOdV4XQ",
    },
    params: {
      query: "laptop",
    },
  });
  console.log(response);
  return response;
};

export default searchImages;
