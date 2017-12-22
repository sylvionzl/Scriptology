var React = require('react');
var connect = require('react-redux').connect;
var Link = require('react-router-dom').Link;
var Field = require('redux-form').Field;
var reduxForm = require('redux-form').reduxForm;
var Button = require('react-bootstrap').Button;


class ContactForm extends React.Component {
  render() {
    return (
      <form onSubmit={ this.props.handleSubmit }>
        <center>
        <div>
          <label htmlFor="noteGénérale">Note générale</label>
          <Field name="noteGénérale" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="commentaireGénéral">Quels sont vos commentaires généraux sur le scénario ?</label>
          <Field name="commentaireGénéral" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="logline">Quelles sont vos remarques sur la logline ?</label>
          <Field name="logline" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="structure">Quelles sont vos remarques sur la structure ?</label>
          <Field name="structure" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="personnages">Quels sont vos commentaires sur les personnages ?</label>
          <Field name="personnages" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="denouement">Quels sont vos commentaires sur le dénouement?</label>
          <Field name="denouement" component="input" type="text" />
        </div>
        <Button bsStyle="primary" type="submit">Submit</Button>
        <p>
          <Link className="nav-link" to="/mes_scenarios">Home</Link>
        </p>
        </center>
      </form>
    )
  }
}

var ContactFormRedux = reduxForm({form: 'contact'})(ContactForm)

module.exports = ContactFormRedux;
