import * as React from "react";
import {Link} from "react-router-dom";
import {API, BASEURLADMIN} from "../../../config/const";
import {connect} from "react-redux";
import {reListGift, reUpdateGift} from "./reGift";
import Pagination from "../../shared/Pagination";
import {IGiftModel} from "../../../models/gift";
import {reIsSuccess, reIsDanger} from "../../../reducers/init";
import ModalSendGift from "./modalSendGift";
import ExportFileSendGift from "./send-gift/exportFile"
import axios from "axios";

interface IProps {
    resListGift: any;
    reListGift: (page: number) => void;
    reDetailGift: (idGift: number) => void;
    reUpdateGift: (form: IGiftModel, idGift: number) => void;
    resUpdateGift: any;
    reIsSuccess: (status: boolean) => void;
    reIsDanger: (status: boolean) => void;
}

interface IState {
    isShowingModalSendGift: boolean;
    isShowingModalExport: boolean;
    isShowingModalImportMail: boolean;
    csvChoose: any;
}

class GiftList extends React.Component<IProps, IState> {
    constructor(props) {
        super(props);
        this.state = {
            isShowingModalSendGift: false,
            isShowingModalExport: false,
            isShowingModalImportMail: false,
            csvChoose: {}
        };
    }

    componentDidMount() {
        this.props.reListGift((parseInt(this.makeCurrentPage(), 10) - 1) * 20);
    }

    componentDidUpdate(preProps) {
        if (this.props.resUpdateGift != preProps.resUpdateGift) {
            if (this.props.resUpdateGift.status === 200) {
                this.props.reIsSuccess(true);
                setTimeout(() => {
                    this.props.reIsSuccess(false);
                    this.props.reListGift(
                        (parseInt(this.makeCurrentPage(), 10) - 1) * 20
                    );
                }, 2000);
            } else {
                this.props.reIsDanger(true);
                setTimeout(() => {
                    this.props.reIsDanger(false);
                    this.props.reListGift(
                        (parseInt(this.makeCurrentPage(), 10) - 1) * 20
                    );
                }, 2000);
            }
        }
    }

    hiddenModalSendGift = () => {
        this.setState({
            isShowingModalSendGift: !this.state.isShowingModalSendGift
        });
    };
    hiddenModalExportFileGift = () => {
        this.setState({
            isShowingModalExport: !this.state.isShowingModalExport
        });
    };
    makeCurrentPage = () => {
        const page = window.location.href.split("page=")[1];
        if (page != undefined || page != null) {
            return page;
        } else {
            return "1";
        }
    };
    getMoreGift = page => {
        this.props.reListGift((page - 1) * 20);
    };
    setActiveGift = (gift: IGiftModel) => {
        this.props.reUpdateGift(
            {
                ...gift,
                gift_active: gift.gift_active == 1 ? 0 : 1
            },
            gift.gift_id
        );
    };
    renderListGifts = () => {
        if (this.props.resListGift.list) {
            return this.props.resListGift.list.map(
                (element: IGiftModel, index: number) => {
                    return (
                        <tr key={element.gift_name}>
                            <td className="text-center">{index + 1}</td>
                            <td>
                                <Link to={BASEURLADMIN + "gift/detail/" + element.gift_id}>
                                    <h4>{element.gift_name}</h4>
                                </Link>
                            </td>
                            <td>{element.gift_uri_file}</td>
                            <td>
                                <div
                                    className={
                                        "btn btn-xs " +
                                        (element.gift_active == 0 ? "btn-info" : "btn-danger")
                                    }
                                    onClick={() => this.setActiveGift(element)}
                                >
                                    {element.gift_active == 0 ? "Ưu tiên" : "Hủy ưu tiên"}
                                </div>
                            </td>
                        </tr>
                    );
                }
            );
        }
        return <tr>
            <td></td>
        </tr>;
    };

    render() {
        return (
            <>
                <div className="row">
                    <div className="col-md-12">
                        <div className="panel">
                            <div className="panel-toolbar">
                                <div className="panel-heading">Quản lí quà tặng</div>
                                <div className="panel-action-bar">
                                    <div
                                        className="btn btn-xs btn-info"
                                        onClick={() => {
                                            this.setState({
                                                isShowingModalExport: true
                                            });
                                        }}
                                        style={{
                                            marginRight: 16
                                        }}
                                    >
                                        <i className="icon-printer"/> Xuất dữ liệu
                                    </div>
                                    <div
                                        className="btn btn-xs btn-info"
                                        onClick={() => {
                                            this.setState({
                                                isShowingModalSendGift: true
                                            });
                                        }}
                                        style={{
                                            marginRight: 16
                                        }}
                                    >
                                        <i className="ti-gift"/> Gởi quà
                                    </div>
                                    <div
                                        className="btn btn-xs btn-info"
                                        onClick={()=> {
                                            this.setState({
                                                isShowingModalImportMail: !this.state.isShowingModalImportMail
                                            })
                                        }}
                                        style={{
                                            marginRight: 16
                                        }}
                                    >
                                        <i className="ti-gift"/> Upload mail
                                    </div>
                                    <Link to={BASEURLADMIN + "gift/add"}>
                                        <div className="btn btn-xs btn-info">Thêm mới</div>
                                    </Link>
                                </div>
                            </div>
                            <div className="table-responsive">
                                <table className="table table-hover manage-u-table">
                                    <thead>
                                    <tr>
                                        <th className="text-center">#</th>
                                        <th>Tên</th>
                                        <th>File</th>
                                        <th>Ưu tiên</th>
                                    </tr>
                                    </thead>
                                    <tbody>{this.renderListGifts()}</tbody>
                                </table>
                            </div>
                            <div className="pg">
                                <Pagination
                                    initialPage={parseInt(this.makeCurrentPage(), 10)}
                                    pageSize={20}
                                    totalItems={this.props.resListGift.count}
                                    onChangePage={e => this.getMoreGift(e.currentPage)}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                {this.state.isShowingModalSendGift ? (
                    <ModalSendGift isShowingModal={this.hiddenModalSendGift}/>
                ) : (
                    ""
                )}
                {this.state.isShowingModalExport ? (
                    <ExportFileSendGift isShowingModal={this.hiddenModalExportFileGift}/>
                ) : (
                    ""
                )}
                {
                    this.state.isShowingModalImportMail ?
                        <div
                            className="modal fade in"
                            tabIndex={-1}
                            role="dialog"
                            aria-labelledby="upload-image"
                            aria-hidden="true"
                        >
                            <div className="modal-dialog modal-lg">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <button
                                            onClick={()=> {
                                                this.setState({
                                                    isShowingModalImportMail: !this.state.isShowingModalImportMail
                                                })
                                            }}
                                            type="button"
                                            className="close"
                                            data-dismiss="modal"
                                            aria-hidden="true"
                                        >
                                            ×
                                        </button>
                                        <h4 className="modal-title" id="mySmallModalLabel">
                                            Upload CSV
                                        </h4>{" "}
                                    </div>
                                    <div className="modal-body">
                                        <input
                                            onChange={(e: any) => {
                                                this.setState({
                                                    csvChoose: e.target.files[0]
                                                });
                                            }}
                                            name="file"
                                            id="photo-app-choose-file"
                                            type="file"
                                            placeholder="Chọn hình"
                                        />
                                    </div>
                                    <div className="modal-footer">
                                        <button
                                            onClick={() => {
                                                const data = new FormData();
                                                data.append("upload-csv", this.state.csvChoose);
                                                axios
                                                    .post(API + "file/import", data)
                                                    .then(result => {
                                                        console.log(result)
                                                    })
                                                    .catch(err => {
                                                    });
                                            }}
                                            type="button"
                                            className="btn btn-danger waves-effect waves-light"
                                        >
                                            Tải lên
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        : ""
                }
            </>
        );
    }
}

const mapStateToProps = storeState => ({
    resListGift: storeState.reGift.resListGift,
    resUpdateGift: storeState.reGift.resUpdateGift
});
const mapDispatchToProps = {
    reListGift,
    reUpdateGift,
    reIsDanger,
    reIsSuccess
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GiftList);
