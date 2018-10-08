import * as React from "react";
import {connect} from "react-redux";
import ClientHeader from "../client-shared/Header";
import Footer from "../client-shared/Footer";
import {reDetailSource} from "../../admin/source/reSource";
import {reIsDanger, reIsSuccess} from "../../../reducers/init";
import {apiListVideoSource} from "../../admin/video-source/reVideoSource";
import {Storage} from "../../../utils/storage-util";
import ModalContact from "../../shared/Contact";

interface IProps {
    match?: any;
    resDetailSource: any;
    reDetailSource: (id: number) => void;
    reIsSuccess: (status: boolean) => void;
    reIsDanger: (status: boolean) => void;
    resListVideoSource: any;
    apiListVideoSource: (idSource: number) => void;
}

interface IState {
    currentVideo: any;
    isShowingPlayer: boolean;
    isShowingModalContact: boolean;
    currentCode: any;
    currentName: any;
}

class ClientVideoSource extends React.Component<IProps, IState> {
    constructor(props) {
        super(props)
        this.state = {
            currentVideo: "",
            isShowingPlayer: false,
            isShowingModalContact: false,
            currentCode: {},
            currentName: {}
        }
    }

    componentDidMount() {
        const url = this.props.match.params.idSource
        const tempArr = url.split('-')
        const idSource = tempArr[0]
        this.props.reDetailSource(idSource)
        this.props.apiListVideoSource(idSource)
        window.scrollTo(0,0)
    }

    componentDidUpdate(preProps) {
        if (preProps.resDetailSource != this.props.resDetailSource) {
            this.forceUpdate()
            if(!Storage.local.get('user_info') || Storage.local.get('user_info')[this.props.resDetailSource.source_alias] == undefined){
                this.setState({
                    isShowingModalContact: !this.state.isShowingModalContact,
                    currentCode: this.props.resDetailSource.source_alias,
                    currentName: this.props.resDetailSource.source_title
                })
            }
        }
        if (preProps.resListVideoSource != this.props.resListVideoSource) {
            this.setState({
                currentVideo: this.props.resListVideoSource.list[0]
            })
        }
    }
    renderListVideo = ()=> {
        if(this.props.resListVideoSource.list){
            return this.props.resListVideoSource.list.map(element => {
                return (
                    <li key={element.source_video_id} onClick={()=> {
                        this.setState({
                            currentVideo: element
                        }, ()=> {
                            this.setState({
                                isShowingPlayer: !this.state.isShowingPlayer
                            })
                            window.scrollTo(10,500)
                        })
                    }}>
                        {element.source_video_name}
                    </li>
                )
            })
        }
        return <li>Không có</li>
    }
    makeIframe = (link: string)=> {
        return (
          <iframe width={853} height={480}
            src={"https://www.youtube.com/embed/" + (link !== "" ? link.split('v=')[1] : '')}
          // @ts-ignore
            frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen/>
        )
      }
    render() {
        const detail = this.props.resDetailSource
        // @ts-ignore
        // @ts-ignore
        return (
            <>
                <ClientHeader/>
                <div className="margin-top detail-video">
                    <div className="row detail-video__banner paddingY-128" style={{
                        backgroundImage: 'url(' + detail.source_banner + ')',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundAttachment: 'fixed'
                    }}>
                    </div>
                    <div className="row paddingY-32 detail-video__head">
                        <div className="container">
                            <div className="row">
                                <h1 style={{fontSize: 64}} className={'white'}>{detail.source_title}</h1>
                                <p className={'white'}>{detail.source_promo}</p>
                            </div>
                        </div>
                    </div>
                    {/* <div className="row">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-3"></div>
                                <div className="col-sm-6 detail-page__video-player">
                                    {
                                        this.state.isShowingPlayer ? <iframe width={560} height={315}
                                                                             src={"https://www.youtube.com/embed/" + (this.state.currentVideo !== "" ? (this.state.currentVideo.source_video_url).split('v=')[1] : '')}
                                            // @ts-ignore
                                                                             frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen/> : ''
                                    }
                                </div>
                                <div className="col-sm-3"></div>
                            </div>
                        </div>
                    </div> */}
                    <div className="row paddingY-32 detail-video__main">
                        <div className="container">
                            <div className="row">
                                <div style={{textAlign: 'justify'}} className="col-xs-12 detail-video__intro"
                                     dangerouslySetInnerHTML={{__html: detail.source_content}}/>
                            </div>
                        </div>
                    </div>
                    <div className="row detail-video__list-video" style={{paddingBottom: 32}}>
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-12">
                                    <h2 style={{fontWeight: 700}}>Danh sách video</h2>
                                    <ul>
                                        {this.renderListVideo()}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
                {
                    this.state.isShowingModalContact ? <ModalContact code={this.state.currentCode} name={this.state.currentName} showHide={()=> {
                        this.setState({
                            isShowingModalContact: !this.state.isShowingModalContact
                        })
                    }}/> : ''
                }
                {
          this.state.isShowingPlayer ? (
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
                                isShowingPlayer: !this.state.isShowingPlayer
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
                          {this.makeIframe(this.state.currentVideo.source_video_url)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="modal-backdrop fade in"/>
            </>
          ) : ''
        }
            </>
        )
    }
}

const mapStateToProps = storeState => ({
    resDetailSource: storeState.reSource.resDetailSource,
    resListVideoSource: storeState.reVideoSource.resListVideoSource
});
const mapDispatchToProps = {
    reDetailSource,
    reIsDanger,
    reIsSuccess,
    apiListVideoSource
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ClientVideoSource);