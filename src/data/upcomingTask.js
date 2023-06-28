import axios from "axios";

export let upcomingTask = null;

const getUpcomingTask = async () => {
  try {
    const response = await axios.get("http://localhost:3000/tasks");
    upcomingTask = response.data;
  } catch (error) {
    console.error("Error retrieving upcoming tasks:", error);
    throw error;
  }
};

getUpcomingTask();

export default upcomingTask;
