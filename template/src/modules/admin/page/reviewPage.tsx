import * as React from "react";
import { connect } from "react-redux";
import { reListPageUI } from "./rePage";
import ItemReviewPage from './reviewPage/item'
import Helmet from 'react-helmet'
import { RESOURCE } from "../../../config/const";
interface IProps {
  match: any;
  resListPageUI: any;
  reListPageUI: (id: number) => void;
}
interface IState {}
class ReviewPage extends React.Component<IProps, IState> {
  constructor(props){
    super(props)
  }
  componentDidMount(){
    document.body.style.overflow = "hidden"
    this.props.reListPageUI(this.props.match.params.idPage);
  }
  render(){
    return (
      <>
        <Helmet>
          <link rel="stylesheet" href={RESOURCE + "css/client.css"} />
        </Helmet>
        <div id="review-lading-page">
            <ItemReviewPage items={this.props.resListPageUI.list}/>
        </div>
      </>
    )
  }
}

const mapStateToProps = storeState => ({
  resListPageUI: storeState.rePage.resListPageUI
});
const mapDispatchToProps = {
  reListPageUI
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewPage);
