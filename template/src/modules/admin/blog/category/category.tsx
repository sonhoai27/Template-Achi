import * as React from "react";
import { connect } from "react-redux";
import { reListCategory, reDeleteCategory } from "../reBlog";
import DetailCategory from "./detailCategory";
import AddCategory from "./addCategory";
interface IProps {
  reListCategory: () => void;
  resListCategory: any;
  resDeleteCategory: any;
  reDeleteCategory: (id)=> void;
}
interface IState {
  isShowingModalDetail: boolean,
  isShowingModalAdd: boolean,
  currentCategory: any
}
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
  componentDidUpdate(preProps){
    if(this.props.resDeleteCategory != preProps.resDeleteCategory){
      if(this.props.resDeleteCategory.status === 200){
        this.props.reListCategory();
      }
    }
  }
  hiddenModalAdd = ()=> {
    this.setState({
      isShowingModalAdd: !this.state.isShowingModalAdd
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
            <td>
              <div className="btn btn-xs btn-danger" onClick={()=> {
                this.props.reDeleteCategory(element.category_id)
              }}>
                Xóa
              </div>
            </td>
        </tr>
        )
      })
    }
    return <h1>NULL</h1>
  }
  render() {
    return (
      <>
        <div className="row">
              <div className="col-md-12">
                <div className="panel">
                  <div className="panel-toolbar">
                    <div className="panel-heading">Danh sách danh mục</div>
                    <div className="panel-action-bar">
                      <div className="btn btn-xs btn-info" onClick={()=> {
                        this.setState({
                          isShowingModalAdd: !this.state.isShowingModalAdd
                        })
                      }}>Thêm mới</div>
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
                          <th>Hành động</th>
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
        {
          this.state.isShowingModalDetail ? <DetailCategory category={this.state.currentCategory} isShowingModal={this.hiddenModalDetail}/> : ''
        }
        {
          this.state.isShowingModalAdd ? <AddCategory category={this.state.currentCategory} isShowingModal={this.hiddenModalAdd}/> : ''
        }
      </>
    );
  }
}

const mapStateToProps = storeState => ({
  resListCategory: storeState.reBlog.resListCategory,
  resDeleteCategory: storeState.reBlog.resDeleteCategory
});
const mapDispatchToProps = {
  reListCategory,
  reDeleteCategory
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Category);
