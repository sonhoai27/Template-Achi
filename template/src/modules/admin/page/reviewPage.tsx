import * as React from "react";
import { connect } from "react-redux";
import { reListPageUI } from "./rePage";
import ItemReviewPage from './reviewPage/item'

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
  componentDidUpdate(preProps){
    const myToggle = (e) => {
      e.target.classList.toggle("active");
      var content = e.target.nextElementSibling;
        if (content.style.maxHeight){
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
        } 
  };
    var coll = document.getElementsByClassName("collapsible");
    var i;
    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", myToggle , false);
    }
  }
  render(){
    return (
      <>
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
