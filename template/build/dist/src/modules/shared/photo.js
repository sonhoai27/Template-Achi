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
import axios from "axios";
import { reShowPhotoApp, reSetCurrentEditorPhoto, reDeleteImage, reAddImage, reListImage } from "../../reducers/init";
import { API } from "../../config/const";
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
            if (typeof _this.props.currentEditorPhoto === "object" &&
                !_this.props.currentEditorPhoto.type) {
                _this.props.currentEditorPhoto.insertContent("<img src=\"" + uri.uri + "\" class=\"img-responsive\">");
            }
            else if (typeof _this.props.currentEditorPhoto === "object" &&
                _this.props.currentEditorPhoto.type === "ck") {
                _this.props.currentEditorPhoto.editor.insertHtml("<img src=\"" + uri.uri + "\" class=\"img-responsive\">");
            }
            else {
                try {
                    var tempDom = document.getElementById(_this.props.currentEditorPhoto);
                    tempDom.src = uri.uri;
                }
                catch (e) { }
            }
            _this.props.reSetCurrentEditorPhoto("");
            _this.props.reShowPhotoApp(false);
            document.body.style.overflowY = "auto";
        };
        _this.handleDelete = function () {
            var name = _this.state.dataImage;
            _this.props.reDeleteImage(name.name);
        };
        _this.renderListImage = function () {
            if (_this.props.resListImage) {
                return _this.props.resListImage.map(function (element, i) {
                    return (React.createElement("div", { className: "col-sm-2 item", key: i },
                        React.createElement(Image, { dataSrc: JSON.stringify({
                                uri: element.uri,
                                name: element.name
                            }), onClick: function (e) { return _this._contextMenu(e); }, src: element.uri, width: 150, height: 150 })));
                });
            }
            return "";
        };
        _this.handleCopy = function () {
            var uri = _this.state.dataImage;
            var el = document.createElement("textarea");
            el.value = uri.uri;
            document.body.appendChild(el);
            el.select();
            document.execCommand("copy");
            document.body.removeChild(el);
            _this.props.reSetCurrentEditorPhoto("");
            _this.props.reShowPhotoApp(false);
            document.body.style.overflowY = "auto";
        };
        _this.state = {
            dataImage: {},
            imageChoose: {}
        };
        _this.nodeContextMenuPhotoApp = React.createRef();
        return _this;
    }
    Photo.prototype.componentDidUpdate = function (preProps) {
        if (preProps.resDeleteImage != this.props.resDeleteImage) {
            if (this.props.resDeleteImage.status === 200) {
                this.props.reListImage();
            }
        }
    };
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
                        React.createElement("button", { className: "btn btn-block btn-info btn-xs upload-file", "data-toggle": "modal", "data-target": "#upload-image" }, "T\u1EA3i l\u00EAn"),
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
                React.createElement("p", { onClick: this.handleCopy },
                    React.createElement("i", { className: "icon-layers" }),
                    " Copy link"),
                React.createElement("p", { onClick: this.handleDelete },
                    React.createElement("i", { className: "ti-trash" }),
                    " X\u00F3a")),
            React.createElement("div", { id: "upload-image", className: "modal fade", tabIndex: -1, role: "dialog", "aria-labelledby": "upload-image", "aria-hidden": "true" },
                React.createElement("div", { className: "modal-dialog modal-sm" },
                    React.createElement("div", { className: "modal-content" },
                        React.createElement("div", { className: "modal-header" },
                            React.createElement("button", { type: "button", className: "close", "data-dismiss": "modal", "aria-hidden": "true" }, "\u00D7"),
                            React.createElement("h4", { className: "modal-title", id: "mySmallModalLabel" }, "Upload H\u00ECnh \u1EA3nh"),
                            " "),
                        React.createElement("div", { className: "modal-body" },
                            React.createElement("input", { onChange: function (e) {
                                    // const data = new FormData();
                                    // data.append('upload-image', e.target.files[0]);
                                    var reader = new FileReader();
                                    reader.onload = function (event) {
                                        var tempDomImage = document.getElementById("review-image-before-upload");
                                        tempDomImage.src = event.target.result;
                                    };
                                    reader.readAsDataURL(e.target.files[0]);
                                    _this.setState({
                                        imageChoose: e.target.files[0]
                                    });
                                }, name: "file", id: "photo-app-choose-file", type: "file", placeholder: "Ch\u1ECDn h\u00ECnh", accept: "image/png, image/jpeg" }),
                            React.createElement("img", { id: "review-image-before-upload", className: "img-responsive", width: "100%", height: "50" })),
                        React.createElement("div", { className: "modal-footer" },
                            React.createElement("button", { onClick: function () {
                                    var data = new FormData();
                                    data.append("upload-image", _this.state.imageChoose);
                                    axios
                                        .post(API + "file/upload/photo", data)
                                        .then(function (result) {
                                        if (result.status === 200) {
                                            $("#upload-image").modal("hide");
                                            _this.props.reListImage();
                                        }
                                    })
                                        .catch(function (err) {
                                    });
                                }, type: "button", className: "btn btn-danger waves-effect waves-light" }, "T\u1EA3i l\u00EAn")))))));
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