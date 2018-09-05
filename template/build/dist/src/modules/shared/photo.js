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
import * as React from "react";
import Image from "./image";
import { connect } from "react-redux";
import { reShowPhotoApp, reSetCurrentEditorPhoto, reDeleteImage, reAddImage, reListImage } from "../../reducers/init";
var Photo = /** @class */ (function (_super) {
    __extends(Photo, _super);
    function Photo(props) {
        var _this = _super.call(this, props) || this;
        _this.handleClickHideUIComponents = function (e) {
            try {
                if (!_this.nodeContextMenuPhotoApp.contains(e.target)) {
                    var tempDom = document.getElementById("photo-app-context-menu");
                    tempDom.style.display = "none";
                    _this.setState({
                        dataImage: {}
                    });
                    return;
                }
            }
            catch (e) { }
        };
        _this._contextMenu = function (e) {
            e.preventDefault();
            _this.setState({
                dataImage: JSON.parse(e.target.id)
            });
            var contextMenu = document.getElementById("photo-app-context-menu");
            contextMenu.style.left = e.clientX + "px";
            contextMenu.style.top = e.clientY + "px";
            contextMenu.style.display = "block";
        };
        _this.handleInsert = function () {
            var uri = _this.state.dataImage;
            if (typeof _this.props.currentEditorPhoto === "object") {
                _this.props.currentEditorPhoto.insertContent("<img src=\"" + uri.uri + "\" class=\"img-responsive\"/>");
            }
            else {
                var tempDom = document.getElementById(_this.props.currentEditorPhoto);
                tempDom.src = uri.uri;
            }
            _this.props.reSetCurrentEditorPhoto("");
            _this.props.reShowPhotoApp(false);
            document.body.style.overflowY = "auto";
        };
        _this.handleDelete = function () {
            var name = _this.state.dataImage;
            alert(name.name);
        };
        _this.renderListImage = function () {
            if (_this.props.resListImage) {
                return _this.props.resListImage.map(function (element, i) {
                    return (React.createElement("div", { className: "col-sm-2 item", key: i },
                        React.createElement(Image, { dataSrc: JSON.stringify({
                                uri: element.uri,
                                name: element.name + i
                            }), onClick: function (e) { return _this._contextMenu(e); }, src: element.uri, width: 150, height: 150 })));
                });
            }
            return '';
        };
        _this.state = {
            dataImage: {}
        };
        _this.nodeContextMenuPhotoApp = React.createRef();
        return _this;
    }
    Photo.prototype.componentWillMount = function () {
        window.addEventListener("mousedown", this.handleClickHideUIComponents, false);
        document.body.style.overflowY = "hidden";
    };
    Photo.prototype.componentWillUnMount = function () {
        window.addEventListener("mousedown", this.handleClickHideUIComponents, false);
    };
    Photo.prototype.componentDidMount = function () {
        this.props.reListImage();
    };
    Photo.prototype.render = function () {
        var _this = this;
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { className: "photo-app" },
                React.createElement("div", { className: "header" },
                    React.createElement("div", { className: "title-app" }, "Photo App"),
                    React.createElement("div", { className: "search-bar-app" },
                        React.createElement("input", { name: "", id: "", type: "text", className: "form-control", placeholder: "B\u1EA1n mu\u1ED1n t\u00ECm g\u00EC?" })),
                    React.createElement("div", { className: "btn-close" },
                        React.createElement("button", { className: "btn btn-block btn-info btn-xs upload-file" }, "T\u1EA3i l\u00EAn"),
                        React.createElement("i", { onClick: function () {
                                _this.props.reShowPhotoApp(false);
                                document.body.style.overflowY = "auto";
                                _this.props.reSetCurrentEditorPhoto("");
                            }, className: "ti-close", style: { display: "flex", alignItems: "center" } }))),
                React.createElement("div", { className: "content" },
                    React.createElement("div", { className: "row" }, this.renderListImage()))),
            React.createElement("div", { ref: function (node) { return (_this.nodeContextMenuPhotoApp = node); }, className: "photo-app-context-menu", id: "photo-app-context-menu" },
                React.createElement("p", { onClick: this.handleInsert },
                    React.createElement("i", { className: "ti-link" }),
                    " Ch\u00E8n"),
                React.createElement("p", { onClick: this.handleDelete },
                    React.createElement("i", { className: "ti-trash" }),
                    " X\u00F3a"))));
    };
    return Photo;
}(React.Component));
var mapStateToProps = function (storeState) { return ({
    isShowPhotoApp: storeState.reInit.isShowPhotoApp,
    currentEditorPhoto: storeState.reInit.currentEditorPhoto,
    resListImage: storeState.reInit.resListImage,
    resDeleteImage: storeState.reInit.resDeleteImage,
    resAddImage: storeState.reInit.resAddImage
}); };
var mapDispatchToProps = {
    reShowPhotoApp: reShowPhotoApp,
    reSetCurrentEditorPhoto: reSetCurrentEditorPhoto,
    reListImage: reListImage,
    reDeleteImage: reDeleteImage,
    reAddImage: reAddImage
};
export default connect(mapStateToProps, mapDispatchToProps)(Photo);
//# sourceMappingURL=photo.js.map