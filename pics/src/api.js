import axios from "axios";

const searchImages = async term => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID jwMDjavVLuzhFozxE_XNnBI4V79lA50jK7_SmRBAZ68",
    },
    params: {
      query: term,
    },
  });

  console.log(response.data.results);
  return response.data.results;
};

export default searchImages;
