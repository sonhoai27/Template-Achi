import * as React from "react";
import { connect } from "react-redux";
import { reIsSuccess, reIsDanger, reIsLoading } from "../../../reducers/init";
import { reListGift, reListContact, reSendGift } from "./reGift";
import { Editor } from "@tinymce/tinymce-react";
import Select from 'react-select';
import makeAnimated from 'react-select/lib/animated';
interface IProps {
  isShowingModal: any;
  resSendGift: any;
  resListContact: any;
  resListGift: any;
  reIsSuccess: (status: boolean) => void;
  reIsDanger: (status: boolean) => void;
  reListContact: () => void;
  reIsLoading: (status: boolean)=>void;
  isLoading: any;
  reSendGift: (
    form: {
      listEmails: any;
      content: string;
      name: string;
    }
  ) => void;
}
interface IState {
  listEmail: any;
  content: string;
  editor: any;
  name: string;
}
class ModalSendGift extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);
    this.state = {
      listEmail: [],
      content: "",
      editor: {},
      name: ''
    };
  }
  componentDidMount(){
    this.props.reListContact()
  }
  componentDidUpdate(preProps){
    if (this.props.resSendGift != preProps.resSendGift) {
      console.log(this.props.resSendGift.status);
      if (this.props.resSendGift.status === 200) {
        this.props.reIsSuccess(true);
        setTimeout(() => {
          this.props.reIsSuccess(false);
          this.props.reIsLoading(!this.props.isLoading)
          this.props.isShowingModal()
        }, 2000);
      } else {
        this.props.reIsDanger(true);
        setTimeout(() => {
          this.props.reIsDanger(false);
          this.props.reIsLoading(!this.props.isLoading)
          this.props.isShowingModal()
        }, 2000);
      }
    }
  }
  renderListGifts = ()=> {
    if(this.props.resListGift.list){
      return this.props.resListGift.list.map(element => {
        return (
          <option value={element.gift_uri_file}>
            {element.gift_name}
          </option>
        )
      })
    }
    return null
  }
  options = ()=> {
    if(this.props.resListContact.list){
      return this.props.resListContact.list.map(function (item) {
        return { value: item.email_email, label: item.email_email, name: item.email_name };
      })
    }
    return []
  }
  send = ()=> {
    this.props.reIsLoading(!this.props.isLoading)
    this.props.reSendGift({
      listEmails: this.state.listEmail,
      content: this.state.content,
      name: this.state.name
    });
  }
  render() {
    return (
      <>
        <div
          style={{ display: "block", overflow: "auto" }}
          className="modal fade in order-ebook"
          role="dialog"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  onClick={() => this.props.isShowingModal()}
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-hidden="true"
                >
                  ×
                </button>
                <h4 className="modal-title">Gởi quà tặng</h4>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="row">
                      <div className="form-group col-sm-12">
                        <label className="col-sm-12">Danh sách email</label>
                        <div className="col-sm-12">
                        <Select
                          closeMenuOnSelect={false}
                          components={makeAnimated()}
                          isMulti
                          onChange={(item)=> {
                            this.setState({
                              listEmail: item
                            })
                          }}
                          options={this.options()}
                        />
                        </div>
                      </div>
                      <div className="form-group col-sm-6">
                        <label className="col-sm-12">Danh sách quà</label>
                        <div className="col-sm-12">
                          <select
                            onChange={(e)=> {
                              this.state.editor.insertContent(
                                `<a href="` + e.target.value + `">${e.target.textContent}</a>`
                              );
                            }}
                            className="form-control"
                          >
                            <option>Chọn quà</option>
                            {this.renderListGifts()}
                          </select>
                        </div>
                      </div>
                      <div className="form-group col-sm-6">
                        <label className="col-sm-12">Tiêu đề</label>
                        <div className="col-sm-12">
                          <input className="form-control" onChange={(e)=> {
                              this.setState({
                                name: e.target.value
                              })
                          }} placeholder="Tiêu đề"/>
                        </div>
                      </div>
                      <div className="form-group col-sm-12">
                        <label className="col-sm-12">Nội dung</label>
                        <div className="col-sm-12">
                          <Editor
                            onChange={(e: any) => {
                              if (
                                e.level.content === null ||
                                e.level.content === ""
                              ) {
                                let temp = "";
                                e.level.fragments.forEach(element => {
                                  temp += element;
                                });
                                this.setState({
                                  content: temp
                                });
                              } else {
                                this.setState({
                                  content: e.level.content
                                });
                              }
                            }}
                            cloudChannel="dev"
                            apiKey="t7eqx9nyehld0fibzbgtu06aax2f3beil1q091d12j97cmfl"
                            init={{
                              selector: "textarea",
                              spellchecker_language: "vi-VN",
                              height: 500,
                              theme: "modern",
                              plugins:
                                "print preview fullpage searchreplace autolink directionality visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists textcolor wordcount imagetools contextmenu colorpicker textpattern help",
                              toolbar1:
                                "fontsizeselect formatselect | bold italic strikethrough forecolor backcolor | link blockquote | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent  | removeformat",
                              fontsize_formats:
                                "10pt 11pt 12pt 14pt 16pt 18pt 20pt 24pt 26pt 28pt 36pt 48pt 72pt",
                              setup: editor => {
                                this.setState({
                                  editor: editor
                                })
                              }
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  onClick={() => this.props.isShowingModal()}
                  type="button"
                  className="btn btn-default waves-effect"
                  data-dismiss="modal"
                >
                  Thoát
                </button>
                <button
                  type="button"
                  onClick={this.send}
                  className="btn btn-danger waves-effect waves-light"
                >
                  Gởi quà
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="modal-backdrop fade in" />
      </>
    );
  }
}

const mapStateToProps = storeState => ({
  resSendGift: storeState.reGift.resSendGift,
  resListContact: storeState.reGift.resListContact,
  resListGift: storeState.reGift.resListGift,
  isLoading: storeState.reInit.isLoading
});
const mapDispatchToProps = {
  reListGift,
  reIsDanger,
  reIsSuccess,
  reListContact,
  reSendGift,
  reIsLoading
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalSendGift);
