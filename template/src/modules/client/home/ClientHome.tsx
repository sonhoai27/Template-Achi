import * as React from "react";
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
import NewMenu from "../client-shared/NewMenu";
import { addTraffic } from "../../shared/traffic";
interface Props {
  isDanger: boolean;
  isSuccess: boolean;
}
class ClientHome extends React.Component<Props, {}> {
  constructor(props){
    super(props)
  }
  componentDidMount(){
    addTraffic({
      type: 0,
      url:  window.location.href
    })
  }
  render(){
    return(
      <>
        <NewMenu/>
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