// DraggableElement.js
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import './KnowledgeSection/KnowledgeElements.css';

const DraggableElement = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    setIsDragging(true);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  return (
    <>
      <div
        className={`mask ${isDragging ? 'lit' : ''}`}
        style={{
          top: position.y,
          left: position.x,
        }}
      />
      <motion.div
        className={`draggable-element ${isDragging ? 'lit' : ''}`}
        style={{
          top: position.y,
          left: position.x,
        }}
        drag
        dragElastic={0.2}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={() => setIsDragging(false)}
        onMouseDown={handleMouseDown}
      />
    </>
  );
};

export default DraggableElement;
