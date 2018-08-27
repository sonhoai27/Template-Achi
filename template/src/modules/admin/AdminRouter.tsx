import * as React from "react";
import { Route } from "react-router-dom";
import Home from "./home";
import BlogRouter from "./blog/router";
import VideoRouter from "./videos/router";
interface Props {
  match?: any;
}
class AdminRouter extends React.Component<Props, {}> {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    var doc = document.body
    doc.classList.add('fix-header')
  }
  render() {
    return (
      <div id="wrapper">
        <Route exact path={`${this.props.match.url}`} component={Home} />
        <Route path={`${this.props.match.url}/blog`} component={BlogRouter} />
        <Route path={`${this.props.match.url}/video`} component={VideoRouter} />
      </div>
    );
  }
}
export default AdminRouter;
