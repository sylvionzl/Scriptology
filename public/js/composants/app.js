var React = require("react");
var ReactDOM = require("react-dom");

var Home = require("./Home");

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
    <Home/>
    )
  }
}


ReactDOM.render(
    <App />,
  document.getElementById("page")
);
