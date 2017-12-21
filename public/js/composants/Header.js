var React = require("react");
import { Button } from 'react-bootstrap';



class Header extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
      <header className="masthead">
        <div className="container">
          <div className="intro-text">
            <div className="intro-heading text-uppercase">Le temple du scénario.</div>
            <div className="intro-lead-in">Rejoignez-nous!</div>

            <Button bsSize="large" className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="Notrehistoire.html">Que fait-on ?</Button>
          </div>
        </div>
      </header>

      </div>
    );
  }
}

module.exports = Header;


//const wellStyles = {backgroundColor: '#fec503', border: '#fec503', color: 'white', padding: '20px 40px', fontSize: '20px', fontWeight: '700'};
 //style={wellStyles}
