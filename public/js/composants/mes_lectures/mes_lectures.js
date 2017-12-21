var React = require("react");


class Mes_scenarios extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (

<div>
  <div className="fixed-nav sticky-footer bg-dark" id="page-top">
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
    <a className="navbar-brand" href="index.html">Scriptology</a>
    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarResponsive">
      <ul className="navbar-nav navbar-sidenav" id="exampleAccordion">
        <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Dashboard">
          <a className="nav-link" href="index.html">
            <i className="fa fa-fw fa-dashboard"></i>
            <span className="nav-link-text">DASHBOARD.</span>
          </a>
        </li>
        <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Charts">
          <a className="nav-link" href="mes_scenarios.html">
            <i className="fa fa-fw fa-area-chart"></i>
            <span className="nav-link-text">Mes scénarios.</span>
          </a>
        </li>
        <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Tables">
          <a className="nav-link" href="mes_lectures.html">
            <i className="fa fa-fw fa-table"></i>
            <span className="nav-link-text">Mes lectures.</span>
          </a>
        </li>
        <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Link">
          <a className="nav-link" href="Catalogue.html">
            <i className="fa fa-fw fa-link"></i>
            <span className="nav-link-text">Catalogue.</span>
          </a>
        </li>
      </ul>
      <ul className="navbar-nav sidenav-toggler">
        <li className="nav-item">
          <a className="nav-link text-center" id="sidenavToggler">
            <i className="fa fa-fw fa-angle-left"></i>
          </a>
        </li>
      </ul>
      <u
      l className="navbar-nav ml-auto">

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
              <div className="dropdown-message small">This is an automated server response message. All systems are online.</div>
            </a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#">
              <span className="text-danger">
                <strong>
                  <i className="fa fa-long-arrow-down fa-fw"></i>Status Update</strong>
              </span>
              <span className="small float-right text-muted">11:21 AM</span>
              <div className="dropdown-message small">This is an automated server response message. All systems are online.</div>
            </a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#">
              <span className="text-success">
                <strong>
                  <i className="fa fa-long-arrow-up fa-fw"></i>Status Update</strong>
              </span>
              <span className="small float-right text-muted">11:21 AM</span>
              <div className="dropdown-message small">This is an automated server response message. All systems are online.</div>
            </a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item small" href="#">View all alerts</a>
          </div>
        </li>
        <li className="nav-item">
          <form className="form-inline my-2 my-lg-0 mr-lg-2">
            <div className="input-group">
              <input className="form-control" type="text" placeholder="Search for...">
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
  </nav>
  <div className="content-wrapper">
    <div className="container-fluid">

      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <a href="#">Dashboard</a>
        </li>
        <li className="breadcrumb-item active">Mes lectures</li>
      </ol>


      <section className="bg-light" id="portfolio">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
            </div>
          </div>
          <div className="row">

            <div className="col-md-4 col-sm-4 portfolio-item">
              <a className="portfolio-link" data-toggle="modal" href="#portfolioModal1">
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content">
                    <i className="fa fa-plus2 fa-3x"></i>
                  </div>
                </div>
                <img className="img-fluid" src="img/raiders.jpeg" alt=""/>
              </a>
              <div className="portfolio-caption">
                <h4>Les Aventuriers de lArche perdue</h4>
                <p className="text-muted">Auteur</p>
                <p className="loglinetest">A l’orée de la seconde guerre mondiale, un professeur d’archéologie aventurier essaie de trouver l’Arche de l’Alliance avant les allemands qui comptent utiliser la puissance de la relique pour s’emparer du monde.</p>
                <a className="nav-link" href="formulaire.html">
                  <img className="img-fluid" style="height: 18px;" src="img/Etoile-de-notation-455.jpg" alt=""/>
                </a>
              </div>
            </div>

            <div className="col-md-4 col-sm-4 portfolio-item">
              <a className="portfolio-link" data-toggle="modal" href="#portfolioModal1">
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content">
                    <i className="fa fa-plus2 fa-3x"></i>
                  </div>
                </div>
                <img className="img-fluid" src="img/raiders.jpeg" alt=""/>
              </a>
              <div className="portfolio-caption">
                <h4>Les Aventuriers de lArche perdue</h4>
                <p className="text-muted">Auteur</p>
                <p className="loglinetest">A l’orée de la seconde guerre mondiale, un professeur d’archéologie aventurier essaie de trouver l’Arche de l’Alliance avant les allemands qui comptent utiliser la puissance de la relique pour s’emparer du monde.</p>
                <a className="nav-link" href="formulaire.html">
                  <img className="img-fluid" style="height: 18px;" src="img/Etoile-de-notation-455.jpg" alt=""/>
                </a>
              </div>
            </div>

            <div className="col-md-4 col-sm-4 portfolio-item">
              <a className="portfolio-link" data-toggle="modal" href="#portfolioModal1">
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content">
                    <i className="fa fa-plus2 fa-3x"></i>
                  </div>
                </div>
                <img className="img-fluid" src="img/raiders.jpeg" alt=""/>
              </a>
              <div className="portfolio-caption">
                <h4>Les Aventuriers de lArche perdue</h4>
                <p className="text-muted">Auteur</p>
                <p className="loglinetest">A l’orée de la seconde guerre mondiale, un professeur d’archéologie aventurier essaie de trouver l’Arche de l’Alliance avant les allemands qui comptent utiliser la puissance de la relique pour s’emparer du monde.</p>
                <a className="nav-link" href="formulaire.html">
                  <img className="img-fluid" style="height: 18px;" src="img/Etoile-de-notation-455.jpg" alt=""/>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>


        <div className="col-lg-4">


          <div className="card mb-3">
            <div className="card-header">
              <i className="fa fa-bell-o"></i> New comments</div>
            <div className="list-group list-group-flush small">
              <a className="list-group-item list-group-item-action" href="#">
                <div className="media">
                  <img className="d-flex mr-3 rounded-circle" src="http://placehold.it/45x45" alt=""/>
                  <div className="media-body">
                    <strong>David Miller</strong> posted a new comment to
                    <strong> your scenario : "LA Confidential" </strong>.
                    <div className="text-muted smaller">Today at 5:43 PM - 5 m ago</div>
                  </div>
                </div>
              </a>
              <a className="list-group-item list-group-item-action" href="#">
                <div className="media">
                  <img className="d-flex mr-3 rounded-circle" src="http://placehold.it/45x45" alt=""/>
                  <div className="media-body">
                    <strong>Samantha King</strong> sent you a new message!
                    <div className="text-muted smaller">Today at 4:37 PM - 1 hr ago</div>
                  </div>
                </div>
              </a>
              <a className="list-group-item list-group-item-action" href="#">
                <div className="media">
                  <img className="d-flex mr-3 rounded-circle" src="http://placehold.it/45x45" alt=""/>
                  <div className="media-body">
                    <strong>Jeffery Wellings</strong> posted a new comment to
                    <strong>your scenario : "Les Bronzés font du ski 3" </strong>.
                    <div className="text-muted smaller">Today at 4:31 PM - 1 hr ago</div>
                  </div>
                </div>
              </a>
              <a className="list-group-item list-group-item-action" href="#">
                <div className="media">
                  <img className="d-flex mr-3 rounded-circle" src="http://placehold.it/45x45" alt=""/>
                  <div className="media-body">
                    <strong>Monica Dennis</strong> posted a new comment to
                    <strong> your scenario : "Les Bidasses en Folie" </strong>.
                    <div className="text-muted smaller">Today at 3:54 PM - 2 hrs ago</div>
                  </div>
                </div>
              </a>
              <a className="list-group-item list-group-item-action" href="#">View all activity...</a>
            </div>
            <div className="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
          </div>
        </div>
      </div>


    </div>

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

    <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
            <button className="close" type="button" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">Select "Logout" below if you are ready to end your current session.</div>
          <div className="modal-footer">
            <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
            <a className="btn btn-primary" href="login.html">Logout</a>
          </div>
        </div>
      </div>
    </div>

    <script src="vendor/jquery/jquery.min.js"></script>
    <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

    <script src="vendor/jquery-easing/jquery.easing.min.js"></script>

    <script src="vendor/chart.js/Chart.min.js"></script>
    <script src="vendor/datatables/jquery.dataTables.js"></script>
    <script src="vendor/datatables/dataTables.bootstrap4.js"></script>

    <script src="js/sb-admin.min.js"></script>

    <script src="js/sb-admin-datatables.min.js"></script>
    <script src="js/sb-admin-charts.min.js"></script>
  </div>

  </div>
</div>



);
}
}

module.exports = Mes_scenarios;
