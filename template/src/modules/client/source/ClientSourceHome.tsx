import * as React from "react";
import ClientHeader from "../client-shared/Header";
import Footer from "../client-shared/Footer";
import {reListSourceByType} from "../../admin/source/reSource";
import {connect} from "react-redux";
import AutofitImage from "../../shared/CropImage";
import {BASEURL} from "../../../config/const";
import {Link} from "react-router-dom";
import CLientFooterBanner from "../home/ClientFooterBanner";

interface IProps {
    reListSourceByType: (type: number) => void;
    resListSourceBy1: any;
    resListSourceBy0: any;
}

class ClientSourceHome extends React.Component<IProps, {}> {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.reListSourceByType(0)
        this.props.reListSourceByType(1)
    }

    renderListSources = () => {
        if (this.props.resListSourceBy0.list) {
            return this.props.resListSourceBy0.list.map(element => {
                return (
                    <div className="col-sm-3">
                        <div className="panel sales-page-listing">
                            <AutofitImage frameWidth="100%" frameHeight="150px" imgSrc={element.source_cover}/>
                            <div className="panel-body">
                                <h3 className="title text-dark">
                                    {element.source_is_page == 1 ?
                                        <a target={'blank'} href={element.source_page_url}>{element.source_title}</a> : <Link
                                            to={BASEURL + 'page/khoa-hoc/' + element.source_alias+'-'+element.source_id_ui+'-'+ element.source_id}>{element.source_title}</Link>}
                                </h3>
                                <p className="desc" style={{fontSize: 15}}>
                                    {element.source_promo}
                                </p>
                                {element.source_is_page == 1 ?
                                    <a target={'blank'} className="btn btn-primary learn-more" href={element.source_page_url}>Xem</a> :
                                    <Link className="btn btn-primary learn-more"
                                        to={BASEURL + 'page/khoa-hoc/'+ element.source_alias+'-'+element.source_id_ui+'-' + element.source_id }>Xem</Link>}
                            </div>
                        </div>
                    </div>
                )
            })
        }
        return <h1>Không có.</h1>
    }
    renderListVideos = () => {
        if (this.props.resListSourceBy1.list) {
            return this.props.resListSourceBy1.list.map(element => {
                return (
                    <div className="col-sm-3">
                        <div className="panel sales-page-listing">
                            <AutofitImage frameWidth="100%" frameHeight="150px" imgSrc={element.source_cover}/>
                            <div className="panel-body">
                                <h3 className="title text-dark">
                                    <Link
                                        to={BASEURL + 'page/khoa-hoc/video/' + element.source_id + '-' + element.source_alias}>{element.source_title}</Link>
                                </h3>
                                <p className="desc" style={{fontSize: 15}}>
                                    {element.source_promo}
                                </p>
                                <Link
                                    className="btn btn-primary learn-more"
                                    to={BASEURL + 'page/khoa-hoc/video/' + element.source_id + '-' + element.source_alias}
                                    kjb-settings-id="language_learn_more"
                                >
                                    Xem
                                </Link>
                            </div>
                        </div>
                    </div>
                )
            })
        }
        return <h1>Không có.</h1>
    }

    render() {
        return (
            <>
                <ClientHeader/>
                <div className="col-xs-12 page-source">
                    <div className="row page-source_banner">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-6">
                                    <h2 className="white" style={{marginBottom: 64}}>
                                        <b>
                                            FROM A HISTORY-MAKING STANLEY CUP FINALS TO BUILDING A
                                            PERSONAL AI
                                        </b>
                                    </h2>
                                    <p className="white">
                                        Where has Tony been recently – and what in the world is he
                                        up to? Below is the latest edition of the Tony Tracker,
                                        where you can see highlights from his journeys and read his
                                        narration of some of his favorite experiences. Watching
                                        history being made at the Stanley Cup Finals TONIGHT’S GAME
                                        IS ONE
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                    <CLientFooterBanner/>
                    </div>
                    <div className="row page-source_list-source">
                        <div className="container paddingY-64">
                            <div className="row">
                                <div className="col-xs-12 page-source_title">
                                    <h2 style={{}}>
                                        <b>Khóa học đầy tự hào</b>
                                    </h2>
                                    <hr style={{background: "#444"}}/>
                                </div>
                                {this.renderListSources()}
                            </div>
                            <div className="row">
                                <div className="col-xs-12 page-source_title">
                                    <h2>
                                        <b>Khóa học online</b>
                                    </h2>
                                    <hr style={{background: "#444"}}/>
                                </div>
                                {this.renderListVideos()}
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </>
        );
    }
}

const mapStateToProps = storeState => ({
    resListSourceBy1: storeState.reSource.resListSourceBy1,
    resListSourceBy0: storeState.reSource.resListSourceBy0
});
const mapDispatchToProps = {
    reListSourceByType
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ClientSourceHome);
