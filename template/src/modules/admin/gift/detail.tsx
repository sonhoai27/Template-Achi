import * as React from "react";
import { Editor } from "@tinymce/tinymce-react";
import { connect } from "react-redux";
import {
  reSetCurrentEditorPhoto,
  reShowPhotoApp,
  reIsDanger,
  reIsSuccess
} from "../../../reducers/init";
import { IGiftModel } from "../../../models/gift";
import { reDetailGift, reUpdateGift } from "./reGift";
import { alias } from "./../../../../build/dist/src/utils/alias";
import { RESOURCE } from "../../../config/const";
declare var CKEDITOR: any;

interface IProps {
  match: any;
  resUpdateGift: any;
  reDetailGift: (idGift: number) => void;
  reUpdateGift: (form: IGiftModel, idGift: number) => void;
  reSetCurrentEditorPhoto: (editor: any) => void;
  reShowPhotoApp: (status: boolean) => void;
  reIsSuccess: (status: boolean) => void;
  reIsDanger: (status: boolean) => void;
  resDetailGift: {
    list: IGiftModel;
  };
}
interface IState {
  gift: IGiftModel;
}
class GiftDetail extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);
    this.state = {
      gift: {
        gift_id: 0,
        gift_active: 0,
        gift_cover: "",
        gift_name: "",
        gift_promo: "",
        gift_uri_file: "",
        gift_alias: "",
        gift_content: ""
      }
    };
  }
  componentDidUpdate(preProps) {
    if (preProps.resDetailGift != this.props.resDetailGift) {
      this.setState({
        gift: {
          gift_id: this.props.resDetailGift.list.gift_id,
          gift_active: this.props.resDetailGift.list.gift_active,
          gift_cover: this.props.resDetailGift.list.gift_cover,
          gift_name: this.props.resDetailGift.list.gift_name,
          gift_promo: this.props.resDetailGift.list.gift_promo,
          gift_uri_file: this.props.resDetailGift.list.gift_uri_file,
          gift_alias: this.props.resDetailGift.list.gift_alias,
          gift_content: this.props.resDetailGift.list.gift_content
        }
      });
    }
    if (this.props.resUpdateGift != preProps.resUpdateGift) {
      if (this.props.resUpdateGift.status === 200) {
        this.props.reIsSuccess(true);
        setTimeout(() => {
          this.props.reIsSuccess(false);
          this.props.reDetailGift(this.props.match.params.idGift);
        }, 2000);
      } else {
        this.props.reIsDanger(true);
        setTimeout(() => {
          this.props.reIsDanger(false);
          this.props.reDetailGift(this.props.match.params.idGift);
        }, 2000);
      }
    }
  }
  componentDidMount() {
    this.props.reDetailGift(this.props.match.params.idGift);
    try {
      CKEDITOR.plugins.add("insertimage", {
        init: editor => {
          editor.addCommand("insertImage", {
            exec: editor => {
              this.props.reShowPhotoApp(true);
              this.props.reSetCurrentEditorPhoto({
                type: "ck",
                editor: editor
              });
              // var timestamp = new Date();
              // editor.insertHtml( 'The current date and time is: <em>' + timestamp.toString() + '</em>' );
            }
          });
          editor.ui.addButton("insertimage", {
            label: "Insert Image",
            command: "insertImage",
            icon: RESOURCE + "images/icon/picture-24.png"
          });
        }
      });
    } catch (e) {}
    CKEDITOR.plugins.addExternal(
      "fontawesome",
      RESOURCE + "ckeditor/plugins/fontawesome/",
      "plugin.js"
    );
    CKEDITOR.replace("editor1", {
      toolbar: [
        {
          name: "document",
          groups: ["mode", "document", "doctools"],
          items: ["Source"]
        },
        {
          name: "basicstyles",
          groups: ["basicstyles", "cleanup"],
          items: [
            "Bold",
            "Italic",
            "Underline",
            "Strike",
            "Subscript",
            "Superscript",
            "-",
            "CopyFormatting",
            "RemoveFormat"
          ]
        },
        { name: "styles", items: ["Styles", "Format", "Font", "FontSize"] },
        { name: "colors", items: ["TextColor", "BGColor"] },
        {
          name: "paragraph",
          groups: ["list", "indent", "blocks", "align", "bidi"],
          items: [
            "NumberedList",
            "BulletedList",
            "-",
            "Outdent",
            "Indent",
            "-",
            "Blockquote",
            "CreateDiv",
            "-",
            "JustifyLeft",
            "JustifyCenter",
            "JustifyRight",
            "JustifyBlock",
            "-",
            "BidiLtr",
            "BidiRtl",
            "Language"
          ]
        },
        { name: "links", items: ["Link", "Unlink", "Anchor"] },
        {
          name: "insert",
          items: [
            "Table",
            "HorizontalRule",
            "Smiley",
            "SpecialChar",
            "PageBreak",
            "Iframe"
          ]
        },
        { name: "FontAwesome", items: ["FontAwesome", "insertimage", "Image"] }
      ],
      extraAllowedContent: "i;span;ul;li;table;td;style;*[id];*(*);*{*}",
      allowedContent: true,
      extraPlugins: "fontawesome,insertimage",
      htmlEncodeOutput: false,
      entities: false,
      contentsCss:
        RESOURCE + "ckeditor/plugins/fontawesome/css/font-awesome.min.css"
    });
  }
  onChange = (e: any) => {
    this.setState({
      gift: {
        ...this.state.gift,
        [e.target.name]: e.target.value
      }
    });
  };
  updateGift = () => {
    const temDom: any = document.getElementById("img-cover-blog-preview");
    const tempGift = this.state.gift;
    const data = CKEDITOR.instances.editor1.getData();
    delete tempGift.gift_id;
    this.props.reUpdateGift(
      {
        ...tempGift,
        gift_cover: temDom.src,
        gift_alias: alias(this.state.gift.gift_name),
        gift_content: data
      },
      this.props.match.params.idGift
    );
  };
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="panel">
            <div className="panel-toolbar">
              <div className="panel-heading">Thêm quà tặng</div>
              <div className="panel-action-bar">
                <div className="btn btn-xs btn-info" onClick={this.updateGift}>
                  Lưu
                </div>
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
                        defaultValue={this.state.gift.gift_name}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-md-12">
                      <span className="help"> Link quà tặng</span>
                    </label>
                    <div className="col-md-12">
                      <input
                        defaultValue={this.state.gift.gift_uri_file}
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
                        initialValue={this.state.gift.gift_promo}
                        onChange={(e: any) => {
                          const html: string = e.level.content;
                          this.setState({
                            gift: {
                              ...this.state.gift,
                              gift_promo: html
                            }
                          });
                        }}
                        apiKey="t7eqx9nyehld0fibzbgtu06aax2f3beil1q091d12j97cmfl"
                        init={{
                          mode: "exact",
                          spellchecker_language: "vi-VN",
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
                  <div
                    className="form-group"
                    style={{ display: "inline-block", width: "100%" }}
                  >
                    <label className="col-md-12">
                      <span className="help"> Nội dung</span>
                    </label>
                    <div className="col-md-12">
                      {/* <Editor
                        id="source_date_sche"
                        value={this.state.gift.gift_content}
                        onChange={(e: any) => {
                          const html: string = e.level.content;
                          this.setState({
                            gift: {
                              ...this.state.gift,
                              gift_content: html
                            }
                          });
                        }}
                        apiKey="t7eqx9nyehld0fibzbgtu06aax2f3beil1q091d12j97cmfl"
                        init={{
                          content_css:
                            "https://netdna.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",
                          noneditable_noneditable_class: "fa",
                          mode: "exact",
                          element: "source_date_sche",
                          height: 100,
                          theme: "modern",
                          plugins:
                            "fontawesome noneditable print preview fullpage searchreplace autolink directionality visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists textcolor wordcount imagetools contextmenu colorpicker textpattern help",
                          toolbar1:
                            "fontsizeselect formatselect | bold italic strikethrough forecolor backcolor | link blockquote | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent  | removeformat | fontawesome",
                          fontsize_formats:
                            "10pt 11pt 12pt 14pt 16pt 18pt 20pt 24pt 26pt 28pt 36pt 48pt 72pt",
                          extended_valid_elements: "span[*]"
                        }}
                      /> */}
                      <textarea cols={80} id="editor1" name="editor1" rows={10} value={this.state.gift.gift_content}/>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="form-group">
                    <label className="col-sm-12">
                      Tặng? - mặc định là không tặng.
                    </label>
                    <div className="col-sm-12">
                      <select
                        className="form-control"
                        onChange={this.onChange}
                        name="gift_active"
                      >
                        <option>Chọn</option>
                        <option
                          value={0}
                          selected={
                            this.state.gift.gift_active == 0 ? true : false
                          }
                        >
                          Không
                        </option>
                        <option
                          value={1}
                          selected={
                            this.state.gift.gift_active == 1 ? true : false
                          }
                        >
                          Có
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-sm-12">Hình cover</label>
                    <div
                      className="col-sm-12 cover-blog"
                      onClick={() => {
                        this.props.reShowPhotoApp(true);
                        this.props.reSetCurrentEditorPhoto(
                          "img-cover-blog-preview"
                        );
                      }}
                    >
                      <i className="ti-upload" />
                      <img
                        id="img-cover-blog-preview"
                        className="img-responsive"
                        src={this.state.gift.gift_cover}
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
  resDetailGift: storeState.reGift.resDetailGift,
  resUpdateGift: storeState.reGift.resUpdateGift
});
const mapDispatchToProps = {
  reSetCurrentEditorPhoto,
  reShowPhotoApp,
  reDetailGift,
  reUpdateGift,
  reIsDanger,
  reIsSuccess
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GiftDetail);
