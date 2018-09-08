import * as React from "react";
import { Route } from "react-router-dom";
import BlogAdd from "./add";
import Header from "../shared/header";
import BreadCrumd from "../shared/breadcrumb";
import BlogList from "./list";
import BlogDetail from "./detail";

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
    title: "Blog",
    uri: "",
    active: true
  }
];
class BlogRouter extends React.Component<Props, {}> {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <Header />
        <div id="page-wrapper">
          <div className="container-fluid">
            <BreadCrumd uri={breadCrumb} title="Bài viết" />
            <Route
              exact
              path={`${this.props.match.url}`}
              component={BlogList}
            />
            <Route path={`${this.props.match.url}/add`} component={BlogAdd} />
            <Route path={`${this.props.match.url}/detail/:idBlog`} component={BlogDetail} />
          </div>
        </div>
      </>
    );
  }
}
export default BlogRouter;
