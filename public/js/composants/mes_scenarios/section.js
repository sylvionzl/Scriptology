var React = require("react");

class Section extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
   <div>
       <ol className="breadcrumb">
         <li className="breadcrumb-item">
           <a href="#">Dashboard</a>
         </li>
         <li className="breadcrumb-item active">Mes scénarios</li>
       </ol>
  </div>

   );
  }
 }

module.exports = Section;
