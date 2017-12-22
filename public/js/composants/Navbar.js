var React = require("react");
var Link = require('react-router-dom').Link;




class Navbar extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{paddingTop: '0', paddingBottom: '0'}} id="mainNav">
        <div className="container">
        <Link to="/">
          <a className="navbar-brand js-scroll-trigger">Scriptology</a>
          </Link>
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            Menu
            <i className="fa fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav text-uppercase ml-auto">
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#services">Notre projet.</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#portfolio">Laboratoire.</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#team">Notre équipe.</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#team">Contact.</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#">Connexion.</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </div>
    );
  }
}

module.exports = Navbar;
