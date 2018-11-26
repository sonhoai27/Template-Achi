import * as React from "react";
import { BASEURLADMIN, API } from "../../../config/const";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { reListSource } from "./reSource";
import axios from "axios";
import { checkRule } from "../../../config/auth";
interface Props {
  reListSource: (page: number) => void;
  reslistSource: any;
  resCheckLogin: any;
}

class Source extends React.Component<Props, {}> {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {}

  componentDidMount() {
    this.props.reListSource(0);
  }

  renderListSource = () => {
    if (this.props.reslistSource.list) {
      return this.props.reslistSource.list.map((element, index) => {
        return (
          <tr>
            <td className="text-center">{index + 1}</td>
            <td>
              {element.source_is_video == 0 ? (
                <Link
                  to={
                    BASEURLADMIN + "source/detail-source/" + element.source_id
                  }
                >
                  <span className="text-muted">{element.source_title}</span>
                </Link>
              ) : (
                <Link
                  to={
                    BASEURLADMIN +
                    "source/detail-source-video/" +
                    element.source_id
                  }
                >
                  <span className="text-muted">{element.source_title}</span>
                </Link>
              )}
            </td>
            <td>
              {element.source_is_video == 0 ? "Khóa học" : "Video học online"}
            </td>
            <td>
              <span className="text-muted">{element.source_created_date}</span>
            </td>
            <td>
              {checkRule(this.props.resCheckLogin.user.userRule, "ADMIN") ||
              checkRule(
                this.props.resCheckLogin.user.userRule,
                "NGUOI_QUAN_LY"
              ) ? (
                <div
                  onClick={() => {
                    axios
                      .get(API + "source/get-list-id-sche/" + element.source_id)
                      .then(result => {
                        alert("Bạn không có quyền xóa: " + result.data.list);
                      });
                  }}
                  className="btn btn-sm btn-danger"
                >
                  Xóa
                </div>
              ) : (
                ""
              )}
            </td>
          </tr>
        );
      });
    }
    return "";
  };

  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="panel">
            <div className="panel-toolbar">
              <div className="panel-heading">Danh sách khóa học</div>
              <div className="panel-action-bar">
                <Link to={BASEURLADMIN + "source/add-source"}>
                  <div className="btn btn-xs btn-info">Thêm mới</div>
                </Link>
              </div>
            </div>
            <div className="table-responsive">
              <table className="table table-hover manage-u-table">
                <thead>
                  <tr>
                    <th className="text-center">#</th>
                    <th>Tên</th>
                    <th>Loại</th>
                    <th>Ngày tạo</th>
                    <th>Hành động</th>
                  </tr>
                </thead>
                <tbody>{this.renderListSource()}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = storeState => ({
  reslistSource: storeState.reSource.reslistSource,
  resCheckLogin: storeState.reInit.resCheckLogin
});
const mapDispatchToProps = {
  reListSource
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Source);
