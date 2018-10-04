import * as React from "react";
import {reIsDanger, reIsSuccess} from "../../../../reducers/init";
import {reShowEditContent, reSetContentElement} from "../../source/reSource";
import {connect} from "react-redux";
import {RESOURCE} from "../../../../config/const";
import {reAddUpdateContentElement} from "../../ui/reUI";

declare var CKEDITOR: any;

interface Props {
    reIsSuccess: (status: boolean) => void;
    reIsDanger: (status: boolean) => void;
    reShowEditContent: (status: boolean) => void;
    resContentElement: any;
    reAddUpdateContentElement: (form: any) => void;
    resAddUpdateContentElement: any;
}

interface IState {
    content_element: any;
}

class ModalEditContentElement extends React.Component<Props, IState> {
    constructor(props) {
        super(props)
        this.setState({
            content_element: this.props.resContentElement.content_element_data
        })
    }

    componentDidMount() {
        this.setState({
            content_element: this.props.resContentElement.content_element_data
        })
        CKEDITOR.plugins.addExternal('fontawesome', RESOURCE + 'ckeditor/plugins/fontawesome/', 'plugin.js');
        CKEDITOR.replace('editor1', {
            toolbar: [
                {"name": 'document', "groups": ['mode', 'document', 'doctools'], items: ['Source']},
                {
                    "name": 'basicstyles',
                    "groups": ['basicstyles', 'cleanup'],
                    items: ['Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', '-', 'CopyFormatting', 'RemoveFormat']
                },
                {"name": 'styles', "items": ['Styles', 'Format', 'Font', 'FontSize']},
                {"name": 'colors', "items": ['TextColor', 'BGColor']},
                {
                    "name": 'paragraph',
                    "groups": ['list', 'indent', 'blocks', 'align', 'bidi'],
                    items: ['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote', 'CreateDiv', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock', '-', 'BidiLtr', 'BidiRtl', 'Language']
                },
                {"name": 'links', "items": ['Link', 'Unlink', 'Anchor']},
                {
                    "name": 'insert',
                    "items": ['Table', 'HorizontalRule', 'Smiley', 'SpecialChar', 'PageBreak', 'Iframe']
                },
                {"name": 'FontAwesome', "items": ['FontAwesome']}
            ],
            extraAllowedContent: 'i;span;ul;li;table;td;style;*[id];*(*);*{*}',
            allowedContent: true,
            extraPlugins: 'fontawesome',
            removeButtons: 'Image',
            htmlEncodeOutput: false,
            entities: false,
            contentsCss: RESOURCE + 'ckeditor/plugins/fontawesome/css/font-awesome.min.css'
        });
    }

    saveContentPage = (obj) => {
        const data = CKEDITOR.instances.editor1.getData();
        this.props.reAddUpdateContentElement({
            ...obj,
            content_element_data: data
        })
    }

    componentDidUpdate(preProps) {
        if (this.props.resAddUpdateContentElement != preProps.resAddUpdateContentElement) {
            this.props.reShowEditContent(false)
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
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button
                                    onClick={() => this.props.reShowEditContent(false)}
                                    type="button"
                                    className="close"
                                    data-dismiss="modal"
                                    aria-hidden="true"
                                >
                                    ×
                                </button>
                                <h4>Thêm nội dung</h4>
                            </div>
                            <div className="modal-body">
                              <textarea cols={80} id="editor1" name="editor1" rows={10}>
                                {this.props.resContentElement.content_page_data}
                                </textarea>
                            </div>
                            <div className="modal-footer">
                                <button
                                    onClick={() => this.props.reShowEditContent(false)}
                                    type="button"
                                    className="btn btn-default waves-effect"
                                    data-dismiss="modal"
                                >
                                    Thoát
                                </button>
                                <button
                                    onClick={() => this.saveContentPage({
                                        idVirtualElement: this.props.resContentElement.detail_ui_random_id + '-content',
                                        content_element_id: this.props.resContentElement.content_element_id,
                                        content_element_id_detail_ui: this.props.resContentElement.detail_ui_id,
                                        content_element_id_source: this.props.resContentElement.idSource
                                    })}
                                    type="button"
                                    className="btn btn-danger waves-effect waves-light"
                                >
                                    Lưu
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal-backdrop fade in"/>
            </>
        )
    }
}

const mapStateToProps = storeState => ({
    resAddUpdateContentElement: storeState.reSource.resAddUpdateContentElement,
    resShowEditContent: storeState.reSource.resShowEditContent,
    resContentElement: storeState.reSource.resContentElement,
});
const mapDispatchToProps = {
    reIsDanger,
    reIsSuccess,
    reShowEditContent,
    reSetContentElement,
    reAddUpdateContentElement
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ModalEditContentElement);
