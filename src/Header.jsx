import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
    const [color, setColor] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    
    useEffect(() => {
        const changeColor = () => {
            if(window.scrollY >= 1){
                setColor(true);
            } else {
                setColor(false);
            }
        };

        window.addEventListener("scroll", changeColor);
        
        // Cleanup function to remove event listener
        return () => {
            window.removeEventListener("scroll", changeColor);
        };
    }, []);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };

    return(
        <div className={color ? "header header-bg": "header"}>
            <div className="header-brand">
                <span className="logo">KB</span>
            </div>
            
            <nav className="nav-bar">
                <ul className={`navigation-list ${mobileMenuOpen ? 'mobile-menu-open' : ''}`}>
                    <li><a href="#home" onClick={closeMobileMenu}>Home</a></li>
                    <li><a href="#about" onClick={closeMobileMenu}>About Me</a></li>
                    <li><a href="#skills" onClick={closeMobileMenu}>Skills</a></li>
                    <li><a href="#projects" onClick={closeMobileMenu}>Projects</a></li>
                    <li><a href="#contact" onClick={closeMobileMenu}>Contact</a></li>
                </ul>
            </nav>

            <div className="header-actions">
                <ThemeToggle />
                <div className="connect">
                    <a href="#contact">Connect With Me</a>
                </div>
                
                <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
                    <FontAwesomeIcon icon={mobileMenuOpen ? faTimes : faBars} />
                </div>
            </div>
        </div>
    );
}
export default Header; 