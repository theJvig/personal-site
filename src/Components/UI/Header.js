import "./styles/Header.scss"

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
                    Placeholder
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