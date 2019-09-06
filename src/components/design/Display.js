import React from 'react';
import './Display.css';

const Display = ({display, textFormat, textColor})=>{
    return(
        <div className="card card-content">
            <div className="img-tshirt text-center">
                <img className="img-responsive"
                 src={`/assets/${display.tshirtColor}.png`}
                 alt="memes design"
                 />
            </div>
            <div className="meme-text text-center">
                <div className="upper-text">
                    <p style={{fontSize: textFormat, color: display.textColor}}>{display.upperText}</p>
                </div>
                <div className="mem-img-size">
                    <img src={`${display.url}` || "/assets/meme.png"} alt="memes design tshirt"/>
                </div>
                <div className="lower-text py-2">
                    <p style={{fontSize: textFormat, color: display.textColor}}>{display.lowerText}</p>
                </div>
            </div>
        </div>
    )
}
export default Display;