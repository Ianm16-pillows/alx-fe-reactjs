import React from 'react';

function MainContent() {
  return (
    <main style={{
      padding: '20px',
      backgroundColor: '#eef2f7',
      minHeight: '300px'
    }}>
      <h2 style={{ textAlign: 'center', color: '#333' }}>Top Cities to Visit</h2>
      <ul style={{ listStyleType: 'square', lineHeight: '2' }}>
        <li>Tokyo</li>
        <li>Paris</li>
        <li>Nairobi</li>
        <li>New York</li>
      </ul>
    </main>
  );
}

export default MainContent;
