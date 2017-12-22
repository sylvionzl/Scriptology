var React = require("react");
var Link = require('react-router-dom').Link;

import { Button, Modal } from 'react-bootstrap';

class Item2 extends React.Component {
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
          <img style={{height: '380px', width: '325px'}} className="img-fluid" src="images/empire.png" alt="" />
        </a>
        <div className="portfolio-caption">
          <h4>Star Wars: L'empire contre-attaque</h4>
          <p className="text-muted">Auteur</p>
          <p className="loglinetest">
          <br/>
            Luke découvre que Darth Vador est son père. Il a du mal à l'accepter.<br/><br/><br/>
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
            Star Wars: L'empire contre-attaque - Synopsis
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
              <p className="text-muted">

              En 3 ap. BY, l'Empire galactique lance dans toute la galaxie des milliers de sondes spatiales pour débusquer les membres de l'Alliance rebelle. Ces derniers se sont réfugiés depuis plusieurs mois sur Hoth, une planète de glace, dans un complexe aménagé sur le flanc d'une montagne3. Alors qu'il patrouille autour de la base, Luke Skywalker, le héros rebelle qui a détruit l'Étoile noire, repère une météorite qui s'écrase non loin de sa position. Il s'agit en fait d'un droïde-sonde impérial. Il prévient son ami Han Solo qu'il va inspecter le point d'impact avant de rentrer. Malheureusement, en chemin, il est attaqué par une monstrueuse créature des neiges : le Wampa. Après l'avoir assommé, la bête l'emmène jusqu'à sa grotte pour le dévorer. Le jeune héros parvient cependant à se réveiller juste à temps. Il tranche le bras du monstre avec son sabre laser et s'enfuit. Mais une tempête de neige s'est levée et il se perd en tentant de regagner la base. Épuisé, il finit par s'écrouler. C'est alors qu'il voit l'esprit de son ancien mentor, le Jedi Obi-Wan Kenobi, se matérialiser dans le blizzard. L'apparition fantomatique lui enjoint de se rendre dans le système Dagobah, où il pourra poursuivre son apprentissage de Jedi grâce à l'enseignement d'un ancien maître nommé Yoda4.
Luke est bientôt secouru par Han, qui envoie un signal de détresse pour que son ami soit ramené à la base. Pendant que son compagnon se rétablit, Han débusque et détruit la sonde espionne avec l'aide de son copilote Chewbacca. Cependant, l'appareil ennemi a déjà envoyé des informations à la flotte impériale. Dark Vador ordonne alors une attaque immédiate. De leur côté, les rebelles se préparent à évacuer les lieux. Pendant que les soldats freinent l'avancée des troupes impériales, les équipes techniques s'échappent de la planète. Han Solo arrive à embarquer à temps à bord de son vaisseau, le Faucon Millenium, avec Chewbacca et la chef rebelle Leia Organa5.

Luke, de son côté, prend place à bord de son chasseur X-wing et se rend sur la planète Dagobah pour trouver Yoda4. La fuite du Faucon Millenium s'avère plus difficile car l'hyperpropulsion du vaisseau est en panne6. Han Solo parvient cependant à échapper aux chasseurs impériaux en se réfugiant dans un champ d’astéroïdes7. Malgré cela, il est dans l'impossibilité de rejoindre la flotte rebelle. Il lui faut réviser son vaisseau. Il décide donc d'effectuer les réparations sur Bespin, une planète proche. Il y retrouve Lando Calrissian, un de ses vieux amis qui est le gouverneur d'une cité dans les nuages8. Pendant ce temps dans les marais de Dagobah, Yoda soumet Luke à un entraînement intensif de Jedi et le met en garde contre le Côté obscur4. Dans son vaisseau, Dark Vador est convoqué par son maître, l'Empereur Palpatine8. Ce dernier lui fait part d'un grand trouble dans la Force et de son inquiétude à propos de Luke qui serait le fils d'Anakin Skywalker. L'Empereur enjoint à ce que le jeune homme ne devienne pas un Jedi. Vador propose au contraire de convertir Luke au Côté obscur ou à défaut de le tuer9.
Luke a des prémonitions et voit ses amis en danger. Il décide alors de se rendre à son tour sur Bespin malgré les mises en garde de Yoda et de l'esprit d'Obi-Wan. Dans la cité des nuages, le lien entre Han et Leia se renforce. Mais Vador et ses troupes sont en embuscade. Trahi par Lando, Han Solo est congelé dans de la carbonite. Vador le livre ensuite à Boba Fett, un chasseur de primes à la solde de Jabba le HuttNote 4, l'ancien employeur mécontent de Solo. Pris de remords, Lando libère cependant Leia et Chewbacca et les emmène à bord du Faucon Millenium. Luke débarque alors au cœur de la cité et se voit contraint d'affronter Vador en duel au sabre laser. Le Seigneur noir fait preuve de sa maîtrise du Côté obscur et prend l'ascendant sur le jeune homme en lui tranchant la main, mettant ainsi l'apprenti Jedi à sa merci. Vador propose à Luke de se joindre à lui pour régner sur la galaxie. Comme il refuse, Luke apprend alors la terrible vérité sur son héritage : Vador lui dévoile qu'il est son père. Comprenant la vérité, Luke se jette dans le vide et échappe ainsi au Seigneur noir. Il est alors récupéré par Lando et Leia à bord du Faucon Millenium et ils réussissent ensuite à quitter la planète sans encombre11. Lando et Chewbacca déposent alors Luke et Leia à bord d'un cargo de l'Alliance rebelle puis partent à la recherche d'Han Solo12.
              </p>
              <h2>Auteur : Georges Lucas </h2>


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
                  src="images/empire.png"
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

module.exports = Item2;
