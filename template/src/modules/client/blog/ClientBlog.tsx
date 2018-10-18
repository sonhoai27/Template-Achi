import * as React from "react";
import { connect } from "react-redux";
import { reClientListBlog, reListCategory } from "../../admin/blog/reBlog";
import Pagination from "../../shared/Pagination";
import { Link } from "react-router-dom";
import Select from "react-select";
import makeAnimated from "react-select/lib/animated";
import { BASEURL } from "../../../config/const";
import Helmet from "react-helmet";
import CLientFooterBanner from "../home/ClientFooterBanner";
interface IProps {
  resClientListBlog: any;
  resListCategory: any;
  reClientListBlog: (page: number, category: any) => void;
  reListCategory: () => void;
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
    this.props.reListCategory();
    this.props.reClientListBlog(
      (parseInt(this.makeCurrentPage(), 10) - 1) * 20,
      this.makeFilter()
    );
  }
  getMoreBlog = page => {
    this.props.reClientListBlog((page - 1) * 20, this.makeFilter());
  };

  makeFilter = () => {
    const cate = this.props.match.params.idCategory;
    if (cate) {
      return {
        category: parseInt(cate.split("-")[0], 10)
      };
    }
    return {
      category: 0
    };
  };
  renderListBlog = () => {
    if (this.props.resClientListBlog.list) {
      return this.props.resClientListBlog.list.map((element, index) => {
        return (
          <>
            <Helmet
              style={[
                {
                  cssText: `
                  .list-blogs .post.post-${index} div.post-item-container:hover:before{
                    background: ${element.category_color}
                  }`
                }
              ]}
            />
            <div
              className={
                index + 1 === 1 || (index + 1) % 6 === 0
                  ? "col-sm-8"
                  : "col-sm-4"
              }
            >
              <div className={`post post-${index}`}>
                <Link
                  style={{ backgroundImage: "url(" + element.blog_cover + ")" }}
                  className="post-item-image"
                  to={BASEURL + "page/blog" + "/detail/" + element.blog_alias}
                >
                  <div className="post-item-container color3">
                    <img
                      className="ico-handshake cat-icon"
                      src={element.category_icon}
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
                      to={BASEURL + "page/blog" + "/detail/" + element.blog_alias}
                    >
                      {element.blog_title}
                    </Link>
                  </h4>

                  <Link
                    to={BASEURL + "page/blog" + "/detail/" + element.blog_alias}
                    className="link-more link-more-grey"
                  >
                    Xem thêm
                  </Link>
                </div>
              </div>
            </div>
          </>
        );
      });
    }
    return <h1>Null</h1>;
  };
  options = () => {
    if (this.props.resListCategory.list) {
      return this.props.resListCategory.list.map(function(item) {
        return {
          value: item.category_id,
          label: item.category_name,
          alias: item.category_alias
        };
      });
    }
    return [];
  };
  render() {
    return (
      <>
        <div className="col-xs-12 page-blog">
          <div className="row page-blog_banner">
            <div className="container">
              <div className="row">
                <div className="col-sm-6">
                  <h1 className="white">
                    <b>
                      NGUYENMINHCHI.COM
                    </b>
                  </h1>
                  <p className="white">
                  Đọc các bài viết hay cho một tuổi trẻ sống xứng đáng.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <CLientFooterBanner />
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
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="row">
                <div className="col-sm-4" />
                <div
                  className="col-sm-4"
                  style={{
                    marginBottom: 32
                  }}
                >
                  <Select
                    placeholder={'Chọn chủ đề'}
                    className="custom-select-category"
                    closeMenuOnSelect={false}
                    components={makeAnimated()}
                    onChange={item => {
                      if (item.value !== 0) {
                        window.location.href =
                          BASEURL +
                          "page/blog/danh-muc/" +
                          item.value +
                          "-" +
                          item.alias;
                      } else {
                        window.location.href = BASEURL + "page/blog";
                      }
                    }}
                    options={[
                      ...this.options(),
                      {
                        value: 0,
                        label: "Tất cả"
                      }
                    ]}
                  />
                </div>
                <div className="col-sm-4" />
              </div>
            </div>
          </div>
          <div className="row list-blogs">{this.renderListBlog()}</div>
          <div className="row">
            <div className="col-xs-12">
              <div className="pg">
                <Pagination
                  initialPage={parseInt(this.makeCurrentPage(), 10)}
                  pageSize={20}
                  totalItems={this.props.resClientListBlog.count}
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
  resClientListBlog: storeState.reBlog.resClientListBlog,
  resListCategory: storeState.reBlog.resListCategory
});
const mapDispatchToProps = {
  reClientListBlog,
  reListCategory
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClientBlog);
