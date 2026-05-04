import { useState, useEffect } from "react"
import './App.css'
//import Navbar from './components/Navbar'


const NAV_LINKS = [
  {
    href: '#about' , label: "About me"
  },
  {
    href: '#projects' , label: "Projects"
  },

  //NEW LINKS : 3/17/26 
  //2 NEW LINKS : 1, #INTERESTS . 2, #CURRENTLY
  {
    href: "#interests", label: "About Me++"
  },
{
  href: "#currently", label: "Curr_Commits"
},

{
    href: '#contact' , label: "Contact"

  },
]

const PROJECTS = [
   {
    id: 1,
    name: "For The Culture - APRIL 26",
    description: "In New York City, many fundamental resources, such as health centers, food banks, and transportation, are predominantly documented in English, creating a hurdle for the city's vast non-English speaking population. This website was built to centralize these resources in a way that is both intuitive and inclusive. I worked on the frontend with our team member Islam and individually on the backend for the map page! This includes the overall functionality for toggling between maps. I also connected the open-source data of the food banks and bus routes!",
    github:"https://hunter-hacks-2026.onrender.com/",
    tag:["HunterHacks26","Gemini 2.5 API","React", "Render","Gemini Maps API", "Firebase"],
    color:'#FF3CAC'
  },
  {
    id: 2,
    name: "FlowFix - JAN 26 <-> MAY 26",
    //update w details
    description: "Architected along with group members a scalable full-stack system for a capstone group project, selecting React.js, Node.js, NoSQL, and an external AI/ML API to support growth and modular extensibility • Established a GitHub Actions CI/CD pipeline from prototype through final release, automating testing and deployment to GitHub Pages on every push to main and enabling consistent incremental feature delivery",
    github: "https://github.com/Leilamoumou/flowfix-capstone",
    tag: ["Capstone","CI/CD","HTML","CSS","Javascript","Firebase","Firestore","NoSQL","GEMINI API"],
    color: '#3cb4ff'
  }
   ,{
    id: 3,
    name: "Empire Mimikatz Kerberos Attack Forensics | CodePath CYB102 Capstone	- JULY 26",
    //update w details
    description: "Conducted forensic analysis of an Empire/Mimikatz Kerberos credential harvesting attack, analyzing 2,480 network events in Splunk to identify C2 patterns, detect DCSync/DRSUAPI abuse across 4 compromised workstations, and map TTPs to MITRE ATT&CK framework (T1558.003, T1078, T1071.001).",
   //need to properly link the material.
    github: "https://github.com/Leilamoumou/flowfix-capstone",
    tag: ["CodePath","Wireshark","Splunk","Catalyst", "Virus Total"],
    color: '#FF3CAC'
  },
   {
    id: 4,
    name: "Hangman - FEB 26'",
    //update w details
    description: "streamlining workflows, updating description soon.",
    github: "https://github.com/Leilamoumou/Hangman",
    tag: ["Capstone","HTML","CSS"],
    color: '#3cb4ff'
  },
  {
    id: 5,
    name: "CunyFriends - SEP 25 <-> DEC 25",
    description: "class project",
    github:"https://github.com/Leilamoumou/cuny-friends-csci405 ",
    tag:["GitHub Actions","React Native","CI/CD"],
    color:'#FF3CAC'
  }
  
  
]

const CURRENT=[
  {
   id: 1,
    name: "FlowFix",
    //update w details
    description: "streamlining workflows, updating description soon.",
    github: "https://github.com/Leilamoumou/flowfix-capstone",
    tag: ["Capstone","HTML","CSS"],
    color: '#00FFED'
  },
    {
    id: 2,
    name: "Project GreenBean",
    //update w details
    description: "optimization coming soon!",
    github: "https://github.com/Leilamoumou/greenbean",
    tag: "Personal Project",
    color: '#00FFED'
  },
  {
    id: 3,
    name: "MeowCode",
    //update w details
    description: "a personal project i am looking forward to updating on!!",
    github: "https://github.com/Leilamoumou/Meowcode",
    tag: "Personal Project",
    color: '#00FFED'
  }
]

// NAVBAR
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
                      Welcome to my portfolio site! As of Spring 26, I'm in my final semester of pursuing my Bachelor of Arts in Computer Science, along with a Math minor.
                       I am currently a returning Tech Fellow for CodePath's Intermediate Cybersecurity course!

        </p>
       
 <div className="hero__ctas">
    <a href="#projects" className="hero__cta">See My Work Here!→</a>
    <a href="#currently" className="hero__cta">Check Out What I'm Currently Up To→</a>
</div>
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
        <div className="project-card" style={{"--accent": project.color}}>
          <span className="project-card__tag">
              {Array.isArray(project.tag) ? project.tag.join(" · ") : project.tag}
           
            </span>
          <h3 className="project-card__name">
        {project.name}
          </h3>
          <p className="project-card__desc">
            
            {project.description}

          </p>
          <a
          href={project.github}
          className= "project-card__link"
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
      <h2 className="section-title">
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

//function interests and current
function CurrentCard ({ current }){
  return (
        <div className="currently-card" style={{"--accent": current.color}}>
          <span className="current-card__tag">
              {Array.isArray(current.tag) ? current.tag.join(" · ") : current.tag}
            </span>
          <h3 className="current-card__name">
        {current.name}
          </h3>
          <p className="current-card__desc">
            
            {current.description}

          </p>
          <a
          href={current.github}
          className= "currently-card__link"
          target= "_blank"
          rel="noreferrer"
          >
          
            Check it out ↗
             </a>
        </div>
  )
}
function Interests(){
  return(
    <section id= "interests"  className="interests">
        <h1 className="section-title">
        Interests(CHANGING!) <span className="section-title__dot">.</span>
      </h1>
      <p className="interests__bio">
        Will list the pre &amp;&amp; post college interests relating to tech here.
      </p>
    </section>

   
  )
}
function Currently(){
  return (
    <section id="currently" className="currently">
       <h1 className="section-title">
        My Latest Commits <span className="section-title__dot"></span>
      </h1>
      <p>
        current works shown here &amp;  progress updates. also updating functionality on it.
      </p>
       <div className="currently__grid">
        {CURRENT.map(c => <CurrentCard key={c.id} current={c} />)}
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
       <Interests />
          <Projects  />
       <Currently />
       <Contact />
    </main>
    <Footer />
    </>
  )
}

export default App