import * as React from "react";
import { connect } from "react-redux";
import { reIsDanger, reIsSuccess } from "../../../reducers/init";
import {
  reIsShowingModalExportOrderEbook,
  reListOrderEbook
} from "./reOrderEbook";
import Pagination from "../../shared/Pagination";
import ModalExportOrderEbook from "./modalExportOrderEbook";

interface IProps {
  reIsDanger: (status: boolean) => void;
  reIsSuccess: (status: boolean) => void;
  resListOrderEbook: any;
  isShowingModalExportOrderModal: any;
  reListOrderEbook: (page: number) => void;
  reIsShowingModalExportOrderEbook: (status: boolean) => void;
}
class OrderEbook extends React.Component<IProps, {}> {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.reListOrderEbook(
      (parseInt(this.makeCurrentPage(), 10) - 1) * 20
    );
  }
  getMoreProduct = page => {
    this.props.reListOrderEbook((page - 1) * 20);
  };
  makeCurrentPage = () => {
    const page = window.location.href.split("page=")[1];
    if (page != undefined || page != null) {
      return page;
    } else {
      return "1";
    }
  };
  renderListOrder = ()=> {
    if(this.props.resListOrderEbook.list){
      return this.props.resListOrderEbook.list.map((element, index) => {
          return (
              <tr key={element.order_ebook_id}>
                  <td className="text-center">{index + 1}</td>
                  <td>{element.order_ebook_id}</td>
                  <td>{element.order_ebook_name}</td>
                  <td>{element.order_ebook_email}</td>
                  <td>{element.order_ebook_phone}</td>
                  <td>{element.package_ebook_name}</td>
                  <td>{element.package_ebook_price}</td>
                  <td>{element.order_ebook_created_date}</td>
              </tr>
          )
      })
    }
    return <h1>Null</h1>
  }
  render() {
    return (
      <>
        <div className="row">
          <div className="col-md-12">
            <div className="panel">
              <div className="panel-toolbar">
                <div className="panel-heading">Danh sách đăng ký mua sách</div>
                <div className="panel-action-bar">
                  <div
                    style={{ marginRight: 16 }}
                    className="btn btn-sm btn-primary"
                  >
                    <i className="icon-drawar" /> Quản lý Gói
                  </div>
                  <div className="btn btn-sm btn-primary" onClick={()=> {
                  this.props.reIsShowingModalExportOrderEbook(true)
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
                    <th>Họ và tên</th>
                    <th>Email</th>
                    <th>Số điện thoại</th>
                    <th>Gói</th>
                    <th>Giá</th>
                    <th>Ngày đăng ký</th>
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
                totalItems={this.props.resListOrderEbook.count}
                onChangePage={e => this.getMoreProduct(e.currentPage)}
              />
            </div>
            </div>
          </div>
        </div>
        {this.props.isShowingModalExportOrderModal ? <ModalExportOrderEbook/> : ''}
      </>
    );
  }
}

const mapStateToProps = storeState => ({
  resListOrderEbook: storeState.reOrderEbookAdmin.resListOrderEbook,
  isShowingModalExportOrderModal:
    storeState.reOrderEbookAdmin.isShowingModalExportOrderModal,
});
const mapDispatchToProps = {
  reIsDanger,
  reIsSuccess,
  reListOrderEbook,
  reIsShowingModalExportOrderEbook
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderEbook);
