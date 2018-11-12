import * as React from "react";
import { connect } from "react-redux";
import { reCustomerList, reDeleteCustomer } from "./reGift";
import { BASEURLADMIN } from "../../../config/const";
import Pagination from "../../shared/Pagination";

interface IProps {
  resCustomerList: any;
  resDeleteCustomer: any;
  reCustomerList: (page: number)=> void;
  reDeleteCustomer: (id: number)=> void;
}
interface IState {

}
class Customer extends React.Component<IProps,IState> {
  constructor(props){
    super(props)
  }
  componentDidUpdate(preProps){
    if(this.props.resDeleteCustomer != preProps.resDeleteCustomer){
      this.props.reCustomerList((parseInt(this.makeCurrentPage(), 10) - 1) * 40);
    }
  }
  componentDidMount(){
    this.props.reCustomerList((parseInt(this.makeCurrentPage(), 10) - 1) * 40);
  }
  makeCurrentPage = () => {
    const page = window.location.href.split("page=")[1];
    if (page != undefined || page != null) {
      return page;
    } else {
      return "1";
    }
  };
  getMoreCustomer = page => {
    this.props.reCustomerList((page - 1) * 40);
    window.history.pushState("", "", `${BASEURLADMIN+'gift/customers/'}?page=` + page);
  };
  renderCustomerList = ()=> {
    if(this.props.resCustomerList.list){
      return this.props.resCustomerList.list.map((element, index) => {
        return(
          <tr key={element.blog_id}>
            <td className="text-center" role="row">
              {index + 1}
            </td>
            <td>
                {element.send_gift_name}
            </td>
            <td>{element.send_gift_email}</td>
            <td>{element.send_gift_counter}</td>
            <td>{element.send_gift_title}</td>
            <td>
              <div
                onClick={() => {
                  this.props.reDeleteCustomer(element.send_gift_id);
                }}
                className="btn btn-sm btn-danger"
              >
                Xóa
              </div>
            </td>
          </tr>
        )
      })
    }
    return <h1>NULL</h1>
  }
  render(){
    return(
      <>
      <div className="row">
        <div className="col-md-12">
          <div className="panel">
            <div className="panel-toolbar">
              <div className="panel-heading">Danh sách danh đăng ký</div>
              <div className="panel-action-bar">
                <div className="btn btn-xs btn-info">Tải lên</div>
              </div>
            </div>
            <div className="content">
              <div className="row">
                <div className="col-sm-12">
                  <div className="table-responsive">
                    <table className="table table-hover">
                      <thead>
                        <tr>
                          <th className="text-center" role="row">
                            #
                          </th>
                          <th>Tên</th>
                          <th>Email</th>
                          <th>Lần gởi quà</th>
                          <th>Quà tặng</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>{this.renderCustomerList()}</tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="pg">
              <Pagination
                initialPage={parseInt(this.makeCurrentPage(), 10)}
                pageSize={40}
                totalItems={this.props.resCustomerList.count}
                onChangePage={e => this.getMoreCustomer(e.currentPage)}
              />
            </div>
          </div>
        </div>
      </div>
      </>
    )
  }
}
const mapStateToProps = storeState => ({
  resDeleteCustomer: storeState.reGift.resDeleteCustomer,
  resCustomerList: storeState.reGift.resCustomerList
});
const mapDispatchToProps = {
  reCustomerList,
  reDeleteCustomer
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Customer);