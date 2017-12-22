var React = require("react");
var Link = require('react-router-dom').Link;

import { Button, Modal } from 'react-bootstrap';

class Item1 extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <a
          className="portfolio-link"
          data-toggle="modal"
          href="#portfolioModal1"
        >
          <div className="portfolio-hover">
            <div className="portfolio-hover-content">
              <Fiche />
            </div>
          </div>
          <img style={{height: '380px', width: '325px'}} className="img-fluid" src="images/raiders.jpeg" alt="" />
        </a>
        <div className="portfolio-caption">
          <h4>Les aventuriers de l'arche Perdue</h4>
          <p className="text-muted">Auteur</p>
          <p className="loglinetest">
            Indiana Jones, professeur d'archélogier et aventurier, se retrouve confronté aux nazis, dans la recherche de l'artefact biblique de l'Arche Perdue.
          </p>
          <img
            className="img-fluid"
            src="images/Etoile-de-notation-455.jpg"
            alt=""
          />
        </div>
      </div>
    );
  }
}

class MyLargeModal extends React.Component {
  render() {
    return (
      <Modal
        {...this.props}
        bsSize="large"
        aria-labelledby="contained-modal-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-lg">
            Indiana Jones: Les aventuriers de l'arche Perdue - Synopsis
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
              <p className="text-muted">

              Pérou, 1936. Le professeur Henry Walton Jones Jr (dit « Indiana », ou « Indy »), éminent archéologue et expert en occultisme, est sur le point de mettre la main sur une idole Chachapoyan. Après avoir échappé à une série de pièges mortels dans un ancien temple, il se fait dérober la relique de façon déloyale par son principal concurrent, un archéologue français, René Belloq. Indy parvient à semer les indiens Hovito à bord d'un hydravion et rentre bredouille aux États-Unis.
Connecticut. De retour de son voyage, Jones est mandaté par des agents des services secrets américains cherchant à décrypter un câble des partisans du IIIe Reich. Les nazis semblent être sur les traces de l'Arche d'alliance, contenant les Tables de la Loi, sur le site de Tanis en Égypte. L'Arche étant censée conférer le pouvoir de mener n'importe quelle armée à la victoire, elle ne doit en aucun cas tomber entre les mains d'Adolf Hitler. Dans leurs quêtes de pouvoir occulte, les nazis recherchent Abner Ravenwood, ancien mentor de Jones et expert sur la question. Ravenwood possède le Médaillon de Râ, un artefact permettant selon la légende de localiser précisément la relique sainte dans le « Puits des âmes ».
Indiana Jones s'envole pour le Népal pour retrouver Ravenwood, auquel il n'a plus parlé depuis des années. Il apprend de Marion, la fille de son mentor et ancien amour au caractère bien trempé, que le vieil homme est décédé. Marion possède le médaillon tant convoité qu'Indy propose d'acheter 3 000 dollars, plus 2 000 pour lui permettre de rentrer aux États-Unis. Marion accepte la vente mais la taverne est prise d'assaut par des brigands menés par l'officier de la Gestapo Arnold Toht. Au cours de l'altercation, l’établissement prend feu et Toht se brûle la main en voulant s'emparer du médaillon. Indy et Marion s'échappent avec l'artefact et partent pour l'Égypte.
Arrivés au Caire, le couple retrouve Sallah, figure emblématique de la ville et vieil ami de Jones. Ce dernier informe Indy que Belloq s'est allié aux nazis, sous les ordres du colonel Dietrich, pour fouiller le site de Tanis grâce aux inscriptions du médaillon incrustées dans la paume brûlée de la main de Toht. Dans le souk de la ville, Marion est kidnappée et emmenée de force dans un camion que Jones fait accidentellement exploser. L'aventurier est bouleversé par la mort de son ancien amour, mais décide avec l'aide de Sallah de continuer les recherches. Ils se rendent compte que les nazis ne creusent pas au bon endroit car l'autre face du médaillon fournit une précision cruciale que Toht n'a pas. Indiana s'infiltre sur le site des fouilles et découvre que Marion n'est pas morte mais retenue captive par Belloq. L'Arche d'alliance est bientôt découverte au cœur du « Puits des âmes » grouillant de serpents. Les nazis s'emparent de l'artefact sacré et scellent le puits en y laissant Indy et Marion. Le couple s'échappe et découvre que l'Arche est sur le point d'être transportée à Berlin à bord d'une aile volante, un avion expérimental. Indy tente de saboter l'opération en détruisant l'appareil, après un duel aux poings avec l'un des mécaniciens qui se solde par la mort de celui-ci, déchiqueté par une hélice. Dietrich, Toht et Belloq embarquent avec l'Arche et leur troupe à bord d'un convoi de camions. Après une course-poursuite haletante dans le désert, Jones réussit à récupérer l'artefact.
Indiana et Marion quittent l'Égypte à bord d'un navire commandé par le capitaine Katanga. Mais alors qu'ils se croient en sécurité hors des eaux territoriales, ils sont rattrapés par un sous-marin allemand. Dietrich reprend une nouvelle fois possession de l'Arche et Belloq kidnappe Marion. Jones parvient à s'enfuir et les suit jusqu'à une île de la mer Égée où Belloq prévoit d'ouvrir le coffre doré. L'archéologue stoppe la marche des nazis en les menaçant de tout détruire avec un bazooka. Mais il est raisonné par Belloq qui le pense incapable de détruire un tel témoignage de l'Histoire. Il est capturé et ficelé à un poteau avec Marion. Belloq procède à une antique cérémonie pour ouvrir l'Arche et il s’avère qu'elle ne contient que du sable... Mais soudain, des esprits ressemblant à des séraphins de l'Ancien Testament émergent du coffre. Indiana, connaissant le danger pour avoir étudié la relique avec son mentor, ordonne à Marion de fermer les yeux et de ne pas regarder cela. Les esprits prennent l'apparence terrifiante d'anges de la mort et des rayons aveuglants se mettent à frapper les nazis. Belloq, Dietrich et Toht connaissent une terrible mort à cause du regard des esprits.
Lors de l'épilogue, situé à Washington, des agents du gouvernement certifient à Indy que l'Arche est étudiée en lieu sûr par des experts et qu'elle ne sera pas accessible au public. L'archéologue est furieux. L'Arche est en réalité étiquetée (Top Secret) et vulgairement entreposée dans un gigantesque hangar poussiéreux rempli de centaines de caisses au contenu incertain.
              </p>
              <h2>Auteur : Steven Spielgerg </h2>


              <img
                className="img-fluid"
                style={{ height: "10px", textAlign: 'center' }}
                src="images/Etoile-de-notation-455.jpg"
                alt=""
              />
              <div style={{textAlign:'center'}}>
                <img
                  style={{
                    height: "150px",
                  }}
                  src="images/raiders.jpeg"
                  alt="lire scenario"
                />
              </div><Link to="/lirescenario">
              <Button className="btn btn-tertiary btn-lg btn-block"> Lire scénario </Button></Link>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

class Fiche extends React.Component {
  constructor() {
    super();
    this.state = { lgShow: false };
  }

  render() {
    let lgClose = () => this.setState({ lgShow: false });

    return (
      <div>
        <Button bsSize="large" onClick={() => this.setState({ lgShow: true })}>
          +
        </Button>
        <MyLargeModal show={this.state.lgShow} onHide={lgClose} />
      </div>
    );
  }
}

module.exports = Item1;
