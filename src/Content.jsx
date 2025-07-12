
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLinkedin , faGithub} from "@fortawesome/free-brands-svg-icons";

const Content = () => {
    return(
        <div className="home">
            <div className="home-content">
                <h1 className="home-content-heading text-display">
                    Hi, It's <span className="gradient-text" data-text="Kavin Balaji">Kavin Balaji</span>
                </h1>
                <h3 className="home-text text-heading-2">
                    I'm a <span className="word-switch">
                        <span className="word gradient-text" data-text="Web Developer">Web Developer</span>
                        <span className="word gradient-text" data-text="Cloud Enthusiast">Cloud Enthusiast</span>
                        <span className="word gradient-text" data-text="Engineer">Engineer</span>
                    </span>
                </h3>
                <p className="tagline-enhanced text-body-large">
                    Coding with purpose, learning with passion, building for impact.
                </p>

                <div className="resume-icon-container"> 
                    <div className="resume-wrapper">
                        <a href="/PortFolio/Kavin_Balaji_CV.pdf" 
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button className="resume-button-enhanced">
                                <span className="default-text">My Resume</span>
                                <span className="hover-text">Download PDF</span>
                            </button>
                        </a>
                    </div>
                    <div className="social-icons-enhanced">
                        <a href="https://www.linkedin.com/in/kavinbalaji2005/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="social-link linkedin">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a href="https://github.com/kavinbalaji2005" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="social-link github">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content;
