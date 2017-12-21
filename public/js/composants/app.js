var React = require("react");
var ReactDOM = require("react-dom");

var Home = require("./Home");

var Catalogue = require("./Catalogue");
var FicheProduit = require("./FicheProduit");
var NotreHistoire = require("./NotreHistoire");
var LireScenario = require("./LireScenario");

var Dashboard = require("./dashboard/dashboard");
var Mes_scenarios = require("./mes_scenarios/mes_scenarios");


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
