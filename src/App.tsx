import React, { useState, useEffect, ReactNode } from 'react';
import './App.css';

const DownloadLink = ({ fileName, children }: { fileName: string; children: ReactNode }) => {
  const [href, setHref] = useState('');
  useEffect(() => {
    fetch(`/${fileName}`).then(res => res.blob()).then(blob => {
      setHref(window.URL.createObjectURL(blob));
    }).catch(err => console.error(err));
  }, [fileName]);
  return (
    <a href={href} download={fileName}>{children}</a>
  );
};

const App = () => (
    <div className="App">
      <header className="App-header">
        <h1>My App</h1>
      </header>
      <main>
        <p>
          Download my CV:&nbsp;
          <DownloadLink fileName="Angi Watt CV.docx">.docx</DownloadLink>,&nbsp;
          <DownloadLink fileName="Angi Watt CV.pdf">.pdf</DownloadLink>.
        </p>
      </main>
    </div>
  );


export default App;
