import * as React from "react";
import { connect } from "react-redux";
import ListElementDetailUISource from "./detail-ui";
import { reAddUpdateContentElement } from "../../ui/reUI";
interface Props {
  detailUI: any;
  sub?: any;
  match: any,
  reAddUpdateContentElement: (form: any)=> void
}
interface State {
  content_element_attribute: string,
  content_element_attribute_src: string,
  content_element_data: string,
  content_element_class: string
}
class ItemDetailUISource extends React.Component<Props, State> {
  state = {
    content_element_attribute: this.props.detailUI.content_element_attribute,
      content_element_attribute_src: this.props.detailUI.content_element_attribute_src,
      content_element_data: this.props.detailUI.content_element_data,
      content_element_class: this.props.detailUI.content_element_class
  }
  saveContentElement = (obj)=> {
    const tempDom: any = document.getElementById(obj.idVirtualElement)
    this.props.reAddUpdateContentElement({
      ...obj,
      [tempDom.name]: tempDom.value
    })
  }
  generateInfo = () => {
    return (
      <div className="item-block" style={{marginBottom: 0}}>
        <div className="toolbar">
          <h3>{this.props.detailUI.element_name}</h3>
         </div>
        <div className="style">
          <div className="form-group">
            <label className="col-md-12">
              <span className="help"> Nội dung của đối tượng</span>
              <div onClick={()=> this.saveContentElement({
                idVirtualElement: this.props.detailUI.detail_ui_random_id+'-content',
                content_element_id: this.props.detailUI.content_element_id,
                content_element_id_detail_ui: this.props.detailUI.detail_ui_id,
                content_element_id_source: this.props.match.params.idSource
              })} className="btn btn-xs btn-info">
                <i className=" icon-doc" /> Lưu
              </div>
            </label>
            <div className="col-md-12">
              <textarea 
              defaultValue={this.state.content_element_data} 
              name="content_element_data" 
              id={this.props.detailUI.detail_ui_random_id+'-content'} 
              className="form-control" style={{height: 50}}/>
            </div>
          </div>
          <div className="form-group">
            <label className="col-md-12">
              <span className="help"> Class của đối tượng</span>
              <div onClick={()=> this.saveContentElement({
                idVirtualElement: this.props.detailUI.detail_ui_random_id+'-class',
                content_element_id: this.props.detailUI.content_element_id,
                content_element_id_detail_ui: this.props.detailUI.detail_ui_id,
                content_element_id_source: this.props.match.params.idSource
              })} className="btn btn-xs btn-info">
                <i className=" icon-doc" /> Lưu
              </div>
            </label>
            <div className="col-md-12">
              <input
                name="content_element_class"
                id={this.props.detailUI.detail_ui_random_id+'-class'}
                type="text"
                className="form-control"
                defaultValue={this.state.content_element_class}
              />
            </div>
          </div>
        </div>
        <div className="noi-dung">
          <div className="form-group">
            <label className="col-md-12">
              <span className="help"> Attribute của đối tượng</span>
              <div onClick={()=> this.saveContentElement({
                idVirtualElement: this.props.detailUI.detail_ui_random_id+'-attr',
                content_element_id: this.props.detailUI.content_element_id,
                content_element_id_detail_ui: this.props.detailUI.detail_ui_id,
                content_element_id_source: this.props.match.params.idSource
              })} className="btn btn-xs btn-info">
                <i className=" icon-doc" /> Lưu
              </div>
            </label>
            <div className="col-md-12">
              <input className="form-control"
              type="text"
              name="content_element_attribute"
              defaultValue={this.state.content_element_attribute}
              id={this.props.detailUI.detail_ui_random_id+'-attr'}/>
            </div>
          </div>
          <div className="form-group">
            <label className="col-md-12">
              <span className="help"> Content Attribute của đối tượng</span>
              <div onClick={()=> this.saveContentElement({
                idVirtualElement: this.props.detailUI.detail_ui_random_id+'-content-attr',
                content_element_id: this.props.detailUI.content_element_id,
                content_element_id_detail_ui: this.props.detailUI.detail_ui_id,
                content_element_id_source: this.props.match.params.idSource
              })} className="btn btn-xs btn-info">
                <i className=" icon-doc" /> Lưu
              </div>
            </label>
            <div className="col-md-12">
              <input
                name="content_element_attribute_src"
                id={this.props.detailUI.detail_ui_random_id+'-content-attr'}
                type="text"
                defaultValue={this.state.content_element_attribute_src}
                className="form-control"
              />
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
      <ListElementDetailUISource match={this.props.match} sub="child" detail={this.props.detailUI.child} />
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
});
const mapDispatchToProps = {
  reAddUpdateContentElement,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemDetailUISource);
