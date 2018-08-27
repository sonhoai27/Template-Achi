import * as React from "react";
import Header from "./shared/header";
import BreadCrumd from "./shared/breadcrumb";

const breadCrumb = [
    {
        title: 'Admin',
        uri: '',
        active: false
    },
    {
        title: 'Blog',
        uri: '',
        active: true
    }
]
class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <Header />
        <div id="wrapper">
          <div className="container-fluid">
            <BreadCrumd uri={breadCrumb} title="Bài viết"/>
          </div>
        </div>
      </>   
    );
  }
}

export default Home;
