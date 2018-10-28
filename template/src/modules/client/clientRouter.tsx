import * as React from "react";
import { Route } from "react-router-dom";
import Error from "../admin/shared/error";
import ClientBlogRoute from "./blog/ClientBlogRoute";
import ClientSourceRoute from "./source/ClientSourceRoute";
import EbookLadingPage from "./ebook/ebook";
import { connect } from "react-redux";
import NotifySuccess from "../shared/notifySuccess";
import NotifyDanger from "../shared/notifyDanger";
import ClientVideo from "./video/ClientVideo";
import ClientGift from "./gift";
import ClientAboutPage from "./About";
import ScheEvents from "./ScheEvents";
import SuggestGift from './../shared/components/suggestGift';
import SuggestKH from './../shared/components/suggestKH';
interface Props {
  match?: any;
  isDanger: boolean;
  isSuccess: boolean;
  isLoading: boolean;
}
class ClientRouter extends React.Component<Props, {}> {
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
        <div className="margin-top">
          <Route exact path={`${this.props.match.url}`} component={Error} />
          <Route
            path={`${this.props.match.url}/blog`}
            component={ClientBlogRoute}
          />
          <Route
            path={`${this.props.match.url}/khoa-hoc`}
            component={ClientSourceRoute}
          />
          <Route
            path={`${this.props.match.url}/sach`}
            component={EbookLadingPage}
          />
          <Route
            path={`${this.props.match.url}/video`}
            component={ClientVideo}
          />
          <Route
            path={`${this.props.match.url}/qua-tang`}
            component={ClientGift}
          />
          <Route
            path={`${this.props.match.url}/gioi-thieu`}
            component={ClientAboutPage}
          />
          <Route
            path={`${this.props.match.url}/lich-su-kien`}
            component={ScheEvents}
          />
          <Route
            path={`${this.props.match.url}/nhan-qua/:idGift`}
            component={SuggestGift}
          />
          <Route
            path={`${this.props.match.url}/dang-ky-khoa-hoc/:idSource`}
            component={SuggestKH}
          />
          <div className="jq-toast-wrap top-right">
            {this.props.isSuccess ? <NotifySuccess /> : ""}
            {this.props.isDanger ? <NotifyDanger /> : ""}
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = storeState => ({
  isSuccess: storeState.reInit.isSuccess,
  isDanger: storeState.reInit.isDanger,
  isLoading: storeState.reInit.isLoading
});
const mapDispatchToProps = {};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClientRouter);
