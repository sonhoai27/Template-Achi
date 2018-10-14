import * as React from "react";
import { connect } from "react-redux";
import { reListCounter } from "./reSendGift";
import { API } from "../../../../config/const";

interface IProps {
  resListCounter: any;
  isShowingModal: any;
  reListCounter: ()=> void;
}
class ExportFileSendGift extends React.Component<IProps, {}> {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.reListCounter()
  }
  options = ()=> {
    if (this.props.resListCounter.list) {
        return this.props.resListCounter.list.map(element => {
            return (
                <option key={element.send_gift_counter} value={element.send_gift_counter}>
                    {element.send_gift_counter}
                </option>
            )
        })
    }
    return null
}
  render() {
    return (
      <>
        <div
          style={{ display: "block", overflow: "auto" }}
          className="modal fade in order-ebook"
          role="dialog"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-sm">
            <div className="modal-content">
            <div className="modal-header">
                  <button
                      onClick={() => this.props.isShowingModal()}
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-hidden="true"
                  >
                      ×
                  </button>
                  <h3>Xuất danh sách</h3>
              </div>
              <div className="modal-body">
                  <select className="form-control" onChange={(e) => {
                    const valueOption = e.target.value
                    if(valueOption != 'Chọn'){
                      if(valueOption === "-1"){
                        window.location.href = API+'/goi-qua-tang/all'
                      }else {
                        window.location.href = API+'/goi-qua-tang/export/'+valueOption
                      }
                    }
                  }}>
                    <option>Chọn</option>
                    <option value={-1}>Tất cả</option>
                    {this.options()}
                  </select>
              </div>
            </div>
          </div>
        </div>
        <div className="modal-backdrop fade in" />
      </>
    );
  }
}

const mapStateToProps = storeState => ({
  resListCounter: storeState.reSendGift.resListCounter
});
const mapDispatchToProps = {
  reListCounter
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExportFileSendGift);
