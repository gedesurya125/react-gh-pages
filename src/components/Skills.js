import React from 'react'
import * as image from '../assets/img/imgLoader'


const mySkills = [
  { name: 'React', img: image.iconReactWebp, level: '100' },
  { name: 'Redux', img: image.iconRedux, level: '75' },
  { name: 'Tailwind-css', img: image.iconTailwind, level: '75' },
  { name: 'SCSS', img: image.iconSass, level: '100' },
  { name: 'Material-UI', img: image.iconMaterialUi, level: '75' },
  { name: 'ExpressJS', img: image.iconExpress, level: '50' },
  { name: 'ECMA Script 6', img: image.iconEs6, level: '100' },
  { name: 'CSS3', img: image.iconCss3, level: '100' },
  { name: 'HTML5', img: image.iconHtml5, level: '100' },
];

const myAcheivements = [
  { title: 'FreeCodeCamp', desc: 'Javascript Algorithm & Data Structure', img: image.fccJavascript },
  { title: 'FreeCodeCamp', desc: 'Responsive Web Design', img: image.fccWebResponsive },
  { title: 'Progate', desc: 'HTML & CSS', img: image.progateHtmlCss },
  { title: 'Progate', desc: 'JavaScript', img: image.progateJs },
  { title: 'Progate', desc: 'React', img: image.progateReact },
  { title: 'Progate', desc: 'Sass', img: image.progateSass },
  { title: 'Progate', desc: 'GIT', img: image.progateGit },

];

const renderAcheivements = myAcheivements.map((achv, index) => (
  <div key={index} className="card m-3 p-3 bg-secondary text-light" style={{ width: "18rem" }}>
    <img src={achv.img} className="card-img-top" alt="..." />
    <div className="card-body text-center">
      <h5>{achv.title}</h5>
      <p className="card-text">{achv.desc}</p>
    </div>
  </div>
))

const renderSkills = mySkills.map((skill, index) => (
  <div key = {index} className="row pb-3">
    <div className="col-2 align-self-center">
      <img className="skill-icon" src={skill.img} alt="" />
    </div>
    <div className="col-10">
      <h5>{skill.name}</h5>
      <div className="progress">
        <div className={`progress-bar w-${skill.level}`} role="progressbar" aria-valuenow={skill.level} aria-valuemin="0" aria-valuemax="100"></div>
      </div>
    </div>
  </div>
));

export default function Skills(props) {
  return (
    <div className="row gx-0">
      {/* SKILLS SECTION */}
      <div className="skills col-md-4 pt-5">
        <div className="container p-3">
          <h2 className="mb-3">My Skills</h2>
          {renderSkills}
        </div>
      </div>

      {/* ACHEIVEMENTS SECTION */}
      <div id="acheivements" className="acheivements col-md-8 pt-5">
        <div className="container p-3">
          <h2 className="text-center">My Acheivements</h2>
          <div className="d-flex flex-wrap justify-content-center">
            {renderAcheivements}
          </div>
        </div>
      </div>
    </div>
  )
}
