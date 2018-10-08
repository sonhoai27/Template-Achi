import * as React from "react";
import {reDetailSource, reUpdateSource} from "../source/reSource";
import {connect} from "react-redux";
import {reIsDanger, reIsSuccess, reSetCurrentEditorPhoto, reShowPhotoApp} from "../../../reducers/init";
import {alias} from "../../../utils/alias";
import {Editor} from "@tinymce/tinymce-react";
import {reListUIForSource} from "../ui/reUI";
import AddVideo from "./modal/AddVideo";
import {apiListVideoSource} from "./reVideoSource";
import UpdateVideo from "./modal/UpdateVideo";

interface IProps {
    match?: any;
    reSetCurrentEditorPhoto: (editor: any) => void;
    reShowPhotoApp: (status: boolean) => void;
    resListUIForSource: any;
    reListUIForSource: () => void;
    resDetailSource: any;
    resUpdateSource: any;
    reUpdateSource: (form, id) => void
    reDetailSource: (id: number) => void;
    reIsSuccess: (status: boolean) => void;
    reIsDanger: (status: boolean) => void;
    resListVideoSource: any;
    apiListVideoSource: (idSource: number)=> void;
}
interface State {
    source: {
        source_title: string;
        source_promo: string;
        source_content: any;
        source_id_ui: number;
        source_status: number;
        source_banner: string;
        source_is_video: number;
        source_is_page: number;
        source_page_url: string;
    };
    isShowingAddVideo: boolean;
    isShowingUpdateVideo: boolean;
    currentVideo: any;
}
class VideoSource extends React.Component<IProps, State> {
    constructor(props) {
        super(props);
        this.state = {
            source: {
                source_title: "",
                source_promo: "",
                source_content: "",
                source_id_ui: 0,
                source_status: 0,
                source_banner: "",
                source_is_video: 0,
                source_is_page: 0,
                source_page_url: ""
            },
            isShowingAddVideo: false,
            isShowingUpdateVideo: false,
            currentVideo: {}
        };
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.resDetailSource != this.props.resDetailSource) {
            this.setState({
                source: {
                    source_title: nextProps.resDetailSource.source_title,
                    source_promo: nextProps.resDetailSource.source_promo,
                    source_content: nextProps.resDetailSource.source_content,
                    source_id_ui: nextProps.resDetailSource.source_id_ui,
                    source_status: nextProps.resDetailSource.source_status,
                    source_banner: nextProps.resDetailSource.source_banner,
                    source_is_video: nextProps.resDetailSource.source_is_video,
                    source_is_page: nextProps.resDetailSource.source_is_page,
                    source_page_url: nextProps.resDetailSource.source_page_url
                }
            });
        }
        if (this.props.resUpdateSource != nextProps.resUpdateSource) {
            if (nextProps.resUpdateSource.status === 200) {
                this.props.reIsSuccess(true);
                setTimeout(() => {
                    this.props.reIsSuccess(false);
                    this.props.reDetailSource(this.props.match.params.idSource);
                }, 2000);
            } else {
                this.props.reIsDanger(true);
                setTimeout(() => {
                    this.props.reIsDanger(false);
                    this.props.reDetailSource(this.props.match.params.idSource);
                }, 2000);
            }
        }
    }
    componentDidUpdate(preProps) {
        console.log(this.props.resListUIForSource)
    }

    componentDidMount() {
        this.props.reListUIForSource();
        this.props.reDetailSource(this.props.match.params.idSource);
        this.props.apiListVideoSource(this.props.match.params.idSource)
    }

    renderListUI = () => {
        if (this.props.resListUIForSource) {
            return this.props.resListUIForSource.map(element => {
                return (
                    <option
                        selected={
                            this.props.resDetailSource.source_id_ui === element.ui_id
                                ? true
                                : false
                        }
                        value={element.ui_id}
                    >
                        {element.ui_name}
                    </option>
                );
            });
        }
        return "";
    };
    saveSource = () => {
        const tempDomImage: any = document.getElementById('img-cover-blog-preview')
        const tempDomImageBanner: any = document.getElementById('img-banner-source')
        this.props.reUpdateSource({
            ...this.state.source,
            source_alias: alias(this.state.source.source_title),
            source_cover: tempDomImage.src,
            source_banner: tempDomImageBanner.src
        }, this.props.match.params.idSource)
    };
    onChange = (e: any) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            source: {
                ...this.state.source,
                [name]: value
            }
        });
    };
    renderListVideoSource = ()=> {
        if(this.props.resListVideoSource.list){
            return this.props.resListVideoSource.list.map(element => {
                return (
                    <li key={element.source_video_id} style={{marginBottom: 32}}>
                        <h4><b>{element.source_video_name}</b></h4>
                        <div>
                            <div
                                onClick={()=> {
                                    this.setState({
                                        currentVideo: element
                                    }, ()=> {
                                        this.setState({
                                            isShowingUpdateVideo: !this.state.isShowingUpdateVideo
                                        })
                                    })
                                }}
                                className="btn btn-xs btn-info" style={{marginRight: 8}}>Sửa</div>
                            <div className="btn btn-xs btn-danger">Xóa</div>
                        </div>
                    </li>
                )
            })
        }
        return <h4>Chưa có</h4>
    }
    render(){
        return (
            <div className="row">
                <div className="col-md-12">
                    <div className="panel">
                        <div className="panel-toolbar">
                            <div
                                className="panel-heading"
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between"
                                }}
                            >
                                <h3>Thông tin khóa học</h3>
                                <div
                                    onClick={()=> {
                                        this.setState({
                                            isShowingAddVideo: !this.state.isShowingAddVideo
                                        })
                                    }}
                                    style={{
                                        marginLeft: 32,
                                        marginRight: 32
                                    }}
                                    className="btn btn-sm btn-primary"
                                >
                                    Thêm video vào khóa học
                                </div>
                            </div>
                            <div className="panel-action-bar">
                                <div onClick={this.saveSource} className="btn btn-sm btn-info">
                                    Cập nhật thông tin
                                </div>
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
                                                onChange={e => this.onChange(e)}
                                                name="source_title"
                                                type="text"
                                                className="form-control"
                                                value={this.state.source.source_title}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-md-12">
                                            <span className="help"> Tóm tắt</span>
                                        </label>
                                        <div className="col-md-12">
                                            <input
                                                onChange={e => this.onChange(e)}
                                                type="text"
                                                name="source_promo"
                                                className="form-control"
                                                value={this.state.source.source_promo}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-md-12">
                                            <Editor
                                                initialValue={this.state.source.source_content}
                                                onChange={(e: any) => {
                                                    if (e.level.content === null || e.level.content === "") {
                                                        let temp = "";
                                                        (e.level.fragments).forEach(element => {
                                                            temp += element
                                                        });
                                                        this.setState({
                                                            source: {
                                                                ...this.state.source,
                                                                source_content: temp
                                                            }
                                                        })
                                                    } else {
                                                        this.setState({
                                                            source: {
                                                                ...this.state.source,
                                                                source_content: e.level.content
                                                            }
                                                        })
                                                    }
                                                }}
                                                apiKey="t7eqx9nyehld0fibzbgtu06aax2f3beil1q091d12j97cmfl"
                                                init={{
                                                    selector: "textarea",
                                                    height: 300,
                                                    theme: "modern",
                                                    image_advtab: true,
                                                    plugins:
                                                        "print preview fullpage searchreplace autolink directionality visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists textcolor wordcount imagetools contextmenu colorpicker textpattern help",
                                                    toolbar1:
                                                        "fontsizeselect formatselect | bold italic strikethrough forecolor backcolor | link addImage blockquote | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent  | removeformat",
                                                    fontsize_formats:
                                                        "10pt 11pt 12pt 14pt 16pt 18pt 20pt 24pt 26pt 28pt 36pt 48pt 72pt",
                                                    setup: editor => {
                                                        editor.addButton("addImage", {
                                                            icon: "image",
                                                            tooltip: "Add Image",
                                                            onclick: () => {
                                                                this.props.reShowPhotoApp(true);
                                                                this.props.reSetCurrentEditorPhoto(editor);
                                                            }
                                                        });
                                                    }
                                                }}
                                            />
                                        </div>
                                        <div className="col-xs-12">
                                            <h2 style={{marginBottom: 32, marginTop: 64}}>Danh sách video của khóa học.</h2>
                                            <ul className={'list-video-source'} style={{listStyle: "none", padding: 0}}>
                                                {this.renderListVideoSource()}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="form-group">
                                        <label className="col-sm-12">Giao diện</label>
                                        <div className="col-sm-12">
                                            <select
                                                onChange={e => this.onChange(e)}
                                                name="source_id_ui"
                                                className="form-control"
                                            >
                                                <option>Chọn</option>
                                                {this.renderListUI()}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-sm-12">Trạng thái</label>
                                        <div className="col-sm-12">
                                            <select
                                                onChange={e => this.onChange(e)}
                                                name="source_status"
                                                className="form-control"
                                            >
                                                <option>Chọn</option>
                                                <option
                                                    selected={
                                                        this.props.resDetailSource.source_status == 0
                                                            ? true
                                                            : false
                                                    }
                                                    value="0"
                                                >
                                                    Hiện
                                                </option>
                                                <option
                                                    selected={
                                                        this.props.resDetailSource.source_status == 1
                                                            ? true
                                                            : false
                                                    }
                                                    value="1"
                                                >
                                                    Ẩn
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-sm-12">Loại khóa học</label>
                                        <div className="col-sm-12">
                                            <select
                                                onChange={(e) => this.onChange(e)}
                                                name="source_is_video"
                                                className="form-control">
                                                <option>Chọn</option>
                                                <option value='0' selected={this.state.source.source_is_video == 0 ? true : false}>Học offline</option>
                                                <option value='1' selected={this.state.source.source_is_video == 1 ? true : false}>Video online</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-sm-12">Hình cover</label>
                                        <div
                                            onClick={() => {
                                                this.props.reShowPhotoApp(true);
                                                this.props.reSetCurrentEditorPhoto(
                                                    "img-cover-blog-preview"
                                                );
                                            }}
                                            className="col-sm-12 cover-blog"
                                        >
                                            <i className="ti-upload"/>
                                            <img
                                                id="img-cover-blog-preview"
                                                src={this.props.resDetailSource.source_cover}
                                                className="img-responsive"
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-sm-12">Banner khóa học</label>
                                        <div
                                            onClick={() => {
                                                this.props.reShowPhotoApp(true);
                                                this.props.reSetCurrentEditorPhoto(
                                                    "img-banner-source"
                                                );
                                            }}
                                            className="col-sm-12 cover-blog"
                                        >
                                            <i className="ti-upload"/>
                                            <img
                                                id="img-banner-source"
                                                src={this.props.resDetailSource.source_banner}
                                                className="img-responsive"
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-sm-12">Là trang riêng</label>
                                        <div className="col-sm-12">
                                            <select
                                                onChange={(e) => this.onChange(e)}
                                                name="source_is_page"
                                                className="form-control">
                                                <option>Chọn</option>
                                                <option value='0' selected={this.state.source.source_is_page == 0 ? true : false}>Không</option>
                                                <option value='1' selected={this.state.source.source_is_page == 1 ? true : false}>Có</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-sm-12">Nếu là Page thêm địa chỉ</label>
                                        <div className="col-sm-12">
                                            <input
                                                onChange={(e) => this.onChange(e)}
                                                type="text"
                                                name="source_page_url"
                                                className="form-control"
                                                defaultValue={this.state.source.source_page_url}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {this.state.isShowingAddVideo ? <AddVideo
                    showHide={()=> {
                        this.setState({
                            isShowingAddVideo: !this.state.isShowingAddVideo
                        })
                    }}
                    idSource={this.props.match.params.idSource}/> : ''}
                {this.state.isShowingUpdateVideo ? <UpdateVideo
                    video={this.state.currentVideo}
                    showHide={()=> {
                        this.setState({
                            isShowingUpdateVideo: !this.state.isShowingUpdateVideo
                        })
                    }}
                    idSource={this.props.match.params.idSource}/> : ''}
            </div>
        )
    }
}

const mapStateToProps = storeState => ({
    resListUIForSource: storeState.reUI.resListUIForSource,
    resUpdateSource: storeState.reSource.resUpdateSource,
    resDetailSource: storeState.reSource.resDetailSource,
    resListVideoSource: storeState.reVideoSource.resListVideoSource
});
const mapDispatchToProps = {
    reSetCurrentEditorPhoto,
    reShowPhotoApp,
    reListUIForSource,
    reUpdateSource,
    reDetailSource,
    reIsDanger,
    reIsSuccess,
    apiListVideoSource
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(VideoSource);