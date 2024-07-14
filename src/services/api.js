import axios from "axios";

const API_URL = "https://api.github.com/repos/Mahmoud-Moghazy/jsonData/contents/db.json";

const fetchData = async () => {
  try {
    const response = await axios.get(API_URL);
    const content = atob(response.data.content);
    const jsonData = JSON.parse(content);
    return jsonData;
  } catch (error) {
    console.error("Error fetching JSON data:", error);
    throw error;
  }
};

export const getCustomers = async () => {
  const data = await fetchData();
  return data.customers;
};

export const getTransactions = async () => {
  const data = await fetchData();
  return data.transactions;
};
