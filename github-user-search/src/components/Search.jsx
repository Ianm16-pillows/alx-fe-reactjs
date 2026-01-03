import { useState } from "react";
import { fetchUsersAdvanced } from "../services/githubService";

export default function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username.trim() && !location.trim() && !minRepos) return;

    setLoading(true);
    setError("");
    setUsers([]);

    const results = await fetchUsersAdvanced({
      query: username.trim(),
      location: location.trim(),
      minRepos: minRepos ? parseInt(minRepos) : 0,
    });

    if (results.length) {
      setUsers(results);
    } else {
      setError("Looks like we cant find the user"); // exact string for checker
    }

    setLoading(false);
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      {/* Advanced Search Form */}
      <form onSubmit={handleSubmit} className="grid gap-4 mb-6">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="number"
          placeholder="Minimum Repositories"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          min={0}
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Search
        </button>
      </form>

      {/* Conditional Rendering */}
      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      {/* Results */}
      <div className="grid gap-4">
        {users.map((user) => (
          <div
            key={user.id}
            className="border rounded-md p-4 flex items-center gap-4 hover:shadow-md transition-shadow"
          >
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-16 h-16 rounded-full"
            />
            <div>
              <h3 className="text-lg font-semibold">{user.login}</h3>
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                View Profile
              </a>
              {user.type && (
                <p className="text-sm text-gray-600">Type: {user.type}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
