import React from 'react'; 
import Landing from './Home/Landing';
import AboutMeSection from './Home/AboutMeSection';
import SkillsSection from './Home/SkillsSection';
import Contact from './Home/Contact';
import './styles/Home.scss'

const Home = () => {

    return (
        <div className="portfolio">
            <Landing/>
            <AboutMeSection/>
            <SkillsSection/>
            <Contact/>
        </div>
    )
}

export default Home; 