var React = require("react");
var ReactDOM = require("react-dom");

var Home = require("./Home");
var Catalogue = require("./Catalogue");
var FicheProduit = require("./FicheProduit");
var NotreHistoire = require("./NotreHistoire");
var LireScenario = require("./LireScenario");

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
    <LireScenario/>
    )
  }
}


ReactDOM.render(
    <App />,
  document.getElementById("page")
);
