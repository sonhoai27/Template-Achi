import * as React from "react";
interface IProps {
  showHide: any;
}
class ModalExportContact extends React.Component<IProps, {}> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div
          style={{ display: "block" }}
          className="modal fade in order-ebook"
          role="dialog"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <button
                    onClick={()=>this.props.showHide()}
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-hidden="true"
                >
                  ×
                </button>
                <h4>Thêm nội dung</h4>
              </div>
              <div className="modal-body" />
              <div className="modal-footer">
                <button
                    onClick={()=>this.props.showHide()}
                  type="button"
                  className="btn btn-default waves-effect"
                  data-dismiss="modal"
                >
                  Thoát
                </button>
                <button
                  type="button"
                  className="btn btn-danger waves-effect waves-light"
                >
                  Lưu
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="modal-backdrop fade in" />
      </>
    );
  }
}

export default ModalExportContact;
