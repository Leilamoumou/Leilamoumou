import './App.css'
//import Navbar from './components/Navbar'
//import Projects from './components/Projects'import './App.css'

function App() {
  return (
    <>
      <nav>
        <h1>Leila Moumou's Portfolio </h1>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <section id="about">
        <h2>Greetings ₍⸍⸌̣ʷ̣̫⸍̣⸌₎!</h2>
        <p>My name is Leila Moumou, and I am in my final semester pursuing a BA in Computer Science with a minor in Mathematics. I also a tech fellow for CodePath's Intermediate Cybersecurity course!

</p>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        <div className="project-card">
          <h3>FlowFix</h3>
          <p>Short description of what it does.</p>
          <a href="https://github.com/Leilamoumou/flowfix-capstone">View on GitHub</a>
        </div>
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <a href="mailto:your@email.com">Gmail</a>
        <a href="https://linkedin.com/in/yourprofile">LinkedIn</a>
      </section>
    </>
  )
}

export default App