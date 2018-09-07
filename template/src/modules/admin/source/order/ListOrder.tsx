import * as React from "react";
import { connect } from "react-redux";
import { reListOrder } from "./reOrder";
import Pagination from "../../../shared/Pagination";
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
interface Props {
  resListOrder: any;
  reListOrder: (page: number) => void;
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
  renderListOrder = ()=> {
      if(this.props.resListOrder.list){
        return this.props.resListOrder.list.map(element => {
            return (
                <tr key={element.source_order_id}>
                    <td className="text-center">{element.source_order_id}</td>
                    <td>{element.source_order_name_student}</td>
                    <td>{element.source_title} - khóa {element.source_sche_id}</td>
                    <td>{element.source_order_created_date}</td>
                    <td>{element.source_order_price}</td>
                    <td>{element.source_order_number_phone_student}</td>
                    <td>{element.source_order_email_student}</td>
                    <td>{element.source_order_facebook}</td>
                    <td>{element.source_order_school_student}</td>
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
                <div className="form-group">
                  <div className="col-sm-12">
                    <select name="" className="form-control">
                      <option>Khóa học - thời khóa biểu</option>
                      <option value="0">Hiện</option>
                      <option value="1">Ẩn</option>
                    </select>
                  </div>
                </div>
                <div className="btn btn-sm btn-primary">
                  <i className=" icon-cloud-download" /> Export
                </div>
                <ReactHTMLTableToExcel
                    id="test-table-xls-button"
                    className="download-table-xls-button"
                    table="table-to-xls"
                    filename="tablexls"
                    sheet="tablexls"
                    buttonText="Export"/>
              </div>
            </div>
            <div className="table-responsive">
              <table className="table table-hover manage-u-table" id="table-to-xls">
                <thead>
                  <tr>
                    <th className="text-center">Id Order</th>
                    <th>Tên</th>
                    <th>Khóa học - TKB</th>
                    <th>Ngày đăng ký</th>
                    <th>Giá</th>
                    <th>Điện thoại</th>
                    <th>Email</th>
                    <th>FB</th>
                    <th>T.học</th>
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
      </div>
    );
  }
}

const mapStateToProps = storeState => ({
  resListOrder: storeState.reOrder.resListOrder
});
const mapDispatchToProps = {
  reListOrder
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListOrder);
