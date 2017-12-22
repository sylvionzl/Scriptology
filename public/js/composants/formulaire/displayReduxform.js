var React = require('react');
var connect   = require('react-redux').connect;

class DisplayForm extends React.Component {

  render() {
    return (

<div>
    <h2>{this.props.notegenerale}</h2>
    <h2>{this.props.commentaire}</h2>
    <h2>{this.props.logline}</h2>
    <h2>{this.props.structure}</h2>
    <h2>{this.props.personnages}</h2>
    <h2>{this.props.denouement}</h2>
</div>


    );
  }
}

function mapStateToProps(state) {
  return { notegenerale: state.notegenerale, commentaire:state.commentaire, logline:state.logline, structure:state.structure, personnages:state.personnages, denouement:state.denouement  }
}

var DisplayFormRedux = connect(mapStateToProps, null)(DisplayForm);

module.exports = DisplayFormRedux;
