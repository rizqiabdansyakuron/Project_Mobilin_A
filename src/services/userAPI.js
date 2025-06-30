// services/userAPI.js
import axios from "axios";

const API_URL = "https://pfviwyqiuwhuxzusyqcp.supabase.co/rest/v1/User";
const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBmdml3eXFpdXdodXh6dXN5cWNwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg5MDc0MTcsImV4cCI6MjA2NDQ4MzQxN30.299BKKbBtM-78nPhkB41ErPj3-87LXKOZnYS3eZChX0";

const headers = {
  apikey: API_KEY,
  Authorization: `Bearer ${API_KEY}`,
  "Content-Type": "application/json",
};

export const userAPI = {
  async fetchAll() {
    const response = await axios.get(API_URL, { headers });
    return response.data;
  },

  async fetchByEmail(email) {
    const response = await axios.get(`${API_URL}?email=ilike.${email}`, {
      headers,
    });
    return response.data.length > 0 ? response.data[0] : null;
  },

  async create(data) {
    const response = await axios.post(API_URL, data, { headers });
    return response.data;
  },

  async delete(id) {
    await axios.delete(`${API_URL}?id=eq.${id}`, { headers });
  },

  async edit(id, data) {
    const response = await axios.patch(`${API_URL}?id=eq.${id}`, data, {
      headers,
    });
    return response.data;
  },
};
