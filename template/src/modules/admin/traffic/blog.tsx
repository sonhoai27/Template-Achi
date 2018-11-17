import * as React from "react";
import { API } from "../../../config/const";
import axios from "axios";
import {Chart} from 'react-google-charts';
declare var $: any;
interface IState {
    web: any;
    week: any;
    month: any;
}
class Blog extends React.Component<{}, IState> {
    constructor(props) {
        super(props);
        this.state = {
            web: {},
            week: {},
            month: {}
        };
    }
    componentDidMount() {
        axios.get(API + "thong-ke/blog/danh-sach-bai-viet").then(result => {
            this.setState(
                {
                    web: result.data
                }
            );
        });
        this.datePickerYear()
        this.week(this.makeCurrentDate())
        this.month(this.makeCurrentDate())
    }
    datePickerYear = () => {
        $(()=> {
            $(".datepicker-month__blog").datepicker({
                dateFormat: "yy/mm/dd",
                inline: true,
                changeMonth: true,
                changeYear: true,
                showButtonPanel: true,
                onClose: (dateText, inst)=> {
                    $(this).datepicker(
                        "setDate",
                        new Date(inst.selectedYear, inst.selectedMonth, 1)
                    );
                    this.month($("#datepicker-month__blog").val())
                }
            });
            $(".datepicker-week__blog").datepicker({
                dateFormat: "yy/mm/dd",
                inline: true,
                changeMonth: true,
                changeYear: true,
                showButtonPanel: true,
                onClose: (dateText, inst)=> {
                    $(this).datepicker(
                        "setDate",
                        new Date(inst.selectedYear, inst.selectedMonth, 1)
                    );
                    this.week($("#datepicker-week__blog").val())
                }
            });
        });
    };
    makeCurrentDate = (): string => {
        const temp = new Date()
        return temp.getFullYear() + "/" + (temp.getMonth() + 1) + "/" + temp.getDate()
    }
    week = (day) => {
        axios.post(API + "thong-ke/blog/theo-tuan", {
            days: this.getListDaysOfWeek(day)
        }).then(result => {
            let temp: any = []
            result.data.list.map((element, index) => {
                if (index == 0) {
                    temp = [...temp, [element[0], element[1]]]
                } else {
                    temp = [...temp, [element[0], Number(element[1])]]
                }
            })
            this.setState(
                {
                    week: temp
                },
                () => {
                    console.log(this.state.week);
                }
            );
        });
    }
    month = (day) => {
        axios.post(API + "thong-ke/blog/theo-thang", {
            lastDay: this.getLastDayOfMonth(day),
            month: day.split("/")[1],
            year: day.split("/")[0]
        }).then(result => {
            let temp: any = []
            result.data.list.map((element, index) => {
                if (index == 0) {
                    temp = [...temp, [element[0], element[1]]]
                } else {
                    temp = [...temp, [element[0], Number(element[1])]]
                }
            })
            this.setState(
                {
                    month: temp
                });
        });
    }
    getLastDayOfMonth = (day = ""): number => {
        if (day === "") {
            let temp = new Date();
            return new Date(temp.getFullYear(), temp.getMonth() + 1, 0).getDate()
        } else {
            let temp = new Date(day);
            return new Date(temp.getFullYear(), temp.getMonth() + 1, 0).getDate()
        }
    }
    getListDaysOfWeek = (day = "") => {
        let temp: any = [];
        let curr: any = "";
        if (day == "") {
            curr = new Date()
        } else {
            curr = new Date(day)
        }
        const first = curr.getDate() - curr.getDay();
        for (var i = 0; i < 7; i++) {
            let next = new Date((curr).getTime());
            next.setDate(first + i);
            temp = [...temp, next.getDate() + "/" + (next.getMonth() + 1) + "/" + next.getFullYear()]
        }
        return temp
    }
    initWeekMap = () => {
        return <Chart
            width={'100%'}
            height={'350px'}
            chartType="ColumnChart"
            loader={<div>Loading Chart</div>}
            data={[
                ...this.state.week,
            ]}
            options={{
                title: 'Biểu đồ cột',
                chartArea: {width: '80%'},
                hAxis: {
                    title: 'Tổng lượt',
                    minValue: 0,
                },
                vAxis: {
                    title: 'Số lượng',
                },
            }}
            // For tests
            rootProps={{'data-testid': '1'}}
        />
    }
    initMonthMap = () => {
        return <Chart
            width={'100%'}
            height={'350px'}
            chartType="ColumnChart"
            loader={<div>Loading Chart</div>}
            data={[
                ...this.state.month,
            ]}
            options={{
                title: 'Biểu đồ cột',
                chartArea: {width: '80%'},
                hAxis: {
                    title: 'Tổng lượt',
                    minValue: 0,
                },
                vAxis: {
                    title: 'Số lượng',
                },
            }}
            // For tests
            rootProps={{'data-testid': '1'}}
        />
    }
    render() {
        return (
            <>
                <div className="row margin-t-72">
                    <div className="col-sm-6">
                        <h3>Bài viết - blog</h3>
                        <div className="sh-card padding-16 min-height">
                            <p className="bold">
                                Lượt truy cập hôm nay: {this.state.web.counter}
                            </p>
                            <hr />
                            <p className="bold">Địa chỉ truy cập nhiều nhất</p>
                            <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                                {this.state.web.list
                                    ? this.state.web.list.map((element, index) => {
                                        return (
                                            <li key={index}>
                                                <a href={element.traffic_url} target="_blank">
                                                    {element.traffic_url} - {element.counter}
                                                </a>
                                            </li>
                                        );
                                    })
                                    : ""}
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="flex">
                            <h4 className="flex-1">Theo tuần</h4>
                            <input
                                id="datepicker-week__blog"
                                placeholder="Chọn năm để xem"
                                type="text"
                                className="form-control datepicker-week__blog flex-2"
                            />
                        </div>
                        <div className="col-xs-12">
                            <div className="sh-card padding-16 min-height">
                                {this.initWeekMap()}
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 margin-t-72">
                        <div className="flex">
                            <h4 className="flex-1">Theo tháng</h4>
                            <input
                                id="datepicker-month__blog"
                                placeholder="Chọn năm để xem"
                                type="text"
                                className="form-control datepicker-month__blog flex-2"
                            />
                        </div>
                        <div className="row">
                            <div className="col-xs-12">
                                <div className="sh-card padding-16 min-height">
                                    {this.initMonthMap()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Blog;
