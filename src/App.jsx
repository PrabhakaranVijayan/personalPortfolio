//import { BrowserRouter,Routes ,Route } from "react-router-dom"
// import Home from "./Components/Home"
import About from "./Components/About"
import Projects from "./Components/Projects"
import Skills from "./Components/Skills"
import Contact from "./Components/Contact"
import Header from "./Components/Header"
import Hero from "./Components/Hero"
import Footer from "./Components/Footer"
import Experience from "./Components/Experience"
import Case_studies from "./Components/Case_studies"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Netflix from "./Components/case_study/Netflix"
import SocialNetwork from "./Components/case_study/SocialNetwork"
import AppleTitanAnalysis from "./Components/case_study/AppleTitanAnalysis"

function App() {
  return (
    <BrowserRouter>
    <div className="min-h-screen bg-white">
    
    <Routes>
      
      <Route path="/" element={
        <mainLayout>
          <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Case_studies />
        <Contact />
      </main>
      <Footer />

        </mainLayout>
      }/>
       {/* <Route path="/about" element={<About />}/>
       <Route path="/expereince" element={<Experience />}/>
       <Route path="/contact" element={<Contact />}/>
       <Route path="/casestudy" element={<Case_studies />}/>
       <Route path="/projects" element={<Projects />}/> */}
      
      
        <Route path="/socialmedia/students" element={<SocialNetwork />} />
        <Route path="/netflix-casestudy" element={<Netflix />}/>
        <Route path="/rca/apple" element={<AppleTitanAnalysis />} />
      </Routes>
      
    </div>
    </BrowserRouter>
    
  );
}

export default App;