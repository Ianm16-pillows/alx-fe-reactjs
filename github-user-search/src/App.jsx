import { useState } from "react";
import SearchBar from "./components/SearchBar";
import UserCard from "./components/UserCard";
import axios from "axios";

export default function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (query) => {
    setLoading(true);
    try {
      const res = await axios.get(`https://api.github.com/search/users?q=${query}`);
      setUsers(res.data.items);
    } catch (err) {
      console.error("Error fetching users:", err);
      setUsers([]);
    }
    setLoading(false);
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">GitHub User Search</h1>
      <SearchBar onSearch={handleSearch} />
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      )}
    </div>
  );
}
