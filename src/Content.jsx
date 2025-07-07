
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLinkedin , faGithub} from "@fortawesome/free-brands-svg-icons";


const Content = () => {

    return(
        <>

        <div className="home">
            
            <div className="home-content">
                <h1 className="home-content-heading">Hi, It's <span className="gradient-text">Vishal</span></h1>
                <h3 className="home-text ">
                    I'm a <span className="word-switch">
                        <span className="word gradient-text">Web Developer</span>
                        <span className="word gradient-text">Software Developer</span>
                        <span className="word gradient-text">Engineer</span>
                    </span>
                </h3>
                <p>Coding with purpose, learning with passion, building for impact.</p>

                <div className="resume-icon-container"> 
                    <div className="resume-wrapper">
                        <a href="/FUTURE_FS_01/vishal_resume.pdf" 
                            target="_balnk"
                            rel="noopener noreferrer"
                        >
                            <button className="resume-button">
                                <span className="default-text">My Resume</span>
                                <span className="hover-text">Download</span>
                            </button>
                        </a>
                    </div>
                    <div className="social-icons">
                        <a href="https://www.linkedin.com/in/vishal-songara/" 
                            target="_blank" 
                            rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>

                        <a href="https://github.com/Vishalsongara77" 
                            target="_blank" 
                            rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </div>
                </div>
            </div>
            <div className="home-img-container">    
                <img className="home-img animated-img"
                    src="/FUTURE_FS_01/portfolio.png"
                    alt="Profile-Pic"
                />
            </div>
        </div>
            
        </>
    );
}

export default Content;
