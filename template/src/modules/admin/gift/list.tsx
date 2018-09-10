import * as React from "react";
import { Link } from "react-router-dom";
import { BASEURLADMIN } from "../../../config/const";
import { connect } from "react-redux";
import { reListGift } from "./reGift";
import Pagination from "../../shared/Pagination";
import { IGiftModel } from "../../../models/gift";

interface IProps {
  resListGift: any;
  reListGift: (page: number)=> void
}
class GiftList extends React.Component<IProps,{}> {
  constructor(props) {
    super(props);
  }
  componentDidMount(){
    this.props.reListGift(
      (parseInt(this.makeCurrentPage(), 10) - 1)*20
    )
  }
  makeCurrentPage = () => {
    const page = window.location.href.split("page=")[1];
    if (page != undefined || page != null) {
      return page;
    } else {
      return "1";
    }
  };
  getMoreGift = page => {
    this.props.reListGift(
        (page - 1)*20
      )
  };
  renderListGifts = ()=> {
    if(this.props.resListGift.list){
      return this.props.resListGift.list.map((element: IGiftModel, index: number)=> {
        return (
          <tr>
              <td className="text-center">{index+1}</td>
              <td>
                <Link to={BASEURLADMIN+'gift/detail/'+element.gift_id}><h4>{element.gift_name}</h4></Link>
              </td>
              <td>
                {element.gift_uri_file}
              </td>
              <td>
                <div className="btn btn-info btn-xs">Ưu tiên</div>
              </td>
          </tr>
        )
      })
    }
    return ''
  }
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="panel">
            <div className="panel-toolbar">
                <div className="panel-heading">Quản lí quà tặng</div>
                <div className="panel-action-bar">
                    <Link to={BASEURLADMIN+'blog/add'}><div className="btn btn-xs btn-info">Thêm mới</div></Link>
                </div>
            </div>
            <div className="table-responsive">
              <table className="table table-hover manage-u-table">
                <thead>
                  <tr>
                    <th className="text-center">
                      #
                    </th>
                    <th>Tên</th>
                    <th>File</th>
                    <th>Ưu tiên</th>
                  </tr>
                </thead>
                <tbody>
                  {this.renderListGifts()}
                </tbody>
              </table>
            </div>
            <div className="pg">
              <Pagination
                initialPage={parseInt(this.makeCurrentPage(), 10)}
                pageSize={20}
                totalItems={this.props.resListGift.count}
                onChangePage={e => this.getMoreGift(e.currentPage)}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = storeState => ({
  resListGift: storeState.reGift.resListGift
});
const mapDispatchToProps = {
  reListGift
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GiftList);
