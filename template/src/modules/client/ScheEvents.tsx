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
                      Xem
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
                      Xem
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
          <div className="row page-source_banner">
            <div className="container">
              <div className="row">
                <div className="col-sm-6">
                  <h2 className="white" style={{ marginBottom: 64 }}>
                    <b>
                      FROM A HISTORY-MAKING STANLEY CUP FINALS TO BUILDING A
                      PERSONAL AI
                    </b>
                  </h2>
                  <p className="white">
                    Where has Tony been recently – and what in the world is he
                    up to? Below is the latest edition of the Tony Tracker,
                    where you can see highlights from his journeys and read his
                    narration of some of his favorite experiences. Watching
                    history being made at the Stanley Cup Finals TONIGHT’S GAME
                    IS ONE
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
