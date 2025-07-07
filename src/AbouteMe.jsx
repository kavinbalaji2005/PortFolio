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
                            <p>I'm a passionate software developer with expertise in full-stack development, specializing in modern web technologies and creating efficient, scalable solutions.</p>
                            <p>With a strong foundation in both frontend and backend development, I enjoy building applications that solve real-world problems and deliver exceptional user experiences.</p>
                            <div className="about-section-education">
                                    <h3>Current Education</h3>
                                    <p>Bachelor of Engineering (B.E), Computer Science and Engineering.</p>
                                    <p>Studying modern software development practices and emerging technologies.</p>
                                    
                        </div>

                    </div>
                    
                </div>
            </div>
            
        </div>
    );
}
export default AboutMe;