import * as React from "react";
import DatePicker from 'react-date-picker';
import {API} from "../../../../config/const";

interface IProps {
    showHide: any;
}

interface IState {
    date: string;
    onlineDate: any;
}

class ModalExportContact extends React.Component<IProps, IState> {
    constructor(props) {
        super(props);
        this.state = {
            date: '',
            onlineDate: ''
        }
    }

    handleDayClick = (day: any) => {
        const date = new Date(day)
        this.setState({
            date: (date.getMonth() + 1) + "-" + date.getFullYear(),
            onlineDate:day
        })
    }
    getExcel = () => {
        window.location.href = API + 'contact/export/excel/' + this.state.date
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
                                <button
                                    onClick={() => this.props.showHide()}
                                    type="button"
                                    className="close"
                                    data-dismiss="modal"
                                    aria-hidden="true"
                                >
                                    ×
                                </button>
                                <h4>Xuất dữ liệu</h4>
                            </div>
                            <div className="modal-body">
                                <p>Vui lòng chọn tháng năm.</p>
                                <DatePicker
                                    onChange={this.handleDayClick}
                                    value={this.state.onlineDate}
                                />
                            </div>
                            <div className="modal-footer">
                                <button
                                    onClick={() => this.props.showHide()}
                                    type="button"
                                    className="btn btn-default waves-effect"
                                    data-dismiss="modal"
                                >
                                    Thoát
                                </button>
                                <button
                                    onClick={this.getExcel}
                                    type="button"
                                    className="btn btn-danger waves-effect waves-light"
                                >
                                    Xuất file
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

export default ModalExportContact;
