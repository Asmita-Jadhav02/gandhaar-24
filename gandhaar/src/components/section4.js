import React from "react";
import Carousel from "./section_4/cards";
import './section_4/cards.css';

const Section4 = () => {
    const allItems = [
        {},
        {
            title: 'Groove Galas',
            num: '01',
            image: 'https://i.pinimg.com/736x/ad/51/d1/ad51d1f52f7c44818290d99e2e4cd19f.jpg',
            link_id: "dance",
        },
        {
            title: 'Harmonic Hues',
            num: '02',
            image: 'https://i.pinimg.com/236x/40/6c/97/406c975457d032f5fca81a2aa0d871b6.jpg',
            link_id: "music",
        },
        {
            title: 'Runway Battles',
            num: '03',
            image: 'https://i.pinimg.com/236x/e0/e9/d6/e0e9d6d1e0201a306c5c2e5d3e734ab9.jpg',
            link_id: "fashion",
        },
        {
            title: 'Culinary Carnival',
            num: '04',
            image: 'https://i.pinimg.com/736x/cf/fd/dd/cffddd8897bb8498a7b81eb851aea379.jpg',
            link_id: "culinary",
        },
        {
            title: 'Workshops',
            num: '05',
            image: 'https://i.pinimg.com/736x/d8/61/64/d86164cac882e5fcccae369d684ad135.jpg',
            link_id: "workshops",
        },
        {
            title: 'Creative Showcase',
            num: '06',
            image: 'https://i.pinimg.com/236x/bf/37/25/bf372511d87f66558404efb9907b1ffe.jpg',
            link_id: "artistic",
        },
        {
            title: 'Expression Echoes',
            num: '07',
            image: 'https://i.pinimg.com/736x/79/c7/01/79c701e9027ebfec06501fd0cd027735.jpg',
            link_id: "performing_arts",
        },
        {
            title: 'Theatrical Gatherings',
            num: '08',
            image: 'https://i.pinimg.com/236x/1f/42/5e/1f425e50af2d1d9415da8bb3f09d5c86.jpg',
            link_id: "theater",
        },
        {
            title: 'Body Canvas',
            num: '09',
            image: 'https://i.pinimg.com/736x/a2/d4/f8/a2d4f8d08a26906055e1bf846f592bf7.jpg',
            link_id: "body_canvas",
        },
        {
            title: 'Trivia Troop',
            num: '10',
            image: 'https://images.squarespace-cdn.com/content/v1/532b3fbfe4b0c5a9ade0bc44/1397499480045-6LXKJ4CAJOX4O5LK9I2A/Treasurehuntgame1.jpg?format=1000w',
            link_id: "trivia"
        },
        {
            title: 'Digital Duels',
            num: '11',
            image: 'https://i.pinimg.com/236x/48/68/26/486826b3a17816088ea932d7edbd5f46.jpg',
            link_id: "online_events",
        },
        {}
    ];


    return (
        <>
            <div className="section4">
                <h1>
                    <span className="events-title">
                        Event Categories</span><br></br>
                </h1>
                <Carousel items={allItems}></Carousel>
            </div>
        </>
    )

}

export default Section4