import * as React from "react";
import AutofitImage from "../shared/CropImage";
import { reListSourceByType } from "../admin/source/reSource";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import CLientFooterBanner from "./home/ClientFooterBanner";
import Footer from "./client-shared/Footer";
import ClientHeader from "./client-shared/Header";
import { BASEURL } from "../../config/const";
interface IProps {
  reListSourceByType: (type: number) => void;
  resListSourceBy0: any;
}
class ScheEvents extends React.Component<IProps, {}> {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.reListSourceByType(0);
  }
  renderListSources = () => {
    if (this.props.resListSourceBy0.list) {
      return this.props.resListSourceBy0.list.map(element => {
        return (
          <>
            <div className="col-xs-12">
            <div
              className="row list-courses__item"
              style={{ marginBottom: 64, width: '100%' }}
            >
              <div className="col-sm-4 wow bounceInLeft" data-wow-duration="2s">
                <AutofitImage
                  frameWidth="100%"
                  frameHeight="200px"
                  imgSrc={element.source_cover}
                />
              </div>
              <div className="col-sm-8">
                <h2>
                  <b>{element.source_title}</b>
                </h2>
                <p>{element.source_promo}</p>
                <div
                  className="get-link btn"
                  style={{ marginTop: 32, float: "right" }}
                >
                  {element.source_is_page == 1 ? (
                    <a target={"blank"} href={element.source_page_url}>
                      Xem thêm
                    </a>
                  ) : (
                    <Link
                      to={
                        BASEURL +
                        "page/khoa-hoc/" +
                        element.source_alias +
                        "-" +
                        element.source_id_ui +
                        "-" +
                        element.source_id
                      }
                    >
                      Xem thêm
                    </Link>
                  )}
                </div>
              </div>
            </div>
            </div>
          </>
        );
      });
    }
    return <h1>Không có.</h1>;
  };
  render() {
    return (
      <>
        <ClientHeader />
        <div className="col-xs-12 page-source list-course">
          <div className="row page-source_banner" style={{
            backgroundImage: 'url(http://nguyenminhchi.com/api/uploads/images/302d805c8eeb049bb9a71539622800000.jpg)'
          }}>
            <div className="container">
              <div className="row">
                <div className="col-sm-6">
                  <h2 className="white">
                    <b>
                    LỊCH SỰ KIỆN CÁC KHÓA HỌC
                    </b>
                  </h2>
                  <p className="white">
                  Xem lịch sự kiện các khóa học đầy tự hào của Mr.Share
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <CLientFooterBanner />
          </div>
          <div className="row page-source_list-source">
            <div className="container paddingY-64">
              <div className="row">
                {this.renderListSources()}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

const mapStateToProps = storeState => ({
  resListSourceBy0: storeState.reSource.resListSourceBy0
});
const mapDispatchToProps = {
  reListSourceByType
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScheEvents);
