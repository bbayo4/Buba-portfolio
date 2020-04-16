import React from 'react';

import Summary from './components/Summary';
import Educations from './components/Educations';
import Timeline from './components/Timeline';

const ResumePage = () => {
  return(
    <section id="resume" className="resume">
      <div className="container">
        <div className="section-title">
          <h2>Resume</h2>
          <p> Courteous and enthusiastic Frontend Developer with 5 + years of experience leveraging HTML, CSS(Bootstrap and Foundation) and modern JavaScript framework such as Angular, React, Vue and Back End Technologies such as Node.JS to build responsive and scablable web and mobile application that drive business growth. </p>
        </div>
        <div className="row">
          <div className="col-lg-6" data-aos="fade-up">
            <Summary />
          </div>
          <div className="col-lg-6" data-aos="fade-up">
            <Timeline />
          </div>
        </div>
        <div className="row"> 
          <div className="col-lg-6">
            <Educations />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ResumePage;