import * as React from "react";
import {Storage} from "../../utils/storage-util";
import { connect } from "react-redux";
import { reIsDanger, reIsSuccess } from "../../reducers/init";
import { reAddContact } from "../admin/source/reSource";
var CryptoJS = require("crypto-js");
interface IProps {
    showHide: any;
    code: any;
    name: any;
    resAddContact: any;
    reAddContact: (form: any)=> void;
    reIsSuccess: (status: boolean) => void;
    reIsDanger: (status: boolean) => void;
}

interface IState {
    email_name: string;
    email_email: string;
    email_phone: string;
    email_name_click: string;
}

class ModalContact extends React.Component<IProps, IState> {
    constructor(props) {
        super(props);
        this.state = {
            email_email: '',
            email_name: '',
            email_name_click: '',
            email_phone: ''
        }
    }
    componentDidMount(){
        this.setState({
            email_name_click: this.props.name
        })
    }
    onchange = (e)=> {
        // @ts-ignore
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    submit = ()=> {
        const {email_email, email_name,email_phone} = this.state
        if(email_email !== "" && email_phone !== "" && email_name !== ""){
            const enc = CryptoJS.AES.encrypt(JSON.stringify(this.state), 'NGUYENMINHCHI@1234567890987654321!@#$%^&*()').toString()
            this.props.reAddContact(this.state)
            Storage.local.set('user_info', {
                ...Storage.local.get('user_info'),
                [this.props.code]: enc
            })
        }else {
            this.props.reIsDanger(true)
            setTimeout(()=> {
                this.props.reIsDanger(false)
            }, 1000)
        }
    }
    componentDidUpdate(preProps){
        if (preProps.resAddContact != this.props.resAddContact) {
            if (this.props.resAddContact.status === 200) {
              this.props.reIsSuccess(true);
              setTimeout(() => {
                this.props.reIsSuccess(false);
                this.props.showHide()
              }, 2000);
            } else {
              this.props.reIsDanger(true);
              setTimeout(() => {
                this.props.reIsDanger(false);
              }, 2000);
            }
          }
    }
    render() {
        return (
            <>
                <div
                    style={{display: "block"}}
                    className="modal fade in order-ebook"
                    role="dialog"
                    aria-hidden="true"
                >
                    <div className="modal-dialog modal-sm">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4>Thông tin đăng ký</h4>
                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label className="control-label">Họ và tên</label>
                                    <input
                                        onChange={this.onchange}
                                        type="text"
                                        className="form-control"
                                        name="email_name"
                                        placeholder={'Tên của bạn'}
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="control-label">Số điện thoại</label>
                                    <input
                                        onChange={this.onchange}
                                        type="text"
                                        className="form-control"
                                        name="email_phone"
                                        placeholder={'Số điện thoại'}
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="control-label">Email</label>
                                    <input
                                        onChange={this.onchange}
                                        type="email"
                                        className="form-control"
                                        name="email_email"
                                        placeholder={'Thư điện tử'}
                                    />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button
                                    onClick={this.submit}
                                    type="button"
                                    className="btn btn-danger waves-effect waves-light"
                                >
                                    Đăng ký
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal-backdrop fade in" style={{
                    background: 'url(http://nguyenminhchi.com/api/uploads/images/b7eeb9d50c18eda6074b1539622800000.jpg)',
                    opacity: 1
                }}/>
            </>
        );
    }
}

const mapStateToProps = storeState => ({
    resAddContact: storeState.reSource.resAddContact
});
const mapDispatchToProps = {
    reIsDanger,
    reIsSuccess,
    reAddContact
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ModalContact);