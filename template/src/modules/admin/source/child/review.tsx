import * as React from "react";
import { connect } from "react-redux";
import { reListContentUISource } from "../reSource";
import ItemReviewLandingPage from './reviewLandingPage/item'
interface Props {
    match: any,
    resListContentUISource: any,
    reListContentUISource: (idUI: number, idSource: number)=> void
  }
  interface State {
      isFinish: boolean
  }
class ReviewLandingPage extends React.Component<Props, State> {
    constructor(props) {
        super(props);
        this.state = {
            isFinish: false
        }
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.resListContentUISource != this.props.resListContentUISource){
            this.setState({
                isFinish: true
            })
        }
    }
    componentDidMount() {
        this.props.reListContentUISource(
            this.props.match.params.idUI,
            this.props.match.params.idSource
        );
    }
    render(){
        return(
            <div id="review-lading-page">
                <ItemReviewLandingPage items={this.props.resListContentUISource.list}/>
            </div>
        )
    }
}

const mapStateToProps = storeState => ({
    resListContentUISource: storeState.reSource.resListContentUISource,  });
  const mapDispatchToProps = {
    reListContentUISource
  };
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ReviewLandingPage);