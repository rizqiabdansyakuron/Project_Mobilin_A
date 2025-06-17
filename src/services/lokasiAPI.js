// src/services/lokasiAPI.js
import axios from "axios";

const API_URL = "https://mcqpydwobertlmojvfik.supabase.co/rest/v1/lokasi";
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1jcXB5ZHdvYmVydGxtb2p2ZmlrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkyODMwMzIsImV4cCI6MjA2NDg1OTAzMn0.60ZfXkpGvfDn1Gm5_52X9SvHSv9G5mjqsiSDb0xDCvY";

const headers = {
  apikey: API_KEY,
  Authorization: `Bearer ${API_KEY}`,
  "Content-Type": "application/json",
};

export const lokasiAPI = {
  fetch: async () => {
    const response = await axios.get(API_URL, { headers });
    return response.data;
  },

  create: async (data) => {
    const response = await axios.post(API_URL, data, { headers });
    return response.data;
  },

  delete: async (id) => {
    const response = await axios.delete(`${API_URL}?id_lokasi=eq.${id}`, {
      headers,
    });
    return response.data;
  },

  edit: async (id, data) => {
    const response = await axios.patch(`${API_URL}?id_lokasi=eq.${id}`, data, {
      headers,
    });
    return response.data;
  },
};
