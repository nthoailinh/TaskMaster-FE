import axios from "axios";
import API_URL from "@/constants";

export let users = null;

const getUsers = async () => {
  try {
    const response = await axios.get(`${API_URL}/users`);
    users = response.data;
  } catch (error) {
    console.error("Error retrieving upcoming tasks:", error);
    throw error;
  }
};

getUsers();

export default users;
