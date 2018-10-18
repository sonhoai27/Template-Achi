import * as React from "react";
import axios from 'axios'
import { API } from "../../../config/const";
import { BASEURL } from './../../../config/const';
import AutofitImage from "../../shared/CropImage";
interface IState {
  blogs: any;
}
class ClientHomeBlog extends React.Component<{}, IState> {
  constructor(props){
    super(props)
    this.state = {
      blogs: []
    }
  }
  componentDidMount(){
    axios.get(API+'blog/all/home')
    .then(result => {
      this.setState({
        blogs: result.data
      })
    })
    .catch(err => {
    })
  }
  renderListBlogs = ()=> {
    if(this.state.blogs.list){
      return this.state.blogs.list.map(element => {
        return (
          <div className="item col-sm-4" key={element.blog_title}>
              <div className="social-callout">
                <a href={BASEURL + "page/blog/detail/" + element.blog_alias}>
                <AutofitImage frameWidth="100%" frameHeight="200px" imgSrc={element.blog_cover}/>
                </a>
                <h4 style={{marginTop: 32, fontWeight: 600}}>
                  <a title={element.blog_title} href={BASEURL+'page/blog/detail/'+element.blog_alias}>{element.blog_title}</a>
                </h4>
              </div>
            </div>
        )
      })
    }
    return ''
  }
  render() {
    return (
      <>
        <div className="section-heading">
          <div className="container">
            <div className="row">
              <div className="col-sm-3">
                <h2 style={{ marginBottom: 0, fontWeight: 600, color: "#fff" }}>
                  Blog
                </h2>
              </div>
              <div className="col-sm-9">
                <h2 className="text-center" style={{ marginBottom: 0, fontWeight: 600, color: "#fff" }}>
                  BLOG CỦA MR.SHARE
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container list-blog" style={{marginTop: 64, marginBottom: 64}}>
          <div className="row">
            {this.renderListBlogs()}
          </div>
        </div>
      </>
    );
  }
}

export default ClientHomeBlog;