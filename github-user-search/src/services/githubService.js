import axios from "axios";

/**
 * Fetch GitHub user data by username
 * @param {string} username
 * @returns {object|null}
 */
export const fetchUserData = async (username) => {
  try {
    const res = await axios.get(`https://api.github.com/users/${username}`);
    return res.data;
  } catch (err) {
    console.error("GitHub API Error:", err);
    return null; // Return null if not found
  }
};
