import React from 'react'
import * as image from '../assets/img/imgLoader'

const mySocialMedia = [
  { linkTo: 'https://www.facebook.com/IGedeSuryaAdiPranata', specificClass: 'btn-facebook', img: image.iconFacebook, text: 'Facebook' },
  { linkTo: 'https://www.linkedin.com/in/i-gede-surya-adi-pranata-9a2853213/', specificClass: 'btn-linkedin', img: image.iconLinkedin, text: 'LinkedIn' },
  { linkTo: 'https://twitter.com/IGedeSuryaAdiP1', specificClass: 'btn-twitter', img: image.iconTwitter, text: 'Twitter' },
  { linkTo: 'https://www.instagram.com/gdpranata/', specificClass: 'btn-instagram', img: image.iconInstagram, text: 'Instagram' },
];

const renderMySocialMedia = mySocialMedia.map((social, index) => (
  <div key={index} className="col-md-6">
    <a href={social.linkTo} rel="noreferrer" className={`btn w-100 text-start mb-3 ${social.specificClass}`} target="_blank"><img src={social.img} className="img-social" alt="..."/>{social.text}</a>
  </div>
))


export default function Footer() {
  return (
    <footer id="contacts" className="row gx-0 text-dark">
      <div className="container">
        <div className="row gx-0">
          <div className="col-md-1 pt-5 text-center footer-logo d-none d-md-block">
            <img className="w-75" src={image.headerIcon} alt="" />
          </div>

          <div className="col-md-5 p-5">
            <h3>Are you ready?</h3>
            <h5>Let's get Started</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam ducimus eum officia excepturi perferendis mollitia facilis non voluptate quod voluptatum quibusdam ab amet at hic, officiis, blanditiis ullam accusantium! Aut.</p>
            <div className="row">
                {renderMySocialMedia}
            </div>
          </div>

          <div className="col-md-6 p-5">
            <h3>First Step</h3>
            <h5>Contact me!</h5>
            <div className="card w-100 text-dark">
              <div className="card-body">
                <form action="">
                  <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label htmlFor="floatingInput">Email address</label>
                  </div>

                  <div className="form-floating mb-3">
                    <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: "100px"}} />
                    <label htmlFor="floatingTextarea2">Message</label>
                  </div>
                  <button type="submit" className="btn btn-primary w-100">Send</button>
                </form>

              </div>
            </div>

          </div>

        </div>
      </div>
    </footer>
  )
}
