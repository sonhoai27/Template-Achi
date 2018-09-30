import * as React from "react";
import { reIsDanger, reIsSuccess } from "../../../../reducers/init";
import { reShowEditContent, reSetContentElement } from "../reSource";
import { connect } from "react-redux";
import { reSaveContent } from "../../page/rePage";
declare var CKEDITOR: any;
interface Props {
  reListContentUISource: (idUI: number, idSource: number)=> void;
  reIsSuccess: (status: boolean) => void;
  reIsDanger: (status: boolean) => void;
  reShowEditContent: (status: boolean)=> void;
  resContentElement: any;
  reSaveContent: (form: any)=> void;
  resSaveContent: any;
}
interface IState {
  content_element: any;
}
class ModalEditContentElement extends React.Component<Props, IState> {
  constructor(props){
    super(props)
    this.setState({
      content_element: this.props.resContentElement.content_page_data
    })
  }
  componentDidMount(){
    this.setState({
      content_element: this.props.resContentElement.content_page_data
    })
    CKEDITOR.replace( 'editor1', {
			toolbar: [
				{ "name": 'document', "groups": [ 'mode', 'document', 'doctools' ], items: [ 'Source']},
				{ "name": 'basicstyles', "groups": [ 'basicstyles', 'cleanup' ], items: [ 'Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', '-', 'CopyFormatting', 'RemoveFormat' ] },
				{ "name": 'styles', "items": [ 'Styles', 'Format', 'Font', 'FontSize' ] },
				{ "name": 'colors', "items": [ 'TextColor', 'BGColor' ] },
				{ "name": 'paragraph', "groups": [ 'list', 'indent', 'blocks', 'align', 'bidi' ], items: [ 'NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote', 'CreateDiv', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock', '-', 'BidiLtr', 'BidiRtl', 'Language' ] },
				{ "name": 'links', "items": [ 'Link', 'Unlink', 'Anchor'] },
				{ "name": 'insert', "items": ['Table', 'HorizontalRule', 'Smiley', 'SpecialChar', 'PageBreak', 'Iframe' ] },
			],
      removeButtons: 'Image',
      htmlEncodeOutput: false,
      entities: false
		} );
  }
  saveContentPage = (obj)=> {
    const data = CKEDITOR.instances.editor1.getData();
    this.props.reSaveContent({
      ...obj,
      content_page_data: data
    })
  }
  componentDidUpdate(preProps){
      if(this.props.resSaveContent != preProps.resSaveContent){
        this.props.reShowEditContent(false)
      }
  }
  render(){
    return(
      <>
      <div
          style={{ display: "block" }}
          className="modal fade in order-ebook"
          role="dialog"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  onClick={()=>this.props.reShowEditContent(false)}
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
              <textarea cols={80} id="editor1" name="editor1" rows={10} >
                {this.props.resContentElement.content_page_data}
	            </textarea>
              {/* <Editor
                initialValue={this.props.resContentElement.content_page_data}
                onChange={(e: any)=> {
                    this.setState({
                        ...this.state,
                        content_element: e.level.content
                    })
                }}
                apiKey="qagffr3pkuv17a8on1afax661irst1hbr4e6tbv888sz91jc"
                init={{
                  selector: "textarea",
                  height: 100,
                  theme: "modern",
                  spellchecker_language: 'vi-VN',
                  entity_encoding : "raw",
                  plugins:
                    "print preview fullpage advcode searchreplace autolink directionality visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists textcolor wordcount imagetools contextmenu colorpicker textpattern help",
                  toolbar1:
                    "fontsizeselect formatselect | bold italic strikethrough forecolor backcolor | link blockquote | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent  | removeformat",
                  fontsize_formats:
                    "10pt 11pt 12pt 14pt 16pt 18pt 20pt 24pt 26pt 28pt 36pt 48pt 72pt",
                }}
              /> */}
              </div>
              <div className="modal-footer">
                <button
                  onClick={()=>this.props.reShowEditContent(false)}
                  type="button"
                  className="btn btn-default waves-effect"
                  data-dismiss="modal"
                >
                  Thoát
                </button>
                <button
                onClick={()=> this.saveContentPage({
                  idVirtualElement: this.props.resContentElement.detail_ui_random_id+'-content',
                  content_page_id: this.props.resContentElement.content_page_id,
                  content_page_id_detail_ui: this.props.resContentElement.detail_ui_id
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
        <div className="modal-backdrop fade in" />
      </>
    )
  }
}

const mapStateToProps = storeState => ({
  resSaveContent: storeState.rePage.resSaveContent,
  resShowEditContent: storeState.reSource.resShowEditContent,
  resContentElement: storeState.reSource.resContentElement,
});
const mapDispatchToProps = {
  reIsDanger,
  reIsSuccess,
  reShowEditContent,
  reSetContentElement,
  reSaveContent
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalEditContentElement);
