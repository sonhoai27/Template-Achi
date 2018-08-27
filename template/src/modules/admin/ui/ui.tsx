import * as React from "react";
import { BASEURLADMIN } from "../../../config/const";
import { Link } from "react-router-dom";

class UI extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="row">
        <div className="col-md-8">
          <div className="panel">
            <div className="panel-toolbar">
              <div className="panel-heading">Danh sách UI</div>
              <div className="panel-action-bar">
                <Link to={BASEURLADMIN+'ui/add-ui'}><div className="btn btn-xs btn-info">Thêm mới</div></Link>
              </div>
            </div>
            <div className="table-responsive">
              <table className="table table-hover manage-u-table">
                <thead>
                  <tr>
                    <th className="text-center">#</th>
                    <th>Tên</th>
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

export default UI;
