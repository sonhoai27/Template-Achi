import * as React from "react";
import ListElement from "./modal/listElement";
import { reDetailUI } from "./reUI";
import { connect } from "react-redux";
import ListElementOnDetailUI from "./detail-ui/detail-ui";
interface Props {
  match?: any;
  resDetailUI: any;
  reDetailUI: (id: any) => void;
}
class AddUIDetail extends React.Component<Props, {}> {
  constructor(props) {
    super(props);
  }
  componentWillReceiveProps(nextProps) {
    console.log(nextProps.resDetailUI.length);
  }
  componentDidMount() {
    this.props.reDetailUI(this.props.match.params.idUi);
  }

  render() {
    return (
      <div className="row add-element-to-ui">
        <div className="col-md-12">
          <div className="panel">
            <div className="panel-toolbar">
              <div className="panel-heading">Thêm chi tiết UI</div>
              <div className="panel-action-bar" />
            </div>
            <div className="content-list-detail-ui">
              <ul className="detail-ui-element">
                {<ListElementOnDetailUI detail={this.props.resDetailUI.list} />}
              </ul>
            </div>
          </div>
        </div>
        <ListElement />
      </div>
    );
  }
}
const mapStateToProps = storeState => ({
  resDetailUI: storeState.reUI.resDetailUI
});
const mapDispatchToProps = {
  reDetailUI
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddUIDetail);
