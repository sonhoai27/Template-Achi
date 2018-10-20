import * as React from "react";
import { Route } from "react-router-dom";
import Home from "./home";
import BlogRouter from "./blog/router";
import VideoRouter from "./videos/router";
import GiftRouter from "./gift/router";
import UIRouter from "./ui/uiRouter";
import SourceRouter from "./source/sourceRouter";
import { connect } from "react-redux";
import Photo from "../shared/photo";
import NotifySuccess from "../shared/notifySuccess";
import NotifyDanger from "../shared/notifyDanger";
import OrderEbookRouter from "./order-ebook/orderEbookRouter";
import Loading from "./shared/loading";
interface Props {
  match?: any;
  isShowPhotoApp: any;
  isDanger: boolean;
  isSuccess: boolean;
  isLoading: boolean
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
        <Route path={`${this.props.match.url}/gift`} component={GiftRouter} />
        <Route path={`${this.props.match.url}/ui`} component={UIRouter} />
        <Route path={`${this.props.match.url}/source`} component={SourceRouter} />
        <Route path={`${this.props.match.url}/order-ebook`} component={OrderEbookRouter} />
        {this.props.isShowPhotoApp ? <Photo/> : ''}
        <div className="jq-toast-wrap top-right">
            {this.props.isSuccess ? <NotifySuccess/> : ''}
            {this.props.isDanger ? <NotifyDanger/> : ''}
        </div>
        {this.props.isLoading ? <Loading/> : ''}
      </div>
    );
  }
}
const mapStateToProps = storeState => ({
  isShowPhotoApp: storeState.reInit.isShowPhotoApp,
  isSuccess: storeState.reInit.isSuccess,
  isDanger: storeState.reInit.isDanger,
  isLoading: storeState.reInit.isLoading
});
const mapDispatchToProps = {
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminRouter);

