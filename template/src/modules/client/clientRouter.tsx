import * as React from "react";
import { Route } from "react-router-dom";
import { BASEURL, RESOURCE } from "../../config/const";
import EbookLadingPage from "./ebook/ebook";
import {Helmet} from "react-helmet";
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
        </Helmet>
        <Route exact path={BASEURL} component={EbookLadingPage} />
      </>
    );
  }
}
export default ClientRouter;