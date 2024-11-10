import React from 'react';
import './Grid.css'; // Import the CSS file for styling

const Grid = () => {
  return (
    <div className="grid-container">
      {[...Array(30)].map((_, index) => (
        <div key={index} className="grid-box">
        </div>
      ))}
    </div>
  );
};

export default Grid;