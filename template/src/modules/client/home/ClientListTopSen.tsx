import * as React from "react";
import { RESOURCE } from "../../../config/const";

class ClientListTopSen extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container paddingY-64 top-sen">
        <div className="row">
          <div className="col-sm-4">
            <img
              src={RESOURCE+'images/home/5-minh.png'}
              alt=""
              className="img-responsive"
            />
          </div>
          <div className="col-sm-8">
            <blockquote>
              <p>
                “Trong suốt quãng thời gian sinh viên năm 2, kiến thức, kỹ năng,
                sự phát triển bản thân dường như là con số 0. Tôi lúc đó may mắn
                hơn là gặp anh Chí, trong suốt quãng thời gian học tập và làm
                việc cùng anh hơn 1 năm, là khoảng thời gian tôi phát triển vượt
                trội. Từ những kỹ năng để trở thành 1 sinh viên tự tin trong học
                tập và cuộc sống như thuyết trình, làm việc nhóm, quản lý thời
                gian, quản lý cảm xúc… cho đến kỹ năng để trở thành nhân viên
                tốt của công ty, kỹ năng quản lý đội nhóm để làm Leader… Anh là
                một người tràn đầy năng lượng, luôn luôn nhiệt huyết, không
                ngừng học hỏi cập nhật kiến thức mới và thay đổi liên tục”.
              </p>
            </blockquote>
            <div className="quote-source">
              Bùi Tấn Minh - Đồng sáng lập tổ chức Sài Gòn Thương.
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-4">
            <img
             src={RESOURCE+'images/home/6-diem.png'}
              alt=""
              className="img-responsive"
            />
          </div>
          <div className="col-sm-8">
            <blockquote>
              <p>
                “Mr.Share - người anh, người thầy mà tôi may mắn được đồng hành.
                Cảm ơn vì những bài học, những chia sẻ thật tâm của anh. Cảm ơn
                cả những trải nghiệm, những lời nói của anh đã "đập" thẳng cái
                tôi lớn ngày đó của tôi. Để từ đó tôi bắt đầu nhìn nhận bản
                thân, dẹp bớt đi sợ hãi, quyết liệt hơn với mục tiêu đã đặt ra,
                vượt qua chông gai và sống tích cực hơn. Tuổi trẻ là học hỏi,
                trải nghiệm để "lớn" hơn từng ngày. Chúc anh luôn nhiệt huyết
                hết lòng với thế hệ trẻ, dùng cái tâm sáng của mình để cho đi,
                để đánh thức nhiều bạn trẻ Việt sống xứng đáng”.
              </p>
            </blockquote>
            <div className="quote-source">
              Phạm Thị Ngọc Diễm - SV DH Tài chính Marketing /HR Manager Anh ngữ
              Max Power.
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-4">
            <img
              src={RESOURCE+'images/home/7-banner-dung-mrshare.png'}
              alt=""
              className="img-responsive"
            />
          </div>
          <div className="col-sm-8">
            <blockquote>
              <p>
              <h1>Một cuộc sống xứng đáng không tự nhiên được sinh ra mà được gieo trồng<br/></h1>
              </p>
            </blockquote>
            {/* <div className="quote-source">
              Phạm Thị Ngọc Diễm - SV DH Tài chính Marketing /HR Manager Anh ngữ
              Max Power.
            </div> */}
          </div>
        </div>

        <div className="row">
          <div className="col-sm-4">
            <img
              width="70%"
              src={'http://nguyenminhchi.com/api/uploads/images/ea00646c35438c5c44911539450000000.png'}
              alt=""
              className="img-responsive"
            />
          </div>
          <div className="col-sm-8">
            <blockquote>
              <p>
              <h1>“Tôi chắc chắn với bạn rằng, bạn sẽ không sở hữu cuốn sổ nào quan trọng và xứng đáng hơn cuốn sổ này”</h1>
              </p>
            </blockquote>
            <div
                className="get-link btn"
                style={{ marginTop: 32, float: "right" }}
              >
                <a href={"http://sotay.songxungdang.com"}>Xem thêm</a>
              </div>
            {/* <div className="quote-source">
              Phạm Thị Ngọc Diễm - SV DH Tài chính Marketing /HR Manager Anh ngữ
              Max Power.
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default ClientListTopSen;
