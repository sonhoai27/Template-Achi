import * as React from "react";
import ClientHeader from "../client-shared/Header";
import ClientBanner from "./ClientBanner";

class ClientHome extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <>
        <ClientHeader/>
        <ClientBanner/>
      </>
    )
  }
}

export default ClientHome