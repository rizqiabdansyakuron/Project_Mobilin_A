import axios from "axios";

// Versi dengan ENV (aktifkan jika mau pakai .env file)
const API_URL = import.meta.env.VITE_SUPABASE_URL
  ? `${import.meta.env.VITE_SUPABASE_URL}/rest/v1/test_drive`
  : "https://mcqpydwobertlmojvfik.supabase.co/rest/v1/test_drive";

const API_KEY =
  import.meta.env.VITE_SUPABASE_API_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1jcXB5ZHdvYmVydGxtb2p2ZmlrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkyODMwMzIsImV4cCI6MjA2NDg1OTAzMn0.60ZfXkpGvfDn1Gm5_52X9SvHSv9G5mjqsiSDb0xDCvY";

const headers = {
  apikey: API_KEY,
  Authorization: `Bearer ${API_KEY}`,
  "Content-Type": "application/json",
};

export const testDriveAPI = {
  async fetch() {
    try {
      const response = await axios.get(API_URL, { headers });
      return response.data;
    } catch (err) {
      console.error("Gagal fetch test drive:", err.response?.data || err);
      throw err;
    }
  },

  async fetchById(id) {
    try {
      const response = await axios.get(`${API_URL}?id_test_drive=eq.${id}`, {
        headers,
      });
      return response.data.length > 0 ? response.data[0] : null;
    } catch (err) {
      console.error("Gagal fetch test drive by ID:", err.response?.data || err);
      throw err;
    }
  },

  async create(data) {
    try {
      // Supabase REST API expects array of objects
      const response = await axios.post(API_URL, [data], { headers });
      return response.data;
    } catch (err) {
      console.error("Gagal tambah test drive:", err.response?.data || err);
      throw err;
    }
  },

  async delete(id) {
    try {
      await axios.delete(`${API_URL}?id_test_drive=eq.${id}`, { headers });
    } catch (err) {
      console.error("Gagal hapus test drive:", err.response?.data || err);
      throw err;
    }
  },

  async edit(id, data) {
    try {
      const response = await axios.patch(
        `${API_URL}?id_test_drive=eq.${id}`,
        data,
        { headers }
      );
      return response.data;
    } catch (err) {
      console.error("Gagal edit test drive:", err.response?.data || err);
      throw err;
    }
  },
};
