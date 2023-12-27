import React from "react";
import './plane_animate.css'

const PlaneAnimation = () => {
    return (
        <div className="plane_animation">
            <svg className="plane" viewBox="-48 33.52 850.8 233.4">
                <g id="svg-doc">

                    <path id="dottedpath" fill="none" stroke="#FFF" strokeWidth="3" strokeMiterlimit="10" d="M-47,59C38,92 -15,170 47,240C119,314 222,221 159,71C133,11 68,23 81,122C87,141 90,221 171,221C231,193 211.3333,121.6667 230,85C255,34 295,35 320,98C328,176 467,142 459,195C455,209 451,228 424,240C405,247 375,231 382,201C401,159 398,178 416,152C456,107 517,113 521,112C563,113 564,136 595.558,174.34C602.245,186.364 619.958,196.494 631.148,201.34C647.116,208.253 665.272,209.353 680.262,199.395C709.996,178.452 710.33,140.105 692.49,115.237C664.892,76.775 603.826,155.38 664.212,170.79C678.351,174.398 693.669,171.81 707.296,167.298C743.443,155.329 784.748,156.391 801.833,157.513" strokeLinecap="round" strokeDasharray="1.993 6.976"></path>

                    <g id="spaceship">

                        <g id="plane">

                            <path fill="#FFF" stroke="#393027" strokeWidth="2" strokeMiterlimit="10" d="M1.758 11.046l47.598 10.93L58.272 1.69z" strokeLinecap="round" strokeLinejoin="round"></path>

                            <path fill="#FFF" stroke="#393027" strokeWidth="2" strokeMiterlimit="10" d="M1.38 11.086l46.005 34.307 1.97-23.418z" strokeLinecap="round" strokeLinejoin="round"></path>

                            <path fill="#FFF" stroke="#3A3128" strokeWidth="2" strokeMiterlimit="10" d="M49.615 21.527l5.382 8.716-5.81-1.483z" strokeLinecap="round" strokeLinejoin="round"></path>

                            <path fill="#3A3128" d="M22.252 21.247c-.237.145-.533.198-.827.125l-1.37-.333c-.587-.15-.945-.74-.803-1.33.144-.59.736-.95 1.324-.81l1.367.33c.588.14.95.73.805 1.32-.07.29-.256.53-.496.67zm22.513 4.71c-.07.293-.255.527-.493.675-.24.143-.535.198-.827.128L25.64 22.405c-.59-.142-.946-.737-.803-1.325.143-.588.736-.946 1.322-.804l17.8 4.354c.59.147.94.74.8 1.326z"></path>


                            <animateMotion
                                xlinkHref="#spaceship"
                                dur="10s"
                                repeatCount="indefinite"
                                rotate="auto">
                                <mpath xlinkHref="#dottedpath" />
                            </animateMotion >
                        </g>

                    </g>

                </g>
            </svg>
        </div>
    )
}

export default PlaneAnimation