import * as React from "react";
import Image from "./image";
import { connect } from "react-redux";
import {
  reShowPhotoApp,
  reSetCurrentEditorPhoto,
  reDeleteImage,
  reAddImage,
  reListImage
} from "../../reducers/init";
interface State {
  dataImage: object;
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
      dataImage: {}
    };
    this.nodeContextMenuPhotoApp = React.createRef();
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
    alert(name.name);
  };
  renderListImage = () => {
    if (this.props.resListImage) {
      return this.props.resListImage.map((element, i) => {
        return (
          <div className="col-sm-2 item" key={i}>
            <Image
              dataSrc={JSON.stringify({
                uri: element.uri,
                name: element.name + i
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
              <button className="btn btn-block btn-info btn-xs upload-file">
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
