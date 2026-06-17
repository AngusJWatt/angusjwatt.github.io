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
  <>
    <header className="cv-header">
      <h1>Angi Watt</h1>
    </header>
    <main className="cv-main">
      <section>
        <address>
          Leeds<br/>
          Phone: <a href="tel:+447487679249">+447487 679 249</a><br/>
          Email: <a href="mailto:angusjwatt@gmail.com">angusjwatt@gmail.com</a>
        </address>
        <h2>Personal Profile</h2>
        <p>
          I have worked for 6 years as a software developer, serving as an impact-driven front-end engineer specialising
          in scalable React architectures, designing systems that elevate user experience and accessibility.
        </p>
        <p>
          I became adept at shaping robust, maintainable interfaces while strengthening ownership across codebases,
          pipelines, and deployments. I have been a trusted contributor who embeds inclusive design principles, improves
          delivery reliability, and strengthens platform quality through rigorous collaboration and problem solving.</p>
        <p>
          Valued for bringing clarity to complex technical environments and enabling teams to deliver resilient,
          high-performing digital products.
        </p>
        <h2>Key Skills</h2>
        <ul className="bullet-points">
          <li>
            Work experience: 6 years industry experience in with ReactJS/TS, HTML/CSS, NodeJS, GraphQL, WCAG/ARIA, and
            CI/CD.
          </li>
          <li>
            Eye for detail: Awarded for delivery of high-quality code which went above-and-beyond in delivering
            accessible, WCAG/ARIA-compliant components.
          </li>
          <li>
            Communication: Excellent verbal skills, with experience working in a Agile scrum and interacting between
            different teams and departments.
          </li>
          <li>
            Adaptability: Quick to develop and refine skills as needed, experience moving effectively between teams and
            frameworks.
          </li>
          <li>
            Comprehension: Knowledgable of systems analysis and development, keen to research, documenting and sharing
            my skills as I develop them.
          </li>
          <li>
            Additional competencies: Working knowledge of Java, SQL, shell scripting, and C.
          </li>
        </ul>
        <h2>Employment Experience</h2>
        <p>
          <b className="space-between">
            <span>Mar 2019 &mdash; Jan 2026</span>&nbsp;
            <span>Sky</span>&nbsp;
            <span>Developer</span>
          </b>
        </p>
        <ul>
          <li>
            Scripted and maintained codebases, formed of ReactJS/TS, HTML/CSS, and GraphQL.
          </li>
          <li>
            Was the accessibility champion for my team, suggesting improvements and maintaining W3C/WCAG standards.
          </li>
          <li>
            Comprehensively tested in a TTD framework with both unit and end-to-end tests.
          </li>
          <li>
            Responsible for releasing and smoke-testing during night-time conference calls with shareholders.
          </li>
          <li>
            Delivered presentations to colleagues and shareholders on varied topics.
          </li>
          <li>
            Worked in an Agile framework to maintain and support applications.
          </li>
          <li>
            Discussed product-owner’s requirements and potential development ideas.
          </li>
          <li>
            Collaborated with UX/UI team to refine component functionalities and designs.
          </li>
        </ul>
        <h2>Education & Training</h2>
        <ul>
          <li className="space-between">
            <span>Jan 2019 &mdash; Mar 2019</span>&nbsp;
            <span>Foundational Software Training</span>&nbsp;
            <span>FDM Training Academy</span>
          </li>
          <li className="space-between">
            <span>Sep 2017 &mdash; Jun 2018</span>&nbsp;
            <span>PGDE, Secondary Education: Pass</span>&nbsp;
            <span>University of Glasgow</span>
          </li>
          <li className="space-between">
            <span>Sep 2012 &mdash; Jun 2017</span>&nbsp;
            <span>Mathematics and Physics: 2:2</span>&nbsp;
            <span>Strathclyde University</span>
          </li>
        </ul>
        <h2>Hobbies</h2>
        <p>My hobbies include cycling, reading, and studying science recreationally.</p>
        <h2>References</h2>
        <p>Available upon request</p>
      </section>
      <aside>
        <b>Download my CV:&nbsp;</b>
        <DownloadLink fileName="Angi Watt CV 2026.docx">.docx</DownloadLink>,&nbsp;
        <DownloadLink fileName="Angi Watt CV 2026.pdf">.pdf</DownloadLink>.
      </aside>
    </main>
  </>
);

export default App;
