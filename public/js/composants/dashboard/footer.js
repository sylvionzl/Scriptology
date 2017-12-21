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
</div>

   );
  }
 }

module.exports = Footer;
