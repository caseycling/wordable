import React from 'react';
import './Grid.css'; // Import the CSS file for styling

const Grid = ({captureKeyDown, guess}) => {

  return (
    <div className="grid-container">
      {[...Array(30)].map((_, index) => (
        <input key={index} maxLength="1" className="grid-box" onKeyDown={captureKeyDown}>
            {guess[i]}
        </input>
      ))}
    </div>
  );
};

export default Grid;