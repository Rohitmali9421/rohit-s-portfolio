import AnimatedCursor from "react-animated-cursor"
import AboutMe from "./Components/AboutMe"
import Baner from "./Components/Baner"
import Project from "./Components/Project"
import ProjectHeading from "./Components/ProjectHeading"
import Contact from "./Components/Contact"
import Skills from "./Components/Skills"
import Footer from "./Components/Footer"

function App() {

  return (
    <>
    <AnimatedCursor/>
      <Baner/>
      <AboutMe/>
      <Skills/>
      <ProjectHeading/>
      <Project/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
