import axios from "axios";
import API_URL from "@/constants";

export let upcomingTask = null;

const getUpcomingTask = async () => {
  try {
    const response = await axios.get(`${API_URL}/tasks`);
    upcomingTask = response.data;
  } catch (error) {
    console.error("Error retrieving upcoming tasks:", error);
    throw error;
  }
};

getUpcomingTask();

export default upcomingTask;
