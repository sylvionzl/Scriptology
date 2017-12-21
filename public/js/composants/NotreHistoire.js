var React = require("react");
var Navbar = require("./Navbar");
var Footer = require("./Footer");




class NotreHistoire extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
      <Navbar/>
      <div>
      <header className="masthead">
        <div className="container">
          <div className="intro2-text">
            <div className="intro2-heading text-uppercase">Le temple du scénario.</div>
            <div className="intro2-lead-in">Une communauté d'auteurs soudée par l'amour du beau récit et du beau script.</div>
            <div className="intro2-lead-in">Un forum d'entraide où chacun peut profiter de l'opinion de passionnés afin daméliorer ses écrits.</div>
            <div className="intro2-lead-in">Laccès à des oeuvres plébisicitées par nos membres.</div>
            <div className="intro2-lead-in">Lire, poster, critiquer, discuter, et le tout gratuitement!</div>


            <div className="row">
            <div className="col-lg-6 text-center" style={{padding:'40px 15px'}}>
            <a href="#auteur" className="btn btn-primary btn-lg btn-block" role="button">Coté auteur!</a>
          </div>
          <div className="col-lg-6 text-center" style={{padding:'40px 15px'}}>
            <a href="#producteur" className="btn btn-secondary btn-lg btn-block" role="button">Coté Prod!</a>
          </div>
          </div>
          </div>
        </div>
      </header>

      <section id="auteur" style={{backgroundColor: '#f8f9fa'}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h4 className="section-heading text-uppercase"> . </h4>
              </div>

              <div className="col-lg-6 text-center offset-lg-3" style={{padding:'40px 15px'}}>
              <button type="button" className="btn btn-primary btn-lg btn-block">Coté auteur!</button>
            </div>

          </div>
          <div className="row">
            <div className="col-lg-12">
              <ul className="timeline">
                <li>
                  <div className="timeline-image">
                    <img className="rounded-circle img-fluid" src="images/typewriter.png" alt=""/>
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                    <h4 className="subheading">Mettez en ligne et testez vos écrits</h4>
                    </div>
                    <div className="timeline-body" style={{textAlign:'justify'}}>
                      <p className="text-muted">Simple Logline, Synopsis, V1 du scénario ou V12 ? <br/> Venez tester aupres de la communauté et recevoir un feedback gratuit et complet. <br/> Nous vous assurons évidemment copyright. Chaque membre est également soumis à une charte éthique.</p>
                    </div>
                  </div>
                </li>
                <li className="timeline-inverted">
                  <div className="timeline-image">
                    <img className="rounded-circle img-fluid" src="images/scenario.png" alt=""/>
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4 className="subheading">Des critiques constructives et professionnelles</h4>
                    </div>
                    <div className="timeline-body">
                      <p className="text-muted">Nous avons vocation à aider chacun à valoriser son profil et ses oeuvres.<br/> Nous faisons en sorte que chaque membre ait un profil complet.<br/> Egalement, tout feedback ou commentaire est composé d'une fiche détaillé conçue par nos professionels, ainsi que d'un commentaire libre. <br/> Un systeme de messagerie est également disponible!</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="timeline-image">
                    <img className="rounded-circle img-fluid" src="images/Etoile-de-notation-455.jpg" alt="" style={{verticalAlign: 'baseline'}}/>
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4 className="subheading">Un service gratuit!</h4>
                    </div>
                    <div className="timeline-body">
                      <p className="text-muted">Toutes les fonctionnalités du site sont gratuites! Nous ne vous demandons pas de payer! <br/>
                        Toutefois, afin de faire vivre la communauté, nous vous demandons à chaque lecture de faire un retour.</p>
                    </div>
                  </div>
                </li>
                <li className="timeline-inverted">
                  <div className="timeline-image">
                    <h4>Rejoignez
                      <br/>Nous!</h4>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="producteur" style={{backgroundColor: '#212529'}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h4 className="section-heading text-uppercase"> . </h4>
              </div>

              <div className="col-lg-6 text-center offset-lg-3" style={{padding:'40px 15px'}}>
              <button type="button" className="btn btn-secondary btn-lg btn-block">Coté Prod!</button>
            </div>
          <div className="textebrutprod">
          <p> Nous sommes une plateforme de mise en relation <br/>pour auteurs et producteurs.<br/><br/>
            Si vous êtes en quête d'un scénario ou d'un scénariste, nous pouvons vous mettre à disposition toute une série dindicateurs et de données soigneusement sélectionnées.<br/><br/>

            Plusieurs formules sont à votre disposition, du gratuit au tout-compris.
  </p>
            <ul style={{textAlign: 'left'}}>
            <li>Formule logline: FREE!</li>
            <li>Formule Synopsis: </li>
            <li>Formule complète: </li>
          </ul>
      </div>
        </div>
      </div>
      </section>
      </div>



      <Footer/>
      </div>
    );
  }
}

module.exports = NotreHistoire;
