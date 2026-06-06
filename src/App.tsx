import React from 'react';
import logo from './logo.svg';
import './App.css';

const handleClick = (e: any) => {
  e.preventDefault();
  fetch('/Angi Watt CV.docx').then(res => res.blob()).then(blob => {
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'Angi Watt CV.docx');
      document.body.appendChild(link);
      link.click();
      link.parentNode?.removeChild(link);
    }).catch(err => console.error(err));
};

const App = () => (
    <div className="App">
      <header className="App-header">
        <h1>My App</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Download my CV: <a href="/Angi Watt CV.docx" download onClick={handleClick}>.docx</a>.
        </p>
      </header>
      <main>
        Hello
      </main>
    </div>
  );


export default App;
