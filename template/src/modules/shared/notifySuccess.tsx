import * as React from "react";
class NotifySuccess extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div
        className="jq-toast-single jq-has-icon jq-icon-success"
        style={{ textAlign: "left", display: "block" }}
      >
        <h2 className="jq-toast-heading">Thành công</h2>
      </div>
    );
  }
}

export default NotifySuccess;
