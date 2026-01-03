import axios from "axios";

/**
 * Fetch user data from GitHub API.
 * @param {string} username - GitHub username to search
 * @returns {object|null} - user data or null if not found
 */
export const fetchUserData = async (username) => {
  try {
    const res = await axios.get(`https://api.github.com/users/${username}`);
    return res.data;
  } catch (err) {
    console.error("GitHub API Error:", err);
    return null; // Return null if user not found or error
  }
};

