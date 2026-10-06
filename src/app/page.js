export default function Home() {
  return (
    <main className="home">
      <section className="hero">
        <p className="intro">Hello, I'm</p>

        <h1>Yukta Naik</h1>

        <h2>Computer Science Engineering Student</h2>

        <p className="description">
          I am a CSE student passionate about software development,
          web development, and building useful technology projects.
        </p>

        <div className="buttons">
          <a href="/about" className="primary-btn">
            About Me
          </a>

          <a href="/contact" className="secondary-btn">
            Contact Me
          </a>
        </div>
      </section>

      <section className="skills">
        <h2>My Skills</h2>

        <div className="skill-list">
          <span>Python</span>
          <span>C</span>
          <span>C++</span>
          <span>Java</span>
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>React</span>
          <span>Next.js</span>
          <span>SQL</span>
        </div>
      </section>
            <section className="projects">
        <h2>My Projects</h2>

        <div className="project-card">
          <h3>UPI Scam & Fraud Reporting Portal</h3>

          <p>
            A web-based platform for reporting and managing UPI scam and
            fraud cases. The application includes form validation,
            search and filtering, status updates, and fraud case details.
          </p>

          <p className="tech">
            HTML • CSS • JavaScript • Backend • Database
          </p>

          <a href="https://github.com/yuktanaik12" target="_blank">
            View on GitHub →
          </a>
        </div>
      </section>
    </main>
  );
}