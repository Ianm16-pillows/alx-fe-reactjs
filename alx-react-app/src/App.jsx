import React from 'react'; // optional in React 18, but good for clarity
import WelcomeMessage from './components/WelcomeMessage';
import UserProfile from './components/UserProfile';

function App() {
  const user = {
    name: "Klaus",
    age: 28,
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
