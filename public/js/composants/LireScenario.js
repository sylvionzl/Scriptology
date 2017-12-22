var React = require("react");
var Navbar = require("./Navbar");
var Footer = require("./Footer");
var PDFViewer = require("./PDFViewer");
var Link = require('react-router-dom').Link;

import { Button } from 'react-bootstrap';


class LireScenario extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
      <Navbar/>

      <div className="container" style={{paddingTop: '100px'}}>
      <Link to="/formulaire">
      <Button bsStyle="primary" bsSize="large" block style={{ maxWidth: 400, margin: '0 auto 10px' }}> Evaluez le scénario </Button>
      </Link>
      <PDFViewer/>
      </div>
      <Footer/>
      </div>
    );
  }
}

module.exports = LireScenario;
