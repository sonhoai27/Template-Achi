import * as React from "react";
import { Editor } from "@tinymce/tinymce-react";
import { connect } from "react-redux";
class GiftAdd extends React.Component {
  constructor(props) {
    super(props);
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
                      Default Text <span className="help"> Tiêu đề</span>
                    </label>
                    <div className="col-md-12">
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="George deo..."
                      />{" "}
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-md-12">
                      Default Text <span className="help"> Tóm tắt</span>
                    </label>
                    <div className="col-md-12">
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="George deo..."
                      />{" "}
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-md-12">
                      <Editor
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
                      <select className="form-control">
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
                    <div className="col-sm-12 cover-blog">
                      <i className="ti-upload"/>
                      <img id="img-cover-blog-preview"/>
                    </div>
                  </div>
                  <div className="form-group">
                  <label className="col-sm-12 title-action">
                        <p>Tác giả</p>
                        <i className="fa fa-edit"/>
                    </label>
                    <div className="col-sm-12">
                      <select className="form-control">
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
                        <i className="fa fa-edit"/>
                    </label>
                    <div className="col-sm-12">
                      <select className="form-control">
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
});
const mapDispatchToProps = {
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GiftAdd);
