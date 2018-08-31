import * as React from "react";
import { BASEURLADMIN } from "../../../../config/const";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { reListSche } from "../reSource";

interface Props {
    match: any,
    resListSche: any,
    reListSche: (id: number)=> void,
}
class ListSche extends React.Component<Props, {}> {
  constructor(props) {
    super(props);
  }
  componentDidMount(){
      this.props.reListSche(this.props.match.params.idSource)
  }
  renderListSche = ()=> {
      if(this.props.resListSche.list){
        return this.props.resListSche.list.map(element => {
            return (
                <tr>
                    <td className="text-center">{element.source_sche_id}</td>
                    <td>
                    <Link to={BASEURLADMIN + "source/detail-sche/"+element.source_sche_id}>
                        <span className="text-muted">
                        {element.source_title} - {element.source_sche_id}
                        </span>
                    </Link>
                    </td>
                    <td>
                        {element.source_sche_price}
                    </td>
                    <td>
                        {element.source_sche_number}
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
              <div className="panel-heading">Danh sách lịch học</div>
              <div className="panel-action-bar">
                <div className="btn btn-xs btn-info">Thêm lịch học</div>
              </div>
            </div>
            <div className="content">
              <div className="row">
                <div className="col-sm-12">
                  <div className="table-responsive">
                    <table className="table table-hover manage-u-table">
                      <thead>
                        <tr>
                          <th className="text-center">#</th>
                          <th>Tên</th>
                          <th>Giá</th>
                          <th>Số lượng</th>
                        </tr>
                      </thead>
                      <tbody>
                        {this.renderListSche()}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = storeState => ({
    resListSche: storeState.reSource.resListSche
});
const mapDispatchToProps = {
    reListSche
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListSche);

