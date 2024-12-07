"use client";
import React, { useState } from 'react';
import './style.Accordion.css';

const Accordion = ({ items }) => {

  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div>
      <div className="accordion">
        {items.map((item, index) => (
          <div key={index} className={`accordion-item ${index === activeIndex ? 'active' : ''}`}>
            <div className="accordion-title" onClick={() => handleClick(index)}>
              {item.name || item.title}
              <span className='text-md text-primary'>{index === activeIndex ? '-' : '+'}</span>
            </div>
            <div className="accordion-content">
              {index === activeIndex && <p className='font-secondary'>{item.description || item.content}</p>}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Accordion;