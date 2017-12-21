var React = require("react");
var ReactDOM = require("react-dom");

var Home = require("./Home");


var Dashboard = require("./dashboard/dashboard");
var Mes_scenarios = require("./mes_scenarios/mes_scenarios");
var LireScenario = require("./LireScenario");
var Catalogue = require("./Catalogue");

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
    <Catalogue/>
    )
  }
}


ReactDOM.render(
    <App />,
  document.getElementById("page")
);
