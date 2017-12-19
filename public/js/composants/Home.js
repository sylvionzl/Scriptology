var React = require("react");


class Home extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
        <div className="container">
          <a className="navbar-brand js-scroll-trigger" href="#page-top">Scriptology</a>
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
      <header className="masthead">
        <div className="container">
          <div className="intro-text">
            <div className="intro-heading text-uppercase">Le temple du scénario.</div>
            <div className="intro-lead-in">Rejoignez-nous!</div>

            <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="Notrehistoire.html">Que fait-on ?</a>
          </div>
        </div>
      </header>

      </div>
    );
  }
}

module.exports = Home;
