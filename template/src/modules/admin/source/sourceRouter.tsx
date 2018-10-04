import * as React from "react";
import {Route} from "react-router-dom";
import Header from "../shared/header";
import BreadCrumd from "../shared/breadcrumb";
import Source from "./source";
import AddSource from "./addSource";
import DetailSource from "./detailSource";
import AddContentUISource from "./addContentUISource";
import ReviewLadingPage from "./child/review";
import ListSche from "./child/listSche";
import AddSche from "./child/addSche";
import detailSche from "./child/detailSche";
import ListOrder from "./order/ListOrder";
import VideoSource from "../video-source/VideoSource";
import Contact from './contact/Contact';

interface Props {
    match?: any;
}

const breadCrumb = [
    {
        title: "Admin",
        uri: "",
        active: false
    },
    {
        title: "Source",
        uri: "",
        active: true
    }
];

class SourceRouter extends React.Component<Props, {}> {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        var doc = document.body
        doc.classList.add('fix-header')
    }

    render() {
        return (
            <>
                <Header/>
                <div id="page-wrapper">
                    <div className="container-fluid">
                        <BreadCrumd uri={breadCrumb} title="Source"/>
                        <Route
                            exact
                            path={`${this.props.match.url}`}
                            component={Source}
                        />
                        <Route
                            path={`${this.props.match.url}/add-source`}
                            component={AddSource}
                        />
                        <Route
                            path={`${this.props.match.url}/detail-source/:id`}
                            component={DetailSource}
                        />
                        <Route
                            path={`${this.props.match.url}/ui-source/:idUI/:idSource`}
                            component={AddContentUISource}
                        />
                        <Route
                            path={`${this.props.match.url}/review-landing-page/:idUI/:idSource`}
                            component={ReviewLadingPage}
                        />
                        <Route
                            path={`${this.props.match.url}/add-sche/:idSource`}
                            component={AddSche}
                        />
                        <Route
                            path={`${this.props.match.url}/list-sche/:idSource`}
                            component={ListSche}
                        />
                        <Route
                            path={`${this.props.match.url}/detail-sche/:idSche`}
                            component={detailSche}
                        />
                        <Route
                            path={`${this.props.match.url}/order`}
                            component={ListOrder}
                        />
                        <Route
                            path={`${this.props.match.url}/detail-source-video/:idSource`}
                            component={VideoSource}
                        />
                        <Route
                            path={`${this.props.match.url}/contact`}
                            component={Contact}
                        />
                    </div>
                </div>
            </>
        );
    }
}

export default SourceRouter;
