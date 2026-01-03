import axios from "axios";

/**
 * Fetch GitHub user data by username (basic)
 */
export const fetchUserData = async (username) => {
  try {
    const res = await axios.get(`https://api.github.com/users/${username}`);
    return res.data;
  } catch (err) {
    console.error("GitHub API Error:", err);
    return null;
  }
};

/**
 * Search GitHub users with advanced criteria
 * @param {string} query - username query
 * @param {string} location - optional location filter
 * @param {number} minRepos - optional minimum public repos
 */
export const fetchUsersAdvanced = async ({ query, location, minRepos }) => {
  try {
    // Construct GitHub Search API query
    let q = query || "";
    if (location) q += `+location:${location}`;
    if (minRepos) q += `+repos:>=${minRepos}`;

    const res = await axios.get(`https://api.github.com/search/users?q=${q}`);
    return res.data.items;
  } catch (err) {
    console.error("GitHub Advanced Search API Error:", err);
    return [];
  }
};
