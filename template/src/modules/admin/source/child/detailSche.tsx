import * as React from "react";
import { connect } from "react-redux";
import { reDetailSche, reUpdateSche } from "../reSource";
import { reIsDanger, reIsSuccess } from "../../../../reducers/init";
import { Editor } from "@tinymce/tinymce-react";
interface Props {
  match: any;
  reDetailSche: (id: any) => void;
  reUpdateSche: (form: any, id: number) => void;
  resDetailSche: any;
  resUpdateSche: any;
  reIsSuccess: (status: boolean) => void;
  reIsDanger: (status: boolean) => void;
}
interface State {
  source_sche_id: number;
  source_sche_id_source: number;
  source_sche_number: string;
  source_sche_price: number;
  source_sche_sale: number;
  source_sche_address: string;
  source_sche_teacher: string;
  source_sche_status: number;
  source_sche_khoa: string;
  source_date_sche: string;
}
class DetailSche extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      source_sche_id: 0,
      source_sche_id_source: 0,
      source_sche_number: "",
      source_sche_price: 0,
      source_sche_sale: 0,
      source_sche_address: "",
      source_sche_teacher: "",
      source_sche_status: 0,
      source_sche_khoa: "",
      source_date_sche: ""
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.resDetailSche != this.props.resDetailSche) {
      this.setState({
        source_sche_id: nextProps.resDetailSche.list.source_sche_id,
        source_sche_id_source:
          nextProps.resDetailSche.list.source_sche_id_source,
        source_sche_number: nextProps.resDetailSche.list.source_sche_number,
        source_sche_price: nextProps.resDetailSche.list.source_sche_price,
        source_sche_sale: nextProps.resDetailSche.list.source_sche_sale,
        source_sche_address: nextProps.resDetailSche.list.source_sche_address,
        source_sche_teacher: nextProps.resDetailSche.list.source_sche_teacher,
        source_sche_status: nextProps.resDetailSche.list.source_sche_status,
        source_sche_khoa: nextProps.resDetailSche.list.source_sche_khoa,
        source_date_sche: nextProps.resDetailSche.list.source_date_sche
      });
    }
  }
  componentDidUpdate(preProps) {
    if (preProps.resUpdateSche != this.props.resUpdateSche) {
      if (this.props.resUpdateSche.status === 200) {
        this.props.reIsSuccess(true);
        setTimeout(() => {
          this.props.reIsSuccess(false);
          window.location.href = this.props.match.url;
        }, 2000);
      } else {
        this.props.reIsDanger(true);
        setTimeout(() => {
          this.props.reIsDanger(false);
          window.location.href = this.props.match.url;
        }, 2000);
      }
    }
  }
  componentDidMount() {
    this.props.reDetailSche(this.props.match.params.idSche);
  }
  onChange = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;
    // @ts-ignore
    this.setState({
      [name]: value
    });
  };
  updateSche = () => {
    this.props.reUpdateSche(this.state, this.state.source_sche_id);
    console.log(this.state)
  };
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="panel">
            <div className="panel-toolbar">
              <div className="panel-heading">Chi tiết lịch học</div>
              <div className="panel-action-bar">
                <div onClick={this.updateSche} className="btn btn-xs btn-info">
                  Cập nhật
                </div>
              </div>
            </div>
            <div className="content">
              <div className="row">
                <div className="col-sm-12">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label className="col-md-12">
                          <span className="help"> Khóa</span>
                        </label>
                        <div className="col-md-12">
                          <input
                            onChange={this.onChange}
                            type="text"
                            name="source_sche_khoa"
                            className="form-control"
                            value={this.state.source_sche_khoa}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label className="col-md-12">
                          <span className="help"> Số lượng</span>
                        </label>
                        <div className="col-md-12">
                          {/* <input
                            onChange={this.onChange}
                            type="number"
                            name="source_sche_number"
                            className="form-control"
                            value={this.state.source_sche_number}
                          /> */}
                          <Editor

                            id="source_sche_number"
                            value={this.state.source_sche_number}
                            onChange={(e: any) => {
                              this.setState({
                                ...this.state,
                                source_sche_number: e.level.content
                              });
                            }}
                            apiKey="t7eqx9nyehld0fibzbgtu06aax2f3beil1q091d12j97cmfl"
                            init={{
                              mode : "exact",
                              element: 'source_sche_number',
                              height: 100,
                              theme: "modern",
                              plugins:
                                "print preview fullpage searchreplace autolink directionality visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists textcolor wordcount imagetools contextmenu colorpicker textpattern help",
                              toolbar1:
                                "fontsizeselect formatselect | bold italic strikethrough forecolor backcolor | link blockquote | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent  | removeformat",
                              fontsize_formats:
                                "10pt 11pt 12pt 14pt 16pt 18pt 20pt 24pt 26pt 28pt 36pt 48pt 72pt"
                            }}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <div className="form-group">
                        <label className="col-md-12">
                          <span className="help"> Giá</span>
                        </label>
                        <div className="col-md-12">
                          <input
                            onChange={this.onChange}
                            type="number"
                            name="source_sche_price"
                            className="form-control"
                            value={this.state.source_sche_price}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <div className="form-group">
                        <label className="col-md-12">
                          <span className="help"> Giảm giá</span>
                        </label>
                        <div className="col-md-12">
                          <input
                            onChange={this.onChange}
                            type="number"
                            name="source_sche_sale"
                            className="form-control"
                            value={this.state.source_sche_sale}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label className="col-md-12">
                          <span className="help"> Địa chỉ học</span>
                        </label>
                        <div className="col-md-12">
                          <input
                            onChange={this.onChange}
                            type="text"
                            name="source_sche_address"
                            className="form-control"
                            value={this.state.source_sche_address}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <div className="form-group">
                        <label className="col-md-12">
                          <span className="help"> Giáo viên</span>
                        </label>
                        <div className="col-md-12">
                          <input
                            onChange={this.onChange}
                            type="text"
                            name="source_sche_teacher"
                            className="form-control"
                            value={this.state.source_sche_teacher}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <div className="form-group">
                        <label className="col-md-12">
                          <span className="help"> Trạng thái</span>
                        </label>
                        <div className="col-md-12">
                          <select
                            onChange={this.onChange}
                            name="source_sche_status"
                            className="form-control"
                          >
                            <option>Chọn</option>
                            <option
                              selected={
                                this.state.source_sche_status == 0
                                  ? true
                                  : false
                              }
                              value="0"
                            >
                              Ẩn
                            </option>
                            <option
                              selected={
                                this.state.source_sche_status == 1
                                  ? true
                                  : false
                              }
                              value="1"
                            >
                              Hiện
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <div
                        className="form-group"
                        style={{ display: "inline-block", width: "100%" }}
                      >
                        <label className="col-md-12">
                          <span className="help"> Thời gian</span>
                        </label>
                        <div className="col-md-12">
                          <Editor
                            id="source_date_sche"
                            value={this.state.source_date_sche}
                            onChange={(e: any) => {
                              this.setState({
                                ...this.state,
                                source_date_sche: e.level.content
                              });
                            }}
                            apiKey="t7eqx9nyehld0fibzbgtu06aax2f3beil1q091d12j97cmfl"
                            init={{
                              mode : "exact",
                              element: 'source_date_sche',
                              height: 100,
                              theme: "modern",
                              plugins:
                                "print preview fullpage searchreplace autolink directionality visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists textcolor wordcount imagetools contextmenu colorpicker textpattern help",
                              toolbar1:
                                "fontsizeselect formatselect | bold italic strikethrough forecolor backcolor | link blockquote | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent  | removeformat",
                              fontsize_formats:
                                "10pt 11pt 12pt 14pt 16pt 18pt 20pt 24pt 26pt 28pt 36pt 48pt 72pt"
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = storeState => ({
  resDetailSche: storeState.reSource.resDetailSche,
  resUpdateSche: storeState.reSource.resUpdateSche
});
const mapDispatchToProps = {
  reDetailSche,
  reUpdateSche,
  reIsDanger,
  reIsSuccess
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailSche);
