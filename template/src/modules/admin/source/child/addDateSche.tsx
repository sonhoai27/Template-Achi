import * as React from "react";
import { connect } from "react-redux";
import { reAddSche } from "../reSource";
interface Props {
    resAddSche: any,
    reAddSche: (form: any)=> void
}
interface State {
    source_sche_id_source: number,
    source_sche_number: number,
    source_sche_price: number,
    source_sche_sale: number,
    source_sche_address: string,
    source_sche_teacher: string,
    source_sche_status: number
}
class AddDateSche extends React.Component<Props, State> {
    constructor(props) {
        super(props);
        this.state = {
            source_sche_id_source: 0,
            source_sche_number: 0,
            source_sche_price: 0,
            source_sche_sale: 0,
            source_sche_address: '',
            source_sche_teacher: '',
            source_sche_status: 0
        }
    }
    onChange = (e: any)=> {
        const name = e.target.name
        const value = e.target.value
        // @ts-ignore
        this.setState({
            [name]: value
        })
    }
    addSche = ()=> {
        this.props.reAddSche(this.state)
    }
    render() {
        return (
            <div className="row">
                <div className="col-md-8">
                    <div className="panel">
                        <div className="panel-toolbar">
                            <div className="panel-heading">Thêm lịch học</div>
                            <div className="panel-action-bar">
                                <div
                                    onClick={this.addSche}
                                    className="btn btn-xs btn-info">Lưu</div>
                            </div>
                        </div>
                        <div className="content">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="form-group">
                                        <label className="col-md-12">
                                            <span className="help"> Loại</span>
                                        </label>
                                        <div className="col-md-12">
                                            <select name="source_status" className="form-control">
                                                <option>Chọn</option>
                                                <option value="0">Khai giảng</option>
                                                <option value="1">Chính thức</option>
                                                <option value="2">Không có</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-md-12">
                                            <span className="help"> Ngày</span>
                                        </label>
                                        <div className="col-md-12">
                                            <input
                                                type="text"
                                                name="source_promo"
                                                className="form-control"
                                                placeholder="Tóm tắt"
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-md-12">
                                            <span className="help"> Thời gian</span>
                                        </label>
                                        <div className="col-md-12">
                                            <input
                                                type="text"
                                                name="source_promo"
                                                className="form-control"
                                                placeholder="Tóm tắt"
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-md-12">
                                            <span className="help"> Thứ</span>
                                        </label>
                                        <div className="col-md-12">
                                            <input
                                                type="text"
                                                name="source_promo"
                                                className="form-control"
                                                placeholder="Tóm tắt"
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-md-12">
                                            <span className="help"> Ghi chú</span>
                                        </label>
                                        <div className="col-md-12">
                                            <input
                                                type="text"
                                                name="source_promo"
                                                className="form-control"
                                                placeholder="Tóm tắt"
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-md-12">
                                            <span className="help"> Vị trí</span>
                                        </label>
                                        <div className="col-md-12">
                                            <input
                                                type="text"
                                                name="source_promo"
                                                className="form-control"
                                                placeholder="Tóm tắt"
                                            />
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
    resAddSche: storeState.reSource.resAddSche
});
const mapDispatchToProps = {
    reAddSche
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddDateSche);
