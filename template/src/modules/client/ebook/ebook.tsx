import * as React from "react";
import EbookHeader from "./com/header";
import ClientHeader from "../client-shared/Header";
import { RESOURCE } from "../../../config/const";
import Footer from "../client-shared/Footer";
import { Helmet } from "react-helmet";
import Collapse from "rc-collapse";
import Slider from "react-slick";
import OrderEbook from "./com/orderEbook";
import Helper from "./com/helper";
var Panel = Collapse.Panel;
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true
};
interface IState {
  isShowingModalOrder: boolean;
  currentPackage: number;
  price: number
}
class EbookLadingPage extends React.Component<{}, IState> {
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
        <Helmet>
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          />
        </Helmet>
        <ClientHeader />
        <EbookHeader />
        <div className="col-xs-12 ebook-intro paddingY-128">
          <div className="row">
            <div className="container">
              <div className="row">
                <div className="col-xs-12">
                  <p className="text justify">Mến chào bạn,</p>
                  <p className="text justify">
                    Bạn là một người khao khát, nỗ lực có một cuộc sống chất
                    lượng nhưng hiện tại:
                  </p>
                  <p className="text justify">
                    Bạn thức dậy từng ngày và chỉ quanh quẩn làm những việc mình
                    thường làm, cảm thấy rất tẻ nhạt, không thấy giá trị của bản
                    thân, ngày qua ngày và dần cảm thấy thôi bây giờ sống “sao
                    cũng được”.
                  </p>
                  <p className="text justify">
                    Đã nhiều lần bạn ý thức rằng mình cần phải sắp xếp lại cuộc
                    sống tốt hơn, sống có kỷ luật mỗi ngày nhưng rồi một mới hỗn
                    độn như tô mì tôm cứ quây quanh lấy bạn không tha làm bạn
                    kiệt quệ sức lực.
                  </p>
                  <p className="text justify">
                    Bạn đang cố gắng tự động viên mình mỗi ngày phải sống “chất”
                    hơn, kỷ luật được một vài ngày rồi bạn lại để “con quỷ bên
                    trong” ngự trị bạn, mọi thứ dần như “chứng nào tật nấy”.
                  </p>
                  <p className="text justify">
                    Bạn đang khao khát tìm kiếm một công cụ để kiến tạo cuộc
                    sống chất lượng, kỷ luật với bản thân, tạo cho mình những
                    thói quen tốt, có niềm vui, sự hạnh phúc, sống có mục đích
                    mỗi một ngày. Rất có thể thứ bạn đang tìm kiếm nằm bên
                    dưới….
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xs-12 about-ebook paddingY-128">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <h2 className="black text-center">VỀ CUỐN DA</h2>
                <div className="colelem" id="u1713" />
                <p
                  className="black text-center"
                  style={{
                    marginBottom: 64
                  }}
                >
                  Mỗi người sinh ra trên đời đã là một đặc ân, hãy sống sao cho
                  xứng đáng với đặc ân đó.
                  <br />
                  Dưới đây là một phần những khía cạnh trong cuốn da này đi cùng
                  bạn trên chặng hành trình đó.
                </p>
              </div>
            </div>
            <div
              className="row"
              style={{ display: "flex", alignItems: "center" }}
            >
              <div className="col-sm-3">
                <ul>
                  <li>
                    <i className="ti-pulse" /> Đặt ra những mục tiêu rõ ràng mỗi
                    ngày, tuần, tháng, năm
                  </li>
                  <li>
                    <i className="ti-pulse" /> Lập kế hoạch hành động chi tiết
                    cho những mục tiêu
                  </li>
                  <li>
                    <i className="ti-pulse" /> Ghi nhận sự thành công mỗi ngày
                  </li>
                  <li>
                    <i className="ti-pulse" /> Sáng tạo ý tưởng độc đáo
                  </li>
                </ul>
              </div>
              <div className="col-sm-6">
                <img
                  src={RESOURCE + "images/client/ebook2.png"}
                  alt=""
                  style={{ margin: "auto" }}
                  className="img-responsive"
                />
              </div>
              <div className="col-sm-3">
                <ul>
                  <li>
                    <i className="ti-pulse" /> Đo lường hiệu quả học tập/công
                    việc mỗi ngày
                  </li>
                  <li>
                    <i className="ti-pulse" /> Ghi chép những bài học từ cuộc
                    sống
                  </li>
                  <li>
                    <i className="ti-pulse" /> Ghi nhật ký cá nhân mỗi tuần
                  </li>
                  <li>
                    <i className="ti-pulse" /> Câu nói truyền cảm hứng hành động
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xs-12 detail-ebook paddingY-128">
          <div className="row">
            <div className="col-xs-12">
              <h2 className="black text-center">LỢI ÍCH NỔI BẬT</h2>
              <p className="text-center white">- Nổi bật của sách -</p>
              <div className="colelem" id="u1713" />
            </div>
          </div>
          <div className="row">
            <div className="container">
              <div className="row">
                <div className="col-sm-6 item">
                  <div>
                    <i className="ti-harddrives" />
                  </div>
                  <div>
                    <h4 className="white">
                      <b>ĐẶT RA NHỮNG MỤC TIÊU RÕ RÀNG</b>
                    </h4>
                    <p className="white">
                      Giúp bạn xây dựng thói quen của người thành công, luôn có
                      rất chi tiết cụ thể mục tiêu hàng ngày, hàng tuần, hàng
                      tháng, hàng năm để hành động quyết liệt với những điều bạn
                      muốn
                    </p>
                  </div>
                </div>
                <div className="col-sm-6 item">
                  <div>
                    <i className="ti-harddrives" />
                  </div>
                  <div>
                    <h4 className="white">
                      <b>DẪN DẮT CẢM XÚC TÍCH CỰC</b>
                    </h4>
                    <p className="white">
                      Giúp bạn sở hữu những cảm xúc tích cực: tự tin, vui vẻ,
                      hào hứng, phấn khích,... thúc đẩy quá trình hành động đạt
                      được hiệu suất làm việc cao tối đa.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6 item">
                  <div>
                    <i className="ti-harddrives" />
                  </div>
                  <div>
                    <h4 className="white">
                      <b>THẤU HIỂU BẢN THÂN</b>
                    </h4>
                    <p className="white">
                      Giúp bạn hiểu được sở trường của bản thân mình khi đó năng
                      lực được phát huy tối đa cũng như rút ra bài học kinh
                      nghiệm khi làm một điều gì đó mà kết quả chưa như ý để làm
                      lại tốt hơn
                    </p>
                  </div>
                </div>
                <div className="col-sm-6 item">
                  <div>
                    <i className="ti-harddrives" />
                  </div>
                  <div>
                    <h4 className="white">
                      <b>XÂY DỰNG SỰ TẬP TRUNG VÀ KỶ LUẬT</b>
                    </h4>
                    <p className="white">
                      Giúp bạn tập trung cao độ vào những điều quan trọng và có
                      ý nghĩa trong cuộc sống hiện tại, sự kỷ luật được xây dựng
                      khi làm những việc nhỏ, đơn giản được lặp đi lặp lại hàng
                      ngày
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6 item">
                  <div>
                    <i className="ti-harddrives" />
                  </div>
                  <div>
                    <h4 className="white">
                      <b>YÊU THƯƠNG VÀ QUÝ TRỌNG BẢN THÂN</b>
                    </h4>
                    <p className="white">
                      Giúp bạn xây dựng lòng tự tôn với bản thân mình, biết rằng
                      bản thân mình đang liên tục tiến lên mỗi một ngày, biết tự
                      quý trọng và yêu thương bản thân
                    </p>
                  </div>
                </div>
                <div className="col-sm-6 item">
                  <div>
                    <i className="ti-harddrives" />
                  </div>
                  <div>
                    <h4 className="white">
                      <b>HẠNH PHÚC ĐỂ THÀNH CÔNG</b>
                    </h4>
                    <p className="white">
                      Giúp bạn hạnh phúc từ những điều nho nhỏ và gần gũi mỗi
                      ngày, những điều mình làm được, những người mình biết hơn,
                      tạo cho bạn cảm giác ý nghĩa trong từng khoảnh khắc cuộc
                      sống.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xs-12 preview-ebook paddingY-128">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <h1 className="text-center white">XEM TRƯỚC</h1>
                <p className="text-center white">- BEST EBOOK FEATURES -</p>
                <div className="preview-ebook_action">
                  <i className="ti-control-play" />
                  <i className="ti-image" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xs-12 comment-reader paddingY-128">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <h2 className="white text-center">CẢM NHẬN NGƯỜI SỞ HỮU</h2>
                <p className="text-center white">- Nổi bật của sách -</p>
                <div className="colelem" id="u1713" />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-2" />
              <div className="col-sm-8">
                <Slider {...settings} className="comment-reader_slider">
                  <div className="item">
                    <img
                      src={RESOURCE + "images/client/clients/client.png"}
                      className="img-responsive"
                    />
                    <div className="white">
                      <p>
                        Contrary to popular belief, Lorem Ipsum is not simply
                        random text. It has roots in a piece of classical Latin
                        literature from 45 BC, making it over 2000 years old.
                        Richard McClintock, a Latin professor at Hampden-Sydney
                        College in Virginia, looked up one of the more obscure
                        Latin words, consectetur
                      </p>
                      <p className="primary-color">
                        — AUSTIN DOE, PROGRAMMER - MNO ORGANIZATION
                      </p>
                    </div>
                  </div>
                  <div className="item">
                    <img
                      src={RESOURCE + "images/client/clients/client.png"}
                      className="img-responsive"
                    />
                    <div className="white">
                      <p>
                        Contrary to popular belief, Lorem Ipsum is not simply
                        random text. It has roots in a piece of classical Latin
                        literature from 45 BC, making it over 2000 years old.
                        Richard McClintock, a Latin professor at Hampden-Sydney
                        College in Virginia, looked up one of the more obscure
                        Latin words, consectetur.
                      </p>
                      <p className="primary-color">
                        — AUSTIN DOE, PROGRAMMER - MNO ORGANIZATION
                      </p>
                    </div>
                  </div>
                </Slider>
              </div>
              <div className="col-sm-2" />
            </div>
          </div>
        </div>
        <div className="col-xs-12 author-ebook paddingY-128">
          <div className="row">
            <div className="col-xs-12">
              <h2 className="black text-center">Về tác giả</h2>
              <p className="text-center black">- Tác giả của sách -</p>
              <div className="colelem" id="u1713" />
            </div>
          </div>
          <div className="row">
            <div
              className="container"
              style={{
                marginTop: 64
              }}
            >
              <div className="row">
                <div className="col-sm-6 author-ebook_avatar">
                  <img
                    src={RESOURCE + "images/client/man.png"}
                    alt=""
                    className="img-responsive"
                  />
                </div>
                <div className="col-sm-6">
                  <Collapse accordion={true}>
                    <Panel
                      header="MR.SHARE - NGƯỜI PHỤNG SỰ TUỔI TRẺ VIỆT"
                      headerClass="my-header-class"
                    >
                      <i>
                        “Hãy sống xứng đáng xứng như một con ong, mục tiêu tối
                        thượng là kiến tạo giá trị cho đời” - Mr.Share -
                      </i>
                      <p>
                        - Founder, Trainer: Học viện kỹ năng Sống xứng đáng
                        <br />- Founder Anh ngữ Max Power Tác giả: Cuốn da Sống
                        Xứng
                        <br />- Đáng Sáng lập CLB Khởi nghiệp thực tiễn cho sinh
                        viên
                        <br />- Quản lý chi nhánh: Tập đoàn giáo dục quốc tế
                        ECORP Chinh phục Full marathon 42km.
                      </p>
                    </Panel>
                    <Panel header="KẾT NỐI VỚI TÔI">
                      this is panel content2 or other
                    </Panel>
                  </Collapse>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-xs-12 order-ebook paddingY-128"
          style={{ background: "#1F9080" }}
        >
          <div className="row">
            <div className="col-xs-12">
              <h2 className="white text-center">SỞ HỮU NGAY</h2>
              <p className="text-center white">- Nhiều ưu đãi -</p>
              <div className="colelem" id="u1713" />
            </div>
          </div>
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
                  Hoàn hảo cho người tập rèn luyện thói quen sống “chất” mỗi
                  ngày.
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
        </div>
        <Helper/>
        <Footer />
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

export default EbookLadingPage;
