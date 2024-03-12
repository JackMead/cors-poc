import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';

function App() {
  const [result, setResult] = useState("");
  useEffect(() => {
    async function fetchData() {
      const answer = await fetch("http://localhost:5000");
      setResult(await answer.text());
    }
    fetchData();
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          { result }
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
