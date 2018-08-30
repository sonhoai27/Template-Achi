import * as React from "react";
import { BASEURLADMIN } from "../../../config/const";
import { Link } from "react-router-dom";

class Source extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="panel">
            <div className="panel-toolbar">
              <div className="panel-heading">Danh sách khóa học</div>
              <div className="panel-action-bar">
                <Link to={BASEURLADMIN+'source/add-source'}><div className="btn btn-xs btn-info">Thêm mới</div></Link>
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
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-center">1</td>
                    <td>
                      <Link to={BASEURLADMIN + "ui/add-detail-ui/1"}>
                        <span className="text-muted">
                          Texas, Unitedd states
                        </span>
                      </Link>
                    </td>
                    <td>Free</td>
                    <td>
                      <span className="text-muted">Past : teacher</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Source;
