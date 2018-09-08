import * as React from "react";
import { Link } from "react-router-dom";
import { BASEURLADMIN } from "../../../config/const";
import { connect } from "react-redux";
import { reListBlog } from "./reBlog";
import Pagination from "../../shared/Pagination";

interface Props {
  resListBlog: any,
  reListBlog: (page: number)=> void
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
  componentDidMount(){
    this.props.reListBlog(
        (parseInt(this.makeCurrentPage(), 10) - 1)*20
    )
  }
  getMoreBlog = page => {
      this.props.reListBlog(
          (page - 1)*20
      )
  };
  renderListBlog = ()=> {
    if(this.props.resListBlog.list){
      return this.props.resListBlog.list.map((element, index) => {
        return (
          <tr key={element.blog_id}>
            <td className="text-center" role="row">{index+1}</td>
            <td>{element.blog_title}</td>
            <td>{element.blog_promo}</td>
            <td>{element.blog_created_date}</td>
          </tr>
        )
      })
    }
    return <h1>Null</h1>
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
                  </tr>
                </thead>
                <tbody>
                  {this.renderListBlog()}
                </tbody>
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
  resListBlog: storeState.reBlog.resListBlog
});
const mapDispatchToProps = {
  reListBlog
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BlogList);
