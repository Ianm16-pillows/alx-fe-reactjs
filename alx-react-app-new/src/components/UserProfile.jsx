import React from 'react';

function UserProfile(props) {
  return (
    <div style={{
      border: '1px solid gray',
      borderRadius: '10px',
      padding: '15px',
      margin: '15px',
      backgroundColor: '#f9f9f9',
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ color: 'blue', fontSize: '1.5rem' }}>{props.name}</h2>
      <p>Age: <span style={{ fontWeight: 'bold' }}>{props.age}</span></p>
      <p>Bio: {props.bio}</p>
    </div>
  );
}

export default UserProfile;
