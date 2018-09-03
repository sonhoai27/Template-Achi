import * as React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import PrivateRouter from "../config/PrivateRouter";
import { BASEURL } from "../config/const";
import AdminRouter from "./admin/AdminRouter";
import ClientRouter from "./client/clientRouter";
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path={BASEURL} component={ClientRouter} />
          <PrivateRouter path={BASEURL + "admin"} component={AdminRouter} />
        </Switch>
      </Router>
    );
  }
}
export default App;
