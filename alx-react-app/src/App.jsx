import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import WelcomeMessage from './components/WelcomeMessage';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      {/* Task 2 components */}
      <Header />
      <MainContent />
      <Footer />

      {/* Task 1 component */}
      <WelcomeMessage />

      {/* Task 3 components with props */}
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
