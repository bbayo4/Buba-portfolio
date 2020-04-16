import React from 'react';

const Overview = () => {
  return(
    <section id="about" className="about">
      <div className="container">
        <div className="section-title">
          <h2>Software Engineer - Frontend (UI)</h2>
          <p>Enthusiastic, devoted and experienced Frontend Engineer, here to build a responsive 
            websites and/or web-application to include interactive features, esthetically pleasing 
            with a Rich User Interface that drives business growth with superior functionalities.</p>
        </div>
        <div className="row">
          <div className="col-lg-4" data-aos="fade-right">
            <img src="assets/img/overview.jpg" className="img-fluid" alt="" />
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
            <p className="font-italic">
              <span className="badge badge-secondary">TRUSTWORTHY</span> , 
              <span className="badge badge-secondary">ATTENTION TO DETAILS</span> , 
              <span className="badge badge-secondary">THE ABILITY TO ADAPT</span> , 
              <span className="badge badge-secondary">PATIENCE</span>.
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li><i className="icofont-rounded-right"></i> <strong>Website:</strong> www.bubabayo.com</li>
                  <li><i className="icofont-rounded-right"></i> <strong>Phone:</strong> +1206 326 9280</li>
                  <li><i className="icofont-rounded-right"></i> <strong>City:</strong> Seattle, USA</li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li><i className="icofont-rounded-right"></i> <strong>Degree:</strong> Bachelor of Science (Bsc)</li>
                  <li><i className="icofont-rounded-right"></i> <strong>Email:</strong> bbayo4@gmail.com</li>
                  <li><i className="icofont-rounded-right"></i> <strong>Freelance:</strong> Available</li>
                </ul>
              </div>
            </div>
            <div>
              <ul>
                <li><i className="icofont-ui-pointer"></i>Experience building and refactoring large scale customer facing web applications.</li>
                <li><i className="icofont-ui-pointer"></i>Sound experience in developing software using HTML, CSS, modern JavaScript development techniques (ES6) and frameworks such as Angular, React and Vue.</li>
                <li><i className="icofont-ui-pointer"></i>Strong understanding of good visual design by considering the accessibility and performance of the software.</li>
                <li><i className="icofont-ui-pointer"></i>Solid coding practices including peer code reviews, unit testing, and a fan for agile development.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Overview;