var React = require("react");
var Link = require('react-router-dom').Link;
import { Button } from "react-bootstrap";

class Services extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <section id="services">
          <div className="container" style={ContainerStyle}>
            <div className="row">
              <div className="col-lg-12 text-center">
                <h3 className="section-subheading text-muted">
                  Un scénario, des scenarii... Vous êtes en possession d'une
                  petite perle qui ne demande qu'à être produite ? Ou alors,
                  vous cherchez du neuf, du beau, de l'original à monter ? Ou
                  simplement envie de progresser dans l'art de raconter des
                  histoires ? N'en jetez plus, la scriptology est faite pour
                  vous.
                </h3>
              </div>
            </div>
            <div className="row text-center" style={{verticalAlign: 'baseline'}}>
              <div className="col-md-6" style={ParaphStyle}>
                <span className="fa-stack fa-4x">
                  <i className="fa fa-circle fa-stack-2x text-primary" />
                  <i className="fa fa-book fa-stack-1x fa-inverse" />
                </span>
                <h4 className="service-heading">Scénaristes</h4>
                <p className="text-muted">
                  Scénariste en herbe ou averti, Scénario finalisé ou simple
                  synopsis, <br/> venez-vous confronter à notre communauté
                </p>
                <Link to="/dashboard">
                <Button
                  className="btn btn-primary btn-lg btn-block"
                  href="Dashboard.html"
                >
                  Publiez!
                </Button>
                </Link>
              </div>

              <div className="col-md-6" style={ParaphStyle}>
                <span className="fa-stack fa-4x">
                  <i className="fa fa-circle fa-stack-2x text-secondary" />
                  <i className="fa fa-film fa-stack-1x fa-inverse" />
                </span>
                <h4 className="service-heading">Production</h4>
                <p className="text-muted">
                  Une sélection complète et thématisée <br /> des meilleures
                  oeuvres par notre communauté
                </p>
                <Button className="btn btn-secondary btn-lg btn-block">
                  Produisez!
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

module.exports = Services;

const ContainerStyle= {marginLeft: '0px', marginRight: '0px', maxWidth: '100%'}
const ButtonStyle ={paddingLeft: '0px', paddingRight: '0px'}
const ParaphStyle ={paddingLeft: '14px', paddingRight: '15px'}
