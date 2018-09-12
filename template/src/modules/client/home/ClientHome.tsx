import * as React from "react";
import ClientHeader from "../client-shared/Header";
import ClientBanner from "./ClientBanner";
import ClientIntroProfile from "./ClientIntroProfile";
import ClientListTopSen from "./ClientListTopSen";
import ClientFollow from "./ClientFollow";
import ClientHomeBlog from "./ClientHomeBlog";
import ClientHomeSource from "./ClientHomeSourceEbook";
import CLientFooterBanner from "./ClientFooterBanner";
import Footer from "../client-shared/Footer";

class ClientHome extends React.Component {
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
        <ClientHomeBlog/>
        <ClientHomeSource/>
        <div className="banner">
          <CLientFooterBanner/>
        </div>
        <Footer/>
      </>
    )
  }
}

export default ClientHome