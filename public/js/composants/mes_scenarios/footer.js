var React = require("react");

class Footer extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
   <div>

   <footer className="sticky-footer">
     <div className="container">
       <div className="text-center">
         <small>Copyright © Your Website 2017</small>
       </div>
     </div>
   </footer>

   <a className="scroll-to-top rounded" href="#page-top">
     <i className="fa fa-angle-up"></i>
   </a>

  </div>

   );
  }
 }

module.exports = Footer;
