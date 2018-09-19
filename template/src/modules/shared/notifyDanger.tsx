import * as React from "react";
class NotifyDanger extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="jq-toast-single jq-has-icon jq-icon-error"
                 style={{textAlign: 'left', display: 'block'}}>
                <h2 className="jq-toast-heading">
                    Thất bại, vui lòng xem lại hành động vừa thực hiện.
                </h2>
            </div>
        );
    }
}

export default NotifyDanger;