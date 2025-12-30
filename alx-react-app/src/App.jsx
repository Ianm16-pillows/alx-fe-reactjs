function App() {
  const user = {
    name: "Ian Mwambuki",
    age: 25,
    location: "Kenya"
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <WelcomeMessage />
      <UserProfile user={user} />
    </div>
  );
}

export default App;
