import React, { useEffect, ReactNode } from 'react';
import logo from './logo.svg';
import './App.css';

const DownloadLink = ({ id, fileName, children }: { id: string; fileName: string; children: ReactNode }) => {
  useEffect(() => {
    fetch(`/${fileName}`).then(res => res.blob()).then(blob => {
      const url = window.URL.createObjectURL(blob);
      const link = document.getElementById(id) as HTMLAnchorElement;
      link.href = url;
      link.setAttribute('download', fileName);
    }).catch(err => console.error(err));
  }, [id, fileName]);
  return (
    // eslint-disable-next-line
    <a id={id}>{children}</a>
  );
};

const App = () => (
    <div className="App">
      <header className="App-header">
        <h1>My App</h1>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main>
        <p>
          Download my CV:&nbsp;
          <DownloadLink fileName="Angi Watt CV.docx" id="docx">.docx</DownloadLink>,&nbsp;
          <DownloadLink fileName="Angi Watt CV.pdf" id="pdf">.pdf</DownloadLink>.
        </p>
      </main>
    </div>
  );


export default App;
