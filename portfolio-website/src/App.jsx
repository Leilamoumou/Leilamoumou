import { useState, useEffect } from "react"
import './App.css'
//import Navbar from './components/Navbar'
//import Projects from './components/Projects'import './App.css'


const NAV_LINKS = [
  {
    href: '#about' , label: "About me"
  },
  {
    href: '#projects' , label: "Projects"
  },
  {
    href: '#contact' , label: "Contact"
  },
]

const PROJECTS = [
  {
    id: 1,
    name: "FlowFix",
    //update w details
    description: "streamlining workflows, updating description soon.",
    github: "https://github.com/Leilamoumou/flowfix-capstone",
    tag: "Capstone",
    color: '#FF3CAC'
  }
   ,{
    id: 2,
    name: "Empire Mimikatz Kerberos Attack Forensics | CodePath CYB102 Capstone	",
    //update w details
    description: "Conducted forensic analysis of an Empire/Mimikatz Kerberos credential harvesting attack, analyzing 2,480 network events in Splunk to identify C2 patterns, detect DCSync/DRSUAPI abuse across 4 compromised workstations, and map TTPs to MITRE ATT&CK framework (T1558.003, T1078, T1071.001).",
   //need to properly link the material.
    github: "https://github.com/Leilamoumou/flowfix-capstone",
    tag: "CodePath",
    color: '#FF3CAC'
  },
   {
    id: 3,
    name: "Hangman",
    //update w details
    description: "streamlining workflows, updating description soon.",
    github: "https://github.com/Leilamoumou/Hangman",
    tag: "Personal Project",
    color: '#FF3CAC'
  }
  ,
  {
    id: 4,
    name: "Project GreenBean",
    //update w details
    description: "optimization coming soon!",
    github: "https://github.com/Leilamoumou/greenbean",
    tag: "Personal Project",
    color: '#FF3CAC'
  },
  {
    id: 5,
    name: "MeowCode",
    //update w details
    description: "a personal project i am looking forward to updating on!!",
    github: "https://github.com/Leilamoumou/Meowcode",
    tag: "Personal Project",
    color: '#FF3CAC'
  }
  

]
function Navbar(){
  const [scrolled, setScrolled] = useState(false)
    useEffect(()=> {
          const onScroll = () => setScrolled(window.scrollY > 20)
          window.addEventListener("scroll", onScroll)
          return () => window.removeEventListener("scroll", onScroll)   
    }, 
  [])

  return(
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
    <span className= "navbar__logo">LM<span className="navbar__dot">.</span></span>
    <ul className="navbar__links">
      {NAV_LINKS.map(({  href, label}) => (
        <li key={href}>
          <a href={href} className="navbar__link">{label}</a>
        </li>
      ))}
    </ul>
    </nav>
  )
}

function Hero(){
  return (
    <section id="about" className="hero">
      <div className= "hero__bg-blob blob1"/>
      <div className= "hero__bg-blob blob2"/>
      <div className= "hero__bg-blob blob3"/>

      <div className="hero__content">
        <p className= "hero__greeting">Greetings ₍⸍⸌̣ʷ̣̫⸍̣⸌₎</p>
        <h1 className= "hero__name">
        
          Leila<br />
          <span className="hero__name--accent">Moumou</span>
          </h1>
          <div className="hero__tags">
            <span className="tag tag--pink">CS senior</span>
            <span className="tag tag--pink">Math minor</span>
            <span className="tag tag--pink">CodePath Tech Fellow</span>
          </div>
           <p className="hero__bio">
         My name is Leila Moumou, and I am in my final semester pursuing a BA in Computer Science with a minor in Mathematics. I'm also a tech fellow for CodePath's Intermediate Cybersecurity course!
         Algorithms and development have fascinated me since I was a kid, as I'd play Flash plugin JS games (or even Mario Kart) and be fascinated by the idea that code could bring such things to life! I also grew an interest in cybersecurity, a world where analysis, debugging, and verification are critical. I am looking forward to seeking my master's a year or two post-grad, and hopefully get the privilege of doing research beyond that as well. I am extremely interested in pursuing the correlation between verification systems involving formal methods and how to integrate such in modern cybersecurity infrastructure.
        </p>
        <a href="#projects" className="hero__cta">See My Work Here! →</a>
      </div>
      <div className="hero__deco">
        <div className="deco-ring" />
        <div className="deco-dot-grid" />
      </div>
    </section>
  )
}

function ProjectCard ({ project }){
  return (
        <div className="project--card" style={{"--accent": project.color}}>
          <span className="project-card__tag">
            {project.tag}
            </span>
          <h3 className="project-card__name">
        {project.name}
          </h3>
          <p className="project-card__desc">
            
            {project.description}

          </p>
          <a
          href={project.github}
          className= "project--card__link"
          target= "_blank"
          rel="noreferrer"
          >
          
            View on GitHub ↗
             </a>
        </div>
  )
}

function Projects() {
  return (
    <section id= "projects" className="projects">
      <h2 className="section--title">
        Projects <span className="section-title__dot">.</span>
      </h2>
      <div className="projects__grid">
        {PROJECTS.map(p => <ProjectCard key={p.id} project={p} /> )}
      </div>
    </section>
  )
}

function Contact() {
  return(
    <section id="contact" className="contact">
      <h2 className="section-title">
        Let's Connect <span className='section-title__dot'>!</span>
      </h2>
      <p className="contact__sub"> I'm open for opportunities to grow and learn through new faces!</p>
    <div className="contact__links">
      <a href="mailto:moumoul2679@gmail.com" className= " contact__btn contact__btn--email">
          Gmail ✉
        </a>
        <a
          href="https://linkedin.com/in/leila-moumou"
          className="contact__btn contact__btn--linkedin"
          target="_blank"
          rel="noreferrer"
        >
          My LinkedIn ↗
        </a>
    </div>
    </section>
  )
}

function Footer(){
  return ( 
    <footer className="footer">
      <span>
         Developed by Leila Moumou © {new Date().getFullYear()}
      </span>
    </footer>
  )
}

function App(){
  return(
    <>
    <Navbar />
    <main>
      <Hero  />
      <Projects  />
      <Contact />
    </main>
    <Footer />
    </>
  )
}

export default App