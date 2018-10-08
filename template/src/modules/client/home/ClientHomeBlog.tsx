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
      console.log(result.data)
      this.setState({
        blogs: result.data
      })
    })
    .catch(err => {
      console.log(err)
    })
  }
  renderListBlogs = ()=> {
    if(this.state.blogs.list){
      return this.state.blogs.list.map(element => {
        return (
          <div className="item col-sm-4">
              <div className="social-callout">
                <AutofitImage frameWidth="100%" frameHeight="300px" imgSrc={element.blog_cover}/>
                <h4 style={{marginTop: 32}}>
                  <a title={element.blog_title} href={BASEURL+'page/blog/detail/'+element.blog_id}>{element.blog_title}</a>
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
        <div className="row section-heading">
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