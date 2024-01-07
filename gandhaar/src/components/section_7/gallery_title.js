import React from "react";
import './gallery_title.css';

const GalleryTitle = () => {
    return (
        <div className='gallery_title' style={{ height: '10vh' }}>
            <h1 style={{ margin: '0' }}>
                <span className="g_text" >A Trip </span>
                <span style={{fontSize: '3.5vmax', color: "blanchedalmond", textShadow: '-1px 3px black'}}>Down The</span>
                <span className="g_text" > Memory Lane </span>
            </h1>
        </div>
    );
}

export default GalleryTitle