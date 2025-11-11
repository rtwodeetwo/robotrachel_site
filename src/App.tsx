import './App.css'

function App() {
  return (
    <div className="App">
      {/* Hero Section */}
      <header className="hero">
        <div className="container">
          <img src="/logo.png" alt="Robot Rachel" className="logo" />
          <h1>Custom Code That Works As Hard As You Do</h1>
          <p className="tagline">
            Bespoke software solutions combining AI and traditional code to make your business processes more efficient.
          </p>
          <a href="mailto:rachel@robotrachel.com" className="cta-button">
            Get In Touch
          </a>
        </div>
      </header>

      {/* Services Section */}
      <section className="services">
        <div className="container">
          <h2>What I Do</h2>
          <ul className="services-list">
            <li>
              <strong>AI Integration:</strong> Harness the power of artificial intelligence to automate tasks, analyze data, and make smarter business decisions.
            </li>
            <li>
              <strong>Process Automation:</strong> Streamline your workflows with custom automation tools that save time and reduce human error.
            </li>
            <li>
              <strong>Custom Applications:</strong> Build tailored software solutions designed specifically for your unique business needs and challenges.
            </li>
            <li>
              <strong>Data Solutions:</strong> Transform your data into actionable insights with custom analytics and reporting tools.
            </li>
          </ul>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <div className="container">
          <h2>Why Robot Rachel?</h2>
          <div className="about-content">
            <p>
              Based in New Jersey, Robot Rachel specializes in creating bespoke software solutions that combine cutting-edge AI technology with proven traditional coding practices. Every business is unique, and your software should be too.
            </p>
            <p>
              Whether you need to automate repetitive tasks, integrate AI into your workflow, or build a custom application from scratch, I deliver solutions that are:
            </p>
            <ul>
              <li><strong>Tailored:</strong> Built specifically for your business needs</li>
              <li><strong>Efficient:</strong> Designed to save you time and money</li>
              <li><strong>Scalable:</strong> Growing with your business</li>
              <li><strong>Innovative:</strong> Leveraging the latest in AI and web technologies</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <div className="container">
          <h2>Let's Build Something Amazing</h2>
          <p className="contact-text">
            Ready to transform your business with custom code? Get in touch to discuss your project.
          </p>
          <a href="mailto:rachel@robotrachel.com" className="contact-button">
            rachel@robotrachel.com
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Robot Rachel. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
