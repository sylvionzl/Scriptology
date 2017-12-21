var React = require("react");
var ReactDOM = require("react-dom");

var Home = require("./Home");
var Dashboard = require("./dashboard/dashboard");
var Mes_scenarios = require("./mes_scenarios/mes_scenarios");

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
<div>
    <Mes_scenarios/>
</div>
    )
  }
}


ReactDOM.render(
    <App />,
  document.getElementById("page")
);
