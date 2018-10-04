import * as React from "react";
import {reIsDanger, reIsSuccess} from "../../../../reducers/init";
import {connect} from "react-redux";
import {apiAddVideoSource, apiListVideoSource} from "../reVideoSource";

interface IProps {
    idSource: number;
    showHide: ()=>void;
    resAddVideoSourceVideo: any;
    apiAddVideoSource: (form: any)=> void;
    reIsSuccess: (status: boolean) => void;
    reIsDanger: (status: boolean) => void;
    apiListVideoSource: (idSource: number)=> void;
}
interface iState {
    source_video_name: string;
    source_video_url: string;
}
class AddVideo extends React.Component<IProps, iState> {
    constructor(props) {
        super(props)
        this.state = {
            source_video_name: "",
            source_video_url: ""
        }
    }
    componentDidUpdate(preProps){
        if(this.props.resAddVideoSourceVideo != preProps.resAddVideoSourceVideo){
            if (this.props.resAddVideoSourceVideo.status === 200) {
                this.props.reIsSuccess(true);
                setTimeout(() => {
                    this.props.reIsSuccess(false);
                    this.props.apiListVideoSource(this.props.idSource);
                    this.props.showHide()
                }, 2000);
            } else {
                this.props.reIsDanger(true);
                setTimeout(() => {
                    this.props.reIsDanger(false);
                    this.props.apiListVideoSource(this.props.idSource);
                    this.props.showHide()
                }, 2000);
            }
        }
    }
    onChange = (e: any) => {
        // @ts-ignore
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    addVideo = ()=> {
        this.props.apiAddVideoSource({
            ...this.state,
            source_video_id_source: this.props.idSource
        })
    }
    render() {
        return (
            <>
                <div className="modal fade in"
                     tabIndex={-1} role="dialog"
                     aria-hidden="true"
                     style={{display: 'block', paddingRight: 17}}>
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button onClick={()=> {
                                    this.props.showHide()
                                }} type="button" className="close" data-dismiss="modal" aria-hidden="true">×
                                </button>
                                <div className="modal-title" style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                                    <h4 style={{margin: 0}}>Thêm video</h4>
                                </div>
                            </div>
                            <div className="modal-body" style={{display: 'inline-block', width: '100%'}}>
                                <div className="form-group" style={{width: "100%", marginBottom: 32, display: 'inline-block'}}>
                                    <label className="col-sm-12">Tên video</label>
                                    <div className="col-sm-12">
                                        <input
                                            onChange={this.onChange}
                                            name="source_video_name" type="text" placeholder="Tên video" className="form-control"/>
                                    </div>
                                </div>
                                <div className="form-group" style={{width: "100%", display: 'inline-block'}}>
                                    <label className="col-sm-12">Địa chỉ video</label>
                                    <div className="col-sm-12">
                                        <input
                                            onChange={this.onChange}
                                            name="source_video_url" type="text" placeholder="Địa chỉ video" className="form-control"/>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button onClick={this.addVideo} type="button" className="btn btn-danger waves-effect waves-light">Thêm
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal-backdrop fade in"></div>
            </>
        )
    }
}

const mapStateToProps = storeState => ({
    resAddVideoSourceVideo: storeState.reVideoSource.resAddVideoSourceVideo
});
const mapDispatchToProps = {
    reIsDanger,
    reIsSuccess,
    apiAddVideoSource,
    apiListVideoSource
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddVideo);