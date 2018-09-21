import * as React from "react";
import { connect } from "react-redux";
import { reListBlog } from "../../admin/blog/reBlog";
import Pagination from "../../shared/Pagination";
import { Link } from "react-router-dom";

interface IProps {
  resListBlog: any;
  reListBlog: (page: number) => void;
  match: any;
}
class ClientBlog extends React.Component<IProps, {}> {
  constructor(props) {
    super(props);
  }
  makeCurrentPage = () => {
    const page = window.location.href.split("page=")[1];
    if (page != undefined || page != null) {
      return page;
    } else {
      return "1";
    }
  };
  componentDidMount() {
    this.props.reListBlog((parseInt(this.makeCurrentPage(), 10) - 1) * 20);
  }
  getMoreBlog = page => {
    this.props.reListBlog((page - 1) * 20);
  };
  renderListBlog = () => {
    if (this.props.resListBlog.list) {
      return this.props.resListBlog.list.map((element, index) => {
        return (
          <div
            className={
              index + 1 === 1 || (index + 1) % 6 === 0 ? "col-sm-8" : "col-sm-4"
            }
          >
            <div className="post">
              <Link
                style={{ backgroundImage: "url(" + element.blog_cover + ")" }}
                className="post-item-image"
                to={this.props.match.path + "/detail/" + element.blog_id}
              >
                <div className="post-item-container color3">
                  <img
                    className="ico-handshake cat-icon"
                    src="https://cdnwp.tonyrobbins.com/wp-content/uploads/2017/09/white-outlined_health-and-vitality.png"
                  />
                </div>
              </Link>
              <div className="post-content">
                <h6 className="micro">{element.category_name}</h6>
                <div
                  className="archive_cat_line"
                  style={{ backgroundColor: "#6d166d" }}
                />
                <h4 className="post-title">
                  <Link
                    to={this.props.match.path + "/detail/" + element.blog_id}
                  >
                    {element.blog_title}
                  </Link>
                </h4>

                <Link
                  to={this.props.match.path + "/detail/" + element.blog_id}
                  className="link-more link-more-grey"
                >
                  Xem thêm
                </Link>
              </div>
            </div>
          </div>
        );
      });
    }
    return <h1>Null</h1>;
  };
  render() {
    return (
      <>
        <div className="col-xs-12 page-blog">
          <div className="row page-blog_banner">
            <div className="container">
              <div className="row">
                <div className="col-sm-6">
                  <h1 className="white" style={{ marginBottom: 64 }}>
                    <b>
                      FROM A HISTORY-MAKING STANLEY CUP FINALS TO BUILDING A
                      PERSONAL AI
                    </b>
                  </h1>
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
        </div>
        <div className="container">
          <div className="row intro-our-blog">
            <div className="col-xs-12  paddingY-64 text-center">
              <h2
                className="border-bottom"
                style={{
                  fontSize: 32,
                  textTransform: "uppercase",
                  letterSpacing: 4,
                  fontWeight: 700,
                  marginBottom: 16
                }}
              >
                <b>Nguyễn Minh Chí - Blog</b>
              </h2>
              <p>
                What is an extraordinary life? What does that look like to you?
                Starting a business and growing it to a billion-dollar company?
                Improving the quality of your relationships? Feeling strong and
                healthy? Ultimately, an extraordinary life = life on your terms.
                The Tony Robbins' blog is a collection of the teachings of Tony
                Robbins, the powerful strategies and tools he has employed over
                40 years of helping others achieve their vision of an
                extraordinary quality of life. Discover how to achieve massive
                success and long-lasting fulfillment, too. Start today with the
                articles, videos and other resources we’ve made available here
                to help you on your journey to the life you desire and deserve.
              </p>
            </div>
          </div>
          <div className="row list-blogs">{this.renderListBlog()}</div>
          <div className="row">
            <div className="col-xs-12">
              <div className="pg">
                <Pagination
                  initialPage={parseInt(this.makeCurrentPage(), 10)}
                  pageSize={20}
                  totalItems={this.props.resListBlog.count}
                  onChangePage={e => this.getMoreBlog(e.currentPage)}
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
const mapStateToProps = storeState => ({
  resListBlog: storeState.reBlog.resListBlog
});
const mapDispatchToProps = {
  reListBlog
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClientBlog);
