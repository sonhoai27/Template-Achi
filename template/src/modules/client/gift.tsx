import * as React from "react";

class ClientGift extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <form
          action="https://app.getresponse.com/add_subscriber.html"
          acceptCharset="utf-8"
          method="post"
        >
          {/* Trường email (bắt buộc) */}
          email: <input type="text" name="email" />
          <br />
          {/* Mã thông báo danh bạ */}
          {/* Nhận mã thông báo tại: https://app.getresponse.com/campaign_list.html https://app.getresponse.com/campaign_list.html */}
          <input type="hidden" name="campaign_token" defaultValue="6xTmh" />
          {/* Nút Người đăng ký */}
          <input type="submit" defaultValue="Subscribe" />
        </form>
      </>
    );
  }
}

export default ClientGift;
