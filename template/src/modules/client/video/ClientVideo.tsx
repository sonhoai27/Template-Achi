import * as React from "react";
import ClientHeader from "../client-shared/Header";
import { connect } from "react-redux";
import { reListVideo } from "../../admin/videos/reVideos";
import Pagination from "../../shared/Pagination";
import Footer from "../client-shared/Footer";
import ClientFollow from "../home/ClientFollow";
import AutofitImage from "../../shared/CropImage";
interface IProps {
  resListVideo: any;
  reListVideo: (page: number) => void;
  resAddContact: any;
}
interface IState {
  showPlayer: boolean;
  currentLinkVideo: string;
}
class ClientVideo extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);
    this.state = {
      showPlayer: false,
      currentLinkVideo: ''
  }
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
  onPlay = (video: any) => {
    this.setState({
      currentLinkVideo: video.video_uri,
      showPlayer: !this.state.showPlayer
    })
  };
  makeIframe = (link: string)=> {
    return (
      <iframe width={853} height={480}
        src={"https://www.youtube.com/embed/" + (link !== "" ? link.split('v=')[1] : '')}
      // @ts-ignore
        frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen/>
    )
  }
  componentDidUpdate(preProps){
    if (preProps.resAddContact != this.props.resAddContact) {
      if (this.props.resAddContact.status === 200) {
        setTimeout(()=> {
          this.setState({
            showPlayer: !this.state.showPlayer
          })
        }, 1500)
      }
    }
  }
  renderListVideo = () => {
    if (this.props.resListVideo.list) {
      return this.props.resListVideo.list.map((element, index) => {
        return (
          <div className="col-sm-3">
            <div className="item">
              <a onClick={()=>this.onPlay(element)} style={{width: '100%'}}>
                <AutofitImage clasName="img-responsive" frameWidth="100%" frameHeight="200px" imgSrc={element.video_cover}/>
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
          <div className="row paddingY-32">
            <h1 className="text-center" style={{marginTop: 64}}>Subscribe to Brendon Burchard’s YouTube Channel</h1>
            <div className="col-sm-4"></div>
            <div className="col-sm-4">
            <div className="social-callout" style={{
              marginTop: 64
            }}>
              <h3 className="text-center">Watch Brendon's Show</h3>
              <iframe  style={{position: 'static', top: 0, width: 123, margin: 0, borderStyle: 'none', left: 0, visibility: 'visible', height: 24}} tabIndex={0} width="100%" id="I0_1536682088055" name="I0_1536682088055"
              src="https://www.youtube.com/subscribe_embed?usegapi=1&channel=BrendonBurchard&origin=https%3A%2F%2Fbrendon.com&gsrc=3p&ic=1&jsh=m%3B%2F_%2Fscs%2Fapps-static%2F_%2Fjs%2Fk%3Doz.gapi.vi.ersgHZm_IgE.O%2Fam%3DwQ%2Frt%3Dj%2Fd%3D1%2Frs%3DAGLTcCMduhp3YkUaSrrUHYCwgzlg4Y8r_w%2Fm%3D__features__#_methods=onPlusOne%2C_ready%2C_close%2C_open%2C_resizeMe%2C_renderstart%2Concircled%2Cdrefresh%2Cerefresh%2Conload&id=I0_1536682088055&_gfid=I0_1536682088055&parent=https%3A%2F%2Fbrendon.com&pfname=&rpctoken=21758127" data-gapiattached="true" />
            </div>
          </div>
          <div className="col-sm-4"></div>
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
          <ClientFollow/>
        </div>
        {
          this.state.showPlayer ? (
            <>
            <div
            style={{display: "block"}}
            className="modal fade in play-video"
            role="dialog"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                      <button
                          onClick={()=> {
                            this.setState({
                              showPlayer: !this.state.showPlayer
                            })
                          }}
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-hidden="true"
                      >
                          ×
                      </button>
                    </div>
                    <div className="modal-body">
                        <div className="video-container">
                          {this.makeIframe(this.state.currentLinkVideo)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="modal-backdrop fade in"/>
            </>
          ) : ''
        }
        <Footer/>
      </>
    );
  }
}
const mapStateToProps = storeState => ({
  isSuccess: storeState.reInit.isSuccess,
  isDanger: storeState.reInit.isDanger,
  resListVideo: storeState.reVideos.resListVideo,
  resAddContact: storeState.reSource.resAddContact
});
const mapDispatchToProps = {
  reListVideo
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClientVideo);
