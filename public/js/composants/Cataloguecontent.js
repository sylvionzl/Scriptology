var React = require("react");
var Item = require("./Item");

class Cataloguecontent extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>

        <div
          className="container"
          style={{
            backgroundColor: "#f8f9fa",
            position: "static",
            zIndex: "3"
          }}
        >
          <div className="row">
            <div
              className="col-lg-9 offset-lg-3 text-center"
              style={{ padding: "10px" }}
            >
              <div className="card" style={{ padding: "10px" }}>
                <div className="card-block">
                  Flash News : Premier Atelier le 24/12 avec le père Noel
                </div>
              </div>
            </div>
            <div
              className="col-lg-9 offset-lg-3 text-center"
              style={{ padding: "10px" }}
            >


            </div>
          </div>

          <section className="bg-light" id="portfolio">
          <div className="row">
          <div className="col-lg-9 offset-lg-3">
            <div
              className="col-lg-3 text-center portfolio-item"
              style={{ padding: "10px" }}
            >
              <Item />
            </div>

            </div>
          </div>
          </section>
        </div>

      </div>
    );
  }
}

module.exports = Cataloguecontent;
