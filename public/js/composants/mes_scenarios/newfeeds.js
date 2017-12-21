var React = require("react");

class Newfeeds extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
   <div>

         <div className="col-lg-4">


           <div className="card mb-3">
             <div className="card-header">
               <i className="fa fa-bell-o"></i> New comments</div>
             <div className="list-group list-group-flush small">
               <a className="list-group-item list-group-item-action" href="#">
                 <div className="media">
                   <img className="d-flex mr-3 rounded-circle" src="http://placehold.it/45x45" alt=""/>
                   <div className="media-body">
                     <strong>David Miller</strong> posted a new comment to
                     <strong> your scenario : "LA Confidential" </strong>.
                     <div className="text-muted smaller">Today at 5:43 PM - 5 m ago</div>
                   </div>
                 </div>
               </a>
               <a className="list-group-item list-group-item-action" href="#">
                 <div className="media">
                   <img className="d-flex mr-3 rounded-circle" src="http://placehold.it/45x45" alt=""/>
                   <div className="media-body">
                     <strong>Samantha King</strong> sent you a new message!
                     <div className="text-muted smaller">Today at 4:37 PM - 1 hr ago</div>
                   </div>
                 </div>
               </a>
               <a className="list-group-item list-group-item-action" href="#">
                 <div className="media">
                   <img className="d-flex mr-3 rounded-circle" src="http://placehold.it/45x45" alt=""/>
                   <div className="media-body">
                     <strong>Jeffery Wellings</strong> posted a new comment to
                     <strong>your scenario : "Les Bronzés font du ski 3" </strong>.
                     <div className="text-muted smaller">Today at 4:31 PM - 1 hr ago</div>
                   </div>
                 </div>
               </a>
               <a className="list-group-item list-group-item-action" href="#">
                 <div className="media">
                   <img className="d-flex mr-3 rounded-circle" src="http://placehold.it/45x45" alt=""/>
                   <div className="media-body">
                     <strong>Monica Dennis</strong> posted a new comment to
                     <strong> your scenario : "Les Bidasses en Folie" </strong>.
                     <div className="text-muted smaller">Today at 3:54 PM - 2 hrs ago</div>
                   </div>
                 </div>
               </a>
               <a className="list-group-item list-group-item-action" href="#">View all activity...</a>
             </div>
             <div className="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
           </div>
         </div>

  </div>

   );
  }
 }

module.exports = Newfeeds;
