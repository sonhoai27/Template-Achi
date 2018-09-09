import * as React from "react";
import { Link } from "react-router-dom";
import { BASEURLADMIN } from "../../../config/const";
import { connect } from "react-redux";
import { reListVideo } from "./reVideos";
import Pagination from "../../shared/Pagination";
interface Props {
  resListVideo: any,
  reListVideo: (page: number)=> void
}
class VideoList extends React.Component<Props, {}> {
  constructor(props) {
    super(props);
  }
  componentDidMount(){
    this.props.reListVideo(
      (parseInt(this.makeCurrentPage(), 10) - 1)*20
    )
  }
  makeCurrentPage = () => {
    const page = window.location.href.split("page=")[1];
    if (page != undefined || page != null) {
      return page;
    } else {
      return "1";
    }
  };
  getMoreVideo = page => {
    this.props.reListVideo(
        (page - 1)*20
    )
  };
  renderListVideo = ()=> {
    if(this.props.resListVideo.list){
      return this.props.resListVideo.list.map((element, index) => {
        return (
            <tr>
              <td className="text-center">{index+1}</td>
              <td>
                <Link to={BASEURLADMIN+'video/detail/'+element.video_id}><span>{element.video_name}</span></Link>
              </td>
              <td>
                <a href={element.video_uri} target="_blank">{element.video_uri}</a>
              </td>
              <td>
                <img width="10%" src={element.video_cover} className="img-responsive"/>
              </td>
            </tr>
        )
      })
    }
    return ''
  }
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="panel">
            <div className="panel-toolbar">
                <div className="panel-heading">Quản lí video</div>
                <div className="panel-action-bar">
                    <Link to={BASEURLADMIN+'video/add'}><div className="btn btn-xs btn-info">Thêm mới</div></Link>
                </div>
            </div>
            <div className="content">
              <div className="table-responsive">
                <table className="table table-hover manage-u-table">
                  <thead>
                    <tr>
                      <th className="text-center">
                        #
                      </th>
                      <th>Tên</th>
                      <th>Video</th>
                      <th>Cover</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.renderListVideo()}
                  </tbody>
                </table>
              </div>
              <div className="pg">
                <Pagination
                  initialPage={parseInt(this.makeCurrentPage(), 10)}
                  pageSize={20}
                  totalItems={this.props.resListVideo.count}
                  onChangePage={e => this.getMoreVideo(e.currentPage)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = storeState => ({
  resListVideo: storeState.reVideos.resListVideo
});
const mapDispatchToProps = {
  reListVideo
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoList);