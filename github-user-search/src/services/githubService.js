import axios from "axios";

const BASE_URL = "https://api.github.com";

export const searchUsers = async (query) => {
  try {
    const res = await axios.get(`${BASE_URL}/search/users`, {
      params: { q: query },
      headers: {
        Authorization: import.meta.env.VITE_APP_GITHUB_API_KEY
          ? `token ${import.meta.env.VITE_APP_GITHUB_API_KEY}`
          : undefined,
      },
    });
    return res.data.items;
  } catch (err) {
    console.error("GitHub API Error:", err);
    return [];
  }
};
