import * as React from "react";
import { reListElement } from "../reUI";
import { connect } from "react-redux";
interface Props {
    resListElement: any,
    reListElement: ()=> void
}
class ListElement extends React.Component<Props, {}> {
  constructor(props) {
    super(props);
  }
  componentDidMount(){
    this.props.reListElement()
  }
  renderListElement = ()=> {
      return this.props.resListElement.map(element => {
          return (
              <li>
                  <span>{element.element_name}</span>
              </li>
          )
      })
  }
  render() {
    return (
      <div
        id="listElement"
        className="modal fade"
        role="dialog"
        aria-labelledby="listElement"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-hidden="true"
              >
                ×
              </button>
              <h4 className="modal-title" id="myModalLabel">
                Danh Sách Element
              </h4>{" "}
            </div>
            <div className="modal-body">
                <ul>
                    {this.renderListElement()}
                </ul>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-info waves-effect"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = storeState => ({
    resListElement: storeState.reUI.resListElement,
});
const mapDispatchToProps = {
    reListElement
}
export default connect(mapStateToProps, mapDispatchToProps)(ListElement);
