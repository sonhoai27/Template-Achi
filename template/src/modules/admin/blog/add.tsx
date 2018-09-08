import * as React from "react";
import { Editor } from "@tinymce/tinymce-react";
import { BASEURLADMIN } from "../../../config/const";
import { connect } from "react-redux";
import { reShowPhotoApp, reSetCurrentEditorPhoto } from "../../../reducers/init";
import { reAddBlog } from "./reBlog";
import { alias } from "../../../utils/alias";
interface Props {
  reSetCurrentEditorPhoto: (editor: any)=> void,
  reShowPhotoApp: (status: boolean)=> void,
  reAddBlog: (form: any)=> void,
  resAddBlog: any
}
interface State {
  blog_id_category: number,
  blog_id_author: number,
  blog_title: string,
  blog_promo: string,
  blog_cover: string,
  blog_content: string,
  blog_id_status: number
}
class BlogAdd extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      blog_id_category: 0,
      blog_id_author: 0,
      blog_title: '',
      blog_promo: '',
      blog_cover: '',
      blog_content: '',
      blog_id_status: 0
    }
  }
  componentDidUpdate(preProps){
    if(preProps.resAddBlog != this.props.resAddBlog){
      console.log(this.props.resAddBlog)
    }
  }
  onChange = (e: any)=> {
    // @ts-ignore
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  addBlog = ()=> {
    const temp: any = document.getElementById('img-cover-blog-preview')
    this.props.reAddBlog({
      ...this.state,
      blog_alias: alias(this.state.blog_title),
      blog_cover: temp.src,
      blog_id: (Date.now())
    })
  }
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="panel">
            <div className="panel-toolbar">
              <div className="panel-heading">Thêm bài viết</div>
              <div className="panel-action-bar">
                <div
                  onClick={()=> {
                    this.addBlog()
                  }}
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
                        type="text"
                        onChange={this.onChange}
                        name="blog_title"
                        className="form-control"
                        defaultValue=""
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-md-12">
                      <span className="help"> Tóm tắt</span>
                    </label>
                    <div className="col-md-12">
                      <input
                        onChange={this.onChange}
                        name="blog_promo"
                        type="text"
                        className="form-control"
                        defaultValue=""
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-md-12">
                      <Editor
                        onChange={(e: any)=> {
                          this.setState({
                            ...this.state,
                            blog_content: e.level.content
                          })
                        }}
                        apiKey="t7eqx9nyehld0fibzbgtu06aax2f3beil1q091d12j97cmfl"
                        init={{
                          selector: "textarea",
                          spellchecker_language: 'vi-VN',
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
                    <label className="col-sm-12">Trạng thái</label>
                    <div className="col-sm-12">
                      <select
                        onChange={this.onChange}
                        name="blog_id_status"
                        className="form-control">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
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
                  <div className="form-group">
                  <label className="col-sm-12 title-action">
                        <p>Tác giả</p>
                        <a href={BASEURLADMIN+'blog/add-author'} target='_blank'><i className="fa fa-edit"/></a>
                    </label>
                    <div className="col-sm-12">
                      <select
                        onChange={this.onChange}
                        name="blog_id_author"
                        className="form-control">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-sm-12 title-action">
                        <p>Danh mục</p>
                        <a href={BASEURLADMIN+'blog/add-category'} target='_blank'><i className="fa fa-edit"/></a>
                    </label>
                    <div className="col-sm-12">
                      <select
                        onChange={this.onChange}
                        name="blog_id_category"
                        className="form-control">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
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
  resAddSource: storeState.reSource.resAddSource,
  resAddBlog: storeState.reBlog.resAddBlog
});
const mapDispatchToProps = {
  reSetCurrentEditorPhoto,
  reShowPhotoApp,
  reAddBlog
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BlogAdd);
