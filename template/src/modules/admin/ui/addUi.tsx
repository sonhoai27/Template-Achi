import * as React from "react";
import { connect } from "react-redux";
import { reAddUI, reListUI } from "./reUI";
import { reIsDanger, reIsSuccess } from "../../../reducers/init";
interface Props {
  showHide: any;
  reAddUI: (form: any)=> void;
  resAddUi: any;
  reIsSuccess: (status: boolean) => void;
  reIsDanger: (status: boolean) => void;
  reListUI: ()=> void;
}
interface IState {
  ui_name: string;
  ui_type: number;
}
class AddUi extends React.Component<Props, IState> {
  constructor(props) {
    super(props);
    this.state = {
      ui_name: "",
      ui_type: -1
    }
  }
  onChage = (e: any)=> {
    // @ts-ignore
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  componentDidUpdate(preProps){
    if(this.props.resAddUi != preProps.resAddUi){
      if (this.props.resAddUi.status === 200) {
        this.props.reIsSuccess(true);
        setTimeout(() => {
          this.props.reIsSuccess(false);
          this.props.reListUI()
          this.props.showHide()
        }, 2000);
      } else {
        this.props.reIsDanger(true);
        setTimeout(() => {
          this.props.reIsDanger(false);
          this.props.showHide()
        }, 2000);
      }
    }
  }
  onAdd = () =>{
   this.props.reAddUI(this.state)
  }
  render() {
    return (
      <>
        <div
          className="modal fade in"
          tabIndex={-1}
          role="dialog"
          aria-hidden="true"
          style={{ display: "block" }}
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  onClick={() => this.props.showHide()}
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-hidden="true"
                >
                  ×
                </button>
                <div className="modal-title">
                  <h4>Thêm mới UI</h4>
                </div>
              </div>
              <div className="modal-body" style={{display: 'inline-block', width: '100%'}}>
                <div className="col-sm-6">
                  <div className="form-group">
                    <div className="col-xs-12">
                      <label>Tên</label>
                    </div>
                    <div className="col-xs-12">
                      <input onChange={this.onChage} name="ui_name" className="form-control" />
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <div className="col-xs-12">
                      <label>Loại</label>
                    </div>
                    <div className="col-xs-12">
                      <select onChange={this.onChage} name="ui_type" className="form-control">
                        <option>Chọn</option>
                        <option value={0}>Khóa học</option>
                        <option value={1}>Trang</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  onClick={this.onAdd}
                  className="btn btn-info waves-effect text-left"
                  data-dismiss="modal"
                >
                  Lưu
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="modal-backdrop fade in" />
      </>
    );
  }
}

const mapStateToProps = storeState => ({
  resAddUi: storeState.reUI.resAddUi
});
const mapDispatchToProps = {
  reAddUI,
  reIsDanger,
  reIsSuccess,
  reListUI
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddUi);
