import About from "./components/about/About"
import Footer from "./components/footer/Footer"
import Home from "./components/home/Home"
import Navbar from "./components/navbar/Navbar"
import Project from "./components/project/Project"
import Skill from "./components/skill/Skill"
function App() {
  return (
    <div className="bg-[#171d32] h-auto w-full overflow-hidden">
   <Navbar />
   <Home />
   <About />
   <Skill />
   <Project />
   <Footer /> 
    </div>
  )
}

export default App
