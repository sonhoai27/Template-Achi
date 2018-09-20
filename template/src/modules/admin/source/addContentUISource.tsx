import * as React from "react";
import { connect } from "react-redux";
import { reListContentUISource } from "./reSource";
import ListElementDetailUISource from "./detail-ui/detail-ui";
import { Link } from "react-router-dom";
import { BASEURLADMIN } from "../../../config/const";
import { reIsDanger, reIsSuccess } from "../../../reducers/init";
interface Props {
  match: any;
  resListContentUISource: any;
  resAddUpdateContentElement: any;
  reListContentUISource: (idUI: number, idSource: number)=> void;
  reIsSuccess: (status: boolean) => void;
  reIsDanger: (status: boolean) => void;
}
class AddContentUISource extends React.Component<Props, {}> {
  constructor(props) {
    super(props);
  }
  componentDidMount(){
    this.props.reListContentUISource(
      this.props.match.params.idUI,
      this.props.match.params.idSource
    );
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.resAddUpdateContentElement != this.props.resAddUpdateContentElement){
      if(nextProps.resAddUpdateContentElement.list){
        this.props.reListContentUISource(
          this.props.match.params.idUI,
          this.props.match.params.idSource
        );
      }
    }
  }
  render() {
    return (
      <div className="row add-element-to-ui add-content-ui-source">
        <div className="col-md-12">
          <div className="panel">
            <div className="panel-toolbar">
              <div className="panel-heading" style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between"
                }}>
              Chi tiết Landing Page
              </div>
              <div className="panel-action-bar">
               <Link target="_blank" to={BASEURLADMIN+'source/review-landing-page/'+this.props.match.params.idUI+'/'+this.props.match.params.idSource}>
               <div className="btn btn-sm btn-info">
                <i className="ti-eye"/> Xem thử
                </div>
               </Link>
              </div>
            </div>
            <div className="content">
                <ListElementDetailUISource match={this.props.match} detail={this.props.resListContentUISource.list}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = storeState => ({
  resListContentUISource: storeState.reSource.resListContentUISource,
  resAddUpdateContentElement: storeState.reUI.resAddUpdateContentElement
});
const mapDispatchToProps = {
  reListContentUISource,
  reIsDanger,
  reIsSuccess
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddContentUISource);
