import React, { Component } from 'react';

class Footer extends Component {
  render() {

    if(this.props.data){
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      <footer>

     <div className="row">
        <div className="six columns">
        <div className="footer-info">
           <p class="text-left">
            I am interested in working with any company that thinks my skill will be helpful for them. If you are looking for someone like me, please let me know. Or you can just 'say hi' to me.
           </p>
          <p>Email: <a href="mailto:sifulsmm@gmail.com" className="">sifulsmm@gmail.com</a> </p>
          <p>Skype: <a href="mailto:sifulsmm@gmail.com" className="">prince.siful</a> </p>
        </div>

        </div>
        <div className="six columns">
           <ul className="social-links">
              {networks}
           </ul>

           <ul className="copyright">
              <li>&copy; Siful</li>
              <li>Fork <a href="#">Github</a></li>
           </ul>

        </div>
        {/* <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div> */}
     </div>
  </footer>
    );
  }
}

export default Footer;
