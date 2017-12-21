var React = require("react");
var Border_up = require("./border_up");
var Border_left = require("./Border_left");

class Border extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
   <div>
     <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" style={{ paddingTop: '0px', paddingBottom: '0px'}} id="mainNav">
       <Border_up/>
       <Border_left/>
    </nav>
  </div>

   );
  }
 }

module.exports = Border;
