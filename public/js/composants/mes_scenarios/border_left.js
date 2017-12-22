var React = require("react");
var Link = require('react-router-dom').Link;

class Border_left extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
<div>

<div className="collapse navbar-collapse" id="navbarResponsive">
  <ul className="navbar-nav navbar-sidenav" id="exampleAccordion">
    <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Dashboard">
      <Link to="/dashboard">
      <a className="nav-link">
        <i className="fa fa-fw fa-dashboard"></i>
        <span style={{ fontFamily: 'Courier New'}} className="nav-link-text">DASHBOARD.</span>
      </a>
      </Link>
    </li>
    <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Charts">
    <Link to="/mes_scenarios">
      <a className="nav-link" href="mes_scenarios.html">
        <i className="fa fa-fw fa-area-chart"></i>
        <span style={{ fontFamily: 'Courier New'}} className="nav-link-text">Mes scénarios.</span>
      </a>
    </Link>
    </li>
    <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Tables">
    <Link to="/mes_scenarios">
      <a className="nav-link" href="mes_lectures.html">
        <i className="fa fa-fw fa-table"></i>
        <span style={{ fontFamily: 'Courier New'}} className="nav-link-text">Mes lectures.</span>
      </a>
    </Link>
    </li>
    <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Link">
      <Link to="/catalogue">
      <a className="nav-link" href="Catalogue.html">
        <i className="fa fa-fw fa-link"></i>
        <span style={{ fontFamily: 'Courier New'}} className="nav-link-text">Catalogue.</span>
      </a>
      </Link>
    </li>
  </ul>
  <ul className="navbar-nav sidenav-toggler">
    <li className="nav-item">
      <a className="nav-link text-center" id="sidenavToggler">
        <i className="fa fa-fw fa-angle-left"></i>
      </a>
    </li>
  </ul>
  <ul style={{ color: 'rgba(255, 255, 255, 0.5)'}}  className="navbar-nav ml-auto">

    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle mr-lg-2" id="alertsDropdown" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <i className="fa fa-fw fa-pencil"></i>
        <span className="d-lg-none">Alerts
        </span>
        <span className="indicator text-warning d-none d-lg-block">
        </span>
      </a>
      <div className="dropdown-menu" aria-labelledby="alertsDropdown">
        <div className="dropdown-divider"></div>
        <a className="dropdown-item" href="#">
          <span className="text-success">
            <strong>
              <i className="fa fa-long-arrow-up fa-fw"></i>Upload a new script</strong>
          </span>
        </a>
      </div>
    </li>

    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle mr-lg-2" id="messagesDropdown" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <i className="fa fa-fw fa-envelope"></i>
        <span className="d-lg-none">Messages
          <span className="badge badge-pill badge-primary">12 New</span>
        </span>
        <span className="indicator text-primary d-none d-lg-block">
          <i className="fa fa-fw fa-circle"></i>
        </span>
      </a>
      <div className="dropdown-menu" aria-labelledby="messagesDropdown">
        <h6 className="dropdown-header">New Messages:</h6>
        <div className="dropdown-divider"></div>
        <a className="dropdown-item" href="#">
          <strong>David Miller</strong>
          <span className="small float-right text-muted">11:21 AM</span>
          <div className="dropdown-message small">Hey there! This new version of SB Admin is pretty awesome! These messages clip off when they reach the end of the box so they dont overflow over to the sides!</div>
        </a>
        <div className="dropdown-divider"></div>
        <a className="dropdown-item" href="#">
          <strong>Jane Smith</strong>
          <span className="small float-right text-muted">11:21 AM</span>
          <div className="dropdown-message small">I was wondering if you could meet for an appointment at 3:00 instead of 4:00 Thanks</div>
        </a>
        <div className="dropdown-divider"></div>
        <a className="dropdown-item" href="#">
          <strong>John Doe</strong>
          <span className="small float-right text-muted">11:21 AM</span>
          <div className="dropdown-message small">I've sent the final files over to you for review. When you're able to sign off of them let me know and we can discuss distribution.</div>
        </a>
        <div className="dropdown-divider"></div>
        <a className="dropdown-item small" href="#">View all messages</a>
      </div>
    </li>
    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle mr-lg-2" id="alertsDropdown" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <i className="fa fa-fw fa-bell"></i>
        <span className="d-lg-none">Alerts
          <span className="badge badge-pill badge-warning">6 New</span>
        </span>
        <span className="indicator text-warning d-none d-lg-block">
          <i className="fa fa-fw fa-circle"></i>
        </span>
      </a>
      <div className="dropdown-menu" aria-labelledby="alertsDropdown">
        <h6 className="dropdown-header">New Alerts:</h6>
        <div className="dropdown-divider"></div>
        <a className="dropdown-item" href="#">
          <span className="text-success">
            <strong>
              <i className="fa fa-long-arrow-up fa-fw"></i>Status Update</strong>
          </span>
          <span className="small float-right text-muted">11:21 AM</span>
          <div className="dropdown-message small">This is an automated server response message All systems are online.</div>
        </a>
        <div className="dropdown-divider"></div>
        <a className="dropdown-item" href="#">
          <span className="text-danger">
            <strong>
              <i className="fa fa-long-arrow-down fa-fw"></i>Status Update</strong>
          </span>
          <span className="small float-right text-muted">11:21 AM</span>
          <div className="dropdown-message small">This is an automated server response message All systems are online.</div>
        </a>
        <div className="dropdown-divider"></div>
        <a className="dropdown-item" href="#">
          <span className="text-success">
            <strong>
              <i className="fa fa-long-arrow-up fa-fw"></i>Status Update</strong>
          </span>
          <span className="small float-right text-muted">11:21 AM</span>
          <div className="dropdown-message small">This is an automated server response message All systems are online.</div>
        </a>
        <div className="dropdown-divider"></div>
        <a className="dropdown-item small" href="#">View all alerts</a>
      </div>
    </li>
    <li className="nav-item">
      <form className="form-inline my-2 my-lg-0 mr-lg-2">
        <div className="input-group">
          <input className="form-control" type="text" placeholder="Search for..."/>
          <span className="input-group-btn">
            <button className="btn btn-primary" type="button">
              <i className="fa fa-search"></i>
            </button>
          </span>
        </div>
      </form>
    </li>
    <li className="nav-item">
      <a className="nav-link" data-toggle="modal" data-target="#exampleModal">
        <i className="fa fa-fw fa-sign-out"></i>Logout</a>
    </li>
  </ul>
</div>

</div>

   );
  }
 }

module.exports = Border_left;
