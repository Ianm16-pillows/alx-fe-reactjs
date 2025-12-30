import React from 'react';
import WelcomeMessage from './components/WelcomeMessage';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <WelcomeMessage />

      <UserProfile 
        name="Alice" 
        age={25} 
        bio="Loves hiking and photography" 
      />

      <UserProfile 
        name="Klaus" 
        age={28} 
        bio="Learning React at ALX" 
      />
    </div>
  );
}

export default App;
