import React from 'react';
import './Display.css'

const Setting =({color, upperText, lowerText, uploadImage, textSize, textColor}) => {
        return (
            <div className="container card bg-light">
                <h3 className="text-center setting-text">Setting</h3>
                <h4 className="tshirt-color-text py-2">Change T-Shirt Color</h4>

                <div className="tshirt-color">
                    <img onClick={color} src="\assets\black.png" alt="memes design" id="black"/>
                    <img onClick={color} src="\assets\blue.png" alt="memes design" id="blue"/>
                    <img onClick={color} src="\assets\grey.png" alt="memes design" id="grey"/>
                    <img onClick={color} src="\assets\red.png" alt="memes design" id="red"/>
                    <img onClick={color} src="\assets\white.png" alt="memes design" id="white"/>
                </div>
                <hr />
                <h4 className="up-low-text">Write Text</h4>
                <input onChange={upperText} type="text" className="form-control form-control-sm mb-2" placeholder="Upper Text"/>
                <input onChange={lowerText} type="text" className="form-control form-control-sm" placeholder="Lower Text"/>
                <hr />
                <h4 className="upload-img">Upload Image</h4>
                <div className="form-group">
                    <input onChange={uploadImage} type="file" className="form-control-file mb-2"/>
                </div>
                <hr />
                <h4 className="chng-text-size">Text Size</h4>
                <input onChange={textSize} type="range" min="0" max="40"/>
                <hr />
                <h4 className="text-color">Text Color</h4>
                <select onChange={textColor} className="form-control form-control-sm mb-2">
                    <option>White</option>
                    <option>Black</option>
                    <option>Red</option>
                    <option>Blue</option>
                </select>
                <hr />
                <button className="btn btn-primary btn-sm mb-2">Save</button>
            </div>
        )
}
export default Setting
