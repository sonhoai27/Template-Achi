import * as React from "react";
import Header from "./shared/header";
import axios from "axios";
import {API} from "../../config/const";
import Web from "./traffic/web";
import Blog from "./traffic/blog";
import Gift from "./traffic/gift";
import Source from "./traffic/source";

declare var $: any;

interface IState {
    blog: any;
    web: any;
    gift: any;
    source: any;
    sche: any;
}

class Home extends React.Component<{}, IState> {
    constructor(props) {
        super(props);
        this.state = {
            blog: {},
            web: {},
            gift: "",
            source: "",
            sche: ""
        };
    }

    componentDidMount() {
        // web
        axios.get(API + "thong-ke/web/danh-sach-url").then(result => {
            this.setState(
                {
                    web: result.data
                }
            );
        });
        axios.get(API + "thong-ke/blog/danh-sach-bai-viet").then(result => {
            this.setState(
                {
                    blog: result.data
                }
            );
        });
        axios.get(API + "thong-ke/qua-tang/tong-quat").then(result => {
            this.setState(
                {
                    gift: result.data
                }
            );
        });
        axios.get(API + "thong-ke/khoa-hoc/tong-quat").then(result => {
            this.setState(
                {
                    source: result.data
                }
            )
        });
        axios.get(API + "thong-ke/khoa-hoc/thoi-khoa-bieu").then(result => {
            this.setState(
                {
                    sche: result.data
                })
        });

        this.datePickerYear();
    }

    datePickerYear = () => {
        $(function () {
            $(".datepicker-year").datepicker({
                dateFormat: "mm-yy",
                inline: true,
                changeMonth: true,
                changeYear: true,
                showButtonPanel: true,
                onClose: function (dateText, inst) {
                    $(this).datepicker(
                        "setDate",
                        new Date(inst.selectedYear, inst.selectedMonth, 1)
                    );
                }
            });
        });
    };
    renderListSche = () => {
        if (this.state.sche.list) {
            return this.state.sche.list.map((element, index) => {
                return (
                    <tr key={element.source_sche_khoa}>
                        <td className="text-center" role="row">
                            {index + 1}
                        </td>
                        <td>{element.source_title}</td>
                        <td>{element.source_sche_khoa}</td>
                        <td>{element.counter}</td>
                    </tr>
                );
            });
        }
    };

    render() {
        return (
            <>
                <Header/>
                <div id="page-wrapper">
                    <div className="container-fluid">
                        <div className="col-md-12">
                            <div className="panel" style={{padding: 16, background: '#f1f1f1'}}>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <h3>Tổng quát</h3>
                                    </div>
                                    <div className="col-sm-3">
                                        <div className="white-box analytics-info sh-card">
                                            <h3 className="box-title">Lượt truy cập</h3>
                                            <ul className="list-inline two-part">
                                                <li className="text-right" style={{width: '100%'}}>
                          <span className="counter num text-success">
                            {this.state.web.counter} lượt
                          </span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <div className="white-box analytics-info sh-card">
                                            <h3 className="box-title">Xem blog</h3>
                                            <ul className="list-inline two-part">
                                                <li className="text-right" style={{width: '100%'}}>
                          <span className="counter num text-success">
                            {this.state.blog.counter} lượt
                          </span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <div className="white-box analytics-info sh-card">
                                            <h3 className="box-title">Khóa học</h3>
                                            <ul className="list-inline two-part">
                                                <li className="text-right" style={{width: '100%'}}>
                          <span className="counter num text-success">
                            {this.state.source.list} lượt
                          </span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <div className="white-box analytics-info sh-card">
                                            <h3 className="box-title">Nhận quà</h3>
                                            <ul className="list-inline two-part">
                                                <li className="text-right" style={{width: '100%'}}>
                          <span className="counter num text-success">
                            {this.state.gift.list} lượt
                          </span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <Web/>
                                <Blog/>
                                <Gift/>
                                <Source/>
                                <div className="row margin-t-72">
                                    <div className="col-xs-12">
                                        <h3>Số lượng đăng ký khóa học</h3>
                                    </div>
                                    <div className="col-xs-12">
                                        <div className="list-sche">
                                            <div
                                                className="table-responsive"
                                                style={{background: "#fff"}}
                                            >
                                                <table className="table table-hover">
                                                    <thead>
                                                    <tr>
                                                        <th className="text-center" role="row">
                                                            #
                                                        </th>
                                                        <th>Khóa học</th>
                                                        <th>Thời khóa biểu</th>
                                                        <th>Tổng lượt đăng ký</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>{this.renderListSche()}</tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Home;
