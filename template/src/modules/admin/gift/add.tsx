import * as React from "react";
import { Editor } from "@tinymce/tinymce-react";
import { connect } from "react-redux";
import { IGiftModel } from "../../../models/gift";
import { reSetCurrentEditorPhoto, reShowPhotoApp } from "../../../reducers/init";
import { reAddGift } from "./reGift";
interface IState {
  gift: IGiftModel
}
interface IProps {
  resAddGift: any;
  reAddGift: (form: IGiftModel) => void;
  reSetCurrentEditorPhoto: (editor: any)=> void;
  reShowPhotoApp: (status: boolean)=> void;

}
class GiftAdd extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);
    this.state = {
      gift: {
        gift_id: 0,
        gift_active: 0,
        gift_cover: '',
        gift_name: '',
        gift_promo: '',
        gift_uri_file: ''
      }
    }
  }
  onChange = (e: any)=> {
    this.setState({
      gift: {
        ...this.state.gift,
        [e.target.name]: e.target.value
      }
    })
  }
  addGift = ()=> {
    const temDom: any = document.getElementById('img-cover-blog-preview')
    const tempGift = this.state.gift
    delete tempGift.gift_id
    this.props.reAddGift({
      ...tempGift,
      gift_cover: temDom.src
    })
  }
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="panel">
            <div className="panel-toolbar">
              <div className="panel-heading">Thêm quà tặng</div>
              <div className="panel-action-bar">
                <div className="btn btn-xs btn-info" onClick={this.addGift}>Lưu</div>
              </div>
            </div>
            <div className="content">
              <div className="row">
                <div className="col-sm-9">
                  <div className="form-group">
                    <label className="col-md-12">
                      <span className="help"> Tên</span>
                    </label>
                    <div className="col-md-12">
                      <input
                        onChange={this.onChange}
                        name="gift_name"
                        type="text"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-md-12">
                      <span className="help"> Link quà tặng</span>
                    </label>
                    <div className="col-md-12">
                      <input
                        onChange={this.onChange}
                        name="gift_uri_file"
                        type="text"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-md-12">
                      <span className="help"> Tóm tắt</span>
                    </label>
                    <div className="col-md-12">
                      <Editor
                        onChange={(e: any)=> {
                        const html: string = e.level.content
                        this.setState({
                            gift: {
                              ...this.state.gift,
                              gift_promo: html
                            }
                          })
                        }}
                        apiKey="t7eqx9nyehld0fibzbgtu06aax2f3beil1q091d12j97cmfl"
                        init={{
                          selector: "textarea",
                          spellchecker_language: 'vi-VN',
                          height: 500,
                          theme: "modern",
                          plugins:
                            "print preview fullpage searchreplace autolink directionality visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists textcolor wordcount imagetools contextmenu colorpicker textpattern help",
                          toolbar1:
                            "fontsizeselect formatselect | bold italic strikethrough forecolor backcolor | link addImage blockquote | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent  | removeformat",
                          fontsize_formats:
                            "10pt 11pt 12pt 14pt 16pt 18pt 20pt 24pt 26pt 28pt 36pt 48pt 72pt",
                          setup: editor => {
                            editor.addButton("addImage", {
                              icon: "image",
                              tooltip: "Add Image",
                              onclick: () => {
                                alert("KAKKA");
                              }
                            });
                          }
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="form-group">
                    <label className="col-sm-12">Tặng? - mặc định là không tặng.</label>
                    <div className="col-sm-12">
                      <select className="form-control" onChange={this.onChange}
                        name="gift_active">
                        <option>Chọn</option>
                        <option value={0}>Không</option>
                        <option value={1}>Có</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-sm-12">Hình cover</label>
                    <div className="col-sm-12 cover-blog" onClick={()=> {
                      this.props.reShowPhotoApp(true)
                      this.props.reSetCurrentEditorPhoto('img-cover-blog-preview')
                    }}>
                      <i className="ti-upload"/>
                      <img id="img-cover-blog-preview" className="img-responsive"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = storeState => ({
  resAddGift: storeState.reGift.resAddGift
});
const mapDispatchToProps = {
  reSetCurrentEditorPhoto,
  reShowPhotoApp,
  reAddGift
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GiftAdd);
