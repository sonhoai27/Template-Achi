import * as React from "react";
import { connect } from "react-redux";
import { reListCategory } from "../reBlog";
import Header from "../../shared/header";
import BreadCrumd from "../../shared/breadcrumb";
import DetailCategory from "./detailCategory";
interface IProps {
  reListCategory: () => void;
  resListCategory: any;
}
interface IState {
  isShowingModalDetail: boolean,
  isShowingModalAdd: boolean,
  currentCategory: any
}
const breadCrumb = [
  {
    title: "Admin",
    uri: "",
    active: false
  },
  {
    title: "Source",
    uri: "",
    active: true
  }
];
class Category extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);
    this.state = {
      isShowingModalAdd: false,
      isShowingModalDetail: false,
      currentCategory: {}
    }
  }
  componentDidMount() {
    this.props.reListCategory();
  }
  hiddenModalDetail = ()=> {
    this.setState({
      isShowingModalDetail: !this.state.isShowingModalDetail
    }, ()=> {
      this.setState({
        currentCategory: {}
      })
    })
  }
  renderListCategory = () => {
    if(this.props.resListCategory.list){
      return this.props.resListCategory.list.map(element => {
        return (
          <tr key={element.category_id}>
            <td onClick={()=> {
              this.setState({
                currentCategory: element
              }, ()=> {
                this.setState({
                  isShowingModalDetail: !this.state.isShowingModalDetail
                })
              })
            }} role="row"><p>{element.category_name}</p></td>
            <td>{element.category_icon}</td>
            <td>{element.category_color}</td>
        </tr>
        )
      })
    }
    return <h1>NULL</h1>
  }
  render() {
    return (
      <>
        <Header />
        <div id="page-wrapper">
          <div className="container-fluid">
            <BreadCrumd uri={breadCrumb} title="Source" />
            <div className="row">
              <div className="col-md-8">
                <div className="panel">
                  <div className="panel-toolbar">
                    <div className="panel-heading">Danh sách category</div>
                    <div className="panel-action-bar">
                      <div className="btn btn-xs btn-info">Thêm mới</div>
                    </div>
                  </div>
                  <div className="content">
                  <div className="table-responsive">
                    <table className="table table-hover">
                      <thead>
                        <tr>
                          <th role="row">Tên</th>
                          <th>Icon</th>
                          <th>Mã màu</th>
                        </tr>
                      </thead>
                      <tbody>
                        {this.renderListCategory()}
                      </tbody>
                    </table>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {
          this.state.isShowingModalDetail ? <DetailCategory isShowingModal={this.hiddenModalDetail}/> : ''
        }
      </>
    );
  }
}

const mapStateToProps = storeState => ({
  resListCategory: storeState.reBlog.resListCategory
});
const mapDispatchToProps = {
  reListCategory
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Category);
