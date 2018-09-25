import * as React from "react";
import ClientHeader from "../client-shared/Header";
import { connect } from "react-redux";
import { reListVideo } from "../../admin/videos/reVideos";
import Pagination from "../../shared/Pagination";
interface IProps {
  resListVideo: any;
  reListVideo: (page: number) => void;
}
class ClientVideo extends React.Component<IProps, {}> {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.reListVideo((parseInt(this.makeCurrentPage(), 10) - 1) * 20);
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
    this.props.reListVideo((page - 1) * 20);
  };

  renderListVideo = () => {
    if (this.props.resListVideo.list) {
      return this.props.resListVideo.list.map((element, index) => {
        return (
          <div className="col-sm-3">
            <div className="item">
              <a href={element.video_uri} target="_blank">
                <img
                  src={element.video_cover}
                  alt={element.video_name}
                  className="img-responsive"
                />
                <p
                  style={{
                    marginTop: "16px",
                    fontSize: "18px",
                    color: "#333"
                  }}
                >
                  {element.video_name}
                </p>
              </a>
            </div>
          </div>
        );
      });
    }
    return "";
  };
  render() {
    return (
      <>
        <ClientHeader />
        <div className="col-xs-12 page-source">
          <div className="row page-source_banner">
            <div className="container">
              <div className="row">
                <div className="col-sm-6">
                  <h1 className="white" style={{ marginBottom: 64 }}>
                    <b>
                      FROM A HISTORY-MAKING STANLEY CUP FINALS TO BUILDING A
                      PERSONAL AI
                    </b>
                  </h1>
                  <p className="white">
                    Where has Tony been recently – and what in the world is he
                    up to? Below is the latest edition of the Tony Tracker,
                    where you can see highlights from his journeys and read his
                    narration of some of his favorite experiences. Watching
                    history being made at the Stanley Cup Finals TONIGHT’S GAME
                    IS ONE
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row page-source_list-source page-video">
            <div className="container paddingY-128">
              {this.renderListVideo()}
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
      </>
    );
  }
}

const mapStateToProps = storeState => ({
  isSuccess: storeState.reInit.isSuccess,
  isDanger: storeState.reInit.isDanger,
  resListVideo: storeState.reVideos.resListVideo
});
const mapDispatchToProps = {
  reListVideo
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClientVideo);
