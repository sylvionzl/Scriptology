var React = require("react");


class Scroll extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
<div>
    <a className="scroll-to-top rounded" href="#page-top">
      <i className="fa fa-angle-up"></i>
    </a>
</div>

   );
  }
 }

module.exports = Scroll;
