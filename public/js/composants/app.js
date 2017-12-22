var React = require("react");
var ReactDOM = require("react-dom");
var Router    = require('react-router-dom').BrowserRouter
var Route     = require('react-router-dom').Route


var Home = require("./Home");
var Dashboard = require("./dashboard/dashboard");
var Mes_scenarios = require("./mes_scenarios/mes_scenarios");
var LireScenario = require("./LireScenario");
var Catalogue = require("./Catalogue");
var NotreHistoire = require("./NotreHistoire");
var Formulaire = require("./formulaire/formulaire");



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

  <Router>
      <div>
          <Route exact path="/" component={App}/>
          <Route exact path="/notrehistoire" component={NotreHistoire}/>
          <Route exact path="/dashboard" component={Dashboard}/>
          <Route exact path="/mes_scenarios" component={Mes_scenarios}/>
          <Route exact path="/catalogue" component={Catalogue}/>
          <Route exact path="/lirescenario" component={LireScenario}/>
          <Route exact path="/formulaire" component={Formulaire}/>
      </div>
   </Router>
    ,
  document.getElementById("page")
);
