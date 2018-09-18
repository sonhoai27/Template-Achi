import * as React from "react";
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import { connect } from "react-redux";
import { reListOrderEbookByPackage, reIsShowingModalExportOrderEbook, reListPackage, reListAllOrderEbook } from "./reOrderEbook";
interface Props {
  reIsShowingModalExportOrderEbook: (status: boolean) => void;
  reListOrderEbookByPackage: (idPackage: number) => void;
  reListPackage: () => void;
  reListAllOrderEbook: ()=> void;
  resListPackage: any;
  isShowingModalExportOrderModal: any;
  resListOrderEbookByPackage: any;
}
class ModalExportOrderEbook extends React.Component<Props, {}> {
  constructor(props){
    super(props)
  }
  componentDidMount(){
    this.props.reListPackage()
    this.props.reListAllOrderEbook()
  }
  renderListScheOrder = ()=> {
    if(this.props.resListPackage.list){
      return this.props.resListPackage.list.map(element => {
        return (
          <option key={element.package_ebook_id} value={element.package_ebook_id}>
            {element.package_ebook_name}
          </option>
        )
      })
    }
    return ''
  }
  renderListOrder = ()=> {
    if(this.props.resListOrderEbookByPackage.list){
      return this.props.resListOrderEbookByPackage.list.map((element, index) => {
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
                  <button onClick={()=> this.props.reIsShowingModalExportOrderEbook(false)} type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                  <div className="modal-title" style={{display: 'flex', alignItems: 'center'}}>
                    <h4 style={{margin: 0}}>Xuất dữ liệu</h4>
                    <div className="form-group" style={{margin: 0}}>
                      <div className="col-sm-12">
                        <select onChange={(e: any)=> {
                          if(e.target.value != -1){
                            this.props.reListOrderEbookByPackage(e.target.value)
                          }else {
                            this.props.reListAllOrderEbook()
                          }
                        }} className="form-control">
                          <option value={-1}>Gói - tất cả</option>
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
  resListPackage: storeState.reOrderEbookAdmin.resListPackage,
  resListOrderEbookByPackage:
  storeState.reOrderEbookAdmin.resListOrderEbookByPackage,
  isShowingModalExportOrderModal:
  storeState.reOrderEbookAdmin.isShowingModalExportOrderModal,
});
const mapDispatchToProps = {
  reListPackage,
  reIsShowingModalExportOrderEbook,
  reListOrderEbookByPackage,
  reListAllOrderEbook
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalExportOrderEbook);
