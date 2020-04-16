import React from 'react';

const ContactPage = () => {
  return(
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title">
          <h2>Contact</h2>
          <p>Below you’ll find a few different options for getting in touch with me</p>
        </div>
        <div className="row" data-aos="fade-in">
          <div className="col-lg-5 d-flex align-items-stretch">
            <div className="info">
              <div className="address">
                <i className="icofont-google-map"></i>
                <h4>Location:</h4>
                <p>837 Gravier St, New Orleans, LA</p>
              </div>
              <div className="email">
                <i className="icofont-envelope"></i>
                <h4>Email:</h4>
                <p>bbayo4@gmail.com / bayobuba@yahoo.com</p>
              </div>
              <div className="phone">
                <i className="icofont-phone"></i>
                <h4>Call:</h4>
                <p>+1 206 326 9280</p>
              </div>
              <iframe title="locate me" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1728.4647237830977!2d-90.07325274409436!3d29.952707924167576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8620a60b1e94d703%3A0x3652f4c296927681!2s837%20Gravier%20St%2C%20New%20Orleans%2C%20LA%2070112%2C%20USA!5e0!3m2!1sen!2sbg!4v1586806866575!5m2!1sen!2sbg" frameBorder="0" style={{border:0, width: '100%', height: '290px'}} allowFullScreen></iframe>
            </div>
          </div>
          <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
            <div className="php-email-form">
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="name">Your Name</label>
                  <input type="text" name="name" className="form-control" id="name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                  <div className="validate"></div>
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="name">Your Email</label>
                  <input type="email" className="form-control" name="email" id="email" data-rule="email" data-msg="Please enter a valid email" />
                  <div className="validate"></div>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="name">Subject</label>
                <input type="text" className="form-control" name="subject" id="subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                <div className="validate"></div>
              </div>
              <div className="form-group">
                <label htmlFor="name">Message</label>
                <textarea className="form-control" name="message" rows="10" data-rule="required" data-msg="Please write something for us"></textarea>
                <div className="validate"></div>
              </div>
              <div className="mb-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div className="text-center"><button type="submit">Send Message</button></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactPage;