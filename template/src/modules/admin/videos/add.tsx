import * as React from "react";
import { connect } from "react-redux";
import { reSetCurrentEditorPhoto, reShowPhotoApp, reIsSuccess, reIsDanger } from "../../../reducers/init";
import { reAddVideo } from "./reVideos";
import { BASEURLADMIN } from "../../../config/const";
interface Props {
  reSetCurrentEditorPhoto: (editor: any)=> void;
  reShowPhotoApp: (status: boolean)=> void;
  resAddVideo: any;
  reAddVideo: (form: any)=> void;
  reIsSuccess: (status: boolean) => void;
  reIsDanger: (status: boolean) => void;
}
interface State {
  video_name: string,
  video_uri: string,
  video_cover: string,
  video_status: number
}
class VideoAdd extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      video_name: '',
      video_uri: '',
      video_cover: '',
      video_status: 0
    }
  }
  componentDidUpdate(preProps){
    if(preProps.resAddBlog != this.props.resAddVideo){
      if (this.props.resAddVideo.status === 200) {
        this.props.reIsSuccess(true);
        setTimeout(() => {
          this.props.reIsSuccess(false);
          window.location.href = BASEURLADMIN+'video'
        }, 2000);
      } else {
        this.props.reIsDanger(true);
        setTimeout(() => {
          this.props.reIsDanger(false);
          window.location.href = BASEURLADMIN+'video'
        }, 2000);
      }
    }
  }
  onChange = (e: any)=> {
    // @ts-ignore
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  addVideo = ()=> {
    const temDom: any = document.getElementById('img-cover-blog-preview')
    this.props.reAddVideo({
      ...this.state,
      video_cover: temDom.src
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
                <div onClick={this.addVideo} className="btn btn-xs btn-info">Lưu</div>
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
                        name="video_name"
                        type="text"
                        className="form-control"
                      />{" "}
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-md-12">
                      <span className="help"> Video</span>
                    </label>
                    <div className="col-md-12">
                      <input
                        onChange={this.onChange}
                        name="video_uri"
                        type="text"
                        className="form-control"
                      />{" "}
                    </div>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="form-group">
                    <label className="col-sm-12">Trạng thái</label>
                    <div className="col-sm-12">
                      <select onChange={this.onChange}
                        name="video_status" className="form-control">
                        <option>Chọn</option>
                        <option value={0}>Hiện</option>
                        <option value={1}>Ẩn</option>
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
                      <img id="img-cover-blog-preview" className="img-responsive"/>
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
  resAddVideo: storeState.reVideos.resAddVideo
});
const mapDispatchToProps = {
  reSetCurrentEditorPhoto,
  reShowPhotoApp,
  reAddVideo,
  reIsDanger,
  reIsSuccess
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoAdd);
