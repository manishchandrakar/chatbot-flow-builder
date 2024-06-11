import React from 'react';
import './SaveButton.css';

const SaveButton = ({ elements }) => {
  const saveFlow = () => {
    // Logic to save the flow
    console.log('Saved elements:', elements);
    alert('Flow saved!');
  };

  return <button className="save-button" onClick={saveFlow}>Save</button>;
};

export default SaveButton;
