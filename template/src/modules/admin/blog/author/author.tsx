import * as React from "react";
import { connect } from "react-redux";
import { reListAuthor, reDeleteAuthor } from "../reBlog";
import DetailAuthor from "./detailAuthor";
import AddAuthor from "./addAuthor";
interface IProps {
  reListAuthor: () => void;
  resListAuthor: any;
  resDeleteAuthor: any;
  reDeleteAuthor: (id)=>void;
}
interface IState {
  isShowingModalDetail: boolean,
  isShowingModalAdd: boolean,
  currentAuthor: any
}
class Author extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);
    this.state = {
      isShowingModalAdd: false,
      isShowingModalDetail: false,
      currentAuthor: {}
    }
  }
  componentDidMount() {
    this.props.reListAuthor();
  }
  componentDidUpdate(preProps){
    if(this.props.resDeleteAuthor != preProps.resDeleteAuthor){
      if(this.props.resDeleteAuthor.status === 200){
        this.props.reListAuthor();
      }
    }
  }
  hiddenModalDetail = ()=> {
    this.setState({
      isShowingModalDetail: !this.state.isShowingModalDetail
    }, ()=> {
      this.setState({
        currentAuthor: {}
      })
    })
  }
  hiddenModalAdd = ()=> {
    this.setState({
      isShowingModalAdd: !this.state.isShowingModalAdd
    })
  }
  renderListAuthor = () => {
    if(this.props.resListAuthor.list){
      return this.props.resListAuthor.list.map(element => {
        return (
          <tr key={element.author_id}>
            <td onClick={()=> {
              this.setState({
                currentAuthor: element
              }, ()=> {
                this.setState({
                  isShowingModalDetail: !this.state.isShowingModalDetail
                })
              })
            }} role="row"><p>{element.author_name}</p></td>
            <td>{element.author_intro}</td>
            <td>
              <div className="btn btn-xs btn-danger" onClick={()=> {
                this.props.reDeleteAuthor(element.author_id)
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
                    <div className="panel-heading">Danh sách tác giả</div>
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
                          <th>Intro</th>
                          <th>Hành động</th>
                        </tr>
                      </thead>
                      <tbody>
                        {this.renderListAuthor()}
                      </tbody>
                    </table>
                  </div>
                  </div>
                </div>
              </div>
            </div>
        {
          this.state.isShowingModalDetail ? <DetailAuthor author={this.state.currentAuthor} isShowingModal={this.hiddenModalDetail}/> : ''
        }
        {
          this.state.isShowingModalAdd ? <AddAuthor author={this.state.currentAuthor} isShowingModal={this.hiddenModalAdd}/> : ''
        }
      </>
    );
  }
}

const mapStateToProps = storeState => ({
  resListAuthor: storeState.reBlog.resListAuthor,
  resDeleteAuthor: storeState.reBlog.resDeleteAuthor
});
const mapDispatchToProps = {
  reListAuthor,
  reDeleteAuthor
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Author);
