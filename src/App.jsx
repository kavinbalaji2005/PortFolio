import Header from "./Header";
import Content from "./Content";
import CursorShadow from "./Cursor";
import AboutMe from "./AbouteMe";
import Contact from "./Contact";
import Footer from "./Footer";
import Projects from "./Projects";
import Skills from "./Skills"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const App = () =>{
      
      return(
            <div id="home" className="app">
                  <CursorShadow/>
                  <Header/>
                  <Content/>
                  <AboutMe/>
                  <Skills/>
                  <Projects/>
                  <Contact/>
                  <Footer/>

            </div>
      );
}

export default App
