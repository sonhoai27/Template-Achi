import * as React from "react";
import {Route} from 'react-router-dom';
import Home from "./home";
interface Props {
    match?: any
}
class AdminRouter extends React.Component<Props, {}> {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div id="wrapper">
                <Route exact path={`${this.props.match.url}`} component={Home}/>
                <Route path={`${this.props.match.url}/`}/>
            </div>
        )
    }
}
export default AdminRouter