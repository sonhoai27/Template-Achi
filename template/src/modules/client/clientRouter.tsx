import * as React from "react";
import { Route } from "react-router-dom";
import { RESOURCE } from "../../config/const";
import { Helmet } from "react-helmet";
import Error from "../admin/shared/error";
import ClientBlogRoute from "./blog/ClientBlogRoute";
import ClientSourceRoute from "./source/ClientSourceRoute";
import EbookLadingPage from "./ebook/ebook";
import { connect } from "react-redux";
import NotifySuccess from "../shared/notifySuccess";
import NotifyDanger from "../shared/notifyDanger";
import Loading from "../admin/shared/loading";

interface Props {
    match?: any;
    isDanger: boolean;
    isSuccess: boolean;
    isLoading: boolean
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
            <>
                <div className="margin-top">
                    <Helmet>
                        <link rel="stylesheet" href={RESOURCE + "css/client.css"} />
                        <link rel="stylesheet" href={RESOURCE + "css/mobile.css"} media="screen and (max-width: 769px)" />
                    </Helmet>
                    <Route exact path={`${this.props.match.url}`} component={Error} />
                    <Route path={`${this.props.match.url}/blog`} component={ClientBlogRoute} />
                    <Route path={`${this.props.match.url}/khoa-hoc`} component={ClientSourceRoute} />
                    <Route path={`${this.props.match.url}/sach`} component={EbookLadingPage} />
                    <div className="jq-toast-wrap top-right">
                        {this.props.isSuccess ? <NotifySuccess /> : ''}
                        {this.props.isDanger ? <NotifyDanger /> : ''}
                    </div>
                    {this.props.isLoading ? <Loading /> : ''}
                </div>
            </>
        );
    }
}

const mapStateToProps = storeState => ({
    isSuccess: storeState.reInit.isSuccess,
    isDanger: storeState.reInit.isDanger,
    isLoading: storeState.reInit.isLoading
});
const mapDispatchToProps = {
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ClientRouter);
