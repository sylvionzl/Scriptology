var React = require("react");
var Link = require('react-router-dom').Link;

import { Button, Modal } from 'react-bootstrap';

class Item extends React.Component {
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
          <img className="img-fluid" src="images/rvlf.jpg" alt="" />
        </a>
        <div className="portfolio-caption">
          <h4>Retour vers le futur</h4>
          <p className="text-muted">Auteur</p>
          <p className="loglinetest">
            Un adolescent débrouillard est projeté dans le passé où il doit
            faire se rencontrer ses parents pour ne pas disparaître et rétablir
            le cours du temps qu’il a changé.
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
            Retour vers le futur - Synopsis
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
              <p className="text-muted">

                Marty Mac Fly est jeune garçon de 17 ans fan de skate board et
                de guitare rock dont il veut faire le métier. Sa vie familiale
                reste cependant assez lugubre avec un oncle en prison, Lorraine
                une mère alcoolique, George un père réservé et aux ordres de son
                ignoble patron Biff qui abuse de lui. Marty compense ces
                problèmes en visitant régulièrement un de ses vieux amis: le
                scientifique Doc Emmett Brown. Celui-ci lui donne rendez-vous un
                soir pour lui montrer une de ces nouvelles inventions: la
                machine à voyager dans le temps, qui n'est autre qu'une
                Delorean. Alors qu'il faisait le plein de plutonium nécessaire
                pour son voyage dans le futur, Doc est attaqué et tué par des
                libyens auxquels il avait volé le dit plutonium. Marty ne peut
                que s'échapper avec la voiture et est envoyé dans le passé en
                1955, date de la découverte de la machine à voyager dans le
                temps. Il y rencontre par hasard son père et le sauve d'une
                collision avec une voiture. Malheureusement, c'est cette
                accident qui devait aboutir à la rencontre de ses parents,
                puisque le conducteur est le père de Lorraine. Marty rencontre
                Doc de 1955 pour l'aider à retourner en 1985. Ce dernier lui
                propose de canaliser l'électricité d'un éclair qui, on le sait,
                s'abattra sur l'hôtel de ville à 10h04 précisément. Mais Marty
                doit quant à lui résoudre le problème de ses parents et les
                force à se rencontrer lors de la soirée dansante des Sirènes.
                Son stratagème aboutit finalement par un heureux hasard au
                triomphe de George qui assomme Biff Tannen d'un coup de poing
                mémorable, et qui au passage conquiert le coeur de Lorraine.
                Marty est ensuite renvoyé vers le futur grâce à lidée de Doc.
                De retour du passé, Marty cherche à sauver Doc de la fusillade
                avec les libyens. Ce dernier porte en réalité un gilet par-balle
                suivant ainsi les conseils que lui avait donné Marty dans une
                lettre remise en 1955.
              </p>
              <h2>Auteur : Robert Zemeckis </h2>


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
                  src="images/rvlf.jpg"
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

module.exports = Item;
