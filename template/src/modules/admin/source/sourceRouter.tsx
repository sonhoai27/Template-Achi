import * as React from "react";
import { Route } from "react-router-dom";
import Header from "../shared/header";
import BreadCrumd from "../shared/breadcrumb";
import Source from "./source";
import AddSource from "./addSource";
interface Props {
  match?: any;
}
const breadCrumb = [
    {
      title: "Admin",
      uri: "",
      active: false
    },
    {
      title: "Source",
      uri: "",
      active: true
    }
  ];
class SourceRouter extends React.Component<Props, {}> {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    var doc = document.body
    doc.classList.add('fix-header')
  }
  render() {
    return (
      <>
      <Header />
        <div id="page-wrapper">
          <div className="container-fluid">
            <BreadCrumd uri={breadCrumb} title="Source" />
            <Route
              exact
              path={`${this.props.match.url}`}
              component={Source}
            />
            <Route
              path={`${this.props.match.url}/add-source`}
              component={AddSource}
            />
          </div>
        </div>
      </>
    );
  }
}
export default SourceRouter;
