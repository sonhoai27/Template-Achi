import * as React from "react";
import { connect } from "react-redux";
import { reAddDateSche, reListDateSche } from "../reSource";
import { Editor } from "@tinymce/tinymce-react";
interface Props {
    currentIdSche: any,
    resAddDateSche: any;
    reAddDateSche: (form: any) => void;
    reListDateSche: (id: any)=> void
}
interface State {
    date_source_time: string;
    date_source_stt: number;
}
class AddDateSche extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
        date_source_time:'',
        date_source_stt: 0
    };
  }
  componentWillReceiveProps(nextProps){
      if(nextProps.resAddDateSche != this.props.reAddDateSche){
          if(nextProps.resAddDateSche.status === 200){
              alert('Ok')
              this.props.reListDateSche(this.props.currentIdSche)
          }
      }
  }
  onChange = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;
    // @ts-ignore
    this.setState({
      [name]: value
    });
  };
  addDateSche = () => {
    this.props.reAddDateSche({
        ...this.state,
        date_source_id_sche: this.props.currentIdSche
    });
  };
  render() {
    return (
      <div id="add-date-sche" className="modal fade" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">
                ×
              </button>
              <h4 className="modal-title">Thêm thời gian</h4>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-xs-12">
                  <div className="form-group" style={{display: 'inline-block', width: '100%'}}>
                    <label className="col-md-12">
                      <span className="help"> Thời gian</span>
                    </label>
                    <div className="col-md-12">
                    <Editor
                        onChange={(e: any)=> {
                            this.setState({
                                ...this.state,
                                date_source_time: e.level.content
                            })
                        }}
                        apiKey="t7eqx9nyehld0fibzbgtu06aax2f3beil1q091d12j97cmfl"
                        init={{
                          selector: "textarea",
                          height: 100,
                          theme: "modern",
                          plugins:
                            "print preview fullpage searchreplace autolink directionality visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists textcolor wordcount imagetools contextmenu colorpicker textpattern help",
                          toolbar1:
                            "fontsizeselect formatselect | bold italic strikethrough forecolor backcolor | link blockquote | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent  | removeformat",
                          fontsize_formats:
                            "10pt 11pt 12pt 14pt 16pt 18pt 20pt 24pt 26pt 28pt 36pt 48pt 72pt",
                        }}
                      />
                    </div>
                  </div>
                  <div className="form-group" style={{marginTop: 16, display: 'inline-block', width: '100%'}}>
                    <label className="col-md-12">
                      <span className="help"> Vị trí - độ ưu tiên hiển thị</span>
                    </label>
                    <div className="col-md-12">
                      <input
                        onChange={this.onChange}
                        type="number"
                        name="date_source_stt"
                        className="form-control"
                        defaultValue="0"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                onClick={this.addDateSche}
                type="button"
                className="btn btn-primary"
              >
                Lưu
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = storeState => ({
    resAddDateSche: storeState.reSource.resAddDateSche
});
const mapDispatchToProps = {
    reAddDateSche,
    reListDateSche
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddDateSche);
