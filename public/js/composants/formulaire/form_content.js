var React = require("react");

class Form_content extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
<div>
<section style={{ background: 'url(/images/shining.jpeg)' }} className="call-to-action text-white text-center">
  <div className="overlay"></div>
  <div className="container">
    <div className="row">
      <div className="col-xl-9 mx-auto">
        <h2 className="mb-4">Quelle est votre note générale sur le scénario?</h2>
      </div>
      <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
        <form>
          <div className="form-row">
            <div className="col-12 col-md-9 mb-2 mb-md-0">
              <input type="email" className="form-control form-control-lg" placeholder="Entrez votre note (1 à 6)"/>
            </div>
            <div className="col-12 col-md-3">
              <button type="submit" className="btn btn-block btn-lg btn-primary">Valider</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
<p></p>
  <div className="container">
    <div className="row">
      <div className="col-xl-9 mx-auto">
        <h2 className="mb-4">Quels sont vos commentaires généraux sur le scénario ?</h2>
      </div>
      <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
        <form>
          <div className="form-row">
            <div className="col-12 col-md-9 mb-2 mb-md-0">
              <input type="email" className="form-control form-control-lg" placeholder="Enter your comment..."/>
            </div>
            <div className="col-12 col-md-3">
              <button type="submit" className="btn btn-block btn-lg btn-primary">Valider</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  <p></p>
  <div className="container">
    <div className="row">
      <div className="col-xl-9 mx-auto">
        <h2 className="mb-4">Quelles sont vos remarques sur la logline ?</h2>
      </div>
      <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
        <form>
          <div className="form-row">
            <div className="col-12 col-md-9 mb-2 mb-md-0">
              <input type="email" className="form-control form-control-lg" placeholder="Enter your comment..."/>
            </div>
            <div className="col-12 col-md-3">
              <button type="submit" className="btn btn-block btn-lg btn-primary">Valider</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  <p></p>
  <div className="container">
      <div className="row">
        <div className="col-xl-9 mx-auto">
          <h2 className="mb-4">Quelles sont vos remarques sur la structure ?</h2>
        </div>
        <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
          <form>
            <div className="form-row">
              <div className="col-12 col-md-9 mb-2 mb-md-0">
                <input type="email" className="form-control form-control-lg" placeholder="Enter your comment..."/>
              </div>
              <div className="col-12 col-md-3">
                <button type="submit" className="btn btn-block btn-lg btn-primary">Valider</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <p></p>
    <div className="container">
        <div className="row">
          <div className="col-xl-9 mx-auto">
            <h2 className="mb-4">Quels sont vos commentaires sur les personnages ?</h2>
          </div>
          <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
            <form>
              <div className="form-row">
                <div className="col-12 col-md-9 mb-2 mb-md-0">
                  <input type="email" className="form-control form-control-lg" placeholder="Enter your comment..."/>
                </div>
                <div className="col-12 col-md-3">
                  <button type="submit" className="btn btn-block btn-lg btn-primary">Valider</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <p></p>
      <div className="container">
          <div className="row">
            <div className="col-xl-9 mx-auto">
              <h2 className="mb-4">Quels sont vos commentaires sur le dénouement?</h2>
            </div>
            <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
              <form>
                <div className="form-row">
                  <div className="col-12 col-md-9 mb-2 mb-md-0">
                    <input type="email" className="form-control form-control-lg" placeholder="Enter your comment..."/>
                  </div>
                  <div className="col-12 col-md-3">
                    <button type="submit" className="btn btn-block btn-lg btn-primary">Valider</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
</section>

</div>
);
}
}

module.exports = Form_content;
