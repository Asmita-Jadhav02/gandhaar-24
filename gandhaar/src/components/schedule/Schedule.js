// Schedule.jsx
import React, { useState } from 'react';
import './Schedule.css'; // Import the CSS file

const Schedule = () => {
  const [selectedTab, setSelectedTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setSelectedTab(tabNumber);
  };

  const getImageForTab = () => {
    // You can modify this function to return different images based on the selectedTab value
    switch (selectedTab) {
      case 1:
        return './scheduleimages/schedule-day-1.jpg';
      case 2:
        return './scheduleimages/schedule-day-2.jpg';
      case 3:
        return './scheduleimages/schedule-day-3.jpg';
      case 4:
        return './scheduleimages/schedule-day-4.jpg';
      case 5:
        return './scheduleimages/schedule-day-5.jpg';
      default:
        return './scheduleimages/schedule-day-1.jpg';
    }
  };

  return (
    <div className="schedule-container">
      {/* Left side - Tabs/Buttons */}
      <div className="tabs-container">
        {[1, 2, 3, 4, 5].map((tabNumber) => (
          <button
            key={tabNumber}
            onClick={() => handleTabClick(tabNumber)}
            className={`tab-button ${selectedTab === tabNumber ? 'active' : ''}`}
          >
            Day {tabNumber}
          </button>
        ))}
      </div>

      {/* Right side - Display Image */}
      <div className="image-container">
        <img
          src={getImageForTab()}
          alt={`Image for Tab ${selectedTab}`}
        />
      </div>
    </div>
  );
};

export default Schedule;
