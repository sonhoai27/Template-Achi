import * as React from "react";
import Helmet from "react-helmet";
import axios from "axios";
import { API } from "../../../config/const";
interface IProps {
  match?: any;
}
interface IState {
  source: any;
}
class SuggestKH extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);
    this.state = {
      source: {}
    };
  }
  componentDidMount() {
    axios
      .get(API + "source/detail-sche/" + this.props.match.params.idSource)
      .then(result => {
        this.setState({
          source: result.data.list
        });
      })
      .catch(err => {
      });
  }
  render() {
    return (
      <>
        <Helmet
          style={[
            {
              cssText: `
                .margin-top {
                    margin-top: 0!important;
                }
                .card {
                  position: relative;
                  border-radius: 20px;
                  overflow: hidden;
                  box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.1);
                  transition: opacity 0.2s ease, box-shadow 0.2s ease;
                  opacity: 1;
                  margin-bottom: 40px;
                }
            `
            }
          ]}
        />
        <div
          className="container card"
          style={{
            paddingTop: 64,
            paddingBottom: 64
          }}
        >
          <div className="row margin-b-64">
            <div className="col-sm-1" />
            <div className="col-sm-3">
              <img
                style={{ borderRadius: 16 }}
                src={this.state.source.source_cover}
                alt={this.state.source.source_title}
                className="img-responsive"
              />
            </div>
            <div className="col-sm-7">
              <h1
                style={{
                  color: "#1f9080"
                }}
              >
                Chúc mừng bạn đã đăng ký thành công khóa học "
                {this.state.source.source_title} - {this.state.source.source_sche_khoa}"
              </h1>
              <p>Bạn vui lòng kiểm tra email vừa đăng ký để xác nhận thông tin và xem hướng dẫn tham gia lớp học.</p>
            </div>
            <div className="col-sm-1" />
          </div>
          <hr/>
          <div className="row">
            {/* <div className="col-sm-12">
              <p
                style={{
                  textAlign: "center",
                  marginBottom: 32,
                  marginTop: 64,
                  fontSize: 32,
                  fontWeight: 600
                }}
              >
                Có thể bạn thích
              </p>
            </div> */}
          </div>
          <div className="row">
            <div className="col-sm-2" />
            <div className="col-sm-8 goi-y-qua" style={{
              display: 'flex',
              alignItems: 'center',
              border: '2px dashed #607D8B',
              padding: 16
            }}>
             <a href="http://sotay.songxungdang.com"> <img
                src="http://nguyenminhchi.com/api/uploads/images/ea00646c35438c5c44911539450000000.png"
                alt=""
                width="150px"
                style={{marginRight: 16}}
                className="img-responsive"
              /></a>
              <div style={{textAlign: 'justify'}}>
              <h3><a href="http://sotay.songxungdang.com">Sổ Tay Sống Xứng Đáng</a></h3>
              <p>Người bạn tin cậy đồng hành cùng bạn sống xứng đáng và tạo nên những thành tựu riêng cuộc đời mình</p>
              </div>
            </div>
            <div className="col-sm-2" />
          </div>
          <div className="row margin-t-64 margin-b-32">
            <div className="col-sm-2" />
            <div className="col-sm-8 goi-y-qua" style={{
              display: 'flex',
              alignItems: 'center',
              border: '2px dashed #607D8B',
              padding: 16
            }}>
             <div style={{textAlign: 'justify'}}>
             <h3><a href="http://songxungdang.com">Khóa Học Sống Xứng Đáng</a></h3>
              <p>Hãy để bạn sống nhật nhiệt huyết, có một tuổi trẻ đầy say mê và kiến tạo những kiệt tác cho riêng cuộc đời mình.</p>
             </div>
             <a href="http://songxungdang.com"><img
                width="50%"
                style={{marginLeft: 16}}
                src="http://nguyenminhchi.com/api/uploads/images/8127bb0352a746135c261539450000000.png"
                alt=""
                className="img-responsive"
              /></a>
            </div>
            <div className="col-sm-2" />
          </div>
          <hr/>
          <div className="row margin-t-64">
            <div className="col-sm-2"></div>
            <div className="col-sm-4 text-center">
                <a target="_blank" href="https://www.facebook.com/sharer.php?u=http://nguyenminhchi.com/page/qua-tang">
                  <div className="btn btn-lg" style={{
                    background: '#3b5998',
                    color: '#fff',
                    marginBottom: 16
                  }}>
                    Chia sẻ Facebook
                  </div>
                </a>
            </div>
            <div className="col-sm-4 text-center">
                <a target="_blank" href="http://nguyenminhchi.com">
                  <div className="btn btn-lg" style={{
                    background: 'rgb(31, 144, 128)',
                    color: '#fff',
                    marginBottom: 16
                  }}>
                    Trang chủ
                  </div>
                </a>
            </div>
            <div className="col-sm-2"></div>
          </div>
        </div>
      </>
    );
  }
}

export default SuggestKH;
