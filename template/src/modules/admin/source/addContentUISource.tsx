import * as React from "react";
import { connect } from "react-redux";

class AddContentUISource extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="panel">
            <div className="panel-toolbar">
              <div className="panel-heading" style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between"
                }}>
              Chi tiết Landing Page
              <div className="btn btn-xs btn-info" style={{marginLeft: 16}}>
                  Xem thử
                </div>
              </div>
              <div className="panel-action-bar">
                <div className="btn btn-xs btn-info">
                  Lưu
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = storeState => ({});
const mapDispatchToProps = {};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddContentUISource);
