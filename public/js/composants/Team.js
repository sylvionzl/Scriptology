var React = require("react");
import { Button, Modal } from "react-bootstrap";

class Team extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
      <section className="bg-light" id="team" style={{backgroundColor: '#fff'}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Notre équipe</h2>
              <h3 className="section-subheading text-muted">Coucou!</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <div className="team-member">
                <img className="mx-auto rounded-circle" src="images/team/Sylvain.jpg" alt=""/>
                <h4>Sylvio</h4>
                <p className="text-muted">J'aime le grand cinéma.</p>
                <ul className="list-inline social-buttons">
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="team-member">
                <img className="mx-auto rounded-circle" src="images/team/picnacer.jpg" alt=""/>
                <h4>Nace</h4>
                <p className="text-muted">J'aime aussi le grand cinéma. Coincidence ?</p>
                <ul className="list-inline social-buttons">
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

          </div>
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
            </div>
          </div>
        </div>
      </section>
      </div>
    );
  }
}

module.exports = Team;
