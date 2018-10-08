import * as React from "react";
import { connect } from "react-redux";
import { reListPageUI } from "./rePage";
import ListElementDetailUIPage from "./detail-ui/detail-ui";
import { Link } from "react-router-dom";
import { BASEURLADMIN } from "../../../config/const";
import { reIsDanger, reIsSuccess, reSetCurrentEditorPhoto, reShowPhotoApp } from "../../../reducers/init";
import ModalEditContentElement from "./detail-ui/ModalEditContentElement";
import { reShowEditContent } from "../source/reSource";

interface IProps {
  match: any;
  resListPageUI: any;
  reListPageUI: (id: number) => void;
  resSaveContent: any;
  reIsSuccess: (status: boolean) => void;
  reIsDanger: (status: boolean) => void;
  reShowEditContent: (status: boolean)=> void;
  resShowEditContent: any;
  reSetCurrentEditorPhoto: (editor: any)=> void;
  reShowPhotoApp: (status: boolean)=> void;
}
interface IState {}
class DetailPage extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.reListPageUI(this.props.match.params.idPage);
  }
  componentDidUpdate(preProps){
    if(this.props.resSaveContent != preProps.resSaveContent){
      if (this.props.resSaveContent.status === 200) {
        this.props.reIsSuccess(true);
        setTimeout(() => {
          this.props.reIsSuccess(false);
          this.props.reListPageUI(this.props.match.params.idPage);
        }, 2000);
      } else {
        this.props.reIsDanger(true);
        setTimeout(() => {
          this.props.reIsDanger(false);
          this.props.reListPageUI(this.props.match.params.idPage);
        }, 2000);
      }
    }
  }
  render() {
    return (
      <>
        <div className="row add-element-to-ui add-content-ui-source">
          <div className="col-md-12">
            <div className="panel">
              <div className="panel-toolbar">
                <div
                  className="panel-heading"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between"
                  }}
                >
                  Chi tiết Landing Page
                </div>
                <div className="panel-action-bar">
                  <Link
                    target="_blank"
                    to={
                      BASEURLADMIN +
                      "ui/page/review/" +
                      this.props.match.params.idPage
                    }
                  >
                    <div className="btn btn-sm btn-info">
                      <i className="ti-eye" /> Xem thử
                    </div>
                  </Link>
                </div>
              </div>
              <div className="content">
                {this.props.resListPageUI.list ? (
                  <ListElementDetailUIPage
                    match={this.props.match}
                    detail={this.props.resListPageUI.list}
                  />
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
        {this.props.resShowEditContent ? <ModalEditContentElement/> : ''}
        <div className="btn btn-sm btn-primary insert-image" onClick={()=> {
          this.props.reShowPhotoApp(true)
          this.props.reSetCurrentEditorPhoto('')
        }}>
          <i className="fa fa-file-image-o"/>
        </div>
      </>
    );
  }
}

const mapStateToProps = storeState => ({
  resListPageUI: storeState.rePage.resListPageUI,
  resSaveContent: storeState.rePage.resSaveContent,
  resShowEditContent: storeState.reSource.resShowEditContent
});
const mapDispatchToProps = {
  reListPageUI,
  reIsDanger,
  reIsSuccess,
  reShowEditContent,
  reSetCurrentEditorPhoto,
  reShowPhotoApp,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailPage);
