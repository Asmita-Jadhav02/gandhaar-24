import React, { useState, useEffect } from "react";

const fetchData = async () => {
  try {
    const response = await fetch('https://raw.githubusercontent.com/Asmita-Jadhav02/gandhaar-imgs/main/Rules/common_rules.json');

    if (!response.ok) {
      throw new Error(`Network response was not ok. Status: ${response.status} ${response.statusText}`);
    }

    const rules = await response.json();
    console.log(rules);
    return rules;

  } catch (error) {
    console.error('Error fetching data:', error.message);
  }
};

const EventModal = ({isModalOpen, setIsModalOpen}) => { 
    
    const [commonRules, setCommonRules] = useState([]);

  useEffect(() => {
    const fetchRules = async () => {
      const rulesData = await fetchData();
      if (rulesData) {
        setCommonRules(rulesData.rules);
      }
    };

    if (isModalOpen) {
      fetchRules();
    }
  }, [isModalOpen]);
    return (
        <>
        {isModalOpen && (
            <div className="modal-overlay">
              <div className="modal" >
                    <div className="common-rules-title">Common Rules</div>
                    <div className="common-rules">
                    <ol>
                    {commonRules.map((rule, index) => (
                      <li key={index}> <div dangerouslySetInnerHTML={{__html: rule}}></div></li>
                    ))}
                  </ol>
                    </div>
                <button onClick={() => setIsModalOpen(false)}> &times;</button>
              </div>
            </div>
          )}
          </>
    )
}

export default EventModal