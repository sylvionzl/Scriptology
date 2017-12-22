var React = require("react");
var Link = require('react-router-dom').Link;

class Scenarios extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
   <div>

       <section className="bg-light" id="portfolio">
         <div className="container">
           <div className="row">
             <div className="col-lg-12 text-center">
             </div>
           </div>
           <div className="row">

             <div className="col-md-4 col-sm-4 portfolio-item">
               <Link to="/lirescenario">
               <a className="portfolio-link" data-toggle="modal" href="#portfolioModal1">
                 <div className="portfolio-hover">
                   <div className="portfolio-hover-content">
                     <i className="fa fa-plus fa-3x"></i>
                   </div>
                 </div>
                 <img style={{height: '380px', width: '325px'}} className="img-fluid" src="images/rvlf.jpg" alt=""/>
               </a>
               </Link>
               <div className="portfolio-caption">
                 <h4>Retour vers le futur</h4>
                 <p className="text-muted">Auteur</p>
                 <p className="loglinetest">Un adolescent débrouillard est projeté dans le passé où il doit faire se rencontrer ses parents pour ne pas disparaître et rétablir le cours du temps qu’il a changé.</p>
                 <Link to="/lirescenario">
                   <img className="img-fluid" style={{ height: '18px'}} src="images/Etoile-de-notation-455.jpg" alt=""/>
                 </Link>
               </div>
             </div>


             <div className="col-md-4 col-sm-4 portfolio-item">
               <a className="portfolio-link" data-toggle="modal" href="#portfolioModal1">
                 <div className="portfolio-hover">
                   <div className="portfolio-hover-content">
                     <i className="fa fa-plus fa-3x"></i>
                   </div>
                 </div>
                 <img style={{height: '380px', width: '325px'}} className="img-fluid" src="images/raiders.jpeg" alt=""/>
               </a>
               <div className="portfolio-caption">
                 <h4>Les aventuriers de l'arche perdue</h4>
                 <p className="text-muted">Auteur</p>
                 <p className="loglinetest">Indiana Jones, professeur d'archélogier et aventurier, se retrouve confronté aux nazis, dans la recherche de l'artefact biblique de l'Arche Perdue.</p>
                 <a className="nav-link" href="#">
                   <img className="img-fluid" style={{ height: '18px'}} src="images/Etoile-de-notation-455.jpg" alt=""/>
                 </a>
               </div>
             </div>

           </div>
         </div>
       </section>

  </div>

   );
  }
 }

module.exports = Scenarios;
