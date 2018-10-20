import * as React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import PrivateRouter from "../config/PrivateRouter";
import Loadable from "react-loadable";
import { connect } from "react-redux";
import { reCheckLogin } from "../reducers/init";
import Login from "./admin/shared/login";
import Error from "./admin/shared/error";
import { BASEURL } from "../config/const";
import ClientHome from "./client/home/ClientHome";
import { LoadingPage } from "./client/client-shared/LoadingPage";
interface IProps {
  reCheckLogin: () => void;
  resCheckLogin: any;
}

interface IState {
  user: any;
}

class App extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
  }

  componentDidUpdate(preProps) {
    if (preProps.resCheckLogin != this.props.resCheckLogin) {
      this.setState({
        user: this.props.resCheckLogin
      });
    }
  }
  componentDidMount() {
    this.props.reCheckLogin();
  }
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route exact path={BASEURL} component={ClientHome} />
            <Route
              path={BASEURL + "page"}
              component={Loadable({
                loader: () =>
                  import(/*webpackChunkName: "client"*/ "./client/clientRouter"),
                loading: () => <LoadingPage/>
              })}
            />
            {this.state.user.status === 404 ? (
              <Route path={BASEURL + "login"} component={Login} />
            ) : (
              <Route path={BASEURL + "login"} component={Error} />
            )}
            {this.state.user.status ? (
              <PrivateRouter
              resCheckLogin={this.state.user}
              path={BASEURL + "admin"}
              component={Loadable({
                loader: () =>
                  import(/*webpackChunkName: "admin"*/ "./admin/AdminRouter"),
                loading: () => <LoadingPage/>
              })}
            />
            ) : (
              ""
            )}
          </Switch>
        </Router>
      </>
    );
  }
}

const mapStateToProps = storeState => ({
  resCheckLogin: storeState.reInit.resCheckLogin
});
const mapDispatchToProps = {
  reCheckLogin
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
