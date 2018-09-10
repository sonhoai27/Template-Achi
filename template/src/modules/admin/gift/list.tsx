import * as React from "react";
import { Link } from "react-router-dom";
import { BASEURLADMIN } from "../../../config/const";
import { connect } from "react-redux";
import { reListGift, reUpdateGift } from "./reGift";
import Pagination from "../../shared/Pagination";
import { IGiftModel } from "../../../models/gift";

interface IProps {
  resListGift: any;
  reListGift: (page: number)=> void;
  reDetailGift: (idGift: number)=> void;
  reUpdateGift: (form: IGiftModel, idGift: number) => void;
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
  setActiveGift = (gift: IGiftModel)=> {
    this.props.reUpdateGift({
        ...gift,
        gift_active: (gift.gift_active == 1 ? 0 : 1)
    }, gift.gift_id)
  }
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
                <div 
                  className={'btn btn-xs ' + (element.gift_active == 0 ? 'btn-info' : 'btn-danger')} 
                  onClick={()=> this.setActiveGift(element)}>
                  {element.gift_active == 0 ? 'Ưu tiên' : 'Hủy ưu tiên'}
                </div>
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
  resListGift: storeState.reGift.resListGift,
  resUpdateGift: storeState.reGift.resUpdateGift
});
const mapDispatchToProps = {
  reListGift,
  reUpdateGift
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GiftList);
