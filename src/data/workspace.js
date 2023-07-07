import axios from "axios";
import API_URL from "@/constants";

export let workspaces = null;

const getWorkspaces = async () => {
  try {
    const response = await axios.get(`${API_URL}/workspaces`);
    console.log(response);
    workspaces = response.data;
  } catch (error) {
    console.error("Error retrieving upcoming tasks:", error);
    throw error;
  }
};

getWorkspaces();

export default workspaces;
