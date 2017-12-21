var React = require("react");


class Subnavbar extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>

      <div className="container" style={{position: 'fixed', backgroundColor: '#212529', position: 'static', zIndex: '2'}}>
        <div className="row">
          <div className="col-lg-12" style={{padding: '0px'}}>
            <nav id="navbar2" className="menu-navigation-icons">

        <a href="#" className="menu-white col-lg-3  w-100"><i className="fa fa-camera-retro"></i><span>Writing Room</span></a>
        <a href="#" className="menu-magenta col-lg-3  w-100"><i className="fa fa-camera-retro"></i><span>Loglines.</span></a>
          <a href="#" className="menu-red col-lg-3 w-100 "><i className="fa fa-code"></i><span>Synopsis.</span></a>
          <a href="#" className="menu-yellow col-lg-3 w-100"><i className="fa fa-comment"></i><span>Scénario Complets.</span></a>
    	</nav>
    </div>
  </div>
  </div>

      </div>
    );
  }
}

module.exports = Subnavbar;
