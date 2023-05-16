import React from 'react';
import "../styles/AboutMeSection.scss"; 


const AboutMeSection = () => {

    const AboutMeFunTitle = "A little about me and my personal life.";
    const AboutMeFunParagraph = "Hello and welcome, you can call me Jake. I am excited for you to be here. I want to tell you a little about myself before we hop into the perfessional. For starters I am a super nerd, I love video games, anime, and all sorts of technology. I have a beautiful partner in life who supports me and is just an overall amazing human and along with our two dogs we have a nice little family. When I am not spending time with them, or absolutely nerding out, I love to play disc golf, go snowboard, or check out new local breweries. Thank you again for stopping by, and I hope you enjoy your time here.";
    
    return (
        <div className="about-me-section">
            <div className="about-me-content">
                <h2 className="about-me-fun-header">{AboutMeFunTitle}</h2>
                <p className="about-me-fun-paragraph">{AboutMeFunParagraph}</p>
            </div>
            <div className="about-me-images">

            </div>
        </div>
    )

}

export default AboutMeSection; 


