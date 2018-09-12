import * as React from "react";
import { BASEURLADMIN } from "../../../config/const";

class Error extends React.Component {
  render() {
    return (
      <section id="wrapper" className="error-page">
        <div className="error-box">
          <div className="error-body text-center">
            <h1 className="text-danger">400</h1>
            <h3 className="text-uppercase">Page Not Found !</h3>
            <p className="text-muted m-t-30 m-b-30">
              YOU SEEM TO BE TRYING TO FIND HIS WAY HOME
            </p>
            <a
              href={BASEURLADMIN}
              className="btn btn-danger btn-rounded waves-effect waves-light m-b-40"
            >
              Back to home
            </a>
          </div>
          <footer className="footer text-center">2018 © NMC Admin.</footer>
        </div>
      </section>
    );
  }
}

export default Error;
