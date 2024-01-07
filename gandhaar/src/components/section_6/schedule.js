import React, { useState, useEffect } from 'react';
import './schedule.css'; // Import the CSS file

const Schedule = () => {
    const [selectedTab, setSelectedTab] = useState(1);
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);
    const [isImageActive, setIsImageActive] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleTabClick = (tabNumber) => {
        setSelectedTab(tabNumber);
        setIsImageActive(true);
    };

    const handleImageLoad = () => {
        setIsImageActive(false);
    };

    const getImageForTab = () => {
        if (isSmallScreen) {
            // Return different images for smaller screens
            switch (selectedTab) {
                case 1:
                    return 'https://raw.githubusercontent.com/Asmita-Jadhav02/gandhaar-imgs/main/schedule/day1.png'; 
                case 2:
                    return 'https://raw.githubusercontent.com/Asmita-Jadhav02/gandhaar-imgs/main/schedule/day2.png';
                case 3:
                    return 'https://raw.githubusercontent.com/Asmita-Jadhav02/gandhaar-imgs/main/schedule/day3.png';
                case 4:
                    return 'https://raw.githubusercontent.com/Asmita-Jadhav02/gandhaar-imgs/main/schedule/day4.png';
                default:
                    return 'https://raw.githubusercontent.com/Asmita-Jadhav02/gandhaar-imgs/main/schedule/day1.png';
            }
        } else {
            // Return regular images for larger screens
            switch (selectedTab) {
                case 1:
                    return 'https://raw.githubusercontent.com/Asmita-Jadhav02/gandhaar-imgs/main/schedule/schedule-day-1.png';
                case 2:
                    return 'https://raw.githubusercontent.com/Asmita-Jadhav02/gandhaar-imgs/main/schedule/schedule-day-2.png';
                case 3:
                    return 'https://raw.githubusercontent.com/Asmita-Jadhav02/gandhaar-imgs/main/schedule/schedule-day-3.png';
                case 4:
                    return 'https://raw.githubusercontent.com/Asmita-Jadhav02/gandhaar-imgs/main/schedule/schedule-day-4.png';
                default:
                    return 'https://raw.githubusercontent.com/Asmita-Jadhav02/gandhaar-imgs/main/schedule/schedule-day-1.png';
            }
        }
    };

    return (
        <div className="schedule-container">
            {/* Left side - Tabs/Buttons */}
            <div className="tabs-container">
                {[1, 2, 3, 4].map((tabNumber) => (
                    <button
                        key={tabNumber}
                        onClick={() => handleTabClick(tabNumber)}
                        className={`tab-button ${selectedTab === tabNumber ? 'active' : ''}`}
          >
                Day {tabNumber}
            </button>
        ))}
        </div>

      {/* Right side - Display Image */ }
    <div className={`image-container ${isImageActive ? 'active' : ''}`}>
        <img
            src={getImageForTab()}
            alt={`Image for Tab ${selectedTab}`}
            onLoad={handleImageLoad}
        />
      </div >
    </div >
  );
};

export default Schedule;