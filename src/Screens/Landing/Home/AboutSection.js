import React from 'react'; 
import '../styles/AboutSection.scss'; 

//I should probably look into getting some kind of visuals for this section.
//Maybe throw up a picture of me, and pictures of the girls. 

const AboutSection = () => {

    const AboutMeTitle = "Hello, My name is Jacob Vig. Welcome to my site!";
    const AboutMeParagraph = "I have been working as a Front End Web Developer since 2016. I have experience building websites from scratch as well as building them within a cms. I love technology and building beautiful websites. Maybe one day I can build one for you.";
    const AboutMeSkills = [
        {
            type: "Languages",
            skills: ["HTML", "CSS", "Javascript", "Classic ASP", "VB Script", "PHP"]
        },
        {
            type: "Software",
            skills: ["Figma", "Adobe Products", "Microsoft Office", "Postman", "HubSpot", "Ceros", "Markup"]
        },
        {
            type: "Web Technologies",
            skills: ["JQuery", "SASS", "Webpack", "AngularJS", "ReactJS", "Bootstrap", "Grunt", "Gulp", "Mustache", "Jest", "Storybook"]
        },
        {
            type: "Database",
            skills: ["Microsoft SQL Server"]
        },
        {
            type: "Version Control",
            skills: ["GIT", "SVN", "TFS"]
        },
        {
            type: "Content Management Systems",
            skills: ["Wordpress", "Craft", "Sitefinity", "Contember"]
        },
        {
            type: "Content Delivery Networks",
            skills: ["Fastly"]
        },
        {
            type: "ECommerce",
            skills: ["WooCommerce, Custom Solutions"]
        },
        {
            type: "SEO",
            skills: ["Google Analytics", "Google Search Console", "Ahrefs", "MOZ"]
        },
        {
            type: "Hosting/DNS Services",
            skills: ["Digital Ocean", "Pantheon", "Webair", "GoDaddy", "Network Solutions", "Vercel"]
        },
        {
            type: "Development Enviroments",
            skills: ["Agile", "Test Driven Development"]
        },

    ];

    const SkillsOutput = AboutMeSkills.map((SkillGroup, i, arr) => 
        <ul key={i} className="skill-group">
            <li className="skill-group-grouping">
                <p className="skill-group-title">{SkillGroup.type}</p>
                <ul className="skill-group-skill-list">
                    {SkillGroup.skills.map((skill, j, arr) => 
                        <li key={j}><p className="skill-group-skill">{skill}</p></li>
                    )}
                </ul>
            </li>
        </ul>
    );

    const AboutMeFunTitle = "Well now that you know all that stuff, how about a little about my personal life.";
    const AboutMeFunParagraph = "In my free time I spend some of it learning more about my career and I love that, but there is more to me. I enjoy playing video games with my friends and watching anime (I am a nerd, <span className='italics'>shocker</span>). I really enjoy playing discgolf and getting out for some hikes in the woods. I spend time trying new breweries and resturaunts with my lovely significant other. Lastly, I absolutely adore spending time with my two dogs.";

    return (
        <div className="about-me-section">
            <div className="about-me-container">
                <h2 className="about-me-header">{AboutMeTitle}</h2>
                <p className="about-me-paragraph">{AboutMeParagraph}</p>
                <div className="about-me-skills-container">
                    {SkillsOutput}
                </div>
                <h3 className="about-me-fun-header">{AboutMeFunTitle}</h3>
                <p classname="about-me-fun-paragraph">{AboutMeFunParagraph}</p>
            </div>

        </div>
    )

}

export default AboutSection; 
