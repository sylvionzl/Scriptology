var React = require("react");
var ReactDOM = require("react-dom");

var Home = require("./Home");
<<<<<<< HEAD
var Catalogue = require("./Catalogue");
var FicheProduit = require("./FicheProduit");
var NotreHistoire = require("./NotreHistoire");
var LireScenario = require("./LireScenario");
=======
var Dashboard = require("./dashboard/dashboard");
var Mes_scenarios = require("./mes_scenarios/mes_scenarios");
>>>>>>> ac30f2ce13cdeeb79c76e69ecf48fa40207f7530

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
<<<<<<< HEAD
    <LireScenario/>
=======
<div>
    <Mes_scenarios/>
</div>
>>>>>>> ac30f2ce13cdeeb79c76e69ecf48fa40207f7530
    )
  }
}


ReactDOM.render(
    <App />,
  document.getElementById("page")
);
