import React, { useRef, useEffect } from 'react';

const TabNav = ({ tabs, activeTab, handleTabChange }) => {
  const tabMenuRef = useRef(null);

  useEffect(() => {
    const btnLeft = document.querySelector('.left-btn');
    const btnRight = document.querySelector('.right-btn');
    const tabMenu = tabMenuRef.current;

    const iconVisibility = () => {
      let scrollLeftValue = Math.ceil(tabMenu.scrollLeft);
      let scrollableWidth = tabMenu.scrollWidth - tabMenu.clientWidth;

      btnLeft.style.display = scrollLeftValue > 0 ? 'block' : 'none';
      btnRight.style.display = scrollableWidth > scrollLeftValue ? 'block' : 'none';
    };

    const handleScrollRight = () => {
      tabMenu.scrollLeft += 150;
      setTimeout(() => iconVisibility(), 50);
    };

    const handleScrollLeft = () => {
      tabMenu.scrollLeft -= 150;
      setTimeout(() => iconVisibility(), 50);
    };

    btnRight.addEventListener('click', handleScrollRight);
    btnLeft.addEventListener('click', handleScrollLeft);

    window.onload = () => {
      btnRight.style.display =
        tabMenu.scrollWidth > tabMenu.clientWidth || tabMenu.scrollWidth >= window.innerWidth
          ? 'block'
          : 'none';
      btnLeft.style.display = tabMenu.scrollWidth >= window.innerWidth ? '' : 'none';
    };

    window.onresize = () => {
      btnRight.style.display =
        tabMenu.scrollWidth > tabMenu.clientWidth || tabMenu.scrollWidth >= window.innerWidth
          ? 'block'
          : 'none';
      btnLeft.style.display = tabMenu.scrollWidth >= window.innerWidth ? '' : 'none';

      let scrollLeftValue = Math.round(tabMenu.scrollLeft);
      btnLeft.style.display = scrollLeftValue > 0 ? 'block' : 'none';
    };

    let activeDrag = false;

    tabMenu.addEventListener('mousemove', (drag) => {
      if (!activeDrag) return;
      tabMenu.scrollLeft -= drag.movementX;
      iconVisibility();

      tabMenu.classList.add('dragging');
    });

    document.addEventListener('mouseup', () => {
      activeDrag = false;
      tabMenu.classList.remove('dragging');
    });

    tabMenu.addEventListener('mousedown', () => {
      activeDrag = true;
    });

    return () => {
      btnRight.removeEventListener('click', handleScrollRight);
      btnLeft.removeEventListener('click', handleScrollLeft);
    };
  }, []);

  const tab_Nav = (tabBtnClick) => {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabs = document.querySelectorAll('.tab');

    tabBtns.forEach((tabBtn) => {
      tabBtn.classList.remove('active');
    });

    tabs.forEach((tab) => {
      tab.classList.remove('active');
    });

    tabBtns[tabBtnClick].classList.add('active');
    tabs[tabBtnClick].classList.add('active');
  };

  return (
    <div className="tab-nav-bar">
      <div className="tab-navigation">
        <div className="left-btn" onClick={() => tabMenuRef.current.scrollLeft -= 150}>
          <ion-icon name="chevron-back-outline"></ion-icon>
        </div>
        <div className="right-btn" onClick={() => tabMenuRef.current.scrollLeft += 150}>
          <ion-icon className="right-btn" name="chevron-forward-outline"></ion-icon>
        </div>
        <ul className="tab-menu" ref={tabMenuRef}>
          {tabs.map((tab, index) => (
            <li
              key={index}
              className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
              onClick={() => {
                handleTabChange(tab);
                tab_Nav(index);
              }}
            >
              {tab}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TabNav;
