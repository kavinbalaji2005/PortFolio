import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
const AboutMe = () => {
    return(
        <div id="about" className="about-container ">
            <div className="aboutme">
                <div className="about-title">
                    <h1>About Me</h1>
                </div>
                <div className="about-section">
                    <div className="about-section-left">
                        <div className="photo-wrapper ">
                            <img className="about-img "
                                src="/FUTURE_FS_01/ProfilePic.png" 
                                alt="Profile-Pic"
                            />
                        </div>
                    </div>
                        <div className="about-section-right">
                            <p>I’m a developer and B.Tech student who loves turning ideas into fast, functional web apps with React .</p>
                            <p>Outside the code editor, I enjoy exploring creative ideas through technology. I'm always learning, always building, and always excited about what’s next.</p>
                            <div className="about-section-education">
                                    <h3>Current Education</h3>
                                    <p>Bachelor of Technology (B.Tech), Computer Science and Engineering.</p>
                                    <p>Swami Keswanand Institute of Technology, Jaipur.</p>
                                    
                        </div>

                    </div>
                    
                </div>
            </div>
            
        </div>
    );
}
export default AboutMe;
