import * as React from "react";
import { BASEURLADMIN } from "../../../config/const";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { reIsSuccess, reIsDanger } from "../../../reducers/init";
import { reListUI } from "./reUI";
import AddUi from "./addUi";
interface IProps {
  resListUI: any;
  reListUI: () => void;
}
interface IState {
  isShowingModal: boolean;
}
class UI extends React.Component<IProps,IState> {
  constructor(props) {
    super(props);
    this.state = {
      isShowingModal: false
    }
  }
  componentDidMount() {
    this.props.reListUI();
  }
  showHide = () => {
    this.setState({
      isShowingModal: !this.state.isShowingModal
    })
  }
  renderListUI = () => {
    if (this.props.resListUI) {
      return this.props.resListUI.map(element => {
        return (
          <tr>
            <td className="text-center">{element.ui_id}</td>
            <td>
              <Link to={BASEURLADMIN + "ui/add-detail-ui/"+element.ui_id}>
                <span className="text-muted">{element.ui_name}</span>
              </Link>
            </td>
            <td>
              {element.ui_type == 0 ? "Khóa học" : "Trang"}
            </td>
          </tr>
        );
      });
    }
    return null;
  };
  render() {
    return (
      <div className="row">
        <div className="col-md-8">
          <div className="panel">
            <div className="panel-toolbar">
              <div className="panel-heading">Danh sách UI</div>
              <div className="panel-action-bar">
                  <div className="btn btn-xs btn-info" onClick={this.showHide}>Thêm mới</div>
              </div>
            </div>
            <div className="table-responsive">
              <table className="table table-hover manage-u-table">
                <thead>
                  <tr>
                    <th className="text-center">#</th>
                    <th>Tên</th>
                    <td>Loại</td>
                  </tr>
                </thead>
                <tbody>
                  {this.renderListUI()}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {
          this.state.isShowingModal ? <AddUi showHide={this.showHide}/>: ''
        }
      </div>
    );
  }
}

const mapStateToProps = storeState => ({
  resListUI: storeState.reUI.resListUI
});
const mapDispatchToProps = {
  reListUI,
  reIsDanger,
  reIsSuccess
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UI);
