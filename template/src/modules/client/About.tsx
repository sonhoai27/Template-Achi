import * as React from "react";
import { connect } from "react-redux";
import { reListPageUI } from "../admin/page/rePage";
import ItemPage from '../DynamicPage/item'
import ClientHeader from "./client-shared/Header";
import Footer from "./client-shared/Footer";
import { Helmet } from "react-helmet";

const IDPAGE = 4;

interface IProps {
  resListPageUI: any;
  reListPageUI: (id: number) => void;
}
class ClientAboutPage extends React.Component<IProps, {}> {
  constructor(props){
    super(props)
  }
  componentDidMount(){
    this.props.reListPageUI(IDPAGE);
  }
  render(){
    return (
      <>
        <Helmet>
          <title>Giới thiệu - Nguyễn Minh Chí</title>
        </Helmet>
        <ClientHeader/>
        <div className="row">
          <ItemPage items={this.props.resListPageUI.list}/>
        </div>
        <Footer/>
      </>
    )
  }
}

const mapStateToProps = storeState => ({
  resListPageUI: storeState.rePage.resListPageUI
});
const mapDispatchToProps = {
  reListPageUI
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClientAboutPage);
