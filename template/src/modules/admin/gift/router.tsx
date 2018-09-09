import * as React from "react";
import { Route } from "react-router-dom";
import Header from "../shared/header";
import BreadCrumd from "../shared/breadcrumb";
import VideoList from "./list";
import detail from "./detail";
import add from "./add";

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
    title: "Video",
    uri: "",
    active: true
  }
];
class VideoRouter extends React.Component<Props, {}> {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <Header />
        <div id="page-wrapper">
          <div className="container-fluid">
            <BreadCrumd uri={breadCrumb} title="Video" />
            <Route
              exact
              path={`${this.props.match.url}`}
              component={VideoList}
            />
            <Route path={`${this.props.match.url}/add`} component={add} />
            <Route path={`${this.props.match.url}/detail/:idGift`} component={detail} />
          </div>
        </div>
      </>
    );
  }
}
export default VideoRouter;
