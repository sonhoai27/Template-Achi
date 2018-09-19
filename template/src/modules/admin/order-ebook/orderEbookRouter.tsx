import * as React from "react";
import BreadCrumd from "../shared/breadcrumb";
import { Route } from "react-router";
import orderEbook from "./orderEbook";
import Header from "../shared/header";
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
class OrderEbookRouter extends React.Component<Props, {}> {
  constructor(props){
    super(props)
    console.log(this.props.match)
  }
  render(){
    return (
      <>
      <Header />
        <div id="page-wrapper">
          <div className="container-fluid">
            <BreadCrumd uri={breadCrumb} title="Đăng ký sách" />
            <Route
              exact
              path={`${this.props.match.url}`}
              component={orderEbook}
            />
            <Route
              path={`${this.props.match.url}/package`}
              component={orderEbook}
            />
            <Route
              path={`${this.props.match.url}/package/add`}
              component={orderEbook}
            />
          </div>
        </div>
      </>
    )
  }
}

export default OrderEbookRouter