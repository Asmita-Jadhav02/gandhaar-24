import React from "react";
import Carousel from "./section_4/cards";
import './section_4/cards.css';

const Section4 = () => {
    const allItems = [
        {
            title: 'Dance',
            num: '01',
            image: 'https://media.istockphoto.com/id/949299844/it/foto/vista-prospettica-dellesterno-delledificio-contemporaneo.jpg?s=612x612&w=0&k=20&c=_DR1aRHuTEV3EYBJo1ZXq1pF4SgwB9EVWQLaBj4sC5g=',
            link: "https://www.google.com",
        },
        {
            title: 'Music',
            num: '02',
            image: 'https://media.istockphoto.com/id/1150545984/it/foto/palazzo-moderno-di-lusso-con-piscina.jpg?s=612x612&w=0&k=20&c=Pbrai_VGc9tUviMCF1UaBErdS1YGyIVWsD29jzMZwTY=',
            link: "https://www.google.com",
        },
        {
            title: 'Fashion',
            num: '03',
            image: 'https://media.istockphoto.com/id/1214351345/it/foto/guardando-direttamente-lo-skyline-del-quartiere-finanziario-nel-centro-di-londra-immagine-di.jpg?s=612x612&w=0&k=20&c=oNNbPzPvcQ-4RA6AeatNIxHQIafBiXmDRtUUY0Ska-I=',
            link: "https://www.google.com",
        },
        {
            title: 'Culinary',
            num: '04',
            image: 'https://media.istockphoto.com/id/904390980/it/foto/foto-di-architettura-contemporanea-astratta.jpg?s=612x612&w=0&k=20&c=_P4Wmx5nq5MeDuimpNklKCBlrLovmCyd9lfiMKeJZDs=',
            link: "https://www.google.com",
        },
        {
            title: 'Workshops',
            num: '05',
            image: 'https://media.istockphoto.com/id/130408311/it/foto/piscina-allesterno-della-casa-moderna-al-crepuscolo.jpg?s=612x612&w=0&k=20&c=ZoVjx7uDjoHKmpM1ayW6UR1SQOoYh_xx-QMG_qeOYs0=',
            link: "https://www.google.com",
        },
        {
            title: 'Artistic',
            num: '06',
            image: 'https://media.istockphoto.com/id/1299954175/it/foto/villa-cubica-moderna.jpg?s=612x612&w=0&k=20&c=DhGhb3c1E3DW_fbrWJ_R_Zh0Lbwu6syFeRLsKlZ9no8=',
            link: "https://www.google.com",
        },
        {
            title: 'Performing Arts',
            num: '07',
            image: 'https://media.istockphoto.com/id/926689776/it/foto/vista-ad-angolo-basso-dei-grattacieli-di-new-york.jpg?s=612x612&w=0&k=20&c=DmEB0Ty7ZwDnBoU5SuA8FNevOp4G1UcECw5aS4vA9A8=',
            link: "https://www.google.com",
        },
        {
            title: 'Theater',
            num: '08',
            image: 'https://media.istockphoto.com/id/1191376167/it/foto/villa-dellisola.jpg?s=612x612&w=0&k=20&c=PKslWo4FdbjinohKQlK_oWL34jqAsnzMTdy2bxEAf-I=',
            link: "https://www.google.com",
        },
        {
            title: 'Body Canvas',
            num: '09',
            image: 'https://media.istockphoto.com/id/184316397/it/foto/londra-edifici-aziendali.jpg?s=612x612&w=0&k=20&c=XqrRxEPzFnwRFk7PQrCiu9-FPfCTPyMe5BKKaxYXCs8=',
            link: "https://www.google.com",
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