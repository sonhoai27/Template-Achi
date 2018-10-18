import * as React from "react";
import ClientHeader from "../client-shared/Header";
import Footer from "../client-shared/Footer";
import { reListSourceByType } from "../../admin/source/reSource";
import { connect } from "react-redux";
import { BASEURL } from "../../../config/const";
import { Link } from "react-router-dom";
import CLientFooterBanner from "../home/ClientFooterBanner";

interface IProps {
  reListSourceByType: (type: number) => void;
  resListSourceBy1: any;
  resListSourceBy0: any;
}

class ClientSourceHome extends React.Component<IProps, {}> {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.reListSourceByType(0);
    this.props.reListSourceByType(1);
  }

  renderListSources = () => {
    if (this.props.resListSourceBy0.list) {
      let dem = 1;
      let list = [];
      return this.props.resListSourceBy0.list.map((element, index) => {
         
        if (index === 0) {
          // @ts-ignore
          list = [...list, this.itemSource(element)];
        } else if (dem < 2) {
          // @ts-ignore
          list = [...list, this.itemSource(element)];
          dem = dem + 1;
          if(index === (this.props.resListSourceBy0.list.length - 1)){
              // @ts-ignore
            const tempList = [...[], ...list];
            return React.createElement(
                "div",
                {
                  className: "row",
                  key: index
                },
                [...tempList]
              );
          }
        } else {
          dem = 1;
          // @ts-ignore
          list = [...list, this.itemSource(element)];
          const tempList = [...[], ...list];
          list = [];
          return React.createElement(
            "div",
            {
              className: "row",
              key: index
            },
            [...tempList]
          );
        }
        return "";
      });
    }
    return <h1>Không có.</h1>;
  };
  itemSource = (element: any) => {
    return (
      <div className="col-sm-4" key={element.source_alias}>
        <div className="panel sales-page-listing">
          <img src={element.source_cover} alt="" className="img-responsive"/>
          <div className="panel-body">
            <h3 style={{ fontWeight: 600 }} className="title text-dark">
              {element.source_is_page == 1 ? (
                <a target={"blank"} href={element.source_page_url}>
                  {element.source_title}
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
                  {element.source_title}
                </Link>
              )}
            </h3>
            <p className="desc" style={{ fontSize: 15 }}>
              {element.source_promo}
            </p>
            {element.source_is_page == 1 ? (
              <a
                style={{ background: "#1f9080" }}
                target={"blank"}
                className="btn btn-primary learn-more"
                href={element.source_page_url}
              >
                Xem thêm
              </a>
            ) : (
              <Link
                style={{ background: "#1f9080" }}
                className="btn btn-primary learn-more"
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
    );
  };
  renderListVideos = () => {
    if (this.props.resListSourceBy1.list) {
      return this.props.resListSourceBy1.list.map(element => {
        return (
          <div className="col-sm-4" key={element.source_alias}>
            <div className="panel sales-page-listing">
            <img src={element.source_cover} alt="" className="img-responsive"/>
              <div className="panel-body">
                <h3 className="title text-dark" style={{ fontWeight: 600 }}>
                  <Link
                    to={
                      BASEURL +
                      "page/khoa-hoc/video/" +
                      element.source_id +
                      "-" +
                      element.source_alias
                    }
                  >
                    {element.source_title}
                  </Link>
                </h3>
                <p className="desc" style={{ fontSize: 15 }}>
                  {element.source_promo}
                </p>
                <Link
                  style={{ background: "#1f9080" }}
                  className="btn btn-primary learn-more"
                  to={
                    BASEURL +
                    "page/khoa-hoc/video/" +
                    element.source_id +
                    "-" +
                    element.source_alias
                  }
                  kjb-settings-id="language_learn_more"
                >
                  Xem thêm
                </Link>
              </div>
            </div>
          </div>
        );
      });
    }
    return <h1>Không có.</h1>;
  };

  render() {
    return (
      <>
        <ClientHeader />
        <div className="col-xs-12 page-source">
          <div
            className="row page-source_banner"
            style={{
              backgroundImage:
                "url(http://nguyenminhchi.com/api/uploads/images/4476bdd2a0fd060b490d1539450000000.jpg)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          >
            <div className="container">
              <div className="row">
                <div className="col-sm-6">
                  <h1 className="white">
                    NGUYENMINHCHI.COM
                  </h1>
                  <p className="white">
                    KHÁM PHÁ TẤT CẢ CÁC CHƯƠNG TRÌNH ĐÀO TẠO GIÚP BẠN ĐỘT PHÁ
                    BẢN THÂN
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
                <div className="col-xs-12 page-source_title">
                  <h2 style={{}}>
                    <b>
                      <i className="fa fa-star" /> Khóa học đầy tự hào
                    </b>
                  </h2>
                  <hr style={{ background: "#444" }} />
                </div>
                {this.renderListSources()}
              </div>
              <div className="row">
                <div className="col-xs-12 page-source_title">
                  <h2>
                    <b>
                      <i className="fa fa-star" /> Khóa học online
                    </b>
                  </h2>
                  <hr style={{ background: "#444" }} />
                </div>
                {this.renderListVideos()}
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
  resListSourceBy1: storeState.reSource.resListSourceBy1,
  resListSourceBy0: storeState.reSource.resListSourceBy0
});
const mapDispatchToProps = {
  reListSourceByType
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClientSourceHome);
