import * as React from "react";
import ListElement from "./modal/listElement";
import {
  reDetailUI,
  reShowListElement,
  reSetCurrentMatchDetailUI,
  reSetCurrentIdElement
} from "./reUI";
import { connect } from "react-redux";
import ListElementOnDetailUI from "./detail-ui/detail-ui";
import { reIsDanger, reIsSuccess } from "../../../reducers/init";
interface Props {
  match?: any;
  resDetailUI: any;
  showListElement: any;
  currentMatchDetailUI: any;
  currentIdElement: any;
  resAddCss: any,
  reDetailUI: (id: any) => void;
  reSetCurrentMatchDetailUI: (match: any) => void;
  reShowListElement: (status: boolean) => void;
  reSetCurrentIdElement: (id: any) => void;
  reIsSuccess: (status: boolean) => void;
  reIsDanger: (status: boolean) => void;
}
class AddUIDetail extends React.Component<Props, {}> {
  constructor(props) {
    super(props);
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.resAddCss != this.props.resAddCss){
      alert("Thành công")
    }
  }
  componentDidUpdate(preProps, preState, snapsot){
  }
  componentDidMount() {
    this.props.reDetailUI(this.props.match.params.idUi);
    this.props.reSetCurrentMatchDetailUI(this.props.match);
  }
  showListElement = (id: any) => {
    this.props.reShowListElement(true);
    this.props.reSetCurrentIdElement(id);
  };
  render() {
    return (
      <div className="row add-element-to-ui">
        <div className="col-md-12">
          <div className="panel">
            <div className="panel-toolbar">
              <div className="panel-heading">Thêm chi tiết UI</div>
              <div className="panel-action-bar">
                <button
                  onClick={() => this.showListElement("")}
                  className="btn btn-xs btn-info"
                >
                  <i className="icon-drawar" /> Thêm Element mới
                </button>
              </div>
            </div>
            <div className="content-list-detail-ui">
              <ul className="detail-ui-element">
                {<ListElementOnDetailUI detail={this.props.resDetailUI.list} />}
              </ul>
            </div>
          </div>
        </div>
        {this.props.showListElement ? (
          <ListElement match={this.props.match} />
        ) : (
          ""
        )}
      </div>
    );
  }
}
const mapStateToProps = storeState => ({
  resDetailUI: storeState.reUI.resDetailUI,
  showListElement: storeState.reUI.showListElement,
  currentMatchDetailUI: storeState.reUI.currentMatchDetailUI,
  currentIdElement: storeState.reUI.currentIdElement,
  resAddCss: storeState.reUI.resAddCss
});
const mapDispatchToProps = {
  reDetailUI,
  reShowListElement,
  reSetCurrentIdElement,
  reSetCurrentMatchDetailUI,
  reIsDanger,
  reIsSuccess
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddUIDetail);
