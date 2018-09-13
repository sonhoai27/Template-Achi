import * as React from "react";
import ClientHeader from "../client-shared/Header";
import {Route} from "react-router";
import Footer from "../client-shared/Footer";
import ClientSourceHome from "./ClientSourceHome";
interface IProps {
    match?: any
}
class ClientSourceRoute extends React.Component<IProps> {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <>
                <ClientHeader/>
                <Route exact path={`${this.props.match.url}`} component={ClientSourceHome}/>
                <Route path={`${this.props.match.url}/detail/:idSource`} component={ClientSourceHome}/>
                <Footer/>
            </>
        )
    }
}

export default ClientSourceRoute