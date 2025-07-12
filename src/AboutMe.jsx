import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
const AboutMe = () => {
    return(
        <div id="about" className="about-container ">
            <div className="aboutme">
                <div className="about-title">
                    <h1 className="text-heading-1">About Me</h1>
                </div>
                <div className="about-section">
                    <div className="about-section-left">
                        <div className="photo-wrapper ">
                            <img className="about-img "
                                src="/PortFolio/ProfilePic.png" 
                                alt="Kavin Balaji - Full Stack Developer and Computer Engineering Student"
                            />
                        </div>
                    </div>
                        <div className="about-section-right">
                            <p className="text-body-large">I'm a developer and B.Tech student who loves turning ideas into fast, functional web apps with React.</p>
                            <p className="text-body">Outside the code editor, I enjoy exploring creative ideas through technology. I'm always learning, always building, and always excited about what's next.</p>
                            <div className="about-section-education">
                                    <h3 className="text-heading-4">Current Education</h3>
                                    <p className="text-body">Bachelor of Technology (B.Tech), Computer and Communication Engineering.</p>
                                    <p className="text-body-small">Amrita Vishwa Vidyapeetham, Coimbatore.</p>
                                    
                        </div>

                    </div>
                    
                </div>
            </div>
            
        </div>
    );
}
export default AboutMe;
