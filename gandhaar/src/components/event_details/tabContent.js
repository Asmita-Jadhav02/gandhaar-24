import React from 'react';

const TabContent = ({ tabs, activeTab, eventDetails }) => {
    console.log('in Tab content',activeTab);
    const details = eventDetails[activeTab];
  const { title, teamSize, participants, date, venue, time, coordinators, registration_link, overview, rules } = details;
  console.log(details);

  return (
    <div className="tab-content">
      
      {tabs.map((tab, index) => (
        <div key={index} className={`tab ${activeTab === tab ? 'active' : ''}`}>
          <h3 className="event-title">{title}</h3>
          <div className="row">
            <div className="left-column">
              {/* <div className="data-card register-button"><a href={registration_link}>Register &#x2192;</a></div> */}
            <div className="data-card overview">
                <div className="data-title">Description
                  <div className="data">
                    {overview}
                  </div>
                </div>
              </div>
              <div className="data-card">
                <div className='details-title'>Details</div>
                <div className="data-title">Team Size :
                  <div className="data">{teamSize}</div>
                </div>
                <div className="data-title">Participants:
                  <div className="data">{participants}</div>
                </div>
                <div className="data-title">Date:
                  <div className="data">{date}</div>
                </div>
                <div className="data-title">Venue:
                  <div className="data">{venue}</div>
                </div>
                <div className="data-title">Time:
                  <div className="data">{time}</div>
                </div>
              </div>
              <div className="data-card event-co-ord">
                <div className="data-title">Event Co-ordinators
                  <div className="data">
                    <ol>
                      {coordinators.map((coordinator, index) => (
                        <li key={index}>{coordinator.name}
                          <ul>
                            <li>{coordinator.contact}</li>
                          </ul>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div className="right-column">
              <div className="info">
                <div className="rulebook"><h2>Rulebook</h2></div>
                <div className="rules">
                  <ol>
                    {rules.map((rule, index) => (
                      <li key={index}> <div dangerouslySetInnerHTML={{__html: rule}}></div></li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TabContent;
