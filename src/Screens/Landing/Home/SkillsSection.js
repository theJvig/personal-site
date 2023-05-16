import React from 'react'; 
import '../styles/SkillsSection.scss'; 

//I should probably look into getting some kind of visuals for this section.
//Maybe throw up a picture of me, and pictures of the girls. 

const SkillsSection = () => {

    const AboutMeTitle = "Now for the nitty gritty.";
    const AboutMeParagraph = "I have been working as a Front End Web Developer since 2016. I have experience building websites from scratch as well as building them within a cms. In my professional career I have worked for both software organizations and marketing agencies. These expereinces help grow my appreciation and love for technology. Having experiences in these enviroments has given me the ability to see development from different agnles and allows me to figure out best soltion for the problem. Most importantly my experiences has given me a love for building beautiful websites. Maybe one day I can build one for you.";
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
            skills: ["WooCommerce", "Custom Solutions"]
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

    return (
        <div className="skills-section-section">
            <div className="skills-section-container">
                <h2 className="skills-section-header">{AboutMeTitle}</h2>
                <p className="skills-section-paragraph">{AboutMeParagraph}</p>
                <div className="skills-section-skills-container">
                    <h3 className="skills-section-skills-title">SKILLS</h3>
                    {SkillsOutput}
                </div>
            </div>

        </div>
    )

}

export default SkillsSection; 
