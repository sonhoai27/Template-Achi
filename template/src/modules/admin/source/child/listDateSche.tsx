import * as React from "react";
import { BASEURLADMIN } from "../../../../config/const";
import { Link } from "react-router-dom";

class ListDateSche extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="panel">
            <div className="panel-toolbar">
              <div className="panel-heading">Danh sách ngày học</div>
              <div className="panel-action-bar">
                <div className="btn btn-xs btn-info">Thêm ngày học</div>
              </div>
            </div>
            <div className="content">
              <div className="row">
                <div className="col-sm-12">
                  <div className="table-responsive">
                    <table className="table table-hover manage-u-table">
                      <thead>
                        <tr>
                          <th className="text-center">#</th>
                          <th>Tên</th>
                          <th>Giá</th>
                          <th>Số lượng</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="text-center">1</td>
                          <td>
                            <Link to={BASEURLADMIN + "source/detail-sche/1"}>
                              <span className="text-muted">
                                Texas, Unitedd states
                              </span>
                            </Link>
                          </td>
                          <td>
                            Visual Designer
                            <br />
                            <span className="text-muted">Past : teacher</span>
                          </td>
                          <td>
                            Visual Designer
                            <br />
                            <span className="text-muted">Past : teacher</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
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
export default ListDateSche;
