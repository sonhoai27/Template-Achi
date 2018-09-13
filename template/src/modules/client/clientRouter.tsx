import * as React from "react";
import {Route} from "react-router-dom";
import {RESOURCE} from "../../config/const";
import {Helmet} from "react-helmet";
import Error from "../admin/shared/error";
import ClientBlogRoute from "./blog/ClientBlogRoute";
import ClientSourceRoute from "./source/ClientSourceRoute";

interface Props {
    match?: any
}

class ClientRouter extends React.Component<Props, {}> {
    constructor(props) {
        super(props);
        console.log(this.props.match)
    }

    componentDidMount() {
        var doc = document.body;
        doc.classList.add("client-page");
    }

    render() {
        return (
            <div className="margin-top">
                <Helmet>
                    <link rel="stylesheet" href={RESOURCE + "css/client.css"}/>
                    <link rel="stylesheet" href={RESOURCE + "css/mobile.css"} media="screen and (max-width: 769px)"/>
                </Helmet>
                <Route exact path={`${this.props.match.url}`} component={Error}/>
                <Route path={`${this.props.match.url}/blog`} component={ClientBlogRoute}/>
                <Route path={`${this.props.match.url}/khoa-hoc`} component={ClientSourceRoute}/>
            </div>
        );
    }
}

export default ClientRouter;
