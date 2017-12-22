var React = require("react");

class Subnavbar extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <div
          className="container"
          style={{
            position: "sticky",
            backgroundColor: "#212529",
            zIndex: "2"
          }}
        >
          <div className="row">
            <div className="col-lg-12" style={{ paddingTop: "70px" }}>
              <nav id="navbar2" className="menu-navigation-icons">
                <a href="#" className="menu-white col-lg-3  w-100">
                  <i className="fa fa-camera-retro" />
                  <span>Writing Room</span>
                </a>
                <a href="#" className="menu-magenta col-lg-3  w-100">
                  <i className="fa fa-camera-retro" />
                  <span>Loglines.</span>
                </a>
                <a href="#" className="menu-red col-lg-3 w-100 ">
                  <i className="fa fa-code" />
                  <span>Synopsis.</span>
                </a>
                <a href="#" className="menu-yellow col-lg-3 w-100">
                  <i className="fa fa-comment" />
                  <span>Scénario Complets.</span>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = Subnavbar;
