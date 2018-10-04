import * as React from "react";
import { connect } from "react-redux";
import { reListContentUISource, reShowEditContent } from "./reSource";
import ListElementDetailUISource from "./detail-ui/detail-ui";
import { Link } from "react-router-dom";
import { BASEURLADMIN } from "../../../config/const";
import { reIsDanger, reIsSuccess } from "../../../reducers/init";
import ModalEditContentElement from "./detail-ui/ModalEditContentElement";
interface Props {
  match: any;
  resListContentUISource: any;
  resAddUpdateContentElement: any;
  reListContentUISource: (idUI: number, idSource: number)=> void;
  reIsSuccess: (status: boolean) => void;
  reIsDanger: (status: boolean) => void;
  reShowEditContent: (status: boolean)=> void;
  resShowEditContent: any;
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
  componentDidUpdate(preProps){
      if(this.props.resAddUpdateContentElement != preProps.resAddUpdateContentElement){
          if (this.props.resAddUpdateContentElement.status === 200) {
              this.props.reIsSuccess(true);
              setTimeout(() => {
                  this.props.reIsSuccess(false);
                  this.props.reListContentUISource(
                      this.props.match.params.idUI,
                      this.props.match.params.idSource
                  );
              }, 2000);
          } else {
              this.props.reIsDanger(true);
              setTimeout(() => {
                  this.props.reIsDanger(false);
                  this.props.reListContentUISource(
                      this.props.match.params.idUI,
                      this.props.match.params.idSource
                  );
              }, 2000);
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
          {this.props.resShowEditContent ? <ModalEditContentElement/> : ''}
      </div>
    );
  }
}
const mapStateToProps = storeState => ({
  resListContentUISource: storeState.reSource.resListContentUISource,
  resAddUpdateContentElement: storeState.reUI.resAddUpdateContentElement,
  resShowEditContent: storeState.reSource.resShowEditContent
});
const mapDispatchToProps = {
  reListContentUISource,
  reIsDanger,
  reIsSuccess,
  reShowEditContent
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddContentUISource);
