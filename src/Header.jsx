import { useEffect,useState } from "react";

const Header = () => {
    
    const [color,setColor] = useState(false);
    const changeColor = () => {
        if(window.scrollY >= 1){
            setColor(true);
        }else{
            setColor(false);
        }
    };

    window.addEventListener("scroll",changeColor);

    return(
        <div className={color ? "header header-bg": "header"}>
        
            <nav className="nav-bar">
                <ul className="navigation-list">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About Me</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
                
            <div className="connect"><a href="#contact"> Connect With Me</a></div>
                
        </div>
    );
}
export default Header; 