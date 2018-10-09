import * as React from "react";
import { connect } from "react-redux";
import axios from "axios";
import AutofitImage from "../../shared/CropImage";
import {
  reDetailBlog,
  reClientListBlogCategory
} from "../../admin/blog/reBlog";
import Helmet from "react-helmet";
import { BASEURL, API } from "../../../config/const";
import CLientFooterBanner from "../home/ClientFooterBanner";
interface IProps {
  match?: any;
  resDetailBlog: any;
  reDetailBlog: (id: string) => void;
  reClientListBlogCategory: (idCate: number) => void;
  resClientListBlogCategory: any;
}
interface IState {
  blog: any;
}
class ClientDetailBlog extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);
    this.state = {
      blog: {}
    };
  }
  componentDidUpdate(preProps) {
    if (preProps.resDetailBlog != this.props.resDetailBlog) {
      this.setState({
        blog: this.props.resDetailBlog.list
      });
      this.props.reClientListBlogCategory(
        this.props.resDetailBlog.list.blog_id_category
      );
    }
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.reDetailBlog(this.props.match.params.idBlog);
    axios.put(API + "blog/views/" + this.props.match.params.idBlog);
  }
  renderListBlogCategory = () => {
    if (this.props.resClientListBlogCategory.list) {
      return this.props.resClientListBlogCategory.list.map(element => {
        return (
          <div className="col-sm-3">
            <a href={BASEURL + "page/blog/detail/" + element.blog_id}>
              <AutofitImage
                clasName="img-responsive"
                frameWidth="100%"
                frameHeight="200px"
                imgSrc={element.blog_cover}
              />
              <h4>{element.blog_title}</h4>
            </a>
          </div>
        );
      });
    }
    return <h1>NULL</h1>;
  };
  render() {
    return (
      <>
        <Helmet>
          <title>{this.state.blog.blog_title}</title>
        </Helmet>
        <div className="col-sm-12 page-detail-blog">
          <div
            className="row page-detail-blog_banner"
            style={{
              backgroundImage: "url(" + this.state.blog.blog_cover + ")",
              paddingTop: 128,
              paddingBottom: 128,
              backgroundAttachment: "fixed",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover"
            }}
          />
          <div className="row">
            <CLientFooterBanner />
          </div>
          <div className="row page-detail-blog_content paddingY-128">
            <div className="container">
              <div className="row">
                <div className="col-xs-12 page-detail-blog_content_title">
                  <p>{this.state.blog.blog_title}</p>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: this.state.blog.blog_promo
                    }}
                  />
                  <span className="article-author">
                    Đăng bởi: <b>{this.state.blog.author_name}</b>
                    <br />
                    Lượt xem: <b>{this.state.blog.blog_views}</b>
                  </span>
                </div>
                <div
                  className="col-xs-12 page-detail-blog_content_body"
                  dangerouslySetInnerHTML={{
                    __html: this.state.blog.blog_content
                  }}
                />
              </div>
            </div>
          </div>
          <hr />
          <div className="row page-detail-blog_author">
            <div className="container paddingY-64">
              <div className="row">
                <div className="col-sm-12">
                  <div className="media" style={{ border: "none" }}>
                    <div className="media-left">
                      <a>
                        <img
                          alt="64x64"
                          className="media-object"
                          src="https://secure.gravatar.com/avatar/c0308f547359f5bdc519a301b32ba34c?s=96&d=mm&r=g"
                          data-holder-rendered="true"
                          style={{
                            width: "128px",
                            height: "128px",
                            borderRadius: "100%"
                          }}
                        />{" "}
                      </a>
                    </div>
                    <div className="media-body">
                      <h4 className="media-heading">Media heading</h4> Tony
                      Robbins is an entrepreneur, bestselling author,
                      philanthropist and the nation’s #1 Life and Business
                      Strategist. Author of five internationally bestselling
                      books, including the recent New York Times #1 best-seller
                      UNSHAKEABLE, Mr. Robbins has empowered more than 50
                      million people from 100 countries through his audio, video
                      and life training programs. He created the #1 personal and
                      professional development program of all time, and more
                      than 4 million people have attended his live seminars.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="container paddingY-64">
              <div className="row">
                <div className="col-xs-12">
                  <h3 style={{ marginBottom: 32 }}>Bài viết liên quan</h3>
                </div>
              </div>
              <div className="row">{this.renderListBlogCategory()}</div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = storeState => ({
  resDetailBlog: storeState.reBlog.resDetailBlog,
  resClientListBlogCategory: storeState.reBlog.resClientListBlogCategory
});
const mapDispatchToProps = {
  reDetailBlog,
  reClientListBlogCategory
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClientDetailBlog);
