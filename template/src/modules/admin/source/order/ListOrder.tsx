import * as React from "react";
import { connect } from "react-redux";
import { reListOrder, reIsShowingModalExport } from "./reOrder";
import Pagination from "../../../shared/Pagination";
import ModalExport from './modalExport'
import { reDeleteSourceOrder } from './../reSource';
interface Props {
  resListOrder: any;
  reListOrder: (page: number) => void;
  reIsShowingModalExport: (status: boolean)=>void,
  isShowingModalExport: any;
  resDeleteSourceOrder: any;
  reDeleteSourceOrder: (id)=> void;
}
class ListOrder extends React.Component<Props, {}> {
  constructor(props) {
    super(props);
  }
  componentDidMount(){
    this.props.reListOrder(
        (parseInt(this.makeCurrentPage(), 10) - 1)*20
    )
  }
  getMoreProduct = page => {
      this.props.reListOrder(
          (page - 1)*20
      )
  };
  makeCurrentPage = () => {
    const page = window.location.href.split("page=")[1];
    if (page != undefined || page != null) {
      return page;
    } else {
      return "1";
    }
  };
  componentDidUpdate(preProps){
    if(this.props.resDeleteSourceOrder != preProps.resDeleteSourceOrder){
      if(this.props.resDeleteSourceOrder.status === 200){
        this.props.reListOrder(
            (parseInt(this.makeCurrentPage(), 10) - 1)*20
        )
      }
    }
  }
  renderListOrder = ()=> {
      if(this.props.resListOrder.list){
        return this.props.resListOrder.list.map((element, index) => {
            return (
                <tr key={element.source_order_id}>
                    <td className="text-center">{index + 1}</td>
                    <td>{element.source_order_id}</td>
                    <td>{element.source_order_ho}</td>
                    <td>{element.source_order_ten}</td>
                    <td>{element.source_order_gender}</td>
                    <td>{element.source_order_birthday}</td>
                    <td>{element.source_order_number_phone}</td>
                    <td>{element.source_order_email}</td>
                    <td>{element.source_title} - {element.source_sche_khoa}</td>
                    <td>{element.source_order_price}</td>
                    <td>
                      <div className="btn btn-xs btn-danger" onClick={()=> {
                        this.props.reDeleteSourceOrder(element.source_order_id)
                      }}>
                        Xóa
                      </div>
                    </td>
                </tr>
            )
        })
      }
      return <h1>Null</h1>
  }
  render() {
    return (
      <div className="row order">
        <div className="col-md-12">
          <div className="panel">
            <div className="panel-toolbar">
              <div className="panel-heading">Danh sách đăng ký học</div>
              <div className="panel-action-bar">
                <div className="btn btn-sm btn-primary" onClick={()=> {
                  this.props.reIsShowingModalExport(true)
                }}>
                  <i className=" icon-cloud-download" /> Export
                </div>
              </div>
            </div>
            <div className="table-responsive">
              <table className="table table-hover manage-u-table">
                <thead>
                  <tr>
                    <th className="text-center">STT</th>
                    <th>Id Order</th>
                    <th>Họ</th>
                    <th>Tên lót & Tên</th>
                    <th>Giới tính</th>
                    <th>Ngày sinh</th>
                    <th>Số điện thoại</th>
                    <th>Email</th>
                    <th>Khóa học - TKB</th>
                    <th>Giá</th>
                    <th>Hành động</th>
                  </tr>
                </thead>
                <tbody>
                    {this.renderListOrder()}
                </tbody>
              </table>
            </div>
            <div className="pg">
              <Pagination
                initialPage={parseInt(this.makeCurrentPage(), 10)}
                pageSize={20}
                totalItems={this.props.resListOrder.count}
                onChangePage={e => this.getMoreProduct(e.currentPage)}
              />
            </div>
          </div>
        </div>
        {this.props.isShowingModalExport ? <ModalExport/> : ''}
      </div>
    );
  }
}

const mapStateToProps = storeState => ({
  resListOrder: storeState.reOrder.resListOrder,
  isShowingModalExport: storeState.reOrder.isShowingModalExport,
  resDeleteSourceOrder: storeState.reSource.resDeleteSourceOrder
});
const mapDispatchToProps = {
  reListOrder,
  reIsShowingModalExport,
  reDeleteSourceOrder
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListOrder);
