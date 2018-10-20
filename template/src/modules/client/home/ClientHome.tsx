import * as React from "react";
import ClientHeader from "../client-shared/Header";
import ClientBanner from "./ClientBanner";
import ClientIntroProfile from "./ClientIntroProfile";
import ClientListTopSen from "./ClientListTopSen";
import ClientFollow from "./ClientFollow";
import ClientIntroNMC from "./ClientIntroNMC";
import ClientHomeBlog from "./ClientHomeBlog";
import ClientHomeSource from "./ClientHomeSourceEbook";
import CLientFooterBanner from "./ClientFooterBanner";
import Footer from "../client-shared/Footer";
import { connect } from "react-redux";
import NotifyDanger from "../../shared/notifyDanger";
import NotifySuccess from "../../shared/notifySuccess";
interface Props {
  isDanger: boolean;
  isSuccess: boolean;
}
class ClientHome extends React.Component<Props, {}> {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <>
        <ClientHeader/>
        <ClientBanner/>
        <ClientIntroProfile/>
        <div className="bg-gradient-grey">
        <ClientListTopSen/>
        <ClientFollow/>
        </div>
        <ClientIntroNMC/>
        <ClientHomeBlog/>
        <ClientHomeSource/>
        <div className="banner">
          <CLientFooterBanner/>
        </div>
        <Footer/>
        <div className="jq-toast-wrap top-right">
            {this.props.isSuccess ? <NotifySuccess /> : ""}
            {this.props.isDanger ? <NotifyDanger /> : ""}
          </div>
      </>
    )
  }
}
const mapStateToProps = storeState => ({
  isSuccess: storeState.reInit.isSuccess,
  isDanger: storeState.reInit.isDanger
});
const mapDispatchToProps = {};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClientHome);