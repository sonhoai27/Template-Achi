import * as React from "react";
import ClientHeader from "./client-shared/Header";
import Footer from "./client-shared/Footer";
import CLientFooterBanner from "./home/ClientFooterBanner";
import axios from 'axios'
import { API, BASEURL } from "../../config/const";
import Helmet from 'react-helmet'
import { addTraffic } from "../shared/traffic";
interface IProps {
  match?: any;
}
interface IState {
  list: any;
}
class Search extends React.Component<IProps, IState> {
  constructor(props){
    super(props)
    this.state = {
      list: []
    }
  }
  componentDidMount(){
    addTraffic({
      type: 0,
      url:  window.location.href
    })
    axios.get(API+'blog/search/'+this.props.match.params.key)
    .then(result => {
      console.log(result)
      this.setState({
        list: result.data.list
      })
    })
    .catch(err => {
      console.log(err)
    })
  }
  makeUrl = (element) => {
    if(typeof element.url == 'string' && element.url !== "" && !Number(element.url)){
      return (
        <a href={element.url}>XEM THÊM</a>
      )
    }else if(element.url == "" && Number(element.is_blog) && element.is_video == "1") {
      return <a href={BASEURL+'page/khoa-hoc/video/'+element.alias}>XEM THÊM</a>
    }else if(element.url == "" && Number(element.is_blog) && element.is_video == "0"){
      return <a href={BASEURL+'page/khoa-hoc/'+element.alias+'-'+element.is_blog+"-"+element.source_id}>XEM THÊM</a>
    }
    return (
      <a href={BASEURL+'page/blog/detail/'+element.alias}>XEM THÊM</a>
    )
  }
  renderList = ()=> {
    return this.state.list.map(element => {
      return (
        <div key={element.alias}>
          <div className="col-xs-12">
          <div
            className="row list-courses__item"
            style={{ marginBottom: 64, width: '100%' }}
          >
            <div className="col-sm-4" data-wow-duration="2s">
              <img src={element.image} className="img-responsive"/>
            </div>
            <div className="col-sm-8">
              <h2>
                <b>{element.title}</b>
              </h2>
              <p>{element.promo}</p>
              <div
                className="get-link btn"
                style={{ marginTop: 32, float: "right" }}
              >
                {this.makeUrl(element)}
              </div>
            </div>
          </div>
          </div>
        </div>
      );
    })
  }
  render(){
    return(
      <>
      <Helmet>
        <title>Tìm kiếm - Nguyễn Minh Chí | Sống Xứng Đáng</title>
      </Helmet>
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
                    Tìm kiếm cho '{this.props.match.params.key}'
                    </b>
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <CLientFooterBanner />
          </div>
          <div className="row page-source_list-source lich-su-kien">
            <div className="container paddingY-64">
              <div className="row">
                {this.renderList()}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    )
  }
}

export default Search;