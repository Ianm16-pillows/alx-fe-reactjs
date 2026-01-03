import { useState } from "react";

const RegistrationForm = () => {
  const [username, setUsername] = useState("Ian Mwambuki");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!username) newErrors.username = "Username required";
    if (!email) newErrors.email = "Email required";
    if (!password) newErrors.password = "Password required";
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      alert(`Registered: ${username}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={username} onChange={(e) => setUsername(e.target.value)} />
      {errors.username && <p>{errors.username}</p>}

      <input value={email} onChange={(e) => setEmail(e.target.value)} />
      {errors.email && <p>{errors.email}</p>}

      <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
      {errors.password && <p>{errors.password}</p>}

      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
