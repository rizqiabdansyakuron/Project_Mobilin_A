// src/api/lowongan.js
import axios from "axios";

const API_URL = "https://mcqpydwobertlmojvfik.supabase.co/rest/v1/lowongan";
const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1jcXB5ZHdvYmVydGxtb2p2ZmlrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkyODMwMzIsImV4cCI6MjA2NDg1OTAzMn0.60ZfXkpGvfDn1Gm5_52X9SvHSv9G5mjqsiSDb0xDCvY";

const headers = {
  apikey: API_KEY,
  Authorization: `Bearer ${API_KEY}`,
  "Content-Type": "application/json",
};

export const lowonganAPI = {
  // Ambil semua lowongan
  async fetch() {
    try {
      const response = await axios.get(API_URL, { headers });
      return response.data;
    } catch (error) {
      console.error("Gagal mengambil data lowongan:", error);
      return [];
    }
  },

  // Ambil data lowongan berdasarkan ID
  async fetchById(id) {
    try {
      const response = await axios.get(`${API_URL}?id_lowongan=eq.${id}&select=*`, {
        headers,
      });
      return response.data.length > 0 ? response.data[0] : null;
    } catch (error) {
      console.error(`Gagal mengambil lowongan dengan ID ${id}:`, error);
      return null;
    }
  },

  // Buat data lowongan baru
  async create(data) {
    try {
      const response = await axios.post(API_URL, data, { headers });
      return response.data;
    } catch (error) {
      console.error("Gagal membuat lowongan baru:", error);
      throw error;
    }
  },

  // Hapus data lowongan berdasarkan ID
  async delete(id) {
    try {
      await axios.delete(`${API_URL}?id=eq.${id}`, { headers });
    } catch (error) {
      console.error(`Gagal menghapus lowongan dengan ID ${id}:`, error);
      throw error;
    }
  },

  // Edit/update data lowongan berdasarkan ID
  async edit(id, data) {
    try {
      const response = await axios.patch(`${API_URL}?id=eq.${id}`, data, {
        headers,
      });
      return response.data;
    } catch (error) {
      console.error(`Gagal mengedit lowongan dengan ID ${id}:`, error);
      throw error;
    }
  },
};
