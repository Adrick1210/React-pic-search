import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID h58Uv2eN91rfz9fM5CjhNuH6bD1ioa5SRb1yN-RhxCs",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
