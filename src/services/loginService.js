import axios from "axios";

const baseUrl = "https://prectice-app.onrender.com/api/login";

async function login(credentials) {
  const response = await axios.post(baseUrl, credentials);
  return response.data;
}

export default { login };
