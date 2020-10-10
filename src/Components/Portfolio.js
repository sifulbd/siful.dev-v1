import React, { Component } from 'react';

class Portfolio extends Component {
  render() {

    if(this.props.data){
      var projects = this.props.data.projects.map(function(projects){
        var projectImage = 'images/portfolio/'+projects.image;
        const tasgs = projects.tech;
        return (
          <div key={projects.title} className="columns portfolio-item">
            <div className="item-wrap">
              
                <img alt={projects.title} src={projectImage} />
                <div className="overlay">
                    <div className="portfolio-item-meta">
                      <h5>{projects.title}</h5>
                      <p>{projects.category}</p>
                    </div>
                  </div>
                  <div className="item-tag">                 
                    <ul>
                      {tasgs ? tasgs.replaceAll(',', '').split(" ").map( tg => <li>{tg}</li>) : ''}
                    </ul>
                  </div>
                  <div className="prev-btn">
                    <div className="item-link">
                      <a href={projects.url} target='_blank' title={projects.title}>
                        <div className="link-icon">Preview</div>
                      </a>               
                    </div>
                    {
                      projects.github && <div className="github-link">
                        <a target='_blank' href={projects.github} className=""><i className="fa fa-github"></i></a> 
                      </div>
                    }
                    
                  </div>
            </div>
          </div>
      )})
    }

    return (
      <section id="portfolio">

      <div className="row">

         <div className="twelve columns collapsed">

            <h2 class="pt-title">Portfolios</h2>
            <div id="portfolio-wrapper" className="bgrid-thirds s-bgrid-halves cf">
                {projects}
            </div>

            <div className="btn">
              <a href="https://github.com/sifulbd" className="btn-border">More Works</a>
            </div>
          </div>
      </div>
   </section>
    );
  }
}

export default Portfolio;
