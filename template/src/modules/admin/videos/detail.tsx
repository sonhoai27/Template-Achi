import * as React from "react";
import { connect } from "react-redux";
import { reDetailVideo, reUpdateVideo } from "./reVideos";
import { IVideoModel } from "../../../models/video";
import { reSetCurrentEditorPhoto, reShowPhotoApp, reIsSuccess, reIsDanger } from "../../../reducers/init";
interface IProps {
  match: any;
  resDetailVideo: IVideoModel;
  reDetailVideo: (idVideo: number)=> void;
  resUpdateVideo: any;
  reUpdateVideo: (form: IVideoModel, idVideo: number) => void;
  reSetCurrentEditorPhoto: (editor: any)=> void;
  reShowPhotoApp: (status: boolean)=> void;
  reIsSuccess: (status: boolean) => void;
  reIsDanger: (status: boolean) => void;
}
interface IState {
  video: IVideoModel
}
class VideoDetail extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);
    this.state = {
      video: {
        video_id: -1,
        video_name: '',
        video_cover: '',
        video_status: -1,
        video_uri: ''
      }
    }
  }
  componentDidUpdate(preProps){
    if(this.props.resDetailVideo != preProps.resDetailVideo){
      this.setState({
        video: {
          video_id: this.props.resDetailVideo.video_id,
          video_name: this.props.resDetailVideo.video_name,
          video_uri: this.props.resDetailVideo.video_uri,
          video_cover: this.props.resDetailVideo.video_cover,
          video_status: this.props.resDetailVideo.video_status
        }
      })      
    }
    if(this.props.resUpdateVideo != preProps.resUpdateVideo){
      if (this.props.resUpdateVideo.status === 200) {
        this.props.reIsSuccess(true);
        setTimeout(() => {
          this.props.reIsSuccess(false);
          window.location.href = this.props.match.url
        }, 2000);
      } else {
        this.props.reIsDanger(true);
        setTimeout(() => {
          this.props.reIsDanger(false);
          window.location.href = this.props.match.url
        }, 2000);
      }
    }
  }
  componentDidMount(){
    this.props.reDetailVideo(this.props.match.params.idVideo)
  }
  updateVideo = ()=> {
    const tempDom: any = document.getElementById('img-cover-blog-preview')
    this.props.reUpdateVideo({
      ...this.state.video,
      video_cover: tempDom.src
    }, this.state.video.video_id)
  }
  onChange = (e: any)=> {
    this.setState({
      video: {
        ...this.state.video,
        [e.target.name]: e.target.value
      }
    })
  }
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="panel">
            <div className="panel-toolbar">
              <div className="panel-heading">Thêm video</div>
              <div className="panel-action-bar">
                <div className="btn btn-xs btn-danger">Xóa</div>
                <div className="btn btn-xs btn-info" onClick={this.updateVideo}>Lưu</div>
              </div>
            </div>
            <div className="content">
              <div className="row">
                <div className="col-sm-9">
                  <div className="form-group">
                    <label className="col-md-12">
                     <span className="help"> Tiêu đề</span>
                    </label>
                    <div className="col-md-12">
                      <input
                        onChange={this.onChange}
                        defaultValue={this.state.video.video_name}
                        type="text"
                        name="video_name"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-md-12">
                      <span className="help"> Video</span>
                    </label>
                    <div className="col-md-12">
                      <input
                        onChange={this.onChange}
                        defaultValue={this.state.video.video_uri}
                        type="text"
                        name="video_uri"
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="form-group">
                    <label className="col-sm-12">Trạng thái</label>
                    <div className="col-sm-12">
                      <select onChange={this.onChange} name="video_status" className="form-control">
                        <option>Chọn</option>
                        <option selected={this.state.video.video_status == 0 ? true : false} value={0}>Hiện</option>
                        <option selected={this.state.video.video_status == 1 ? true : false} value={1}>Ẩn</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-sm-12">Hình cover</label>
                    <div className="col-sm-12 cover-blog" onClick={()=> {
                      this.props.reShowPhotoApp(true)
                      this.props.reSetCurrentEditorPhoto('img-cover-blog-preview')
                    }}>
                      <i className="ti-upload"/>
                      <img id="img-cover-blog-preview" className="img-responsive" src={this.state.video.video_cover}/>
                    </div>
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

const mapStateToProps = storeState => ({
  resDetailVideo: storeState.reVideos.resDetailVideo,
  resUpdateVideo: storeState.reVideos.resUpdateVideo
});
const mapDispatchToProps = {
  reDetailVideo,
  reUpdateVideo,
  reSetCurrentEditorPhoto,
  reShowPhotoApp,
  reIsDanger,
  reIsSuccess
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoDetail);
