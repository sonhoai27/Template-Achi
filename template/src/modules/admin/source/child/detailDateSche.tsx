import * as React from "react";
import { connect } from "react-redux";
import { Editor } from "@tinymce/tinymce-react";
import { reUpdateDateSche, reListDateSche } from "../reSource";
interface Props {
    onclick: any,
    dateSche: any,
    resUpdateDateSche: any;
    reUpdateDateSche: (form: any, id: number) => void,
    reListDateSche: (id: number)=> void
}
interface State {
    date_source_time: string;
    date_source_stt: number;
}
class DetailDateSche extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
        date_source_time: this.props.dateSche.date_source_time,
        date_source_stt: this.props.dateSche.date_source_stt
    };
    console.log(this.props.dateSche)
  }
  componentWillReceiveProps(nextProps){
      if(nextProps.resUpdateDateSche != this.props.resUpdateDateSche){
          if(nextProps.resUpdateDateSche.status === 200){
              alert('Ok')
              this.props.reListDateSche(this.props.dateSche.idSche)
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
  updateDateSche = () => {
    this.props.reUpdateDateSche(this.state,this.props.dateSche.date_source_id);
  };
  render() {
    return (
      <div id="update-date-sche" className="modal fade in" role="dialog" style={{display: 'block'}}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" onClick={this.props.onclick}>
                ×
              </button>
              <h4 className="modal-title">Sửa thời gian</h4>
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
                        initialValue={this.state.date_source_time}
                        apiKey="t7eqx9nyehld0fibzbgtu06aax2f3beil1q091d12j97cmfl"
                        init={{
                            spellchecker_language: 'vi-VN',
                          selector: "textarea",
                          height: 100,
                          theme: "modern",
                          plugins:
                            "print preview fullpage powerpaste searchreplace autolink directionality advcode visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists textcolor wordcount tinymcespellchecker a11ychecker imagetools mediaembed  linkchecker contextmenu colorpicker textpattern help",
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
                        value={this.state.date_source_stt}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                onClick={this.updateDateSche}
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
    resUpdateDateSche: storeState.reSource.resUpdateDateSche
});
const mapDispatchToProps = {
    reUpdateDateSche,
    reListDateSche
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailDateSche);
