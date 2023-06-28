import axios from "axios";

export let workspaces = null;

const getWorkspaces = async () => {
  try {
    const response = await axios.get("http://localhost:3000/workspaces");
    workspaces = response.data;
  } catch (error) {
    console.error("Error retrieving upcoming tasks:", error);
    throw error;
  }
};

getWorkspaces();

export default workspaces;
