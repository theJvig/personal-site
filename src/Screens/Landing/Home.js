import React from 'react'; 
import Landing from './Home/Landing';
import AboutSection from './Home/AboutSection';
import './styles/Home.scss'

const Home = () => {

    return (
        <div className="portfolio">
            <Landing/>
            <AboutSection/>
        </div>
    )
}

export default Home; 