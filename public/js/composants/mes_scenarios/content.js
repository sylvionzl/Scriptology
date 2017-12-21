var React = require("react");
var Section = require("./section");
var Scenarios = require("./scenarios");
var Newfeeds = require("./newfeeds");

class Border extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
   <div>

   <div className="content-wrapper">
     <div style={{ marginTop: '40px'}} className="container-fluid">
         <Section/>
         <Scenarios/>
         <Newfeeds/>
       </div>
     </div>

  </div>

   );
  }
 }

module.exports = Border;
