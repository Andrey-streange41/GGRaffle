import axios from "axios";

export const fetchData = async () => {
  try {
    const responce = await axios.get("/tickets.json");
    return responce.data;
  } catch (error) {
    console.log(error);
  }
};
