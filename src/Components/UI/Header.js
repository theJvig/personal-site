import "./styles/Header.scss"
import logo from "../Images/Logos/JV - Dev and Design Logo.png"; 

const Header = () => {

    const Navigation = [
        {
            title: "About",
            link: ""
        },
        {
            title: "My Skills",
            link: ""
        },
        {
            title: "Experience",
            link: ""
        },
        {
            title: "Contact",
            link: ""
        }
    ]; 

    const NavOutput = Navigation.map((nav,i,arr) => 
        <li className="navigation-list-items">
            <a href={nav.link} className="code-array-word">"{nav.title}"
            {i !== arr.length - 1 ? <span>,</span> : false}
            </a>
        </li>
    );
    return(
        <div className="header">
            <div className="header-content container">
                <div className="logo">
                    <a className="logo-link" href="/">
                        <img className="logo-img" src={logo} alt="J V logo" /> 
                    </a>
                </div>
                <div className="navigation-container">
                    <p className="code-snippet">let <span className="variable-color">Navigation</span> = [</p>
                    <ul className="navigation">
                        {NavOutput}
                    </ul>
                    <p className="code-snippet">];</p>
                </div>
            </div>
        </div>
    );
}

export default Header; 