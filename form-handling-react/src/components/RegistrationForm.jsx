import { useState } from "react";

const RegistrationForm = () => {
  const [username, setUsername] = useState("Ian Mwambuki");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setErrors("Email is required");
      return;
    }

    if (!password) {
      setErrors("Password is required");
      return;
    }

    if (!username) {
      setErrors("Username is required");
      return;
    }

    setErrors("");

    console.log({
      username,
      email,
      password,
    });

    alert("User registered successfully 🚀");
  };

  return (
    <form onSubmit
