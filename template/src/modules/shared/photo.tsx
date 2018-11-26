import * as React from "react";
import Image from "./image";
import { connect } from "react-redux";
import axios from "axios";
declare var $: any;
import {
  reShowPhotoApp,
  reSetCurrentEditorPhoto,
  reDeleteImage,
  reAddImage,
  reListImage,
  reAddGroupPhoto
} from "../../reducers/init";
import { API } from "../../config/const";
import { alias } from "../../utils/alias";
interface State {
  dataImage: object;
  imageChoose: any;
  isShowHideAddGroup: boolean;
  currentPath: any;
}
interface Props {
  isShowPhotoApp: any;
  currentEditorPhoto: any;
  resListImage: any;
  resDeleteImage: any;
  resAddImage: any;
  reShowPhotoApp: (status: boolean) => void;
  reSetCurrentEditorPhoto: (editor: any) => void;
  reListImage: (where: string) => void;
  reDeleteImage: (id: string) => void;
  reAddImage: (form: any) => void;
  reAddGroupPhoto: (form: any)=> void;
  addPhotoGroup: any;
}
class Photo extends React.Component<Props, State> {
  private nodeContextMenuPhotoApp;
  constructor(props) {
    super(props);
    this.state = {
      dataImage: {},
      imageChoose: {},
      isShowHideAddGroup: false,
      currentPath: ['']
    };

    this.nodeContextMenuPhotoApp = React.createRef();
  }
  componentDidUpdate(preProps) {
    if (preProps.resDeleteImage != this.props.resDeleteImage) {
      if (this.props.resDeleteImage.status === 200) {
        this.props.reListImage(this.makeRealPath());
      }
    }
    if (preProps.addPhotoGroup != this.props.addPhotoGroup) {
      if (this.props.addPhotoGroup.status === 202) {
        this.props.reListImage(this.makeRealPath());
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
    this.props.reListImage(this.makeRealPath());
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
    if (
      typeof this.props.currentEditorPhoto === "object" &&
      !this.props.currentEditorPhoto.type
    ) {
      this.props.currentEditorPhoto.insertContent(
        `<img src="` + uri.uri + `" class="img-responsive">`
      );
    } else if (
      typeof this.props.currentEditorPhoto === "object" &&
      this.props.currentEditorPhoto.type === "ck"
    ) {
      this.props.currentEditorPhoto.editor.insertHtml(
        `<img src="` + uri.uri + `" class="img-responsive">`
      );
    } else {
      try {
        let tempDom: any = document.getElementById(
          this.props.currentEditorPhoto
        );
        tempDom.src = uri.uri;
      } catch (e) {}
    }
    this.props.reSetCurrentEditorPhoto("");
    this.props.reShowPhotoApp(false);
    document.body.style.overflowY = "auto";
  };
  handleDelete = () => {
    let name: any = this.state.dataImage;
    this.props.reDeleteImage(name.name);
  };
  handleAddGroup = (name: string)=> {
    this.props.reAddGroupPhoto({
      name: name,
      where: this.makeRealPath()
    })
  }
  viewGroup = (e)=> {
    e.preventDefault();
    const tempInfo = JSON.parse(e.target.id)
    this.setState({
      currentPath: [...this.state.currentPath, tempInfo.name]
    }, ()=> {
      this.props.reListImage(this.makeRealPath());
    })
  }
  renderListImage = () => {
    if (this.props.resListImage) {
      return this.props.resListImage.map((element, i) => {
        if(element.type === "FILE"){
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
        }else {
          return (
            <div className="col-sm-2 item" 
              key={i}
              onClick={this.viewGroup}
              style={{position: 'relative'}}>
              <Image
                dataSrc={JSON.stringify({
                  uri: element.uri,
                  name: element.name
                })}
                src={'http://nguyenminhchi.com/api/uploads/images/5350e224d887e85b99781543165200000.png'}
                width={150}
                height={150}
              />
              <p style={{
                display: 'inline-block',
                textAlign: 'center',
                position: 'absolute',
                background: '#f7fafcb8',
                margin: 'auto',
                right: 0,
                left: 0,
                color: '#333',
                padding: '8px',
                bottom: 0,
                width: '64%'
              }}>{element.name}</p>
            </div>
          );
        }
      });
    }
    return "";
  };
  handleCopy = () => {
    let uri: any = this.state.dataImage;
    const el = document.createElement("textarea");
    el.value = uri.uri;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    this.props.reSetCurrentEditorPhoto("");
    this.props.reShowPhotoApp(false);
    document.body.style.overflowY = "auto";
  };
  addGroup = () => {
    return (
      <>
        <div className="photo-app__add-group">
          <h4 className="m-b-16">Thêm mới nhóm</h4>
          <input
            id="group-name-photo"
            style={{width: '100%'}}
            placeholder="Nhập tên group"
            type="text"
            required={true}
          />
          <div className="add-group__btn" style={{
            marginTop: 32,
            textAlign: 'right'
          }}>
            <div
              className="btn btn-sm btn-danger"
              onClick={()=> {
                this.setState({
                  isShowHideAddGroup: !this.state.isShowHideAddGroup
                })
              }}
              style={{marginRight: 16}}>
              Hủy
            </div>
            <div
              onClick={()=> {
                const groupNamePhoto: any = document.getElementById('group-name-photo')
                if(groupNamePhoto.value !== ""){
                  this.handleAddGroup(alias(groupNamePhoto.value))
                }else {
                  alert("Chưa nhập")
                }
                this.setState({
                  isShowHideAddGroup: !this.state.isShowHideAddGroup
                })
              }}
              className="btn btn-sm btn-info">
              Thêm mới
            </div>
          </div>
        </div>
      </>
    );
  };
  makeRealPath = ()=> {
    let path = ""
    this.state.currentPath.map(element => {
      if(element == ""){
        path =path+element
      }else {
        path = path == "" ? element : path+"/"+element
      }
    })
    return path
  }
  makeBreadcrumb = ()=> {
    const len = this.state.currentPath.length - 1
    return this.state.currentPath.map((element, index) => {
      if(len === index){
        return (
          <li key={element}>
            <a onClick={()=> {
              console.log(element)
            }}>{element === "" ? "..." : "/"+element}
          </a>
          </li>
        )
      }else {
        return (
          <li key={element}>
            <a  style={{color: '#ffc36d', cursor: 'pointer'}}  onClick={()=> {
              this.setState({
                currentPath: this.state.currentPath.slice(0, index+1)
              }, ()=> {
                this.props.reListImage(this.makeRealPath());
              })
            }}>{element === "" ? "..." : "/"+element}
          </a>
          </li>
        )
      }
    })
  }
  render() {
    return (
      <>
        <div className="photo-app">
          <div className="header">
            <div className="title-app">Photo App - 0.2</div>
            <div className="search-bar-app">
              <ul className="photo-app__breadcrumb">
                {this.makeBreadcrumb()}
              </ul>
            </div>
            <div className="btn-close">
              <button
                onClick={() => {
                  this.setState({
                    isShowHideAddGroup: !this.state.isShowHideAddGroup
                  });
                }}
                className="btn btn-block btn-info btn-sm"
              >
                <i className="ti-layers" /> Tạo nhóm
              </button>
              <button
                style={{
                  marginTop: 0,
                  marginLeft: 16
                }}
                className="btn btn-block btn-info btn-sm upload-file"
                data-toggle="modal"
                data-target="#upload-image"
              >
                <i className="ti-export" /> Chọn tệp
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
            <div className="row">{this.renderListImage()}</div>
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
          <p onClick={this.handleCopy}>
            <i className="icon-layers" /> Copy link
          </p>
          <p onClick={this.handleDelete}>
            <i className="ti-trash" /> Xóa
          </p>
        </div>
        <div
          id="upload-image"
          className="modal fade"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="upload-image"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-sm">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-hidden="true"
                >
                  ×
                </button>
                <h4 className="modal-title" id="mySmallModalLabel">
                  Chọn hình ảnh
                </h4>{" "}
              </div>
              <div className="modal-body">
                <div className="modal-body__upload">
                  <input
                    onChange={(e: any) => {
                      // const data = new FormData();
                      // data.append('upload-image', e.target.files[0]);
                      let reader = new FileReader();
                      reader.onload = (event: any) => {
                        const tempDomImage: any = document.getElementById(
                          "review-image-before-upload"
                        );
                        tempDomImage.src = event.target.result;
                      };
                      reader.readAsDataURL(e.target.files[0]);
                      this.setState({
                        imageChoose: e.target.files[0]
                      });
                    }}
                    name="file"
                    id="photo-app-choose-file"
                    type="file"
                    placeholder="Chọn hình"
                    accept="image/png, image/jpeg"
                  />
                  <i className="ti-image" />
                  <img
                    id="review-image-before-upload"
                    className="img-responsive"
                    width="100%"
                    height="50"
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button
                  onClick={() => {
                    const data = new FormData();
                    data.append("upload-image", this.state.imageChoose);
                    data.append("where", this.makeRealPath());
                    axios
                      .post(API + "file/upload/photo", data)
                      .then(result => {
                        if (result.status === 200) {
                          $("#upload-image").modal("hide");
                          this.props.reListImage(this.makeRealPath());
                        }
                      })
                      .catch(err => {});
                  }}
                  type="button"
                  className="btn btn-danger waves-effect waves-light"
                >
                  Tải lên
                </button>
              </div>
            </div>
          </div>
        </div>
        {this.state.isShowHideAddGroup ? this.addGroup() : ""}
      </>
    );
  }
}

const mapStateToProps = storeState => ({
  isShowPhotoApp: storeState.reInit.isShowPhotoApp,
  currentEditorPhoto: storeState.reInit.currentEditorPhoto,
  resListImage: storeState.reInit.resListImage,
  resDeleteImage: storeState.reInit.resDeleteImage,
  resAddImage: storeState.reInit.resAddImage,
  addPhotoGroup: storeState.reInit.addPhotoGroup
});
const mapDispatchToProps = {
  reShowPhotoApp,
  reSetCurrentEditorPhoto,
  reListImage,
  reDeleteImage,
  reAddImage,
  reAddGroupPhoto
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Photo);
