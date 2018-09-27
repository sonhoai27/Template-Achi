import * as React from "react";
import { connect } from "react-redux";
import { reListPageUI } from "./rePage";
import ListElementDetailUIPage from "./detail-ui/detail-ui";
import { Link } from "react-router-dom";
import { BASEURLADMIN } from "../../../config/const";

interface IProps {
  match: any;
  resListPageUI: any;
  reListPageUI: (id: number) => void;
}
interface IState {}
class DetailPage extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.reListPageUI(this.props.match.params.idPage);
  }
  render() {
    return (
      <>
        <div className="row add-element-to-ui add-content-ui-source">
          <div className="col-md-12">
            <div className="panel">
              <div className="panel-toolbar">
                <div
                  className="panel-heading"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between"
                  }}
                >
                  Chi tiết Landing Page
                </div>
                <div className="panel-action-bar">
                  <Link
                    target="_blank"
                    to={
                      BASEURLADMIN +
                      "source/review-landing-page/" +
                      this.props.match.params.idUI +
                      "/" +
                      this.props.match.params.idSource
                    }
                  >
                    <div className="btn btn-sm btn-info">
                      <i className="ti-eye" /> Xem thử
                    </div>
                  </Link>
                </div>
              </div>
              <div className="content">
                {this.props.resListPageUI.list ? (
                  <ListElementDetailUIPage
                    match={this.props.match}
                    detail={this.props.resListPageUI.list}
                  />
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = storeState => ({
  resListPageUI: storeState.rePage.resListPageUI
});
const mapDispatchToProps = {
  reListPageUI
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailPage);
