import * as React from "react";
import { reListElement } from "../reUI";
import { connect } from "react-redux";
interface Props {
  resListElement: any;
  reListElement: () => void;
}
class ListElement extends React.Component<Props, {}> {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.reListElement();
  }
  renderListElement = () => {
    return this.props.resListElement.map(element => {
      return (
        <li>
          <span>{element.element_name}</span>
        </li>
      );
    });
  };
  render() {
    return (
      <div id="listElement" className="custom-modal">
        <div className="custom-modal-content">
            <ul>{this.renderListElement()}</ul>
          </div>
      </div>
    );
  }
}
const mapStateToProps = storeState => ({
  resListElement: storeState.reUI.resListElement
});
const mapDispatchToProps = {
  reListElement
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListElement);
