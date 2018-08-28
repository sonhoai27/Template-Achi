import * as React from "react";
import ListElementOnDetailUI from "./detail-ui";
declare var $: any;
interface Props {
  detailUI: any;
  sub?: any;
}
class ItemDetailUI extends React.Component<Props, {}> {
  constructor(props) {
    super(props);
  }
  showListElement = (id: any)=> {
    $("#listElement").modal('show')
    alert(id)
  }
  generateInfo = () => {
    return (
      <div className="item-block">
        <div className="toolbar">
          <h3>{this.props.detailUI.element_name}</h3>
          <div className="action">
            <div
              onClick={()=>this.showListElement(this.props.detailUI.detail_ui_id)}
              className="btn btn-xs btn-info"
            >
              <i className="icon-drawar" /> Thêm Element mới
            </div>
            <button className="btn btn-xs btn-danger">
              <i className=" icon-trash" /> Xoá
            </button>
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
              <button className="btn btn-xs btn-info">
                <i className=" icon-doc" /> Lưu
              </button>
            </label>
            <div className="col-md-12">
              <textarea className="form-control">
                {this.props.detailUI.detail_ui_css}
              </textarea>
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

export default ItemDetailUI;