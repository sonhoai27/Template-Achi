import * as React from "react";
import { Editor } from "@tinymce/tinymce-react";
import { connect } from "react-redux";
import {
  reShowPhotoApp,
  reSetCurrentEditorPhoto
} from "../../../reducers/init";
import { reListUI } from "../ui/reUI";
// declare var $: any;
import { reUpdateSource, reDetailSource } from "./reSource";
import { Link } from "react-router-dom";
import { BASEURLADMIN } from "../../../config/const";
// import { alias } from "../../../utils/alias";
interface Props {
  match?: any;
  reSetCurrentEditorPhoto: (editor: any) => void;
  reShowPhotoApp: (status: boolean) => void;
  resListUI: any;
  reListUI: () => void;
  resDetailSource: any;
  reDetailSource: (id: number) => void;
}

interface State {
  source: {
    source_title: string;
    source_promo: string;
    source_content: any;
    source_id_ui: number;
    source_status: number;
  };
}
class DetailSource extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      source: {
        source_title: "",
        source_promo: "",
        source_content: "",
        source_id_ui: 0,
        source_status: 0
      }
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.resDetailSource != this.props.resDetailSource) {
      this.setState({
        source: {
          source_title: nextProps.resDetailSource.source_title,
          source_promo: nextProps.resDetailSource.source_promo,
          source_content: nextProps.resDetailSource.source_content,
          source_id_ui: nextProps.resDetailSource.source_id_ui,
          source_status: nextProps.resDetailSource.source_status
        }
      });
    }
  }
  componentDidMount() {
    this.props.reListUI();
    this.props.reDetailSource(this.props.match.params.id);
  }
  renderListUI = () => {
    if (this.props.resListUI) {
      return this.props.resListUI.map(element => {
        return (
          <option
            selected={
              this.props.resDetailSource.source_id_ui === element.ui_id
                ? true
                : false
            }
            value={element.ui_id}
          >
            {element.ui_name}
          </option>
        );
      });
    }
    return "";
  };
  saveSource = () => {
    // const tempDomImage: any = document.getElementById('img-cover-blog-preview')
    // this.props.reAddSource({
    //   ...this.state.source,
    //   source_alias: alias(this.state.source.source_title),
    //   source_cover: tempDomImage.src
    // })
  };
  onChange = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;
    // @ts-ignore
    this.setState({
      source: {
        ...this.state.source,
        [name]: value
      }
    });
  };
  render() {
    return (
      <div className="row">
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
                <h3>Thông tin khóa học</h3>
                <Link to={BASEURLADMIN+'source/list-sche/'+this.props.match.params.id}>
                  <div
                    style={{
                      marginLeft: 32,
                      marginRight: 32
                    }}
                    className="btn btn-sm btn-primary"
                  >
                    Thời khoá biểu
                  </div>
                </Link>
                <Link to={BASEURLADMIN+'source/ui-source/'+this.state.source.source_id_ui+'/'+this.props.match.params.id}>
                <div
                  className="btn btn-sm btn-primary"
                >
                  Landing Page
                </div>
                </Link>
              </div>
              <div className="panel-action-bar">
                <div onClick={this.saveSource} className="btn btn-sm btn-info">
                  Lưu
                </div>
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
                        onChange={e => this.onChange(e)}
                        name="source_title"
                        type="text"
                        className="form-control"
                        value={this.state.source.source_title}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-md-12">
                      <span className="help"> Tóm tắt</span>
                    </label>
                    <div className="col-md-12">
                      <input
                        onChange={e => this.onChange(e)}
                        type="text"
                        name="source_promo"
                        className="form-control"
                        value={this.state.source.source_promo}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-md-12">
                      <Editor
                        initialValue={this.state.source.source_content}
                        onChange={(e: any) => {
                          // @ts-ignore
                          this.setState({
                            source: {
                              ...this.state.source,
                              source_content: e.level.content
                            }
                          });
                        }}
                        apiKey="t7eqx9nyehld0fibzbgtu06aax2f3beil1q091d12j97cmfl"
                        init={{
                          selector: "textarea",
                          height: 500,
                          theme: "modern",
                          image_advtab: true,
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
                                this.props.reShowPhotoApp(true);
                                this.props.reSetCurrentEditorPhoto(editor);
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
                        onChange={e => this.onChange(e)}
                        name="source_id_ui"
                        className="form-control"
                      >
                        <option>Chọn</option>
                        {this.renderListUI()}
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-sm-12">Trạng thái</label>
                    <div className="col-sm-12">
                      <select
                        onChange={e => this.onChange(e)}
                        name="source_status"
                        className="form-control"
                      >
                        <option>Chọn</option>
                        <option
                          selected={
                            this.props.resDetailSource.source_status == 0
                              ? true
                              : false
                          }
                          value="0"
                        >
                          Hiện
                        </option>
                        <option
                          selected={
                            this.props.resDetailSource.source_status == 1
                              ? true
                              : false
                          }
                          value="1"
                        >
                          Ẩn
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-sm-12">Hình cover</label>
                    <div
                      onClick={() => {
                        this.props.reShowPhotoApp(true);
                        this.props.reSetCurrentEditorPhoto(
                          "img-cover-blog-preview"
                        );
                      }}
                      className="col-sm-12 cover-blog"
                    >
                      <i className="ti-upload" />
                      <img
                        id="img-cover-blog-preview"
                        src={this.props.resDetailSource.source_cover}
                        className="img-responsive"
                      />
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
  resUpdateSource: storeState.reSource.resUpdateSource,
  resDetailSource: storeState.reSource.resDetailSource
});
const mapDispatchToProps = {
  reSetCurrentEditorPhoto,
  reShowPhotoApp,
  reListUI,
  reUpdateSource,
  reDetailSource
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailSource);
