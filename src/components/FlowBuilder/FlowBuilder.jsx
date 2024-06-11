import React, { useState, useCallback } from 'react';
import ReactFlow, { addEdge, Background, Controls } from 'react-flow-renderer';
import NodesPanel from '../NodesPanel/NodesPanel';
import SettingsPanel from '../SettingsPanel/SettingsPanel';
import SaveButton from '../SaveButton/SaveButton';
import './FlowBuilder.css';

const FlowBuilder = () => {
  const [elements, setElements] = useState([]);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const [selectedNode, setSelectedNode] = useState(null);

  const onConnect = (params) => setElements((els) => addEdge(params, els));

  const onLoad = (_reactFlowInstance) => {
    setReactFlowInstance(_reactFlowInstance);
    _reactFlowInstance.fitView();
  };

  const onElementClick = (event, element) => {
    setSelectedNode(element);
  };

  const onDragOver = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  };

  const onDrop = (event) => {
    event.preventDefault();

    const reactFlowBounds = reactFlowInstance.project({
      x: event.clientX - reactFlowInstance.getViewport().x,
      y: event.clientY - reactFlowInstance.getViewport().y,
    });

    const newNode = {
      id: `${+new Date()}`,
      type: 'default',
      position: reactFlowBounds,
      data: { label: 'New Node' },
    };

    setElements((es) => es.concat(newNode));
  };

  return (
    <div className="flow-builder">
      <NodesPanel />
      <div className="react-flow-wrapper" style={{ flex: 1 }}>
        <ReactFlow
          elements={elements}
          onConnect={onConnect}
          onLoad={onLoad}
          onDrop={onDrop}
          onDragOver={onDragOver}
          onElementClick={onElementClick}
        >
          <Background />
          <Controls />
        </ReactFlow>
      </div>
      <SettingsPanel selectedNode={selectedNode} setElements={setElements} />
      <SaveButton elements={elements} />
    </div>
  );
};

export default FlowBuilder;
