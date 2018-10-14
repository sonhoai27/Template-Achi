import * as React from "react";
import Slider from "react-slick";
import { Helmet } from "react-helmet";
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false
};
class Customer extends React.Component {
  constructor(props) {
    super(props);
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
        <div className="row">
          <div className="col-sm-2" />
          <div className="col-sm-8">
            <Slider {...settings} className="comment-reader_slider">
              <div className="item">
                <img
                  src={
                    "http://nguyenminhchi.com/api/uploads/images/c25d0a3af0f2a6c3ee4d1539277200000.png"
                  }
                  className="img-responsive"
                />
                <div className="white">
                  <p>
                    “Trong suốt quãng thời gian sinh viên năm 2,kiến thức, kỹ
                    năng, sự phát triển bản thân dường như là con số 0. Tôi lúc
                    đó may mắn hơn là gặp anh Chí, trong suốt quãng thời gian
                    học tập và làm việc cùng anh hơn 1 năm, là khoảng thời gian
                    tôi phát triển vượt trội. Từ những kỹ năng để trở thành 1
                    sinh viên tự tin trong học tập và cuộc sống như thuyết
                    trình, làm việc nhóm, quản lý thời gian, quản lý cảm xúc…
                    cho đến kỹ năng để trở thành nhân viên tốt của công ty, kỹ
                    năng quản lý đội nhóm để làm Leader… Anh là một người tràn
                    đầy năng lượng, luôn luôn nhiệt huyết, không ngừng học hỏi
                    cập nhật kiến thức mới và thay đổi liên tục”.
                  </p>
                  <p className="primary-color">— Bùi Tấn Minh</p>
                </div>
              </div>
              <div className="item">
                <img
                  src={
                    "http://nguyenminhchi.com/api/uploads/images/6ec634702ce635779fa21539277200000.png"
                  }
                  className="img-responsive"
                />
                <div className="white">
                  <p>
                    “Mr.Share - người anh, người thầy mà tôi may mắn được đồng
                    hành. Cảm ơn vì những bài học, những chia sẻ thật tâm của
                    anh. Cảm ơn cả những trải nghiệm, những lời nói của anh đã
                    "đập" thẳng cái tôi lớn ngày đó của tôi. Để từ đó tôi bắt
                    đầu nhìn nhận bản thân, dẹp bớt đi sợ hãi, quyết liệt hơn
                    với mục tiêu đã đặt ra, vượt qua chông gai và sống tích cực
                    hơn. Tuổi trẻ là học hỏi, trải nghiệm để "lớn" hơn từng
                    ngày. Chúc anh luôn nhiệt huyết hết lòng với thế hệ trẻ,
                    dùng cái tâm sáng của mình để cho đi, để đánh thức nhiều bạn
                    trẻ Việt sống xứng đáng”
                  </p>
                  <p className="primary-color">
                    — Phạm Thị Ngọc Diễm - SV DH Tài chính Marketing
                  </p>
                </div>
              </div>
            </Slider>
          </div>
          <div className="col-sm-2" />
        </div>
      </>
    );
  }
}

export default Customer;
