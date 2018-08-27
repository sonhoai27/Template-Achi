import * as React from "react";
import { Link } from "react-router-dom";
import { BASEURLADMIN } from "../../../config/const";

class BlogList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="panel">
            <div className="panel-toolbar">
                <div className="panel-heading">Quản lí bài viết</div>
                <div className="panel-action-bar">
                    <Link to={BASEURLADMIN+'blog/add'}><div className="btn btn-xs btn-info">Thêm mới</div></Link>
                </div>
            </div>
            <div className="table-responsive">
              <table className="table table-hover manage-u-table">
                <thead>
                  <tr>
                    <th className="text-center">
                      #
                    </th>
                    <th>Tên</th>
                    <th>Promo</th>
                    <th>Ngày tạo</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-center">1</td>
                    <td>
                      <Link to={BASEURLADMIN+'blog/detail'}><span className="text-muted">Texas, Unitedd states</span></Link>
                    </td>
                    <td>
                      Visual Designer
                      <br />
                      <span className="text-muted">Past : teacher</span>
                    </td>
                    <td></td>
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

export default BlogList
