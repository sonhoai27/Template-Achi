import * as React from "react";
import ClientBlog from "./ClientBlog";
import {Route} from "react-router";
import ClientDetailBlog from "./ClientDetailBlog";
import ClientHeader from "../client-shared/Header";
import Footer from "../client-shared/Footer";
interface IProps {
    match?: any
}
class ClientBlogRoute extends React.Component<IProps, {}>{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <>
                <ClientHeader/>
                <Route exact path={`${this.props.match.url}`} component={ClientBlog}/>
                <Route path={`${this.props.match.url}/detail/:idBlog`} component={ClientDetailBlog}/>
                <Footer/>
            </>
        )
    }
}

export default ClientBlogRoute