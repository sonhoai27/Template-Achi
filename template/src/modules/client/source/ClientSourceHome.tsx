import * as React from "react";

class ClientSourceHome extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <>
                <div className="col-xs-12 page-source">
                    <div className="row page-source_banner">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-6">
                                    <h1 className="white" style={{marginBottom: 64}}>
                                        <b>FROM A HISTORY-MAKING STANLEY CUP FINALS TO BUILDING A PERSONAL AI</b>
                                    </h1>
                                    <p className="white">Where has Tony been recently – and what in the world is he up to? Below is the latest
                                        edition of the Tony Tracker, where you can see highlights from his journeys and read his
                                        narration of some of his favorite experiences. Watching history being made at the
                                        Stanley Cup Finals TONIGHT’S GAME IS ONE</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row page-source_list-source">
                        <div className="container paddingY-128">
                            <div className="row">
                                <div className="col-xs-12 page-source_title">
                                    <h3>Có phí</h3>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xs-12 page-source_title">
                                   <h3>Hội thảo</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default ClientSourceHome