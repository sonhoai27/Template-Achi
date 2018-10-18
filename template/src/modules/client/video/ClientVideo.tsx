import * as React from "react";
import ClientHeader from "../client-shared/Header";
import { connect } from "react-redux";
import { reListVideo } from "../../admin/videos/reVideos";
import Pagination from "../../shared/Pagination";
import Footer from "../client-shared/Footer";
import ClientFollow from "../home/ClientFollow";
import AutofitImage from "../../shared/CropImage";
import CLientFooterBanner from "../home/ClientFooterBanner";
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
      let dem = 1;
      let list = []
      return this.props.resListVideo.list.map((element, index) => {
        if(dem <= 2) {
          // @ts-ignore
          list = [...list, this.itemVideo(element)]
          dem = dem + 1;
          if(index === (this.props.resListVideo.list.length - 1)){
            // @ts-ignore
          const tempList = [...[], ...list];
          return React.createElement(
              "div",
              {
                className: "row",
                key: index
              },
              [<hr/>,...tempList]
            );
        }
        }else {
          dem = 1
              // @ts-ignore
          list = [...list, this.itemVideo(element)]
          const tempList = [...[], ...list]
          list = []
          return React.createElement(
            'div',
            {
              className: 'row'
            },
            [(index >= 3 ? <hr/> : ''),...tempList]
          )
        }
        return ""
      });
    }
    return "";
  };
  itemVideo = (element: any)=> {
    return (
      <div className="col-sm-4 margin-t-32">
        <div className="item"  onClick={()=>this.onPlay(element)}>
          <i className="fa fa-play-circle"></i>
          <a style={{width: '100%'}}>
            <AutofitImage clasName="img-responsive" frameWidth="100%" frameHeight="200px" imgSrc={element.video_cover}/>
            <p
              style={{
                marginTop: "16px",
                fontSize: "18px",
                color: "#333",
                textAlign: 'center'
              }}
            >
              {element.video_name}
            </p>
          </a>
        </div>
      </div>
    )
  }
  render() {
    return (
      <>
        <ClientHeader />
        <div className="col-xs-12 page-source">
          <div className="row page-source_banner" style={{
            backgroundImage: 'url(http://nguyenminhchi.com/api/uploads/images/b023858c12110d79c0311539450000000.jpg)'
          }}>
            <div className="container">
              <div className="row">
                <div className="col-sm-6">
                  <h1 className="white">
                    <b>
                      VIDEO BÀI HỌC CHIA SẺ
                    </b>
                  </h1>
                  <p className="white">
                    Đón xem video bài học chia sẻ tâm đắc từ Mr.Share
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
          <CLientFooterBanner/>
          </div>
          <div className="row paddingY-32">
            <h1 className="text-center" style={{marginTop: 64}}>
              Theo dõi kênh Youtube của Nguyễn Minh Chí
            </h1>
            <div className="col-sm-4"></div>
            <div className="col-sm-4">
            <div className="social-callout" style={{
              marginTop: 64
            }}>
               <h3 className="text-center">Kênh Youtube bài học</h3>
               <a
                href="https://www.youtube.com/channel/UCHCeMi9tGx9VCMSHHbscrLg?sub_confirmation=1"
                target="_blank"
              >
                <div className="btn btn-sm btn-info" style={{
                  background: 'red',
                  border: 'none'
                }}><i className="icon-social-youtube"/> Youtube</div>
              </a>
            </div>
          </div>
          <div className="col-sm-4"></div>
          </div>
          <div className="row page-source_list-source page-video">
            <div className="container">
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
