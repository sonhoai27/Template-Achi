import * as React from "react";
import OrderEbook from "./orderEbook"
interface IState {
  isShowingModalOrder: boolean;
  currentPackage: number;
  price: number
}
class OptionEbook extends React.Component<{}, IState> {
  constructor(props) {
    super(props);
    this.state = {
      isShowingModalOrder: false,
      currentPackage: -1,
      price: 0
    };
  }
  render() {
    return (
      <>
        <div className="row pricing-table">
          <div className="col-sm-3">
            <div className="pricing-option">
              <h1>ƯU ĐÃI 1</h1>
              <hr />
              <p>
                Mua 1 cuốn
                <br />
                Dành cho người mới làm quen hoặc mua tặng làm quà.
              </p>
              <hr />
              <div className="price">
                <div className="front">
                  <span className="price">150.000đ/cuốn</span>
                </div>
                <div className="back">
                  <a
                    className="button"
                    onClick={() => {
                      this.setState({
                        currentPackage: 1,
                        price: 150000,
                        isShowingModalOrder: !this.state.isShowingModalOrder
                      });
                    }}
                  >
                    Mua Ngay
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="pricing-option">
              <h1>ƯU ĐÃI 2</h1>
              <hr />
              <p>
                Mua 2 cuốn
                <br />
                Hoàn hảo cho người tập rèn luyện thói quen sống “chất” mỗi ngày.
              </p>
              <hr />
              <div className="price">
                <div className="front">
                  <span className="price">120.000đ/cuốn</span>
                </div>
                <div className="back">
                  <a
                    className="button"
                    onClick={() => {
                      this.setState({
                        currentPackage: 2,
                        price: 120000,
                        isShowingModalOrder: !this.state.isShowingModalOrder
                      });
                    }}
                  >
                    Mua Ngay
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="pricing-option">
              <h1>ƯU ĐÃI 3</h1>
              <hr />
              <p>
                Mua 5 cuốn
                <br />
                Dành cho người muốn tăng tốc trong học tập, công việc.
              </p>
              <hr />
              <div className="price">
                <div className="front">
                  <span className="price">105.000đ/cuốn</span>
                </div>
                <div className="back">
                  <a
                    className="button"
                    onClick={() => {
                      this.setState({
                        currentPackage: 3,
                        price: 105000,
                        isShowingModalOrder: !this.state.isShowingModalOrder
                      });
                    }}
                  >
                    Mua Ngay
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="pricing-option">
              <h1>ƯU ĐÃI 4</h1>
              <hr />
              <p>
                Mua 10 cuốn
                <br />
                Dành cho nhóm người trong tổ chức muốn phát triển sống “chất”
                cùng nhau.
              </p>
              <hr />
              <div className="price">
                <div className="front">
                  <span className="price">85.000đ/cuốn</span>
                </div>
                <div className="back">
                  <a
                    className="button"
                    onClick={() => {
                      this.setState({
                        currentPackage: 4,
                        price: 85000,
                        isShowingModalOrder: !this.state.isShowingModalOrder
                      });
                    }}
                  >
                    Mua Ngay
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {this.state.isShowingModalOrder ? (
          <OrderEbook
            package={this.state.currentPackage}
            price={this.state.price}
            exit={() => {
              this.setState({
                isShowingModalOrder: !this.state.isShowingModalOrder
              });
            }}
          />
        ) : (
          ""
        )}
      </>
    );
  }
}

export default OptionEbook;
