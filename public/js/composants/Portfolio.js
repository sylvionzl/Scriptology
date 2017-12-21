var React = require("react");
import { Button, Modal } from "react-bootstrap";
var Item = require("./Item");


class Portfolio extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
      <section className="bg-light" id="portfolio">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Portfolio</h2>
              <h3 className="section-subheading text-muted">Une communauté dauteurs, de lecteurs, de passionés. Des oeuvres de tous types et de tous horizons</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 portfolio-item">
            <Item/>
            </div>
            <div className="col-lg-4 portfolio-item">
            <Item/>
            </div>
            <div className="col-lg-4 portfolio-item">
            <Item/>
            </div>

            <div className="col-lg-6 text-center offset-lg-3" style={{padding:'40px 15px'}}>
            <a className="nav-link" href="Catalogue.html">
            <Button type="button" className="btn btn-tertiary btn-lg btn-block">Laboratoire</Button>
            </a>
            </div>

          </div>
        </div>
      </section>
      </div>
    );
  }
}

module.exports = Portfolio;
