import * as image from '../assets/img/imgLoader';
const About = (props) => {
  return(
    <div id="about" className="row gx-0">
      <div className="col-md-5 p-3 text-center">
        <img className="img-thumbnail w-75 p-2 bg-secondary" src={image.whatsapp} alt=""/>
      </div>
      <div className="col-md-7 p-3 d-flex flex-column align-content-center justify-content-center">
        <h1>Hi I'am Surya</h1>
        <p>a Web Developer</p>
        <p>I' am very courious with the latest technologies about web developement. I'am here ready to help you to build an amazing website or web App. so don't hesitate to call me !.</p>
        <a href="#contacts" className="btn btn-primary">Contact Me</a>
      </div>
    </div>
  )
}

export default About;