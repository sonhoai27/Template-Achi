import * as React from "react";
import { BASEURLADMIN } from "../../../../config/const";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { reListSche, reDeleteSche } from "../reSource";

interface Props {
    match: any;
    resListSche: any;
    reListSche: (id: number)=> void;
    resDeleteSche: any;
    reDeleteSche: (idSche: number)=> void;
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
                        <h4 style={{marginBottom: 0, marginTop: 0}}>
                        {element.source_title} - {element.source_sche_khoa}
                        </h4>
                    </Link>
                    </td>
                    <td>
                        {element.source_sche_price}
                    </td>
                    <td>
                        {element.source_sche_number}
                    </td>
                    <td>
                      <div
                        onClick={()=> {
                            this.props.reDeleteSche(element.source_sche_id)
                        }}
                        className="btn btn-sm btn-danger">
                        Xóa
                      </div>
                    </td>
                </tr>
            )
        })
      }
      return ''
  }
  componentDidUpdate(preProps){
    if (preProps.resDeleteSche != this.props.resDeleteSche) {
      if (this.props.resDeleteSche.status === 200) {
        this.props.reListSche(this.props.match.params.idSource)
      } else {
        this.props.reListSche(this.props.match.params.idSource)
      }
  }
  }
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="panel">
            <div className="panel-toolbar">
              <div className="panel-heading">Danh sách lịch học</div>
              <div className="panel-action-bar">
                <Link to={BASEURLADMIN+'source/add-sche/'+this.props.match.params.idSource}>
                <div className="btn btn-xs btn-info">Thêm lịch học</div>
                </Link>
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
                          <th>Hành động</th>
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
    resListSche: storeState.reSource.resListSche,
    resDeleteSche: storeState.reSource.resDeleteSche
});
const mapDispatchToProps = {
    reListSche,
    reDeleteSche
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListSche);

