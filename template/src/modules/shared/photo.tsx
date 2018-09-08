import * as React from "react";
import Image from "./image";
import { connect } from "react-redux";
import axios from 'axios'
declare var $: any;
import {
  reShowPhotoApp,
  reSetCurrentEditorPhoto,
  reDeleteImage,
  reAddImage,
  reListImage
} from "../../reducers/init";
import { API } from "../../config/const";
interface State {
  dataImage: object;
  imageChoose: any
}
interface Props {
  isShowPhotoApp: any;
  currentEditorPhoto: any;
  resListImage: any;
  resDeleteImage: any;
  resAddImage: any;
  reShowPhotoApp: (status: boolean) => void;
  reSetCurrentEditorPhoto: (editor: any) => void;
  reListImage: () => void;
  reDeleteImage: (id: string) => void;
  reAddImage: (form: any) => void;
}
class Photo extends React.Component<Props, State> {
  private nodeContextMenuPhotoApp;
  constructor(props) {
    super(props);
    this.state = {
      dataImage: {},
      imageChoose: {}
    };
    this.nodeContextMenuPhotoApp = React.createRef();
  }
  componentDidUpdate(preProps){
    if(preProps.resDeleteImage != this.props.resDeleteImage){
      if(this.props.resDeleteImage.status === 200){
        this.props.reListImage()
      }
    }
  }
  componentWillMount() {
    window.addEventListener(
      "mousedown",
      this.handleClickHideUIComponents,
      false
    );
    document.body.style.overflowY = "hidden";
  }
  componentWillUnMount() {
    window.addEventListener(
      "mousedown",
      this.handleClickHideUIComponents,
      false
    );
  }
  componentDidMount() {
    this.props.reListImage();
  }
  handleClickHideUIComponents = e => {
    try {
      if (!this.nodeContextMenuPhotoApp.contains(e.target)) {
        const tempDom: any = document.getElementById("photo-app-context-menu");
        tempDom.style.display = "none";
        this.setState({
          dataImage: {}
        });
        return;
      }
    } catch (e) {}
  };
  _contextMenu = (e: any) => {
    e.preventDefault();
    this.setState({
      dataImage: JSON.parse(e.target.id)
    });
    const contextMenu: any = document.getElementById("photo-app-context-menu");
    contextMenu.style.left = `${e.clientX}px`;
    contextMenu.style.top = `${e.clientY}px`;
    contextMenu.style.display = "block";
  };
  handleInsert = () => {
    let uri: any = this.state.dataImage;
    if (typeof this.props.currentEditorPhoto === "object") {
      this.props.currentEditorPhoto.insertContent(
        `<img src="` + uri.uri + `" class="img-responsive"/>`
      );
    } else {
      let tempDom: any = document.getElementById(this.props.currentEditorPhoto);
      tempDom.src = uri.uri;
    }
    this.props.reSetCurrentEditorPhoto("");
    this.props.reShowPhotoApp(false);
    document.body.style.overflowY = "auto";
  };
  handleDelete = () => {
    let name: any = this.state.dataImage;
    this.props.reDeleteImage(name.name)
  };
  renderListImage = () => {
    if (this.props.resListImage) {
      return this.props.resListImage.map((element, i) => {
        return (
          <div className="col-sm-2 item" key={i}>
            <Image
              dataSrc={JSON.stringify({
                uri: element.uri,
                name: element.name
              })}
              onClick={e => this._contextMenu(e)}
              src={element.uri}
              width={150}
              height={150}
            />
          </div>
        );
      });
    }
    return ''
  };
  render() {
    return (
      <>
        <div className="photo-app">
          <div className="header">
            <div className="title-app">Photo App</div>
            <div className="search-bar-app">
              <input
                name=""
                id=""
                type="text"
                className="form-control"
                placeholder="Bạn muốn tìm gì?"
              />
            </div>
            <div className="btn-close">
              <button className="btn btn-block btn-info btn-xs upload-file" data-toggle="modal" data-target="#upload-image">
                Tải lên
              </button>
              <i
                onClick={() => {
                  this.props.reShowPhotoApp(false);
                  document.body.style.overflowY = "auto";
                  this.props.reSetCurrentEditorPhoto("");
                }}
                className="ti-close"
                style={{ display: "flex", alignItems: "center" }}
              />
            </div>
          </div>
          <div className="content">
            <div className="row">
              {this.renderListImage()}
            </div>
          </div>
        </div>
        <div
          ref={node => (this.nodeContextMenuPhotoApp = node)}
          className="photo-app-context-menu"
          id="photo-app-context-menu"
        >
          <p onClick={this.handleInsert}>
            <i className="ti-link" /> Chèn
          </p>
          <p onClick={this.handleDelete}>
            <i className="ti-trash" /> Xóa
          </p>
        </div>
        <div id="upload-image" className="modal fade" tabIndex={-1} role="dialog"
        aria-labelledby="upload-image" aria-hidden="true">
          <div className="modal-dialog modal-sm">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                <h4 className="modal-title" id="mySmallModalLabel">Upload Hình ảnh</h4> </div>
              <div className="modal-body">
                <input
                  onChange={(e: any)=> {
                    // const data = new FormData();
                    // data.append('upload-image', e.target.files[0]);
                    let reader = new FileReader()
                    reader.onload = (event: any)=> {
                      const tempDomImage: any = document.getElementById('review-image-before-upload')
                      tempDomImage.src = event.target.result
                    }
                    reader.readAsDataURL(e.target.files[0])
                    this.setState({
                      imageChoose: e.target.files[0]
                    })
                  }}
                  name="file"
                  id="photo-app-choose-file"
                  type="file" placeholder="Chọn hình" accept="image/png, image/jpeg"/>
                <img id="review-image-before-upload" className="img-responsive" width='100%' height='50'/>
              </div>
              <div className="modal-footer">
                <button
                  onClick={()=> {
                    const data = new FormData();
                    data.append('upload-image', this.state.imageChoose);
                    axios.post(API+'file/upload/photo', data)
                    .then(result => {
                      if(result.status === 200){
                        $('#upload-image').modal('hide')
                        this.props.reListImage()
                      }
                    })
                    .catch(err => {
                      console.log(err)
                    })
                  }}
                  type="button" className="btn btn-danger waves-effect waves-light">Tải lên</button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = storeState => ({
  isShowPhotoApp: storeState.reInit.isShowPhotoApp,
  currentEditorPhoto: storeState.reInit.currentEditorPhoto,
  resListImage: storeState.reInit.resListImage,
  resDeleteImage: storeState.reInit.resDeleteImage,
  resAddImage: storeState.reInit.resAddImage
});
const mapDispatchToProps = {
  reShowPhotoApp,
  reSetCurrentEditorPhoto,
  reListImage,
  reDeleteImage,
  reAddImage
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Photo);
