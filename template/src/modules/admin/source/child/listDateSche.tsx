import * as React from "react";
import { connect } from "react-redux";
import { reListDateSche } from "../reSource";
import DetailDateSche from "./detailDateSche";
interface Props {
  currentIdSche: any,
  reListDateSche: (id: number)=> void,
  resListDateSche: any
}
interface State {
  showModelUpdateDateSche: boolean,
  currentDateSche: any
}
class ListDateSche extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      showModelUpdateDateSche: false,
      currentDateSche: {}
    }
  }
  componentDidMount(){
    this.props.reListDateSche(this.props.currentIdSche)
  }
  hiddenModalDetailDateSche = ()=> {
    this.setState({
      currentDateSche: '',
      showModelUpdateDateSche: !this.state.showModelUpdateDateSche
    })
  }
  renderListDateSche = ()=> {
    if(this.props.resListDateSche.list){
      return this.props.resListDateSche.list.map(element => {
        return (
            <tr>
              <td className="text-center">Vị trí {element.date_source_stt}</td>
              <td onClick={()=> {
                this.setState({
                  currentDateSche: element,
                  showModelUpdateDateSche: !this.state.showModelUpdateDateSche
                })
              }}>
                <div dangerouslySetInnerHTML={{ __html: element.date_source_time }}/>
              </td>
            </tr>
        )
      })
    }
    return <p>Chưa có</p>
  }
  render() {
    return (
      <>
      <div className="table-responsive">
          <table className="table table-hover manage-u-table">
            <tbody>
              {this.renderListDateSche()}
            </tbody>
          </table>
        </div>
        {
          this.state.showModelUpdateDateSche ? <DetailDateSche dateSche={
           {
            ...this.state.currentDateSche,
            idSche: this.props.currentIdSche
           }
          } onclick={this.hiddenModalDetailDateSche}/> : ''
        }
      </>
    );
  }
}
const mapStateToProps = storeState => ({
  resListDateSche: storeState.reSource.resListDateSche
});
const mapDispatchToProps = {
  reListDateSche
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListDateSche);

