import * as React from "react";
import { connect } from "react-redux";
import ListElementDetailUIPage from "./detail-ui";
import { reSaveContent } from "../rePage";
interface Props {
  detailUI: any;
  sub?: any;
  match: any,
  reSaveContent: (form: any)=> void
}
interface State {
  content_page_attribute: string,
  content_page_attribute_src: string,
  content_page_data: string,
  content_page_class: string
}
class ItemDetailUIPage extends React.Component<Props, State> {
  state = {
    content_page_attribute: this.props.detailUI.content_page_attribute,
      content_page_attribute_src: this.props.detailUI.content_page_attribute_src,
      content_page_data: this.props.detailUI.content_page_data,
      content_page_class: this.props.detailUI.content_page_class
  }
  saveContentPage = (obj)=> {
    const tempDom: any = document.getElementById(obj.idVirtualElement)
    this.props.reSaveContent({
      ...obj,
      [tempDom.name]: tempDom.value
    })
  }
  generateInfo = () => {
    return (
      <div className="item-block" style={{marginBottom: 0}}>
        <div className="toolbar" style={{justifyContent: 'left'}}>
          <h3>{this.props.detailUI.element_name}</h3>
          <input type="text"
            name="content_page_name"
            id={this.props.detailUI.detail_ui_random_id+'-name-row'} 
            defaultValue={this.props.detailUI.content_page_name}
            className="form-control" style={{
            width: '10%',
            marginLeft: '16px',
            marginRight: '16px'
          }}/>
          <div onClick={()=> this.saveContentPage({
                idVirtualElement: this.props.detailUI.detail_ui_random_id+'-name-row',
                content_page_id: this.props.detailUI.content_page_id,
                content_page_id_detail_ui: this.props.detailUI.detail_ui_id
              })} className="btn btn-xs btn-info">Lưu tên</div>
         </div>
        <div className="style">
          <div className="form-group">
            <label className="col-md-12">
              <span className="help"> Nội dung của đối tượng</span>
              <div onClick={()=> this.saveContentPage({
                idVirtualElement: this.props.detailUI.detail_ui_random_id+'-content',
                content_page_id: this.props.detailUI.content_page_id,
                content_page_id_detail_ui: this.props.detailUI.detail_ui_id
              })} className="btn btn-xs btn-info">
                <i className=" icon-doc" /> Lưu
              </div>
            </label>
            <div className="col-md-12">
              <textarea 
              defaultValue={this.state.content_page_data} 
              name="content_page_data" 
              id={this.props.detailUI.detail_ui_random_id+'-content'} 
              className="form-control" style={{height: 50}}/>
            </div>
          </div>
          <div className="form-group">
            <label className="col-md-12">
              <span className="help"> Class của đối tượng</span>
              <div onClick={()=> this.saveContentPage({
                idVirtualElement: this.props.detailUI.detail_ui_random_id+'-class',
                content_page_id: this.props.detailUI.content_page_id,
                content_page_id_detail_ui: this.props.detailUI.detail_ui_id
              })} className="btn btn-xs btn-info">
                <i className=" icon-doc" /> Lưu
              </div>
            </label>
            <div className="col-md-12">
              <input
                name="content_page_class"
                id={this.props.detailUI.detail_ui_random_id+'-class'}
                type="text"
                className="form-control"
                defaultValue={this.state.content_page_class}
              />
            </div>
          </div>
        </div>
        <div className="noi-dung">
          <div className="form-group">
            <label className="col-md-12">
              <span className="help"> Attribute của đối tượng</span>
              <div onClick={()=> this.saveContentPage({
                idVirtualElement: this.props.detailUI.detail_ui_random_id+'-attr',
                content_page_id: this.props.detailUI.content_page_id,
                content_page_id_detail_ui: this.props.detailUI.detail_ui_id
              })} className="btn btn-xs btn-info">
                <i className=" icon-doc" /> Lưu
              </div>
            </label>
            <div className="col-md-12">
              <input className="form-control"
              type="text"
              name="content_page_attribute"
              defaultValue={this.state.content_page_attribute}
              id={this.props.detailUI.detail_ui_random_id+'-attr'}/>
            </div>
          </div>
          <div className="form-group">
            <label className="col-md-12">
              <span className="help"> Content Attribute của đối tượng</span>
              <div onClick={()=> this.saveContentPage({
                idVirtualElement: this.props.detailUI.detail_ui_random_id+'-content-attr',
                content_page_id: this.props.detailUI.content_page_id,
                content_page_id_detail_ui: this.props.detailUI.detail_ui_id
              })} className="btn btn-xs btn-info">
                <i className=" icon-doc" /> Lưu
              </div>
            </label>
            <div className="col-md-12">
              <input
                name="content_page_attribute_src"
                id={this.props.detailUI.detail_ui_random_id+'-content-attr'}
                type="text"
                defaultValue={this.state.content_page_attribute_src}
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
      <ListElementDetailUIPage match={this.props.match} sub="child" detail={this.props.detailUI.child} />
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
  reSaveContent,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemDetailUIPage);
