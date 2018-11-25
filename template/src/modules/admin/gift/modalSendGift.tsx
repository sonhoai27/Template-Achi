import * as React from "react";
import {connect} from "react-redux";
import {reIsSuccess, reIsDanger, reIsLoading, reShowPhotoApp, reSetCurrentEditorPhoto} from "../../../reducers/init";
import {reListGift} from "./reGift";
import {Editor} from "@tinymce/tinymce-react";
import {reAddSendGift, reListCounter} from "./send-gift/reSendGift";
import { RESOURCE } from "../../../config/const";

interface IProps {
    isShowingModal: any;
    resListGift: any;
    reAddSendGift: (form, count) => void;
    reIsSuccess: (status: boolean) => void;
    reIsDanger: (status: boolean) => void;
    reIsLoading: (status: boolean) => void;
    isLoading: any;
    reListCounter: ()=> void;
    resListCounter: any;
    resAddSendGift: any;
    reSetCurrentEditorPhoto: (editor: any)=> void;
    reShowPhotoApp: (status: boolean)=> void;
}

interface IState {
    content: string;
    editor: any;
    titleEmail: string;
    count: any;
    nameGift: any;
    sendingMail: {
        sum: number,
        count: number
    }
}

class ModalSendGift extends React.Component<IProps, IState> {
    constructor(props) {
        super(props);
        this.state = {
            content: "",
            editor: {},
            titleEmail: '',
            count: 0,
            nameGift: "",
            sendingMail: {
                count: 0,
                sum: 0
            }
        };
    }

    componentDidMount() {
        this.props.reListCounter()
    }

    componentDidUpdate(preProps) {
        if (this.props.resAddSendGift != preProps.resAddSendGift) {
          if (this.props.resAddSendGift.status === 200) {
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

    renderListGifts = () => {
        if (this.props.resListGift.list) {
            return this.props.resListGift.list.map(element => {
                return (
                    <option key={element.gift_uri_file} value={element.gift_uri_file}>
                        {element.gift_name}
                    </option>
                )
            })
        }
        return null
    }
    options = ()=> {
        if (this.props.resListCounter.list) {
            return this.props.resListCounter.list.map(element => {
                return (
                    <option key={element.send_gift_counter} value={JSON.stringify(element)}>
                        {element.send_gift_counter}
                    </option>
                )
            })
        }
        return null
    }
    send = () => {
        if(this.validateSendMail()){
            this.props.reIsLoading(!this.props.isLoading)
            // this.props.reAddSendGift(
            //     {
            //         titleEmail: this.state.titleEmail,
            //         contentEmail: this.state.content
            //     },
            //     this.state.count
            // )

            // goi lan dau, sau do nha kq ve o ham didupdate, ktra, count, len, ktra tra ve, tiep tuc goi lai ham nao
            // do de send len noi dung can goi, trang can goi.
            
        }else {
            alert("Vui lòng nhập đủ thông tin!")
        }
    }

    validateSendMail = (): boolean => {
        if(this.state.titleEmail !== "" && this.state.content !== ""){
            return true;
        }
        return false;
    }
    calPgMails = (len: number, sum: number): number => {
        const temp: string = (sum/len)+""
        let chan: number = Number(temp.split(".")[0]);
        const le = sum%len;

        if(chan == 0){
            chan = 1;
        }else if(le > 0 && chan > 0){
            chan = chan + 1;
        }
        return chan;
    }
    render() {
        return (
            <>
                <div
                    style={{display: "block", overflow: "auto"}}
                    className="modal fade in order-ebook"
                    role="dialog"
                    aria-hidden="true"
                >
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">Gởi quà tặng</h4>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="row">
                                            <div className="form-group col-sm-12">
                                                <div className="col-sm-12">
                                                    <select className={'form-control'} onChange={(e)=> {
                                                        const value =(JSON.parse(e.target.value))
                                                        this.setState({
                                                            ...this.state,
                                                            count: value.send_gift_counter,
                                                            sendingMail: {
                                                                count: 0,
                                                                sum: this.calPgMails(90, value.count)
                                                            }
                                                        }, ()=> {
                                                            console.log(this.state)
                                                        })
                                                    }}>
                                                        <option>Chọn</option>
                                                        {this.options()}
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-group col-sm-6">
                                                <div className="col-sm-12">
                                                    <select
                                                        onChange={(e: any) => {
                                                            const click = e.target.options
                                                            this.setState({
                                                                nameGift: click[click.selectedIndex].text
                                                            })
                                                            this.state.editor.insertContent(
                                                                `<a href="` + e.target.value + `">${click[click.selectedIndex].text}</a>`
                                                            );
                                                        }}
                                                        className="form-control"
                                                    >
                                                        <option value={''}>Chọn quà</option>
                                                        {this.renderListGifts()}
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-group col-sm-6">
                                                <div className="col-sm-12">
                                                    <input className="form-control" onChange={(e) => {
                                                        this.setState({
                                                            titleEmail: e.target.value
                                                        })
                                                    }} placeholder="Tiêu đề"/>
                                                </div>
                                            </div>
                                            <div className="form-group col-sm-12">
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
                                                            height: 200,
                                                            theme: "modern",
                                                            toolbar1:
                                                                "fontsizeselect formatselect | addImage | bold italic strikethrough forecolor backcolor | link blockquote | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent  | removeformat",
                                                            fontsize_formats:
                                                                "10pt 11pt 12pt 14pt 16pt 18pt 20pt 24pt 26pt 28pt 36pt 48pt 72pt",
                                                            setup: editor => {
                                                                this.setState({
                                                                    editor: editor
                                                                })
                                                                editor.addButton("addImage", {
                                                                    icon: "image",
                                                                    tooltip: "Thêm Image",
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
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="text-center" style={{display: 'block', width: '100%'}}>
                                            <img src={RESOURCE+'images/icon/Send.png'}/>
                                        </div>
                                        <div style={{marginTop: 80}}>
                                            <div style={{
                                                    textAlign: 'center',
                                                    fontSize: 32
                                                }}>
                                                10%
                                            </div>
                                            <div style={{
                                                width: '100%',
                                                height: 8,
                                                background: '#eee',
                                                borderRadius: 8,
                                                marginTop: 32,
                                                position: 'relative',
                                                overflow: 'hidden'
                                            }}>
                                                <div style={{
                                                    position: 'absolute',
                                                    top: 0,
                                                    left: 0,
                                                    bottom: 0,
                                                    background: '#08f',
                                                    width: this.state.sendingMail.count+'%'
                                                }}/>
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
                <div className="modal-backdrop fade in"/>
            </>
        );
    }
}

const mapStateToProps = storeState => ({
    resAddSendGift: storeState.reSendGift.resAddSendGift,
    resListCounter: storeState.reSendGift.resListCounter,
    resListContact: storeState.reSendGift.resListContact,
    resListGift: storeState.reGift.resListGift,
    isLoading: storeState.reInit.isLoading
});
const mapDispatchToProps = {
    reListGift,
    reIsDanger,
    reIsSuccess,
    reIsLoading,
    reAddSendGift,
    reListCounter,
    reSetCurrentEditorPhoto,
    reShowPhotoApp,
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ModalSendGift);
