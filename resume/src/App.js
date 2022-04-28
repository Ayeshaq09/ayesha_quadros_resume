import React from 'react';
import PersonalData from "./PersonalData";
import Education from "./Education";
import Skills from "./Skills";
import Internships from "./Internships";
import Summary from "./Summary";
import Certifications from "./Certifications";
import data from './data';

function App() { 
  const {name,emailid,phoneno,linkedinid,education,summary,skills,certifications,internships} = data;
  return (
    <main>
      <section className='container'>
        <PersonalData name={name} emailid={emailid} phoneno={phoneno} linkedinid={linkedinid} />
        <Education education={education}/>
        <Summary summary={summary}/>
        <Internships internships={internships}/>
        <Skills skills={skills}/>
        <Certifications certifications={certifications}/>
      </section>
    </main>
  )
}

export default App;
