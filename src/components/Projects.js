import ProjectCarousel from "./ProjectsDev/ProjectCarousel";
const Projects = () => {
  return(
    <div id="projects" className="row gx-0 pt-5 px-3 pb-3">
    <div className="col-md-5 d-flex flex-column justify-content-center">
      <h1>My Projects</h1>
      <p>I create my project with integrity, passionate and inovative, because i love coding. This is some of my projects, hope you can enjoy it</p>
    </div>
    <div className="project-slide col-md-7 p-3 rounded align-self-center">
      <div className="container">
        <ProjectCarousel/>
      </div>
    </div>    
  </div>
  )
}

export default Projects;