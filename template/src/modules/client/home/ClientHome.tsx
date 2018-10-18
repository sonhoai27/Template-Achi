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
import { Helmet } from "react-helmet";
class ClientHome extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <>
      <Helmet>
            <link rel="stylesheet" href={'http://nguyenminhchi.com/template/public/' + "css/client.css"} />
            <link
              rel="stylesheet"
              href={'http://nguyenminhchi.com/template/public/' + "css/mobile.css"}
              media="screen and (max-width: 769px)"
            />
          </Helmet>
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
      </>
    )
  }
}

export default ClientHome