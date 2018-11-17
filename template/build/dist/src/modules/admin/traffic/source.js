var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
import * as React from "react";
import { API } from "../../../config/const";
import axios from "axios";
import { Chart } from 'react-google-charts';
var Source = /** @class */ (function (_super) {
    __extends(Source, _super);
    function Source(props) {
        var _this = _super.call(this, props) || this;
        _this.datePickerYear = function () {
            $(function () {
                $(".datepicker-month__source").datepicker({
                    dateFormat: "yy/mm/dd",
                    inline: true,
                    changeMonth: true,
                    changeYear: true,
                    showButtonPanel: true,
                    onClose: function (dateText, inst) {
                        $(_this).datepicker("setDate", new Date(inst.selectedYear, inst.selectedMonth, 1));
                        _this.month($("#datepicker-month__source").val());
                    }
                });
                $(".datepicker-week__source").datepicker({
                    dateFormat: "yy/mm/dd",
                    inline: true,
                    changeMonth: true,
                    changeYear: true,
                    showButtonPanel: true,
                    onClose: function (dateText, inst) {
                        $(_this).datepicker("setDate", new Date(inst.selectedYear, inst.selectedMonth, 1));
                        _this.week($("#datepicker-week__source").val());
                    }
                });
            });
        };
        _this.makeCurrentDate = function () {
            var temp = new Date();
            return temp.getFullYear() + "/" + (temp.getMonth() + 1) + "/" + temp.getDate();
        };
        _this.week = function (day) {
            axios.post(API + "thong-ke/khoa-hoc/theo-tuan", {
                days: _this.getListDaysOfWeek(day)
            }).then(function (result) {
                var temp = [];
                result.data.list.map(function (element, index) {
                    if (index == 0) {
                        temp = __spread(temp, [[element[0], element[1]]]);
                    }
                    else {
                        temp = __spread(temp, [[element[0], Number(element[1])]]);
                    }
                });
                _this.setState({
                    week: temp
                }, function () {
                    console.log(_this.state.week);
                });
            });
        };
        _this.month = function (day) {
            axios.post(API + "thong-ke/khoa-hoc/theo-thang", {
                lastDay: _this.getLastDayOfMonth(day),
                month: day.split("/")[1],
                year: day.split("/")[0]
            }).then(function (result) {
                var temp = [];
                result.data.list.map(function (element, index) {
                    if (index == 0) {
                        temp = __spread(temp, [[element[0], element[1]]]);
                    }
                    else {
                        temp = __spread(temp, [[element[0], Number(element[1])]]);
                    }
                });
                _this.setState({
                    month: temp
                });
            });
        };
        _this.getLastDayOfMonth = function (day) {
            if (day === void 0) { day = ""; }
            if (day === "") {
                var temp = new Date();
                return new Date(temp.getFullYear(), temp.getMonth() + 1, 0).getDate();
            }
            else {
                var temp = new Date(day);
                return new Date(temp.getFullYear(), temp.getMonth() + 1, 0).getDate();
            }
        };
        _this.getListDaysOfWeek = function (day) {
            if (day === void 0) { day = ""; }
            var temp = [];
            var curr = "";
            if (day == "") {
                curr = new Date();
            }
            else {
                curr = new Date(day);
            }
            var first = curr.getDate() - curr.getDay();
            for (var i = 0; i < 7; i++) {
                var next = new Date((curr).getTime());
                next.setDate(first + i);
                temp = __spread(temp, [next.getDate() + "/" + (next.getMonth() + 1) + "/" + next.getFullYear()]);
            }
            return temp;
        };
        _this.initWeekMap = function () {
            return React.createElement(Chart, { width: '100%', height: '350px', chartType: "ColumnChart", loader: React.createElement("div", null, "Loading Chart"), data: __spread(_this.state.week), options: {
                    title: 'Biểu đồ cột',
                    chartArea: { width: '80%' },
                    hAxis: {
                        title: 'Tổng lượt',
                        minValue: 0,
                    },
                    vAxis: {
                        title: 'Số lượng',
                    },
                }, 
                // For tests
                rootProps: { 'data-testid': '1' } });
        };
        _this.initMonthMap = function () {
            return React.createElement(Chart, { width: '100%', height: '350px', chartType: "ColumnChart", loader: React.createElement("div", null, "Loading Chart"), data: __spread(_this.state.month), options: {
                    title: 'Biểu đồ cột',
                    chartArea: { width: '80%' },
                    hAxis: {
                        title: 'Tổng lượt',
                        minValue: 0,
                    },
                    vAxis: {
                        title: 'Số lượng',
                    },
                }, 
                // For tests
                rootProps: { 'data-testid': '1' } });
        };
        _this.state = {
            web: {},
            week: {},
            month: {}
        };
        return _this;
    }
    Source.prototype.componentDidMount = function () {
        var _this = this;
        axios.get(API + "thong-ke/khoa-hoc/tong-quat").then(function (result) {
            _this.setState({
                web: result.data
            });
        });
        this.datePickerYear();
        this.week(this.makeCurrentDate());
        this.month(this.makeCurrentDate());
    };
    Source.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { className: "row margin-t-72" },
                React.createElement("div", { className: "col-sm-6" },
                    React.createElement("h3", null, "Kh\u00F3a h\u1ECDc"),
                    React.createElement("div", { className: "sh-card padding-16 min-height" },
                        React.createElement("p", { className: "bold" },
                            "L\u01B0\u1EE3t \u0111\u0103ng k\u00FD h\u00F4m nay: ",
                            this.state.web.counter),
                        React.createElement("hr", null))),
                React.createElement("div", { className: "col-sm-6" },
                    React.createElement("div", { className: "flex" },
                        React.createElement("h4", { className: "flex-1" }, "Theo tu\u1EA7n"),
                        React.createElement("input", { id: "datepicker-week__source", placeholder: "Ch\u1ECDn n\u0103m \u0111\u1EC3 xem", type: "text", className: "form-control datepicker-week__source flex-2" })),
                    React.createElement("div", { className: "col-xs-12" },
                        React.createElement("div", { className: "sh-card padding-16 min-height" }, this.initWeekMap()))),
                React.createElement("div", { className: "col-sm-12 margin-t-72" },
                    React.createElement("div", { className: "flex" },
                        React.createElement("h4", { className: "flex-1" }, "Theo th\u00E1ng"),
                        React.createElement("input", { id: "datepicker-month__source", placeholder: "Ch\u1ECDn n\u0103m \u0111\u1EC3 xem", type: "text", className: "form-control datepicker-month__source flex-2" })),
                    React.createElement("div", { className: "row" },
                        React.createElement("div", { className: "col-xs-12" },
                            React.createElement("div", { className: "sh-card padding-16 min-height" }, this.initMonthMap())))))));
    };
    return Source;
}(React.Component));
export default Source;
//# sourceMappingURL=source.js.map