import * as React from "react";
import { connect } from "react-redux";
import { reListContactPaging } from "../reSource";
import ModalExportContact from "./ModalExportContact";

interface IProps {
  resListContactPaging: any;
  reListContactPaging: (page: number) => void;
}
interface IState {
    isShowingModal: boolean;
}
class Contact extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);
    this.state = {
      isShowingModal: false
    }
  }
  makeCurrentPage = () => {
    const page = window.location.href.split("page=")[1];
    if (page != undefined || page != null) {
      return page;
    } else {
      return "1";
    }
  };
  componentDidMount() {
    this.props.reListContactPaging(
      (parseInt(this.makeCurrentPage(), 10) - 1) * 20
    );
  }
  getMoreBlog = page => {
    this.props.reListContactPaging((page - 1) * 20);
  };
  renderListContact = () => {
    if (this.props.resListContactPaging.list) {
      return this.props.resListContactPaging.list.map((element, index)=> {
        return (
          <tr>
            <td>{index+1}</td>
            <td>{element.email_name}</td>
            <td>{element.email_email}</td>
            <td>{element.email_phone}</td>
          </tr>
        )
      })
    }
    return <h1>Null</h1>;
  };
  render() {
    return (
      <>
        <div className="row">
          <div className="col-md-12">
            <div className="panel">
              <div className="panel-toolbar">
                <div className="panel-heading">Quản lí liên hệ</div>
                <div className="panel-action-bar">
                  <div onClick={()=> {
                    this.setState({
                        isShowingModal: !this.state.isShowingModal
                    })
                  }} className="btn btn-sm btn-info">Xuất file</div>
                </div>
              </div>
              <div className="content">
                <div className="table-responsive">
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th className="text-center" role="row">
                          #
                        </th>
                        <th>Tên</th>
                        <th>Email</th>
                        <th>Số điện thoại</th>
                      </tr>
                    </thead>
                    <tbody>{this.renderListContact()}</tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
          {
            this.state.isShowingModal ? <ModalExportContact showHide={()=> {
              this.setState({
                  isShowingModal: !this.state.isShowingModal
              })
            }}/> : ''
          }
      </>
    );
  }
}

const mapStateToProps = storeState => ({
  resListContactPaging: storeState.reSource.resListContactPaging
});
const mapDispatchToProps = {
  reListContactPaging
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Contact);
