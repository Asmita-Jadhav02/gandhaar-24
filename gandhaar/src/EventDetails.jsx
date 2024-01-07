import React, { useState, useEffect } from 'react';
import TabNav from './components/event_details/tabNav';
import TabContent from './components/event_details/tabContent';
import './eventdetails.css';
import { useParams } from 'react-router-dom';
import ReactDOM from "react-dom";
import Footer from './components/footer/footer';
import EventModal from './components/event_details/eventModal';

const fetchData = async (link) => {
    try {
      const response = await fetch(link);
  
      if (!response.ok) {
        throw new Error(`Network response was not ok. Status: ${response.status} ${response.statusText}`);
      }
  
      const rules = await response.json();
      return rules;
  
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  };

const EventDetails = (props) => {
    const { link_id } = useParams();

    const link = props.data[link_id];

    const [eventData, setEventData] = useState(null);
    const [activeTab, setActiveTab] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [isModalOpen, setIsModalOpen] = useState(false);
    

    useEffect(() => {
        const fetchDataAndSetState = async () => {
            try {
                const data = await fetchData(link);
                setEventData(data);
                setActiveTab(data.tabs[0]);
                setLoading(false);
                setIsModalOpen(true);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        fetchDataAndSetState();

        const handleOutsideClick = (event) => {
            if (event.target.classList.contains('modal-overlay')) {
              setIsModalOpen(false);
            }
        };

        document.addEventListener('click', handleOutsideClick);

        return () => {
            document.removeEventListener('click', handleOutsideClick);
          };
    },[]);

   


    const handleTabChange = (tab) => {
        setActiveTab(tab);
        console.log('changed to', tab);
        console.log(activeTab);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className='event-details-page'>
            {eventData && (
                <>
                <EventModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}></EventModal>
                
                <h1 style={{margin: '0', padding:'5vh'}}><span className="page-title">{eventData.category_title}</span></h1>
                    <TabNav tabs={eventData.tabs} activeTab={activeTab} handleTabChange={handleTabChange} />
                    <TabContent tabs={eventData.tabs} activeTab={activeTab} eventDetails={eventData.details} />
                    <Footer></Footer>

                </>
            )}
        </div>
    );
};

export default EventDetails;

