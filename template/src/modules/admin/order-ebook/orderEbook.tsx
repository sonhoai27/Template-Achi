import * as React from "react";
import { connect } from "react-redux";
import { reIsDanger, reIsSuccess } from "../../../reducers/init";

interface IProps {
  reIsDanger: (status: boolean) => void;
  reIsSuccess: (status: boolean) => void;
}
class OrderEbook extends React.Component<IProps, {}> {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <div className="row">
          <div className="col-md-12">
            <div className="panel">
              <div className="panel-toolbar">
                <div className="panel-heading">Danh sách đăng ký mua sách</div>
                <div className="panel-action-bar">
                  <div
                    className="btn btn-sm btn-primary"
                  >
                    <i className=" icon-cloud-download" /> Export
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = storeState => ({});
const mapDispatchToProps = {
  reIsDanger,
  reIsSuccess
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderEbook);
