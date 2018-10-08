import * as React from "react";
import { connect } from "react-redux";
import { reAddSche } from "../reSource";
import { reIsDanger, reIsSuccess } from "../../../../reducers/init";
import { BASEURLADMIN } from "../../../../config/const";
import { Editor } from "@tinymce/tinymce-react";
interface Props {
  match: any;
  resAddSche: any;
  reAddSche: (form: any) => void;
  reIsSuccess: (status: boolean) => void;
  reIsDanger: (status: boolean) => void;
}
interface State {
  source_sche_number: number;
  source_sche_price: number;
  source_sche_sale: number;
  source_sche_address: string;
  source_sche_teacher: string;
  source_sche_status: number;
  source_sche_khoa: string;
  source_date_sche: string;
}
class AddSche extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      source_sche_number: 0,
      source_sche_price: 0,
      source_sche_sale: 0,
      source_sche_address: "",
      source_sche_teacher: "",
      source_sche_status: 0,
      source_sche_khoa: "",
      source_date_sche: ""
    };
  }
  onChange = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;
    // @ts-ignore
    this.setState({
      [name]: value
    });
  };
  addSche = () => {
    this.props.reAddSche({
      ...this.state,
      source_sche_id_source: this.props.match.params.idSource
    });
  };
  componentDidUpdate(preProps) {
    if (preProps.resAddSche != this.props.resAddSche) {
      if (this.props.resAddSche.status === 200) {
        this.props.reIsSuccess(true);
        setTimeout(() => {
          this.props.reIsSuccess(false);
          window.location.href =
            BASEURLADMIN +
            "source/list-sche/" +
            this.props.match.params.idSource;
        }, 2000);
      } else {
        this.props.reIsDanger(true);
        setTimeout(() => {
          this.props.reIsDanger(false);
          window.location.href =
            BASEURLADMIN +
            "source/list-sche/" +
            this.props.match.params.idSource;
        }, 2000);
      }
    }
  }
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="panel">
            <div className="panel-toolbar">
              <div className="panel-heading">Thêm lịch học</div>
              <div className="panel-action-bar">
                <div onClick={this.addSche} className="btn btn-xs btn-info">
                  Lưu
                </div>
              </div>
            </div>
            <div className="content">
              <div className="row">
                <div className="col-sm-12">
                  <div
                    className="form-group"
                    style={{ width: "50%", float: "left" }}
                  >
                    <label className="col-md-12">
                      <span className="help"> Khóa</span>
                    </label>
                    <div className="col-md-12">
                      <input
                        onChange={this.onChange}
                        type="text"
                        name="source_sche_khoa"
                        className="form-control"
                        placeholder="Khóa"
                      />
                    </div>
                  </div>
                  <div
                    className="form-group"
                    style={{ width: "50%", float: "left" }}
                  >
                    <label className="col-md-12">
                      <span className="help"> Số lượng</span>
                    </label>
                    <div className="col-md-12">
                      <input
                        onChange={this.onChange}
                        type="number"
                        name="source_sche_number"
                        className="form-control"
                        placeholder="Số lượng"
                      />
                    </div>
                  </div>
                  <div
                    className="form-group"
                    style={{ width: "50%", float: "left" }}
                  >
                    <label className="col-md-12">
                      <span className="help"> Giá</span>
                    </label>
                    <div className="col-md-12">
                      <input
                        onChange={this.onChange}
                        type="number"
                        name="source_sche_price"
                        className="form-control"
                        placeholder="Giá"
                      />
                    </div>
                  </div>
                  <div
                    className="form-group"
                    style={{ width: "50%", float: "left" }}
                  >
                    <label className="col-md-12">
                      <span className="help"> Giảm giá</span>
                    </label>
                    <div className="col-md-12">
                      <input
                        onChange={this.onChange}
                        type="number"
                        name="source_sche_sale"
                        className="form-control"
                        placeholder="Giảm giá"
                      />
                    </div>
                  </div>
                  <div
                    className="form-group"
                    style={{ width: "50%", float: "left" }}
                  >
                    <label className="col-md-12">
                      <span className="help"> Địa chỉ học</span>
                    </label>
                    <div className="col-md-12">
                      <input
                        onChange={this.onChange}
                        type="text"
                        name="source_sche_address"
                        className="form-control"
                        placeholder="Địa chỉ học"
                      />
                    </div>
                  </div>
                  <div
                    className="form-group"
                    style={{ width: "50%", float: "left" }}
                  >
                    <label className="col-md-12">
                      <span className="help"> Giáo viên</span>
                    </label>
                    <div className="col-md-12">
                      <input
                        onChange={this.onChange}
                        type="text"
                        name="source_sche_teacher"
                        className="form-control"
                        placeholder="Giáo viên"
                      />
                    </div>
                  </div>
                  <div
                    className="form-group"
                    style={{ width: "50%", float: "left" }}
                  >
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
                        <option value="0">Ẩn</option>
                        <option value="1">Hiện</option>
                      </select>
                    </div>
                  </div>
                  <div
                    className="form-group"
                    style={{ display: "inline-block", width: "100%" }}
                  >
                    <label className="col-md-12">
                      <span className="help"> Thời gian</span>
                    </label>
                    <div className="col-md-12">
                      <Editor
                        onChange={(e: any) => {
                          this.setState({
                            ...this.state,
                            source_date_sche: e.level.content
                          });
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
    );
  }
}
const mapStateToProps = storeState => ({
  resAddSche: storeState.reSource.resAddSche
});
const mapDispatchToProps = {
  reAddSche,
  reIsDanger,
  reIsSuccess
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddSche);
