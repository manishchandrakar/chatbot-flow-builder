import React from 'react';
import './NodesPanel.css';

const NodesPanel = ({ onDragStart }) => {
  return (
    <div className="nodes-panel">
      <div
        className="node"
        onDragStart={(event) => onDragStart(event, 'text')}
        draggable
      >
        Text Node
      </div>
    </div>
  );
};

export default NodesPanel;
