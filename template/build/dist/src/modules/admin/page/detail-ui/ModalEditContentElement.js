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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import * as React from "react";
import { reIsDanger, reIsSuccess } from "../../../../reducers/init";
import { reShowEditContent, reSetContentElement } from "../../source/reSource";
import { connect } from "react-redux";
import { reSaveContent } from "../rePage";
import { RESOURCE } from "../../../../config/const";
var ModalEditContentElement = /** @class */ (function (_super) {
    __extends(ModalEditContentElement, _super);
    function ModalEditContentElement(props) {
        var _this = _super.call(this, props) || this;
        _this.saveContentPage = function (obj) {
            var data = CKEDITOR.instances.editor1.getData();
            _this.props.reSaveContent(__assign({}, obj, { content_page_data: data }));
        };
        _this.setState({
            content_element: _this.props.resContentElement.content_page_data
        });
        return _this;
    }
    ModalEditContentElement.prototype.componentDidMount = function () {
        this.setState({
            content_element: this.props.resContentElement.content_page_data
        });
        CKEDITOR.plugins.addExternal('fontawesome', RESOURCE + 'ckeditor/plugins/fontawesome/', 'plugin.js');
        CKEDITOR.replace('editor1', {
            toolbar: [
                { "name": 'document', "groups": ['mode', 'document', 'doctools'], items: ['Source'] },
                { "name": 'basicstyles', "groups": ['basicstyles', 'cleanup'], items: ['Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', '-', 'CopyFormatting', 'RemoveFormat'] },
                { "name": 'styles', "items": ['Styles', 'Format', 'Font', 'FontSize'] },
                { "name": 'colors', "items": ['TextColor', 'BGColor'] },
                { "name": 'paragraph', "groups": ['list', 'indent', 'blocks', 'align', 'bidi'], items: ['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote', 'CreateDiv', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock', '-', 'BidiLtr', 'BidiRtl', 'Language'] },
                { "name": 'links', "items": ['Link', 'Unlink', 'Anchor'] },
                { "name": 'insert', "items": ['Table', 'HorizontalRule', 'Smiley', 'SpecialChar', 'PageBreak', 'Iframe'] },
                { "name": 'FontAwesome', "items": ['FontAwesome'] }
            ],
            extraAllowedContent: 'i;span;ul;li;table;td;style;*[id];*(*);*{*}',
            allowedContent: true,
            extraPlugins: 'fontawesome',
            removeButtons: 'Image',
            htmlEncodeOutput: false,
            entities: false,
            contentsCss: RESOURCE + 'ckeditor/plugins/fontawesome/css/font-awesome.min.css'
        });
    };
    ModalEditContentElement.prototype.componentDidUpdate = function (preProps) {
        if (this.props.resSaveContent != preProps.resSaveContent) {
            this.props.reShowEditContent(false);
        }
    };
    ModalEditContentElement.prototype.render = function () {
        var _this = this;
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { style: { display: "block" }, className: "modal fade in order-ebook", role: "dialog", "aria-hidden": "true" },
                React.createElement("div", { className: "modal-dialog modal-lg" },
                    React.createElement("div", { className: "modal-content" },
                        React.createElement("div", { className: "modal-header" },
                            React.createElement("button", { onClick: function () { return _this.props.reShowEditContent(false); }, type: "button", className: "close", "data-dismiss": "modal", "aria-hidden": "true" }, "\u00D7"),
                            React.createElement("h4", null, "Th\u00EAm n\u1ED9i dung")),
                        React.createElement("div", { className: "modal-body" },
                            React.createElement("textarea", { cols: 80, id: "editor1", name: "editor1", rows: 10 }, this.props.resContentElement.content_page_data)),
                        React.createElement("div", { className: "modal-footer" },
                            React.createElement("button", { onClick: function () { return _this.props.reShowEditContent(false); }, type: "button", className: "btn btn-default waves-effect", "data-dismiss": "modal" }, "Tho\u00E1t"),
                            React.createElement("button", { onClick: function () { return _this.saveContentPage({
                                    idVirtualElement: _this.props.resContentElement.detail_ui_random_id + '-content',
                                    content_page_id: _this.props.resContentElement.content_page_id,
                                    content_page_id_detail_ui: _this.props.resContentElement.detail_ui_id
                                }); }, type: "button", className: "btn btn-danger waves-effect waves-light" }, "L\u01B0u"))))),
            React.createElement("div", { className: "modal-backdrop fade in" })));
    };
    return ModalEditContentElement;
}(React.Component));
var mapStateToProps = function (storeState) { return ({
    resSaveContent: storeState.rePage.resSaveContent,
    resShowEditContent: storeState.reSource.resShowEditContent,
    resContentElement: storeState.reSource.resContentElement,
}); };
var mapDispatchToProps = {
    reIsDanger: reIsDanger,
    reIsSuccess: reIsSuccess,
    reShowEditContent: reShowEditContent,
    reSetContentElement: reSetContentElement,
    reSaveContent: reSaveContent
};
export default connect(mapStateToProps, mapDispatchToProps)(ModalEditContentElement);
//# sourceMappingURL=ModalEditContentElement.js.map