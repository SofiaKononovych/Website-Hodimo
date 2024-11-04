import React from 'react';
import "../styles/style.css";

const StatsSection = () => {
  return (
    <div className="statistics-section">
      <div className="stat-item">
        <div className="stat-number">000</div>
        <div className="stat-description">людей нам довіряють</div>
      </div>
      <div className="stat-item">
        <div className="stat-number">000</div>
        <div className="stat-description">закладів з нами співпрацюють</div>
      </div>
      <div className="stat-item">
        <div className="stat-number">000</div>
        <div className="stat-description">місяців на ринку</div>
      </div>
    </div>
  );
};

export default StatsSection;
