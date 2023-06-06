import React from 'react';
import { Slide } from 'react-slideshow-image';
import "../styles/AboutMeSection.scss"; 
import 'react-slideshow-image/dist/styles.css'
import {
    JakeAndBri, 
    JakeBriBachi, 
    JakeBriPeru, 
    JakeAtHPStore, 
    JakeBriWalkDogs, 
    JakeBriZitiUnderTheBridge, 
    JakeCaughtAFoulBall,  
    JakeOnARock, 
    JakeWithZiti, } from '../../../Components/Images/IndexFile';

const slideImages = [
    {
        url: JakeWithZiti,
        caption: "Jake with his best girl Ziti",
        position: "top center"
    },
    {
        url: JakeAndBri,
        caption: "Jake and his Wife Brianna",
        position: "center center"
    },
    {
        url: JakeBriBachi,
        caption: "Jake and Brianna playing bocce",
        position: "top center"
    },
    {
        url: JakeBriPeru,
        caption: "Jake and Brianna in Peru",
        position: "top center"
    }, 
    {
        url: JakeAtHPStore,
        caption: "Jake at the Harry Potter store in NYC",
        position: "top center"
    },
    {
        url: JakeBriWalkDogs,
        caption: "Jake and Brianna walking their dogs",
        position: "center center"
    },
    {
        url: JakeBriZitiUnderTheBridge,
        caption: "Jake and Brianna under a bridge with their dog ziti after getting engaged",
        position: "center center"
    },
    {
        url: JakeCaughtAFoulBall,
        caption: "Jake caught a foul ball at the mets game",
        position: "center center"
    },
    {
        url: JakeOnARock,
        caption: "Jake took Ziti and a foster dog on a walk",
        position: "top center"
    },
];

const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '600px'
};

const buttonStyle = {
    display: "none"
};

const sliderProperties = {
    prevArrow: <button style={{ ...buttonStyle }}></button>,
    nextArrow: <button style={{ ...buttonStyle }}></button>
}


const AboutMeSection = () => {

    const AboutMeFunTitle = "A little about me and my personal life.";
    const AboutMeFunParagraph = "Hello and welcome, you can call me Jake. I am excited for you to be here. I want to tell you a little about myself before we hop into the perfessional. For starters I am a super nerd, I love video games, anime, and all sorts of technology. I have a beautiful partner in life who supports me and is just an overall amazing human and along with our two dogs we have a nice little family. When I am not spending time with them, or absolutely nerding out, I love to play disc golf, go snowboard, or check out new local breweries. Thank you again for stopping by, and I hope you enjoy your time here.";
    
    return (
        <div className="about-me-section">
            <h3 className="about-me-skills-title">ABOUT</h3>
            <div className="about-me-content">
                <h2 className="about-me-fun-header">{AboutMeFunTitle}</h2>
                <p className="about-me-fun-paragraph">{AboutMeFunParagraph}</p>
            </div>
            <div className="about-me-images">
                <div className="slide-container">
                    <Slide {...sliderProperties}>
                    {slideImages.map((slideImage, index)=> (
                        <div key={index}>
                        <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})`, 'backgroundPosition': `${slideImage.position}` }}>
                        </div>
                        </div>
                    ))} 
                    </Slide>
                </div>
            </div>
        </div>
    )

}

export default AboutMeSection; 


