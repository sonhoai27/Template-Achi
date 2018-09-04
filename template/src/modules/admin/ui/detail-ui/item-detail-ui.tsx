import * as React from "react";
import ListElementOnDetailUI from "./detail-ui";
import { connect } from "react-redux";
import {
  reShowListElement,
  reSetCurrentIdElement,
  reDeleteElementToDetailUI,
  reDetailUI,
  reAddCss
} from "../reUI";
interface Props {
  detailUI: any;
  sub?: any;
  showListElement: any;
  currentIdElement: any;
  currentMatchDetailUI: any;
  deleteElementToUIDetail: any;
  reDetailUI: (idUI: any) => void;
  reDeleteElementToDetailUI: (idUI: any, idDetailUI: any) => void;
  reShowListElement: (status: boolean) => void;
  reSetCurrentIdElement: (id: any) => void,
  reAddCss: (form: any, id: number)=> void
}
interface State {
  detail_ui_css: string
}
class ItemDetailUI extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      detail_ui_css: ''
    }
  }
  componentWillReceiveProps(nextProps) {
    if (
      nextProps.deleteElementToUIDetail != this.props.deleteElementToUIDetail &&
      nextProps.deleteElementToUIDetail.list == 1
    ) {
      this.props.reDetailUI(this.props.currentMatchDetailUI.params.idUi);
    }
    
  }
  showListElement = (id: number) => {
    this.props.reShowListElement(true);
    this.props.reSetCurrentIdElement(id);
  };
  addCss = (idDetailUI: number)=> {
    this.props.reAddCss(this.state, idDetailUI)
  }
  onChangeCss = (e: any)=> {
    // @ts-ignore
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  generateInfo = () => {
    return (
      <div className="item-block">
        <div className="toolbar">
          <h3>{this.props.detailUI.element_name}</h3>
          <div className="action">
            {this.props.detailUI.element_type == 0 ? (
              <div
                onClick={() =>
                  this.showListElement(this.props.detailUI.detail_ui_id)
                }
                className="btn btn-xs btn-info"
              >
                <i className="icon-drawar" /> Thêm Element mới
              </div>
            ) : (
              ""
            )}
            <div
              onClick={() => {
                this.props.reDeleteElementToDetailUI(
                  this.props.currentMatchDetailUI.params.idUi,
                  this.props.detailUI.detail_ui_id
                );
              }}
              className="btn btn-xs btn-danger"
            >
              <i className=" icon-trash" /> Xoá
            </div>
          </div>
        </div>
        <div className="style">
          <div className="form-group">
            <label className="col-md-12">
              <span className="help"> Id của đối tượng</span>
            </label>
            <div className="col-md-12">
              <input
                type="text"
                className="form-control"
                value={this.props.detailUI.detail_ui_random_id}
              />
            </div>
          </div>
        </div>
        <div className="noi-dung">
          <div className="form-group">
            <label className="col-md-12">
              <span className="help"> Css của đối tượng</span>
              <div
                onClick={()=>{
                  this.addCss(this.props.detailUI.detail_ui_id)
                }}
                className="btn btn-xs btn-info">
                <i className=" icon-doc" /> Lưu
              </div>
            </label>
            <div className="col-md-12">
              <textarea name="detail_ui_css" onChange={this.onChangeCss} className="form-control" defaultValue={this.props.detailUI.detail_ui_css}/>
            </div>
          </div>
        </div>
      </div>
    );
  };
  generateContent = () => {
    let content = [this.generateInfo()];
    if (this.props.detailUI.child) {
      content.push(this.generateSubItemDetailUI());
    }
    return content;
  };
  generateSubItemDetailUI = () => {
    return (
      <ListElementOnDetailUI sub="child" detail={this.props.detailUI.child} />
    );
  };
  render() {
    return (
      <div
        className={`item ${this.props.sub != undefined ? this.props.sub : ""}`}
      >
        {this.generateContent()}
      </div>
    );
  }
}

const mapStateToProps = storeState => ({
  showListElement: storeState.reUI.showListElement,
  currentIdElement: storeState.reUI.currentIdElement,
  deleteElementToUIDetail: storeState.reUI.deleteElementToUIDetail,
  currentMatchDetailUI: storeState.reUI.currentMatchDetailUI,
});
const mapDispatchToProps = {
  reShowListElement,
  reSetCurrentIdElement,
  reDeleteElementToDetailUI,
  reDetailUI,
  reAddCss
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemDetailUI);
