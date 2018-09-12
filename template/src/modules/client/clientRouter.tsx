import * as React from "react";
import { Route } from "react-router-dom";
import { BASEURL, RESOURCE } from "../../config/const";
import {Helmet} from "react-helmet";
import ClientHome from "./home/ClientHome";
class ClientRouter extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    var doc = document.body;
    doc.classList.add("client-page");
  }
  render() {
    return (
      <>
        <Helmet>
          <link rel="stylesheet" href={RESOURCE + "css/client.css"} />
          <link rel="stylesheet" href={RESOURCE + "css/mobile.css"} media="screen and (max-width: 769px)"/>
        </Helmet>
        <Route exact path={BASEURL} component={ClientHome} />
      </>
    );
  }
}
export default ClientRouter;
