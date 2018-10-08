import * as React from "react";
import { Link } from "react-router-dom";
import { BASEURLADMIN } from "../../../config/const";
import { connect } from "react-redux";
import { reListVideo, reDeleteVideo } from "./reVideos";
import Pagination from "../../shared/Pagination";
import { reIsSuccess, reIsDanger } from "../../../reducers/init";
interface Props {
  resListVideo: any;
  reListVideo: (page: number)=> void;
  reIsSuccess: (status: boolean) => void;
  reIsDanger: (status: boolean) => void;
  resDeleteVideo: any;
  reDeleteVideo: (id: number)=> void;
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
                <div
                  onClick={()=> {
                    this.props.reDeleteVideo(element.video_id)
                  }}
                  className="btn btn-sm btn-danger">
                  Xóa
                </div>
              </td>
            </tr>
        )
      })
    }
    return ''
  }
  componentDidUpdate(preProps){
    if(this.props.resDeleteVideo != preProps.resDeleteVideo){
      if (this.props.resDeleteVideo.status === 200) {
        this.props.reIsSuccess(true);
        setTimeout(() => {
          this.props.reIsSuccess(false);
          this.props.reListVideo(
            (parseInt(this.makeCurrentPage(), 10) - 1)*20
          )
        }, 2000);
      } else {
        this.props.reIsDanger(true);
        setTimeout(() => {
          this.props.reIsDanger(false);
          this.props.reListVideo(
            (parseInt(this.makeCurrentPage(), 10) - 1)*20
          )
        }, 2000);
      }
    }
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
                      <th>Hành động</th>
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
  resListVideo: storeState.reVideos.resListVideo,
  resDeleteVideo: storeState.reVideos.resDeleteVideo
});
const mapDispatchToProps = {
  reListVideo,
  reIsDanger,
  reIsSuccess,
  reDeleteVideo
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoList);