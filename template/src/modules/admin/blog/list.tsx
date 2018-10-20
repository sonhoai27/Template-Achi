import * as React from "react";
import { Link } from "react-router-dom";
import { BASEURLADMIN } from "../../../config/const";
import { connect } from "react-redux";
import { reListBlog, reDeleteBlog } from "./reBlog";
import Pagination from "../../shared/Pagination";
import { reIsDanger, reIsSuccess } from "../../../reducers/init";

interface Props {
  resListBlog: any;
  reListBlog: (page: number) => void;
  resDeleteBlog: any;
  reDeleteBlog: (id: number) => void;
  reIsSuccess: (status: boolean) => void;
  reIsDanger: (status: boolean) => void;
}
class BlogList extends React.Component<Props, {}> {
  constructor(props) {
    super(props);
  }
  makeCurrentPage = () => {
    const page = window.location.href.split("page=")[1];
    if (page != undefined || page != null) {
      return page;
    } else {
      return "1";
    }
  };
  componentDidMount() {
    this.props.reListBlog((parseInt(this.makeCurrentPage(), 10) - 1) * 20);
  }
  getMoreBlog = page => {
    this.props.reListBlog((page - 1) * 20);
    window.history.pushState("", "", `${BASEURLADMIN+'blog'}?page=` + page);
  };
  componentDidUpdate(preProps) {
    if (preProps.resDeleteBlog != this.props.resDeleteBlog) {
      if (this.props.resDeleteBlog.status === 200) {
        this.props.reIsSuccess(true);
        setTimeout(() => {
          this.props.reIsSuccess(false);
          this.props.reListBlog(
            (parseInt(this.makeCurrentPage(), 10) - 1) * 20
          );
        }, 2000);
      } else {
        this.props.reIsDanger(true);
        setTimeout(() => {
          this.props.reIsDanger(false);
          this.props.reListBlog(
            (parseInt(this.makeCurrentPage(), 10) - 1) * 20
          );
        }, 2000);
      }
    }
  }
  renderListBlog = () => {
    if (this.props.resListBlog.list) {
      return this.props.resListBlog.list.map((element, index) => {
        return (
          <tr key={element.blog_id}>
            <td className="text-center" role="row">
              {index + 1}
            </td>
            <td>
              <Link to={BASEURLADMIN + "blog/detail/" + element.blog_id}>
                {element.blog_title}
              </Link>
            </td>
            <td>{element.blog_promo}</td>
            <td>{element.blog_created_date}</td>
            <td>
              <div
                onClick={() => {
                  this.props.reDeleteBlog(element.blog_id);
                }}
                className="btn btn-sm btn-danger"
              >
                Xóa
              </div>
            </td>
          </tr>
        );
      });
    }
    return <h1>Null</h1>;
  };
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="panel">
            <div className="panel-toolbar">
              <div className="panel-heading">Quản lí bài viết</div>
              <div className="panel-action-bar">
                <Link to={BASEURLADMIN + "blog/add"}>
                  <div className="btn btn-xs btn-info">Thêm mới</div>
                </Link>
              </div>
            </div>
            <div className="content">
              <div className="table-responsive">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th className="text-center" role="row">
                        #
                      </th>
                      <th>Tên</th>
                      <th>Promo</th>
                      <th>Ngày tạo</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>{this.renderListBlog()}</tbody>
                </table>
              </div>
            </div>
            <div className="pg">
              <Pagination
                initialPage={parseInt(this.makeCurrentPage(), 10)}
                pageSize={20}
                totalItems={this.props.resListBlog.count}
                onChangePage={e => this.getMoreBlog(e.currentPage)}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = storeState => ({
  resListBlog: storeState.reBlog.resListBlog,
  resDeleteBlog: storeState.reBlog.resDeleteBlog
});
const mapDispatchToProps = {
  reListBlog,
  reDeleteBlog,
  reIsDanger,
  reIsSuccess
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BlogList);
