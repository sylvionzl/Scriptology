var React = require("react");
var ReactDOM = require("react-dom");

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
      <h1> YO </h1>
      </div>
    );
  }
}


ReactDOM.render(
    <App />,
  document.getElementById("page")
);
