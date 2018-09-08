import * as React from "react";
import { Editor } from "@tinymce/tinymce-react";
import { connect } from "react-redux";
import { reShowPhotoApp, reSetCurrentEditorPhoto } from "../../../reducers/init";
import { reDetailBlog, reUpdateBlog, reListAuthor, reListCategory } from "./reBlog";

interface Props {
  match?: any,
  reSetCurrentEditorPhoto: (editor: any)=> void,
  reShowPhotoApp: (status: boolean)=> void,
  resDetailBlog: any,
  resUpdateBlog: any,
  reDetailBlog: (idBlog: number)=> void,
  reUpdateBlog: (form: any, idBlog: number)=> void,
  resListCategory: any,
  resListAuthor: any,
}
interface State {
  blog_id_category: number,
  blog_id_author: number,
  blog_title: string,
  blog_promo: string,
  blog_cover: string,
  blog_content: string,
  blog_id_status: number,
  blog_id: string
}
class BlogDetail extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      blog_id_category: 0,
      blog_id_author: 0,
      blog_title: '',
      blog_promo: '',
      blog_cover: '',
      blog_content: '',
      blog_id_status: 0,
      blog_id: ''
    }
  }
  componentDidMount(){
    this.props.reDetailBlog(this.props.match.params.idBlog)
  }
  onChange = (e: any)=> {
    // @ts-ignore
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  componentDidUpdate(preProps){
    if(preProps.resDetailBlog != this.props.resDetailBlog){
      this.setState({
        blog_id_category: this.props.resDetailBlog.list.blog_id_category,
        blog_id_author: this.props.resDetailBlog.list.blog_id_author,
        blog_title: this.props.resDetailBlog.list.blog_title,
        blog_promo: this.props.resDetailBlog.list.blog_promo,
        blog_cover: this.props.resDetailBlog.list.blog_cover,
        blog_content: this.props.resDetailBlog.list.blog_content,
        blog_id_status: this.props.resDetailBlog.list.blog_id_status,
        blog_id: this.props.resDetailBlog.list.blog_id
      })
    }
  }
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="panel">
            <div className="panel-toolbar">
              <div className="panel-heading">Thêm bài viết</div>
              <div className="panel-action-bar">
                <div className="btn btn-xs btn-info">Lưu</div>
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
                        onChange={this.onChange}
                        type="text"
                        className="form-control"
                        defaultValue={this.state.blog_title}
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
                        type="text"
                        className="form-control"
                        defaultValue={this.state.blog_promo}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-md-12">
                      <Editor
                        initialValue={this.state.blog_content}
                        onChange={(e: any)=> {
                          this.setState({
                            ...this.state,
                            blog_content: e.level.content
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
                    <label className="col-sm-12">Trạng thái</label>
                    <div className="col-sm-12">
                      <select onChange={this.onChange} className="form-control">
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
                    }}>>
                      <i className="ti-upload"/>
                      <img id="img-cover-blog-preview" className="img-responsive" src={this.state.blog_cover}/>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-sm-12">Tác giả</label>
                    <div className="col-sm-12">
                      <select onChange={this.onChange} className="form-control">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-sm-12">Danh mục</label>
                    <div className="col-sm-12">
                      <select onChange={this.onChange} className="form-control">
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
  resDetailBlog: storeState.reBlog.resDetailBlog,
  resUpdateBlog: storeState.reBlog.resUpdateBlog,
  resListCategory: storeState.reBlog.resListCategory,
  resListAuthor: storeState.reBlog.resListAuthor,
});
const mapDispatchToProps = {
  reSetCurrentEditorPhoto,
  reShowPhotoApp,
  reUpdateBlog,
  reDetailBlog,
  reListCategory,
  reListAuthor
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BlogDetail);

