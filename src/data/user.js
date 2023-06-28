import axios from "axios";

export let users = null;

const getUsers = async () => {
  try {
    const response = await axios.get("http://localhost:3000/users");
    users = response.data;
  } catch (error) {
    console.error("Error retrieving upcoming tasks:", error);
    throw error;
  }
};

getUsers();

export default users;
