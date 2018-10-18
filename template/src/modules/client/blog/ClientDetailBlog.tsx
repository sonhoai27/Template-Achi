import * as React from "react";
import { connect } from "react-redux";
import axios from "axios";
import AutofitImage from "../../shared/CropImage";
import {
  reDetailBlogAlias,
  reClientListBlogCategory
} from "../../admin/blog/reBlog";
import Helmet from "react-helmet";
import { BASEURL, API } from "../../../config/const";
import CLientFooterBanner from "../home/ClientFooterBanner";
interface IProps {
  match?: any;
  resDetailBlogAlias: any;
  reDetailBlogAlias: (id: string) => void;
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
    if (preProps.resDetailBlogAlias != this.props.resDetailBlogAlias) {
      this.setState({
        blog: this.props.resDetailBlogAlias.list
      });
      this.props.reClientListBlogCategory(
        this.props.resDetailBlogAlias.list.blog_id_category
      );
    }
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.reDetailBlogAlias(this.props.match.params.idBlog);
    axios.put(API + "blog/views", {
      key: this.props.match.params.idBlog
    });
  }
  renderListBlogCategory = () => {
    if (this.props.resClientListBlogCategory.list) {
      return this.props.resClientListBlogCategory.list.map(element => {
        return (
          <div className="col-sm-3">
            <a href={BASEURL + "page/blog/detail/" + element.blog_alias}>
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
                  <p>
                  <iframe src={'https://www.facebook.com/plugins/like.php?href=http://nguyenminhchi.com/page/blog/detail/'+this.props.match.params.idBlog+'&width=156&layout=button_count&action=like&size=small&show_faces=false&share=true&height=46&appId=1440913602698681'} width={156} height={46} 
                    style={{border: 'none', overflow: 'hidden'}} 
                    scrolling="no" frameBorder={0} />
                  </p>
                </div>
                <div
                  className="col-xs-12 page-detail-blog_content_body"
                  dangerouslySetInnerHTML={{
                    __html: this.state.blog.blog_content
                  }}
                />
                <div className="col-xs-12">
                  <div className="fb-comments" data-href={'http://nguyenminhchi.com/page/blog/detail/'+this.props.match.params.idBlog} data-width={'100%'} data-numposts={5}></div>
                </div>
                <div className="col-sm-12 margin-t-64">
                  <h4>Tác giả:</h4>
                  <div className="row margin-t-32">
                    <div className="col-sm-3">
                      <img src={this.state.blog.author_avatar} alt="" className="img-responsive" width={'90%'}/>
                    </div>
                    <div className="col-sm-9">
                      <h2>{this.state.blog.author_name}</h2>
                      <p>{this.state.blog.author_intro}</p>
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
  resDetailBlogAlias: storeState.reBlog.resDetailBlogAlias,
  resClientListBlogCategory: storeState.reBlog.resClientListBlogCategory
});
const mapDispatchToProps = {
  reDetailBlogAlias,
  reClientListBlogCategory
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClientDetailBlog);
