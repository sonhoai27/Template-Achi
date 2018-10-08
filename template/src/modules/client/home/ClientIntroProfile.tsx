import * as React from "react";
import { RESOURCE } from "./../../../config/const";

class ClientIntroProfile extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="border-letter">
        <div className="col-sm-12 paddingY-32 intro-profile">
          <div className="row flex-ver">
            <div className="col-sm-8">
              <h2>Chào bạn đang ở đây,</h2>
              <p>
                Anh là <b>Nguyễn Minh Chí (Mr.Share) - Người phụng sự tuổi trẻ Việt</b>.<br />
                Anh sinh ra trong một vùng quê nghèo tỉnh miền trung, sống chủ
                yếu nhờ nghề nông. Lúc nhỏ anh là một thằng tự ti, rụt rè nhút
                nhát, tới năm 18 tuổi, không có bất cứ kỹ năng nào ngoài việc
                chỉ biết đi học rồi về nhà. Sự thật lúc đó <b>anh sợ nói chuyện với
                người lạ còn hơn là sợ ma</b>. Ngày mà anh lên đại học anh học ngành
                kỹ thuật đơn giản vì làm việc mới máy móc sẽ không phải tiếp xúc
                nhiều với con người, anh hoàn toàn mất định hướng: không mục
                tiêu, không hoài bão, hoang mang không biết đi học xong rồi mình
                sẽ như thế nào. Mỗi ngày cũng như mọi ngày: sáng đi học, trưa ăn
                cơm, chiều lại đi học, tối về ngủ và cứ thế chả có gì khác. <b>Cái
                tết năm 19 tuổi</b>, sau sự kiện anh cãi nhau với gia đình không
                đáng có, anh bị đột quỵ, méo quai hàm, người co cứng không thể
                cử động, não gần như mất kiểm soát.<b> Anh được đưa đi bệnh viện và
                may mắn sống sót</b>. Sự kiện đó giúp anh trân trọng cuộc sống hơn,
                ý thức thực sự về việc thay đổi bản thân tốt lên vì mình, vì
                mình, vì gia đình và mọi người xung quanh. Anh tự nhủ: <b>“Chí mày
                nhất định phải sống khác đi”</b>.
              </p>
            </div>
            <div className="col-sm-4">
              <img
                src={RESOURCE + "images/home/2-tam-thu.png"}
                alt=""
                className="img-responsive"
              />
            </div>
          </div>
          <div className="row flex-ver">
            <div className="col-sm-4">
              <img
                src={RESOURCE + "images/home/3-trainer-tam-thu.png"}
                alt=""
                className="img-responsive"
              />
            </div>
            <div className="col-sm-8">
              <b>Khi anh bắt đầu tìm thì mọi thứ dần dần hiện ra.</b> Cuộc sống cho anh
              cơ hội gặp những cuốn sách, những người thầy đáng kính và quan
              trọng nhất là anh đã <b>bắt đầu sống quyết liệt với tuổi trẻ của mình</b>
              và có những kết quả khởi động ngay từ lúc tuổi đôi mươi. Sau khi
              trở thành nhân viên kinh doanh xuất sắc nhất, anh trở thành Quản
              lý chi nhánh trẻ tuổi xuất sắc nhất Tập đoàn Giáo dục Quốc Tế năm
              20 tuổi. <b>Năm 23 tuổi và 24 tuổi</b> anh thành lập và điều hành 2 công
              ty: Anh ngữ Max Power và Học viện thế hệ sống xứng đáng. Tác giả
              cuốn da (sổ tay) Sống Xứng Đáng. Huấn luyện luyện kỹ năng cho hàng
              ngàn bạn trẻ về các chủ đề: sống tích cực, giao tiếp tự tin, trình
              bày thu hút, bán hàng, quản lý đội nhóm,... cả trong hội trường
              kín lẫn trại ngoài trời. Bản thân anh vẫn còn thấy mình có những
              thiếu sót, cho dù đạt được kết quả nào, mỗi ngày anh cũng <b>nhìn lên
              và ngưỡng mộ những người đi trước</b>, nó làm cho anh có động lực
              không ngừng học tập nỗ lực tiến lên. Tuy vậy với những điều đã
              trải nghiệm, <b>từ trái tim của mình</b>, anh mong muốn chia sẻ đến những
              bạn trẻ đôi mươi <b>giá trị: “Sống xứng đáng”</b>. Với những điều anh đã
              may mắn được nhận từ cuộc sống: <b>thoát khỏi cái chết, gặp những
              người thầy, những cuốn sách, sống quyết liệt với tuổi trẻ</b>, tới bây
              giờ thứ giúp anh có động lực sống và làm việc mỗi ngày là sự trăn
              trở mà chính ngày xưa anh đã gặp phải và đã vượt qua nó: <b>“Làm thế
              nào để người trẻ Việt sống xứng đáng?”</b>. Có nghị lực vươn lên từ
              cuộc sống, sống có mục tiêu, sự nhiệt huyết, quyết liệt với thứ
              mình đang làm, yêu thương quý trọng gia đình, có lòng tự hào dân
              tộc, xa hơn phụng sự đóng góp cho Việt Nam mình. Và vì vậy, sau 6
              năm làm trong nghề Giáo dục Đào tạo, đi học hàng trăm khóa học,
              làm việc và huấn luyện gần 10.000 bạn trẻ, anh quyết định thành
              lập Học viện Đào tạo thế hệ sống xứng đáng với khát vọng: <b>“Phụng
              sự tuổi trẻ Việt sống xứng đáng”</b>.
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ClientIntroProfile;
