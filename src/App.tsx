import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div className="container py-5">
      <header className="text-center mb-5">
        <img src={viteLogo} className="logo mb-4" alt="Vite logo" />
        <h1 className="display-4">Welcome to Paxetica</h1>
        <p className="lead">
          Experience the next generation of React apps with Vite &amp; TypeScript.
        </p>
        <a
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary btn-lg"
        >
          View on GitHub
        </a>
      </header>

      <section>
        <div className="row text-center">
          <div className="col-md-4 mb-4">
            <img
              src={reactLogo}
              className="logo mb-3 react"
              alt="React logo"
            />
            <h3>Modern React</h3>
            <p>
              Built with the latest React features for blazing fast
              interactivity.
            </p>
          </div>
          <div className="col-md-4 mb-4">
            <img src={viteLogo} className="logo mb-3" alt="Vite logo" />
            <h3>Instant Feedback</h3>
            <p>
              Powered by Vite for lightning fast development and build times.
            </p>
          </div>
          <div className="col-md-4 mb-4">
            <span className="logo mb-3" style={{ fontSize: '4rem' }}>🚀</span>
            <h3>Bootstrap Styling</h3>
            <p>Responsive design with Bootstrap 5 for a great mobile experience.</p>
          </div>
        </div>
      </section>

      <footer className="text-center mt-5">
        <p className="text-secondary">&copy; {new Date().getFullYear()} Paxetica</p>
      </footer>
    </div>
  )
}

export default App
