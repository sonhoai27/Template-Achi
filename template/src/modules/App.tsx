import * as React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import PrivateRouter from "../config/PrivateRouter";
import { BASEURL } from "../config/const";
import Loadable from 'react-loadable';
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path={BASEURL} component={Loadable({
            loader: () => import(/*webpackChunkName: "client"*/'./client/clientRouter'),
            loading: ()=> <h1>Loading....</h1>,
          })} />
          <PrivateRouter path={BASEURL + "admin"}
          component={Loadable({
            loader: () => import(/*webpackChunkName: "admin"*/'./admin/AdminRouter'),
            loading: ()=> <h1>Loading....</h1>,
          })} />
        </Switch>
      </Router>
    );
  }
}
export default App;
