import React from 'react'; 
import Landing from './Home/Landing';
import AboutSection from './Home/AboutSection';
import Contact from './Home/Contact';
import './styles/Home.scss'

const Home = () => {

    return (
        <div className="portfolio">
            <Landing/>
            <AboutSection/>
            <Contact/>
        </div>
    )
}

export default Home; 