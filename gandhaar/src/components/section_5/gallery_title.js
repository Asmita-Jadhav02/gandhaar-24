import React from "react";
import './gallery_title.css';

const GalleryTitle = () => {
    return (
        <div className='gallery_title' style={{height:'10vh'}}>
            <h1 style={{margin:'0'}}>
        <span className="g_text" >A Trip </span>
        <span>Down The</span>
        <span className="g_text" > Memory Lane </span>

    </h1>
        </div>
    );
}

export default GalleryTitle