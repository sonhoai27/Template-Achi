import * as React from "react";
import { reListElement, reShowListElement, reAddElementToDetailUI, reDetailUI } from "../reUI";
import { connect } from "react-redux";
interface Props {
  match:any,
  resListElement: any,
  currentIdElement: any,
  reListElement: () => void,
  addElementToUIDetail: any,
  reShowListElement: (status: boolean)=>void,
  reAddElementToDetailUI: (obj: any)=> void,
  reDetailUI: (idUI: any)=> void
}
class ListElement extends React.Component<Props, {}> {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.reListElement();
    document.body.style.overflowY = 'hidden'
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.addElementToUIDetail != this.props.addElementToUIDetail){
      this.props.reDetailUI(this.props.match.params.idUi)
    }
  }
  addElementToDetailUI = (element_id, element_real_id) => {
    this.props.reAddElementToDetailUI({
      detail_ui_id_element: element_id,
      detail_ui_id_ui: this.props.match.params.idUi,
      detail_ui_random_id: element_real_id+'-'+(Date.now()),
      detail_ui_parent_id: this.props.currentIdElement
    })
  }
  renderListElement = () => {
    return this.props.resListElement.map(element => {
      return (
        <li>
          <span onClick={()=>{
            this.addElementToDetailUI(
              element.element_id, element.element_real_id
            )
            setTimeout(()=> {
              document.body.style.overflowY = 'auto'
            }, 1000)
          }}>
            {element.element_name}
          </span>
        </li>
      );
    });
  };
  render() {
    return (
      <div id="listElement" className="custom-modal">
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 16
        }}>
          <h3 style={{margin: 0}}>Danh sách elements</h3>
          <button
            onClick={()=> {
              this.props.reShowListElement(false)
              document.body.style.overflowY = 'auto'
            }}
            className="btn btn-xs btn-info">Tắt</button>
        </div>
        <div className="custom-modal-content">
            <ul>{this.renderListElement()}</ul>
          </div>
      </div>
    );
  }
}
const mapStateToProps = storeState => ({
  resListElement: storeState.reUI.resListElement,
  addElementToUIDetail: storeState.reUI.addElementToUIDetail,
  currentIdElement: storeState.reUI.currentIdElement
});
const mapDispatchToProps = {
  reListElement,
  reShowListElement,
  reAddElementToDetailUI,
  reDetailUI
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListElement);
