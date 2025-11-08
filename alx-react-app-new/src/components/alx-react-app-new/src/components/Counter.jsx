import React from 'react';
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const containerStyle = {
    border: '1px solid #ddd',
    padding: '16px',
    borderRadius: '8px',
    width: '260px',
    margin: '16px auto',
    textAlign: 'center',
    backgroundColor: '#fff'
  };

  const countStyle = {
    fontSize: '2rem',
    margin: '8px 0',
    color: '#222'
  };

  const btnStyle = {
    padding: '8px 12px',
    margin: '6px',
    borderRadius: '6px',
    border: 'none',
    cursor: 'pointer'
  };

  return (
    <div style={containerStyle}>
      <h3>Simple Counter</h3>
      <p style={countStyle}>Current Count: {count}</p>
      <div>
        <button
          style={{ ...btnStyle, backgroundColor: '#2d9cdb', color: 'white' }}
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>
        <button
          style={{ ...btnStyle, backgroundColor: '#f6c85f', color: '#222' }}
          onClick={() => setCount(count - 1)}
        >
          Decrement
        </button>
        <button
          style={{ ...btnStyle, backgroundColor: '#e76f51', color: 'white' }}
          onClick={() => setCount(0)}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
