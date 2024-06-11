import React from 'react';
import './SettingsPanel.css';

const SettingsPanel = ({ selectedNode, setElements }) => {
  const handleChange = (event) => {
    const updatedLabel = event.target.value;
    setElements((els) =>
      els.map((el) => {
        if (el.id === selectedNode.id) {
          el.data = { ...el.data, label: updatedLabel };
        }
        return el;
      })
    );
  };

  return (
    <div className="settings-panel">
      {selectedNode && (
        <input
          type="text"
          value={selectedNode.data.label}
          onChange={handleChange}
        />
      )}
    </div>
  );
};

export default SettingsPanel;
