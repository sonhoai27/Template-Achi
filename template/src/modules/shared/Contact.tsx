import * as React from "react";
import {Storage} from "../../utils/storage-util";
var CryptoJS = require("crypto-js");
interface IProps {
    showHide: any;
    name_click: string;
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
    onchange = (e)=> {
        // @ts-ignore
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    submit = ()=> {
        Storage.local.set('user_info',CryptoJS.AES.encrypt(JSON.stringify(this.state), 'NGUYENMINHCHI@1234567890987654321!@#$%^&*()').toString())
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
                                <h4>Nhập thông tin trước khi xem</h4>
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
                                    Lưu
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal-backdrop fade in" style={{
                    opacity: 1,
                    backgroundColor: '#1F9080'
                }}/>
            </>
        );
    }
}

export default ModalContact;