import React, { Component } from 'react';
import Display from '../design/Display';
import Setting from '../design/Setting';
import { storage } from '../../config/fireConfig';

class Dashboard extends Component {

    state = {
        tshirtColor: 'black',
        upperText: 'This is upper text',
        lowerText: 'This is lower text',
        memeImg: '',
        url: '',
        textSize: 28,
        textColor: 'white'
    }
    handletshirtcolor = (e) => {
        this.setState({tshirtColor: e.target.id});
    }
    handleupperText = (e) => {
        this.setState({upperText: e.target.value})
    }
    handlelowerText = (e) => {
        this.setState({lowerText: e.target.value})
    }
    // Image upload
    handleImageUpload = (e) => {
        if(e.target.files[0]){
            const image = (e.target.files[0]);
            const uploadTask = storage.ref(`images/${image.name}`).put(image);
            uploadTask.on('state_changed',
            (snapshot) => {
                console.log(snapshot);
            },
            (error) => {
                console.log(error)
            },
            () => {
                storage.ref('images').child(image.name).getDownloadURL().then(url => {
                    this.setState({url});
                })
            }
            )
        }
    }
    // Text size
    handleTextSize = (e) => {
        this.setState({textSize: e.target.value})
    }
    formatText(){
        const size = this.state.textSize
        return parseInt(size);
    }
    // Text Color
    handleTextColor = (e) => {
        this.setState({textColor: e.target.value})
    }

    render() {
        return (
            <div className="container py-4">
               <div className="row">
                   <div className="col-lg-8">
                        <Display 
                        display={this.state}
                        textFormat={this.formatText()}
                        />
                   </div>
                   <div className="col-lg-4">     
                        <Setting 
                        color={this.handletshirtcolor}
                        upperText={this.handleupperText}
                        lowerText={this.handlelowerText}
                        uploadImage={this.handleImageUpload}
                        textSize={this.handleTextSize}
                        textColor={this.handleTextColor}
                        />
                   </div>
               </div>
            </div>
        )
    }
}
export default Dashboard
