import * as React from "react";
import { Editor } from "@tinymce/tinymce-react";
import { connect } from "react-redux";
import { reShowPhotoApp, reSetCurrentEditorPhoto } from "../../../reducers/init";
import { reListUI } from "../ui/reUI";
import { reAddSource } from "./reSource";
import { alias } from "../../../utils/alias";
interface Props {
  reSetCurrentEditorPhoto: (editor: any)=> void,
  reShowPhotoApp: (status: boolean)=> void,
  resListUI: any,
  reListUI: ()=> void,
  resAddSource: any,
  reAddSource: (form: any)=> void
}

interface State {
  source: {
    source_title: string,
    source_promo: string,
    source_content: any,
    source_id_ui: number,
    source_status: number
  }
}
class AddSource extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      source: {
        source_title: '',
        source_promo: '',
        source_content: '',
        source_id_ui: 0,
        source_status: 0
      }
    }
  }
  componentDidMount(){
    this.props.reListUI()
  }
  renderListUI = ()=> {
    if(this.props.resListUI){
      return this.props.resListUI.map((element => {
        return (
          <option value={element.ui_id}>{element.ui_name}</option>
        )
      }))
    }
    return ''
  }
  addSource = ()=> {
    const tempDomImage: any = document.getElementById('img-cover-blog-preview')
    this.props.reAddSource({
      ...this.state.source,
      source_alias: alias(this.state.source.source_title),
      source_cover: tempDomImage.src
    })
  }
  onChange = (e: any)=> {
    const name = e.target.name
    const value = e.target.value
    // @ts-ignore
    this.setState({
     source: {
      ...this.state.source,
      [name]: value
     }
    })
  }
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="panel">
            <div className="panel-toolbar">
              <div className="panel-heading">Thêm khóa học</div>
              <div className="panel-action-bar">
                <div
                  onClick={this.addSource}
                  className="btn btn-xs btn-info">Lưu</div>
              </div>
            </div>
            <div className="content">
              <div className="row">
                <div className="col-sm-9">
                  <div className="form-group">
                    <label className="col-md-12">
                      <span className="help"> Tiêu đề</span>
                    </label>
                    <div className="col-md-12">
                      <input
                        onChange={(e)=>this.onChange(e)}
                        name="source_title"
                        type="text"
                        className="form-control"
                        placeholder="Tiêu đề"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-md-12">
                      <span className="help"> Tóm tắt</span>
                    </label>
                    <div className="col-md-12">
                      <input
                        onChange={(e)=>this.onChange(e)}
                        type="text"
                        name="source_promo"
                        className="form-control"
                        placeholder="Tóm tắt"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-md-12">
                      <Editor
                        onChange={(e: any)=> {
                          // @ts-ignore
                          this.setState({
                            source: {
                              ...this.state.source,
                              source_content: e.level.content
                            }
                          })
                        }}
                        apiKey="t7eqx9nyehld0fibzbgtu06aax2f3beil1q091d12j97cmfl"
                        init={{
                          selector: "textarea",
                          height: 500,
                          theme: "modern",
                          plugins:
                            "print preview fullpage powerpaste searchreplace autolink directionality advcode visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists textcolor wordcount tinymcespellchecker a11ychecker imagetools mediaembed  linkchecker contextmenu colorpicker textpattern help",
                          toolbar1:
                            "fontsizeselect formatselect | bold italic strikethrough forecolor backcolor | link addImage blockquote | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent  | removeformat",
                          fontsize_formats:
                            "10pt 11pt 12pt 14pt 16pt 18pt 20pt 24pt 26pt 28pt 36pt 48pt 72pt",
                          setup: editor => {
                            editor.addButton("addImage", {
                              icon: "image",
                              tooltip: "Add Image",
                              onclick: () => {
                                this.props.reShowPhotoApp(true)
                                this.props.reSetCurrentEditorPhoto(editor)
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
                    <label className="col-sm-12">Giao diện</label>
                    <div className="col-sm-12">
                      <select
                        onChange={(e)=>this.onChange(e)}
                        name="source_id_ui"
                        className="form-control">
                        <option>Chọn</option>
                        {this.renderListUI()}
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-sm-12">Trạng thái</label>
                    <div className="col-sm-12">
                      <select
                        onChange={(e)=>this.onChange(e)}
                        name="source_status"
                        className="form-control">
                        <option>Chọn</option>
                        <option value='0'>Hiện</option>
                        <option value='1'>Ẩn</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-sm-12">Hình cover</label>
                    <div
                      onClick={()=> {
                        this.props.reShowPhotoApp(true)
                        this.props.reSetCurrentEditorPhoto('img-cover-blog-preview')
                      }}
                      className="col-sm-12 cover-blog">
                      <i className="ti-upload" />
                      <img id="img-cover-blog-preview" className="img-responsive" />
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
  resListUI: storeState.reUI.resListUI,
  resAddSource: storeState.reSource.resAddSource
});
const mapDispatchToProps = {
  reSetCurrentEditorPhoto,
  reShowPhotoApp,
  reListUI,
  reAddSource
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddSource);

