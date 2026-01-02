import { useState } from "react";

const RegistrationForm = () => {
  const [username, setUsername] = useState("Ian Mwambuki");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};

    if (!email) {
      newErrors.email = "Email is required";
    }

    if (!password) {
      newErrors.password = "Password is required";
    }

    if (!username) {
      newErrors.username = "Username is required";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    console.log({
      username,
      email,
      password,
    });

    alert("User registered successfully 🚀");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register (Controlled Components)</h2>

      {errors.username && <p style={{ color: "red" }}>{errors.username}</p>}
      {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
      {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}

      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
