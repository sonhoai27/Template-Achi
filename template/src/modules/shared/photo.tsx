import * as React from "react";
import Image from "./image";
interface State {
  dataImage: object;
}
class Photo extends React.Component<{}, State> {
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
  }
  componentWillUnMount() {
    window.addEventListener(
      "mousedown",
      this.handleClickHideUIComponents,
      false
    );
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
    alert(uri.uri);
  };
  handleDelete = () => {
    let name: any = this.state.dataImage;
    alert(name.name);
  };
  render() {
    let tempImg: any = [];
    for (let i = 0; i < 20; i++) {
      tempImg.push(
        <div className="col-sm-2 item" key={i}>
          <Image
            dataSrc={JSON.stringify({
              uri:
                "https://cdn.tgdd.vn/Products/Images/42/154897/samsung-galaxy-note-9-black-400x400.jpg" +
                i,
              name: "samsung-galaxy-note-9-black-400x400.jpg" + i
            })}
            onClick={e => this._contextMenu(e)}
            src="https://cdn.tgdd.vn/Products/Images/42/154897/samsung-galaxy-note-9-black-400x400.jpg"
            width={150}
            height={150}
          />
        </div>
      );
    }
    return (
      <>
        <div className="photo-app">
          <div className="header">
            <div className="title-app">Photo App</div>
            <div className="search-bar-app">
                <input name="" id="" type="text" className="form-control" placeholder="Bạn muốn tìm gì?"/>
            </div>
            <div className="btn-close">
              <button className="btn btn-block btn-info btn-xs upload-file">Tải lên</button>
              <i className="ti-close" style={{display: 'flex', alignItems: 'center'}}/>
            </div>
          </div>
          <div className="content">
            <div className="row">{tempImg}</div>
          </div>
        </div>
        <div
          ref={node => (this.nodeContextMenuPhotoApp = node)}
          className="photo-app-context-menu"
          id="photo-app-context-menu"
        >
          <p onClick={this.handleInsert}><i className="ti-link"/> Chèn</p>
          <p onClick={this.handleDelete}><i className="ti-trash"/> Xóa</p>
        </div>
      </>
    );
  }
}

export default Photo;
