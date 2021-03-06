import * as React from "react";
import { Route } from "react-router-dom";
import Header from "../shared/header";
import BreadCrumd from "../shared/breadcrumb";
import UI from "./ui";
import AddUIDetail from "./add-ui-detail";
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
      title: "UI",
      uri: "",
      active: true
    }
  ];
class UIRouter extends React.Component<Props, {}> {
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
            <BreadCrumd uri={breadCrumb} title="UI" />
            <Route
              exact
              path={`${this.props.match.url}`}
              component={UI}
            />
            <Route
              path={`${this.props.match.url}/add-detail-ui/:idUi`}
              component={AddUIDetail}
            />
          </div>
        </div>
      </>
    );
  }
}
export default UIRouter;
