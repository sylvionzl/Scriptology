var React = require('react');
var ReactDOM = require('react-dom');
var createStore = require('redux').createStore;
var Provider = require('react-redux').Provider;
var combineReducers = require('redux').combineReducers;
var formReducer = require('redux-form').reducer;
var Link = require('react-router-dom').Link
var Router = require('react-router-dom').BrowserRouter
var Route = require('react-router-dom').Route
var connect = require('react-redux').connect;

var notegenerale = require('./notegeneralereducer');
var commentaire = require('./commentairereducer');
var logline= require('./loglinereducer');
var structure = require('./structurereducer');
var personnages = require('./personnagesreducer');
var denouement = require('./denouementreducer');

var BrowserRouter = require('react-router-dom').BrowserRouter;
var Redirect = require('react-router-dom').Redirect;

var ContactFormRedux = require('./reduxForm');
var HomeDisplayRedux = require('./displayReduxform');

class AppForm extends React.Component {

  constructor() {
    super();
    this.submit = this.submit.bind(this);
    this.state = {valide : false};
  }

  submit(values){
    console.log(values);
    this.props.onSubmit(values);
    this.setState({
      valide : true
    });
  }

  render() {

    if(this.state.valide == true) {
      return (
        <Redirect to="/mes_scenarios" />
      );
      } else {
        return (
          <div>
            <ContactFormRedux onSubmit={this.submit}/>
          </div>
        );
      }
    }
  }

function mapDispatchToProps(dispatch) {
  return {
    onSubmit: function(data) {
      dispatch( {type: 'addnotegenerale', notegenerale: data.notegenerale } );
      dispatch( {type: 'addcommentaire', commentaire:data.commentaire } );
      dispatch( {type: 'addlogline', logline:data.logline} );
      dispatch( {type: 'addstructure', structure:data.structure} );
      dispatch( {type: 'addpersonnages', personnages:data.personnages} );
      dispatch( {type: 'adddenouement', denouement:data.commentaire } );
    },
  }
}

var AppFormRedux = connect(null, mapDispatchToProps)(AppForm);

var globalReducers = combineReducers({form: formReducer, notegenerale, commentaire, logline, structure, personnages, denouement});
const store = createStore(globalReducers);

module.exports = store;
