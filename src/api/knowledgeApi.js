
import axios from "axios";
import API_URL from "./URL/apiUrl"

export const fetchKnowledgeList = async () => {
  try {
    const response = await axios.get(API_URL + "knowledge/");
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Ném lỗi để có thể xử lý tại component
  }
};