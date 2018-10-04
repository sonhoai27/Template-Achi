import * as React from "react";
import {Route} from "react-router";
import ClientSourceHome from "./ClientSourceHome";
import ClientOrderSource from "./ClientOrderSource";
import ClientVideoSource from "./ClientVideoSource";
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
                <Route exact path={`${this.props.match.url}`} component={ClientSourceHome}/>
                <Route path={`${this.props.match.url}/chi-tiet/:idSource`} component={ClientSourceHome}/>
                <Route path={`${this.props.match.url}/video/:idSource`} component={ClientVideoSource}/>
                <Route path={`${this.props.match.url}/dang-ky/:idSche`} component={ClientOrderSource}/>
            </>
        )
    }
}

export default ClientSourceRoute