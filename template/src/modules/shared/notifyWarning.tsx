import * as React from "react";
class NotifyWarning extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <div className="jq-toast-single jq-has-icon jq-icon-warning" 
        style={{textAlign: 'left', display: 'block'}}>
            <h2 className="jq-toast-heading">
            Cảnh báo, vui lòng xem lại hành động vừa thực hiện.</h2>
        </div>
    );
  }
}

export default NotifyWarning;