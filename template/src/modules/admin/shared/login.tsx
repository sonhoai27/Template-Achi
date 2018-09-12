import * as React from "react";
import Helmet from 'react-helmet'
import { RESOURCE } from "../../../config/const";
class Login extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <Helmet>
          <link rel="stylesheet" href={RESOURCE + "css/custom.css"} />
        </Helmet>
        <section
          id="wrapper"
          className="login-register"
          style={{ height: "100vh" }}
        >
          <div className="login-box login-sidebar">
            <div className="white-box">
              <a className="text-center db">
                <h1>Nguyen Minh Chi</h1>
              </a>
              <div className="form-group m-t-40">
                <div className="col-xs-12">
                  <input
                    className="form-control"
                    type="email"
                    required
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="col-xs-12">
                  <input
                    className="form-control"
                    type="password"
                    required
                    placeholder="Password"
                  />
                </div>
              </div>
              <div className="form-group text-center m-t-20">
                <div className="col-xs-12">
                  <button
                    className="btn btn-info btn-lg btn-block text-uppercase waves-effect waves-light"
                    type="submit"
                  >
                    Log In
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Login;
