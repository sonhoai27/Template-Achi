import * as React from "react";
class MainSche extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="calendar">
        <div className="responsive-table" id="dkmh">
          <div className="thead">
            <ul>
              <li>
                <i className="fa fa-list-alt checkout" /> Tên chương trình
              </li>
              <li>
                <i className="fa fa-clock-o checkout" /> Thời gian
              </li>
              <li>
                <i className="fa fa-thumbs-o-up checkout" /> Ưu đãi
              </li>
              <li>
                <i className="fa fa-key checkout" /> Đăng ký
              </li>
            </ul>
          </div>
          <div className="tbody">
            <ul data-id="row_74">
              <li data-label="Tên chương trình">
                <ul className="child">
                  <li className="orange">
                    <b id="name_74">Max Power Transform - DM42</b>
                  </li>
                  <li>
                    Trainer:
                    <a href="http://maxpowervn.com/page/giao-vien">
                      Trần Thị Minh Thư
                    </a>
                  </li>
                  <li>
                    Địa chỉ: 26/3 Phan Chu Trinh, Phường Hiệp Phú, Quận 9, Hồ
                    Chí Minh
                  </li>
                </ul>
              </li>
              <li data-label="Thời gian">
                <p>Khai giảng: 17:30 - 19:00</p>
                <p>Thứ: Thứ 7</p>
                <p id="day_">Ngày: 13-10-2018</p>
                <div className="spacer" />{" "}
                <p id="time_">Lịch học chính: 17:30 - 19:00</p>
                <p>Hàng tuần: Thứ 4 và Thứ 7</p>
              </li>
              <li className="text-center" data-label="Ưu đãi">
                <p
                  className="line-through"
                  style={{ marginRight: 10, lineHeight: "1.8" }}
                >
                  <b>5,500,000 đ</b>
                </p>
                <p className="orange" style={{ lineHeight: "1.8" }}>
                  - 5,500,000 đ
                </p>
                <p className="green" style={{ lineHeight: "1.8" }}>
                  <b>= Miễn Phí</b>
                </p>
              </li>
              <li className="text-center" data-label="Đăng ký">
                <p className="red" style={{ lineHeight: "1.8" }}>
                  Chỉ còn 2 ưu đãi
                </p>
                <p
                  className="bold-text uppercase button button-danger"
                  style={{ display: "inline-block" }}
                >
                  <i className="spin fa fa-spinner checkout" />
                  <a
                    href="http://maxpowervn.com/page/dang-ky/MP1/74"
                    target="_blank"
                  >
                    Đăng Ký Gấp
                  </a>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default MainSche;
