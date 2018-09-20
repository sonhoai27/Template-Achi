import * as React from "react";
import { connect } from "react-redux";
import {reDetailSche, reUpdateSche } from "../reSource";
import ListDateSche from "./listDateSche";
import AddDateSche from "./addDateSche";
import { reIsDanger, reIsSuccess } from "../../../../reducers/init";
interface Props {
    match: any;
    reDetailSche: (id: any)=> void;
    reUpdateSche: (form: any, id: number) => void;
    resDetailSche: any;
    resUpdateSche: any;
    reIsSuccess: (status: boolean) => void;
    reIsDanger: (status: boolean) => void;

}
interface State {
    source_sche_id: number,
    source_sche_id_source: number,
    source_sche_number: number,
    source_sche_price: number,
    source_sche_sale: number,
    source_sche_address: string,
    source_sche_teacher: string,
    source_sche_status: number,
    source_sche_khoa: string
}
class DetailSche extends React.Component<Props, State> {
    constructor(props) {
        super(props);
        this.state = {
            source_sche_id: 0,
            source_sche_id_source: 0,
            source_sche_number: 0,
            source_sche_price: 0,
            source_sche_sale: 0,
            source_sche_address: '',
            source_sche_teacher: '',
            source_sche_status: 0,
            source_sche_khoa: ''
        }
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.resDetailSche != this.props.resDetailSche){
            this.setState({
                source_sche_id: nextProps.resDetailSche.list.source_sche_id,
                source_sche_id_source: nextProps.resDetailSche.list.source_sche_id_source,
                source_sche_number: nextProps.resDetailSche.list.source_sche_number,
                source_sche_price: nextProps.resDetailSche.list.source_sche_price,
                source_sche_sale: nextProps.resDetailSche.list.source_sche_sale,
                source_sche_address: nextProps.resDetailSche.list.source_sche_address,
                source_sche_teacher: nextProps.resDetailSche.list.source_sche_teacher,
                source_sche_status: nextProps.resDetailSche.list.source_sche_status,
                source_sche_khoa: nextProps.resDetailSche.list.source_sche_khoa
            })
        }
    }
    componentDidMount(){
        this.props.reDetailSche(this.props.match.params.idSche)
    }
    onChange = (e: any)=> {
        const name = e.target.name
        const value = e.target.value
        // @ts-ignore
        this.setState({
            [name]: value
        })
    }
    updateSche = ()=> {
        this.props.reUpdateSche(this.state, this.state.source_sche_id)
    }
    render() {
        return (
            <div className="row">
                <div className="col-md-8">
                    <div className="panel">
                        <div className="panel-toolbar">
                            <div className="panel-heading">Chi tiết lịch học</div>
                            <div className="panel-action-bar">
                                <div
                                    onClick={this.updateSche}
                                    className="btn btn-xs btn-info">Cập nhật</div>
                            </div>
                        </div>
                        <div className="content">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="form-group">
                                        <label className="col-md-12">
                                            <span className="help"> Khóa</span>
                                        </label>
                                        <div className="col-md-12">
                                            <input
                                                onChange={this.onChange}
                                                type="text"
                                                name="source_sche_khoa"
                                                className="form-control"
                                                value={this.state.source_sche_khoa}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-md-12">
                                            <span className="help"> Số lượng</span>
                                        </label>
                                        <div className="col-md-12">
                                            <input
                                                onChange={this.onChange}
                                                type="number"
                                                name="source_sche_number"
                                                className="form-control"
                                                value={this.state.source_sche_number}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-md-12">
                                            <span className="help"> Giá</span>
                                        </label>
                                        <div className="col-md-12">
                                            <input
                                                onChange={this.onChange}
                                                type="number"
                                                name="source_sche_price"
                                                className="form-control"
                                                value={this.state.source_sche_price}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-md-12">
                                            <span className="help"> Giảm giá</span>
                                        </label>
                                        <div className="col-md-12">
                                            <input
                                                onChange={this.onChange}
                                                type="number"
                                                name="source_sche_sale"
                                                className="form-control"
                                                value={this.state.source_sche_sale}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-md-12">
                                            <span className="help"> Địa chỉ học</span>
                                        </label>
                                        <div className="col-md-12">
                                            <input
                                                onChange={this.onChange}
                                                type="text"
                                                name="source_sche_address"
                                                className="form-control"
                                                value={this.state.source_sche_address}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-md-12">
                                            <span className="help"> Giáo viên</span>
                                        </label>
                                        <div className="col-md-12">
                                            <input
                                                onChange={this.onChange}
                                                type="text"
                                                name="source_sche_teacher"
                                                className="form-control"
                                                value={this.state.source_sche_teacher}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-md-12">
                                            <span className="help"> Trạng thái</span>
                                        </label>
                                        <div className="col-md-12">
                                            <select
                                                onChange={this.onChange}
                                                name="source_sche_status" className="form-control">
                                                <option>Chọn</option>
                                                <option
                                                    selected={this.state.source_sche_status == 0 ? true : false}
                                                    value="0">Ẩn</option>
                                                <option
                                                    selected={this.state.source_sche_status == 1 ? true : false}
                                                    value="1">Hiện</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="panel">
                        <div className="panel-toolbar">
                            <div className="panel-heading">Thời gian diễn ra</div>
                            <div className="panel-action-bar">
                                <div
                                    data-toggle="modal" data-target="#add-date-sche"
                                    className="btn btn-xs btn-info">Thêm mới</div>
                            </div>
                        </div>
                        <div className="content">
                            <ListDateSche currentIdSche={this.props.match.params.idSche}/>
                        </div>
                    </div>
                </div>
                <AddDateSche currentIdSche={this.props.match.params.idSche}/>
            </div>
        );
    }
}
const mapStateToProps = storeState => ({
    resDetailSche: storeState.reSource.resDetailSche,
    resUpdateSche: storeState.reSource.resUpdateSche
});
const mapDispatchToProps = {
    reDetailSche,
    reUpdateSche,
    reIsDanger,
    reIsSuccess
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DetailSche);
