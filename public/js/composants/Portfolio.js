var React = require("react");
import { Button, Modal } from "react-bootstrap";
var Item = require("./Item");
var Item1 = require("./Item1");
var Item2 = require("./Item2");
var Link = require('react-router-dom').Link;


class Portfolio extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
      <section className="bg-light" id="portfolio" style={{padding:'50px'}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Portfolio</h2>
              <h3 className="section-subheading text-muted">Une communauté d'auteurs, de lecteurs, de passionés. Des oeuvres de tous types et de tous horizons</h3>
            </div>
          </div>

          <div className="col-lg-6 text-center offset-lg-3" style={{padding:'40px 15px'}}>

          <Link to="/catalogue">
          <Button type="button" className="btn btn-tertiary btn-lg btn-block">Laboratoire</Button>
          </Link>


          </div>

          <div className="row" style={{paddingTop: '30px'}}>
          <div className="col-lg-1 portfolio-item">

          </div>
            <div className="col-lg-3 portfolio-item">
            <Item/>
            </div>
            <div className="col-lg-3 portfolio-item">
            <Item1/>
            </div>
            <div className="col-lg-3 portfolio-item">
            <Item2/>
            </div>



          </div>
        </div>
      </section>
      </div>
    );
  }
}

module.exports = Portfolio;
