import { useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Container className="py-5">
      <header className="text-center mb-5">
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo me-3" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <h1 className="mt-3">Welcome to Paxetica</h1>
        <p className="lead">A modern homepage built with React, Vite and Bootstrap.</p>
      </header>

      <Row className="text-center mb-5">
        <Col>
          <p>Edit <code>src/App.tsx</code> and save to test HMR.</p>
          <Button variant="primary" onClick={() => setCount(count + 1)}>
            Clicks: {count}
          </Button>
        </Col>
      </Row>

      <footer className="text-center">
        <p>Click the logos above to learn more about Vite and React.</p>
      </footer>
    </Container>
  )
}

export default App
