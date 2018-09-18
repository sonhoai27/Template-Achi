import * as React from "react";
import Collapse from "rc-collapse";
var Panel = Collapse.Panel;
class Helper extends React.Component {
  render(){
    return (
      <div className="col-xs-12 question-ebook paddingY-128">
      <div className="row">
        <div className="col-xs-12">
          <h2 className="black text-center">Câu hỏi thường gặp</h2>
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
            <div className="col-sm-2" />
            <div className="col-sm-8">
              <Collapse accordion={true}>
                <Panel
                  header="Được hỗ trợ hướng dẫn sử dụng như thế nào?"
                  headerClass="my-header-class"
                >
                  Trong cuốn da có phần hướng dẫn sử dụng rất chi tiết toàn
                  bộ cuốn da, bạn vui lòng đọc kỹ trước khi sử dụng để có
                  thể phát huy tối đa sức mạnh của cuốn da Mỗi khi bạn có
                  một vấn đề gì cần tư vấn liên quan đến cuốn da mà vẫn còn
                  băn khoăn, bạn chỉ cần viết hết những vấn đề cần tư vấn ra
                  và gửi đến email: mrshare77@gmail.com. Chúng tôi sẽ ngay
                  lập tức chia sẻ cho bạn lời khuyên tốt nhất. Thông thường,
                  bạn sẽ nhận được câu trả lời sau 1 đến 2 ngày.
                </Panel>
                <Panel header="Cách thanh toán - nhận sản phẩm">
                  <b>1. THANH TOÁN</b>
                  <br />
                  <br />
                  Khi bạn đặt mua sản phẩm bạn thanh toán bằng 2 cách:
                  <br />
                  Cách 1: Thanh toán tiền mặt trực tiếp khi nhận hàng.
                  <br />
                  Cách 2: Chuyển khoản qua Master Card/ Visa/ Internet
                  Banking:
                  <br />- Chủ tài khoản: Nguyễn Minh Chí
                  <br />- STK: 85461052
                  <br />- Ngân hàng: VP Bank CN quận 10, HCM
                  <br />- Nội dung chuyển khoản: "Họ và tên + Số điên thoại
                  + Số lượng cuốn "<br />- Ví dụ: Nguyen Minh Chi -
                  09777545374 - 2 cuon"
                  <br />- Chúng tôi chỉ có 1 tài khoản duy nhất như trên.
                  Mọi thông tin chuyển khoản khác với tài khoản trên đều là
                  giả mạo. Chúng tôi sẽ không chịu trách nhiệm nếu bạn
                  chuyển tiền khác tài khoản trên. Sau khi chuyển khoản, anh
                  chị vui lòng reply email đăng ký và đính kèm ủy nhiệm chi
                  để chúng tôi kiểm tra nhanh hơn.
                  <br />
                  <br />
                  <br />
                  <b>2. NHẬN SẢN PHẨM</b>
                  <br />
                  <br />
                  Sau khi chúng tôi xác nhận đơn đặt hàng của bạn thành
                  công, chúng tôi sẽ ngay lập tức đưa vào quá trình xử lí
                  đơn hàng và đóng gói sản phẩm. Dự kiến bạn sẽ nhận được
                  hàng từ đơn bị giao hàng của chúng tôi sau 2-3 ngày đặt
                  hàng.
                </Panel>
                <Panel header="Khi mua nhiều có giá ưu đãi hơn không?">
                  Các gói ưu đãi giúp bạn tiết kiệm phí đầu tư cho cuốn da
                  đã có ở phần đăng ký các gói ưu đãi. Nếu bạn mua với số
                  lượng nhiều hơn bạn có thể liên hệ qua số điện thoại:
                  0977545374 để được nhận báo giá tốt hơn
                </Panel>
                <Panel header="Tôi có câu hỏi nhưng không thấy đề cập ở đây. Tôi phải làm thế nào?">
                  Sẵn sàng trả lời bất cứ khúc mắc nào. Bạn vui lòng liên hệ
                  Nguyễn Minh Chí qua số 0977545374 để được hỗ trợ nhé.
                </Panel>
              </Collapse>
            </div>
            <div className="col-sm-2" />
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default Helper