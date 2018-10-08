import * as React from "react";
import { RESOURCE } from "../../../config/const";
import { BASEURL } from './../../../config/const';

class ClientHomeSource extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <div className="row section-heading list-courses">
          <div className="container">
            <div className="row">
              <div className="col-sm-3">
                <h2 style={{ marginBottom: 0, fontWeight: 600, color: "#fff" }}>
                  KHÓA HỌC
                </h2>
              </div>
              <div className="col-sm-9">
                <h2
                  className="text-center"
                  style={{ marginBottom: 0, fontWeight: 600, color: "#fff" }}
                >
                  CÁC KHÓA HỌC ĐẦY TỰ HÀO
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container" style={{ marginBottom: 64, marginTop: 64 }}>
          <div className="row list-courses__item" style={{ marginBottom: 32 }}>
            <div className="col-sm-4">
              <img
                src={RESOURCE + "images/home/10-khoa-song-xung-dang.png"}
                className="img-responsive"
              />
            </div>
            <div className="col-sm-8">
              <h2>
                <b>Sống xứng đáng</b>
              </h2>
              <h4>
                <i>
                  <b>
                    Hãy để bạn sống nhật nhiệt huyết, có một tuổi trẻ đầy say mê
                    và kiến tạo những kiệt tác cho riêng cuộc đời mình.
                  </b>
                </i>
              </h4>
              <p>
                Tại sao một số người trẻ sống xứng đáng với tuổi trẻ của họ:
                sống nhiệt huyết, tích cực, sở hữu những thói quen tốt, đạt được
                nhiều kết quả ngay khi còn trẻ… trong khi nhiều bạn sẽ đang có
                cuộc sống vật vờ, không có định hướng cho tương lai của mình.
                Hãy suy nghĩ về nó. Bạn không thể làm chủ chính bản thân mình,
                bị mắc kẹt mãi trong tầm thường. Bạn đang cố gắng tự lên tinh
                thần, động viên chính mình mỗi ngày để vươn lên, nhưng bạn nhận
                ra từ sâu thẳm bên trong vẫn đang có nhiều thứ không ổn.{" "}
                <i>Làm thế nào để sống xứng đáng có một tuổi trẻ đúng nghĩa?</i>
              </p>
              <div
                className="get-link btn"
                style={{ marginTop: 32, float: "right" }}
              >
                <a href={'http://songxungdang.com'}>Xem thêm</a>
              </div>
            </div>
          </div>
          <div className="row list-courses__item" style={{ marginBottom: 32 }}>
            <div className="col-sm-4">
              <img
                src={RESOURCE + "images/home/11-nguoi-chia-se.png"}
                className="img-responsive"
              />
            </div>
            <div className="col-sm-8">
              <h2>
                <b>Người chia sẻ</b>
              </h2>
              <h4>
                <i>
                  {" "}
                  <b>
                    Chìa khóa vàng để làm chủ những nguyên tắc trình bày lôi
                    cuốn đám đông.
                  </b>
                </i>
              </h4>
              <p>
                Bạn đã bao giờ muốn trình bày một cách lôi cuốn trước đông,
                nhưng bạn vẫn chưa hài lòng với khả năng trình bày của mình. Có
                những bí mật trên con đường nói trước đám đông lôi cuốn, nếu ai
                đó nói với bạn sớm hơn, thì chắc hẳn bạn sẽ trở thành một người
                trình bày lôi cuốn. Nếu bạn đã nỗ lực nhiều lần mà chưa cải
                thiện được kỹ năng trình bày.{" "}
                <i> Rất có thể bạn đã tìm được nơi phù hợp ngay tại đây.</i>
              </p>
              <div
                className="get-link btn"
                style={{ marginTop: 32, float: "right" }}
              >
                <a href={BASEURL+'page/khoa-hoc/nguoi-chia-se-9-7'}>Xem thêm</a>
              </div>
            </div>
          </div>
          <div className="row list-courses__item" style={{ marginBottom: 32 }}>
            <div className="col-sm-4">
              <img
                src={RESOURCE + "images/home/12-trai-chien-binh-vo-dich.png"}
                className="img-responsive"
              />
            </div>
            <div className="col-sm-8">
              <h2>
                <b>Trại chiến binh vô địch</b>
              </h2>
              <h4>
                <i>
                  <b>
                    Đánh thức nội lực mạnh mẽ để hành động xứng đáng như một
                    chiến binh vô địch.
                  </b>
                </i>
              </h4>
              <p>
                Nội lực chính ra sức mạnh tối thượng giúp bạn trong bất kỳ hoàn
                cảnh nào của cuộc sống, nhưng bạn chưa “bắt lửa” được nói nó,
                sức mạnh thực sự của bạn đang bị “giam cầm”, nó cần được giải
                thoát để bạn có đủ sức mạnh thực hiện bất kỳ nhiệm vụ nào trong
                cuộc đời. <i>
                Làm thế nào cởi bỏ xiềng xích dẫn dắt cuộc sống quyết
                liệt, nhiệt tình làm cho những tháng năm rực rỡ của tuổi trẻ
                thật đáng giá?
                </i>
              </p>
              <div
                className="get-link btn"
                style={{ marginTop: 32, float: "right" }}
              >
                <a href={BASEURL+'page/khoa-hoc/trai-chien-binh-vo-dich-8-9'}>Xem thêm</a>
              </div>
            </div>
          </div>
          <div className="row list-courses__item" style={{ marginBottom: 32 }}>
            <div className="col-sm-4">
              <img
                src={RESOURCE + "images/home/13-G2B.png"}
                className="img-responsive"
              />
            </div>
            <div className="col-sm-8">
              <h2>
                <b>Golden Bee Generation</b>
              </h2>
              <h4>
                <i>
                  <b>
                    Cơ hội tìm ra phiên bản tốt nhất chính mình cùng công việc ý
                    nghĩa, sẵn sàng cho sự nghiệp khi còn sinh viên.
                  </b>
                </i>
              </h4>
              <p>
                Chắc hẳn bạn cũng biết tuổi trẻ là tuổi tươi đẹp nhất của ước
                mơ. Tuổi đôi mươi là giai đoạn thể lực và tinh thần của con
                người dồi dào nhất để nuôi dưỡng hoài bão, khát vọng để rồi ta
                sẽ dấn thân trên con đường sự nghiệp của cả đời người. <i>Tìm ra
                phiên bản tốt nhất cuộc đời mình thông qua công việc ý nghĩa để
                chuẩn bị sẵn sàng cho sự nghiệp ngay khi còn là sinh viên.</i>
              </p>
              <div
                className="get-link btn"
                style={{ marginTop: 32, float: "right" }}
              >
                <a href={BASEURL+'page/khoa-hoc/trai-chien-binh-vo-dich-8-9'}>Xem thêm</a>
              </div>
            </div>
          </div>
        </div>
        <div className="row  list-courses section-heading">
          <div className="container">
            <div className="row">
              <div className="col-sm-3">
                <h2 style={{ marginBottom: 0, fontWeight: 600, color: "#fff" }}>
                  KHÓA HỌC ONLINE
                </h2>
              </div>
              <div className="col-sm-9">
                <h2
                  className="text-center"
                  style={{ marginBottom: 0, fontWeight: 600, color: "#fff" }}
                >
                  KHÓA MIỄN PHÍ GIÁ TRỊ CAO
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container" style={{ marginBottom: 64, marginTop: 64 }}>
          <div className="row list-courses__item" style={{ marginBottom: 32 }}>
            <div className="col-sm-4">
              <img
                src={RESOURCE + "images/home/14-bo-ky-nang-the-ky-21.png"}
                className="img-responsive"
              />
            </div>
            <div className="col-sm-8">
              <h2>
                <b>Bộ kỹ năng thế kỷ 21</b>
              </h2>
              <h4>
                <i>
                  <b>
                    Trở thành người trẻ vượt trội với những kỹ năng ưu việt.
                  </b>
                </i>
              </h4>
              <p>
                Một trong những sự khác biệt giữa các bạn ngồi trên ghế nhà
                trường là những kỹ năng mà mình tích lũy được thời còn là sinh
                viên. Kiến thức chuyên môn là chưa đủ để đảm bảo có một công
                việc tốt sau khi ra trường, cần phải trang bị cho mình nhiều hơn
                thế: thái độ tích cực, giao tiếp tự tin, làm việc nhóm, quản lý
                thời gian, thuyết trình hiệu quả... Khi đó bạn sẽ trở thành một
                người trẻ mang trong mình đầy đủ hành trang ra trường.
              </p>
              <div
                className="get-link btn"
                style={{ marginTop: 32, float: "right" }}
              >
                Xem thêm
              </div>
            </div>
          </div>
          <div className="row list-courses__item" style={{ marginBottom: 32 }}>
            <div className="col-sm-4">
              <img
                src={
                  RESOURCE + "images/home/15-mindmap-phat-trien-ban-than.png"
                }
                className="img-responsive"
              />
            </div>
            <div className="col-sm-8">
              <h2>
                <b>Mindmap phát triển bản thân</b>
              </h2>
              <h4>
                <i>
                  <b>Nâng tầm ghi chép - Học tập đỉnh cao.</b>
                </i>
              </h4>
              <p>
                Ghi chép bằng hình ảnh mang lại hứng thú trong công việc và học
                tập, rèn luyện kỹ năng nhìn nhận vấn đề một cách sáng tạo, phát
                triển nhiều ý tưởng mới, hệ thống hóa kiến thức một cách tối ưu,
                tăng khả năng ghi nhớ thêm 50% so với thông thường.
              </p>
              <div
                className="get-link btn"
                style={{ marginTop: 32, float: "right" }}
              >
                Xem thêm
              </div>
            </div>
          </div>
        </div>
        <div className="row section-heading">
          <div className="container">
            <div className="row">
              <div className="col-sm-3">
                <h2 style={{ marginBottom: 0, fontWeight: 600, color: "#fff" }}>
                  SỔ TAY
                </h2>
              </div>
              <div className="col-sm-9">
                <h2
                  className="text-center"
                  style={{ marginBottom: 0, fontWeight: 600, color: "#fff" }}
                >
                  SỔ TAY SỐNG XỨNG ĐÁNG
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div
          className="container list-ebooks"
          style={{ marginBottom: 64, marginTop: 64 }}
        >
          <div className="row item" style={{ marginBottom: 32 }}>
            <div className="col-sm-4">
              <img
                src={RESOURCE + "images/home/8-so-tay.png"}
                className="img-responsive"
              />
            </div>
            <div className="col-sm-8">
              <h2>
                <b>Cuốn da Sống xứng đáng</b>
              </h2>
              <h4>
                <i>
                  <b>
                    <i>Người bạn tin cậy đồng hành cùng bạn sống xứng đáng và tạo
                    nên những thành tựu riêng cuộc đời mình</i>
                  </b>
                </i>
              </h4>
              <p>
                <i>
                  “Tôi chắc chắn với bạn rằng, bạn sẽ không sở hữu cuốn sổ nào
                  quan trọng và xứng đáng hơn cuốn sổ này”
                </i>
                Một cái cây cổ thụ bắt đầu từ một hạt giống nhỏ Một cuộc sống
                hạnh phúc bắt đầu từ một nụ cười. Một gia đình viên mãn bắt đầu
                từ lời chào hỏi hai người. Một sự nghiệp vĩ đại bắt từ một ý
                tưởng.
                <b>Mọi thành tựu đều bắt đầu từ một hành động nhỏ.</b>
                <br />
                <i><b>Chỉ cần vài phút mỗi ngày</b> đồng hành cùng cuốn da này
                bạn, đã từng bước đi trên chặng hành trình sống xứng đáng và tạo
                nên những thành tựu của riêng cuộc đời mình.</i>
              </p>
              <div
                className="get-link btn"
                style={{ marginTop: 32, float: "right" }}
              >
                <a href={'http://sotay.songxungdang.com'}>Xem thêm</a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ClientHomeSource;
