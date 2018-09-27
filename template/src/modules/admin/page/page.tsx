import * as React from "react";
import { connect } from "react-redux";
import { reListUIForPage } from "../ui/reUI";
import { Link } from "react-router-dom";
import { BASEURLADMIN } from "../../../config/const";


interface IProps {
  reListUIForPage: ()=> void;
  resListUIForPage: any;
}
interface IState {

}
class Page extends React.Component<IProps, IState> {
  constructor(props){
    super(props)
  }
  componentDidMount(){
    this.props.reListUIForPage()
  }
  renderListPageUI = () => {
    if (this.props.resListUIForPage) {
      return this.props.resListUIForPage.map(element => {
        return (
          <tr>
            <td className="text-center">{element.ui_id}</td>
            <td>
              <Link to={BASEURLADMIN + "ui/page/detail/"+element.ui_id}>
                <span className="text-muted">{element.ui_name}</span>
              </Link>
            </td>
            <td>
              {element.ui_type == 0 ? "Khóa học" : "Trang"}
            </td>
          </tr>
        );
      });
    }
    return null;
  };
  render(){
    return (
      <>
      <div className="row">
        <div className="col-md-8">
          <div className="panel">
            <div className="panel-toolbar">
              <div className="panel-heading">Danh sách Page</div>
            </div>
            <div className="table-responsive">
              <table className="table table-hover manage-u-table">
                <thead>
                  <tr>
                    <th className="text-center">#</th>
                    <th>Tên</th>
                    <td>Loại</td>
                  </tr>
                </thead>
                <tbody>
                  {this.renderListPageUI()}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        </div>
      </>
    )
  }
}

const mapStateToProps = storeState => ({
  resListUIForPage: storeState.reUI.resListUIForPage
});
const mapDispatchToProps = {
  reListUIForPage
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page);
