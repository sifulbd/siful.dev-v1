import React, { Component } from 'react';

class SkillsComp extends Component {
  render() {

    if(this.props.data){
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
        <p>{education.description}</p></div>
      })
      var work = this.props.data.work.map(function(work){
        return <div key={work.company}><h3>{work.company}</h3>
            <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
            <p>{work.description}</p>
        </div>
      })
      var skills = this.props.data.skills.map(function(skills){
        var className = 'bar-expand '+skills.name.toLowerCase();
        return <li key={skills.name}><span style={{width:skills.level}}className={className}></span><em>{skills.name}</em></li>
      })
    }

    return (
      <section id="resume">

      <div className="row skill">

         <div className="three columns header-col">
            <h1><span>Skills</span></h1>
         </div>

          <div className="three columns main-col">
            
            <h4>Language</h4>
            <div className="bars">
              <ul className="skills">
                <li><span className="bar-expand"></span><em>HTML</em></li>
                <li><span className="bar-expand"></span><em>CSS</em></li>
                <li><span className="bar-expand"></span><em>JavaScript</em></li>
                <li><span className="bar-expand"></span><em>PHP</em></li>
              </ul>
            </div>

            <h4>Library</h4>
            <div className="bars">
              <ul className="skills">
                <li><span className="bar-expand"></span><em>React JS</em></li>
                <li><span className="bar-expand"></span><em>Node JS</em></li>
                <li><span className="bar-expand"></span><em>jQuery</em></li>
              </ul>
            </div>
            
            <h4>Storage</h4>
            <div className="bars">
              <ul className="skills">
                <li><span className="bar-expand"></span><em>MySQL</em></li>
                <li><span className="bar-expand"></span><em>MongoDB</em></li>
              </ul>
            </div>
          </div>

          <div className="three columns main-col">
            
            <h4>Framework</h4>
            <div className="bars">
              <ul className="skills">
                <li><span className="bar-expand"></span><em>Bootstrap</em></li>
                <li><span className="bar-expand"></span><em>Material UI</em></li>
                <li><span className="bar-expand"></span><em>WordPress</em></li>
                <li><span className="bar-expand"></span><em>MaterializeCSS</em></li>
              </ul>
            </div>
            <h4>Coding Tool</h4>
            <div className="bars">
              <ul className="skills">
                <li><span className="bar-expand"></span><em>VS Code</em></li>
                <li><span className="bar-expand"></span><em>Git</em></li>
              </ul>
            </div>
            
          </div>

          <div className="three columns main-col">
            
            <h4>Design Tool</h4>
            <div className="bars">
              <ul className="skills">
                <li><span className="bar-expand"></span><em>Photoshop</em></li>
                <li><span className="bar-expand"></span><em>Webflow</em></li>
                <li><span className="bar-expand"></span><em>Sketch</em></li>
                <li><span className="bar-expand"></span><em>Figma</em></li>
                <li><span className="bar-expand"></span><em>Adobe XD</em></li>
              </ul>
            </div>

            <h4>Platform</h4>
            <div className="bars">
              <ul className="skills">
                <li><span className="bar-expand"></span><em>Windows</em></li>
                <li><span className="bar-expand"></span><em>MacOS</em></li>
              </ul>
            </div>            
            
          </div>
      </div>
   </section>
    );
  }
}

export default SkillsComp;
