"use client";
import React from 'react';
import './style.Accordion.css';

const InsAccordion = ({ data }) => {

  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="accordion">
      {data.map((item, index) => (
        <div key={index} className={`accordion-item ${index === activeIndex ? 'active' : ''}`}>
          <div className="accordion-title" onClick={() => handleClick(index)}>
            {item.title}
            <span className={`text-md text-primary ${index === activeIndex ? 'insAct' : 'insOff'}`}></span>
          </div>
          <div className="accordion-content">
            {index === activeIndex && <p className='font-secondary'>{item.content}</p>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default InsAccordion;