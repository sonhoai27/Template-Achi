import * as React from "react";
import { connect } from "react-redux";
import { reListSche } from "../../admin/source/reSource";

interface IProps {
  currentMatch: any;
  resListSche: any;
  reListSche: (id: any)=> void;
}
class MainSche extends React.Component<IProps, {}> {
  constructor(props) {
    super(props);
  }
  componentDidMount(){
    console.log(this.props.currentMatch.params.idSource)
    const url = this.props.currentMatch.params.idSource
    const tempArr = url.split('-')
    const idSource = tempArr[tempArr.length - 1]
    this.props.reListSche(idSource)
  }
  componentDidUpdate(preProps){
    console.log(this.props.currentMatch)
  }
  componentWillReceiveProps(nextProps){
    console.log(nextProps)
  }
  renderListSche = ()=> {
    if(this.props.resListSche.list){
      return this.props.resListSche.list.map(element => {
        return (
          <ul data-id="row_74">
              <li data-label="Tên chương trình">
                <ul className="child" style={{padding: 0}}>
                  <li className="orange">
                    <b id="name_74">{element.source_title} - {element.source_sche_khoa}</b>
                  </li>
                  <li>
                    Trainer:
                    <a href="http://maxpowervn.com/page/giao-vien">
                      {element.source_sche_teacher}
                    </a>
                  </li>
                  <li>
                    Địa chỉ: {element.source_sche_address}
                  </li>
                </ul>
              </li>
              <li data-label="Thời gian">
                <p dangerouslySetInnerHTML={{__html: element.source_date_sche}}/>
              </li>
              <li className="text-center" data-label="Ưu đãi">
                <p
                  className="line-through"
                  style={{ marginRight: 10, lineHeight: "1.8" }}
                >
                  <b>5,500,000 đ</b>
                </p>
                <p className="orange" style={{ lineHeight: "1.8" }}>
                  - 5,500,000 đ
                </p>
                <p className="green" style={{ lineHeight: "1.8" }}>
                  <b>= Miễn Phí</b>
                </p>
              </li>
              <li className="text-center" data-label="Đăng ký">
                <p className="red" style={{ lineHeight: "1.8" }} dangerouslySetInnerHTML={{__html: element.source_sche_number}}/>
                <p
                  className="bold-text uppercase btn btn-sm" style={{
                    color: '#fff',
                    background: '#1f9080',
                    textTransform: 'uppercase',
                    display: "inline-block",
                    padding: '12px 16px'
                  }}
                >
                  <i className="spin fa fa-spinner" style={{marginRight: 8}}/>
                  <a
                    style={{color: '#fff', fontSize: '16px', fontWeight: 600}}
                    href="http://maxpowervn.com/page/dang-ky/MP1/74"
                    target="_blank"
                  >
                    Đăng Ký Ngay
                  </a>
                </p>
              </li>
            </ul>
        )
      })
    }
    return <h1>NULL</h1>
  }
  render() {
    return (
      <div className="calendar">
        <div className="responsive-table" id="dkmh">
          <div className="thead">
            <ul>
              <li>
                <i className="fa fa-list-alt checkout" /> Tên chương trình
              </li>
              <li>
                <i className="fa fa-clock-o checkout" /> Thời gian
              </li>
              <li>
                <i className="fa fa-thumbs-o-up checkout" /> Ưu đãi
              </li>
              <li>
                <i className="fa fa-key checkout" /> Đăng ký
              </li>
            </ul>
          </div>
          <div className="tbody">
            {this.renderListSche()}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = storeState => ({
  resListSche: storeState.reSource.resListSche,
  currentMatch: storeState.reInit.currentMatch
});
const mapDispatchToProps = {
  reListSche
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainSche);

