var React = require("react");


class Sidebar extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
      <div id="catalogue" style={{zIndex: '3', backgroundColor: '#F8F9FA', color: '#232526'}}>
        <div className="container">

                  <div id="wrapper" className="toggled">

                        <div id="sidebar-wrapper">

                          <ul className="sidebar-nav">
                              <li className="sidebar-brand">
                                  <a href="#">
                                      Thèmes
                                  </a>
                              </li>
                              <li>
                                  <a href="#">Les plus populaires</a>
                              </li>
                              <li>
                                  <a href="#">Les plus récents</a>
                              </li>
                              <li>
                                  <a href="#">Drame</a>
                              </li>
                              <li>
                                  <a href="#">Comédie</a>
                              </li>
                              <li>
                                  <a href="#">Action</a>
                              </li>
                              <li>
                                  <a href="#">Science-Fiction</a>
                              </li>
                              <li>
                                  <a href="#">Thriller</a>
                              </li>
                              <li>
                                  <a href="#">Westerns</a>
                              </li>
                              <li>
                                  <a href="#">Séries</a>
                              </li>
                              <li>
                                  <a href="#">Animation</a>
                              </li>
                              <li>
                                  <a href="#">Others</a>
                              </li>
                          </ul>
                      </div>
                  </div>
                </div>
              </div>
      </div>
    );
  }
}

module.exports = Sidebar;
