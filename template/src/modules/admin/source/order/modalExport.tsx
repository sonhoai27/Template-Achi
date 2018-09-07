import * as React from "react";
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import { connect } from "react-redux";
import { reListScheOrder, reListOrderBySche, reIsShowingModalExport } from "./reOrder";
interface Props {
  resListScheOrder: any,
  resListOrderBySche: any,
  reListScheOrder: ()=> void,
  reListOrderBySche: (idSche: number)=> void,
  reIsShowingModalExport: (status: boolean)=> void
}
class ModalExport extends React.Component<Props, {}> {
  constructor(props){
    super(props)
  }
  componentDidMount(){
    this.props.reListScheOrder()
  }
  renderListScheOrder = ()=> {
    if(this.props.resListScheOrder.list){
      return this.props.resListScheOrder.list.map(element => {
        return (
          <option key={element.source_sche_id} value={element.source_sche_id}>
            {element.source_title} - {element.source_sche_khoa}
          </option>
        )
      })
    }
    return ''
  }
  renderListOrder = ()=> {
    if(this.props.resListOrderBySche.list){
      return this.props.resListOrderBySche.list.map((element, index) => {
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
                  <td>{element.source_order_created_date}</td>
              </tr>
          )
      })
    }
    return <h1>Null</h1>
}
  render(){
    return(
        <>
          <div className="modal fade in"
          tabIndex={-1} role="dialog"
          aria-hidden="true"
          style={{display: 'block', paddingRight: 17}}>
            <div className="modal-dialog modal-lg" style={{height: '100%', width: '1200px'}}>
              <div className="modal-content" style={{height: 'calc(100vh - 20%)'}}>
                <div className="modal-header">
                  <button onClick={()=> this.props.reIsShowingModalExport(false)} type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                  <div className="modal-title" style={{display: 'flex', alignItems: 'center'}}>
                    <h4 style={{margin: 0}}>Xuất dữ liệu</h4>
                    <div className="form-group" style={{margin: 0}}>
                      <div className="col-sm-12">
                        <select onChange={(e: any)=> {
                          this.props.reListOrderBySche(e.target.value)
                        }} className="form-control">
                          <option>Khóa học - thời khóa biểu</option>
                          {this.renderListScheOrder()}
                        </select>
                      </div>
                    </div>
                    <ReactHTMLTableToExcel
                      id="test-table-xls-button"
                      className="download-table-xls-button btn btn-sm btn-info"
                      table="table-to-xls"
                      filename="tablexls"
                      sheet="tablexls"
                      buttonText="Export"/>
                  </div>
                  </div>
                <div className="modal-body" style={{height: 'calc(100% - 70px)', overflowY: 'scroll'}}>
                <div className="table-responsive">
                    <table className="table table-hover manage-u-table" id="table-to-xls">
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
                          <th>Ngày đăng ký</th>
                        </tr>
                      </thead>
                      <tbody>
                          {this.renderListOrder()}
                      </tbody>
                    </table>
                  </div>
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
  resListScheOrder: storeState.reOrder.resListScheOrder,
  resListOrderBySche: storeState.reOrder.resListOrderBySche
});
const mapDispatchToProps = {
  reListScheOrder,
  reListOrderBySche,
  reIsShowingModalExport
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalExport);
