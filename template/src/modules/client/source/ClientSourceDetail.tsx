import * as React from "react";
import {connect} from "react-redux";
import Footer from "../client-shared/Footer";
import ClientHeader from "../client-shared/Header";
import { reListContentUISource } from "../../admin/source/reSource";
import ItemPage from '../../DynamicPage/source/item'
import MainSche from './../../DynamicPage/sche/MainSche';
const listCom = {
    tks: <MainSche />,
    tks2: <MainSche />,
  };
interface IProps {
    match: any;
    resListContentUISource: any;
    reListContentUISource: (idUI: number, idSource: number)=> void;
  }
class ClientSourceDetail extends React.Component<IProps, {}> {
    constructor(props) {
        super(props)
    }
    componentDidMount(){
        const url = this.props.match.params.idSource
        const tempArr = url.split('-')
        const idUI = tempArr[tempArr.length - 2]
        const idSource = tempArr[tempArr.length - 1]
        this.props.reListContentUISource(idUI, idSource)
    }
    componentDidUpdate(preProps){
    }
    render() {
        return (
            <>
            <ClientHeader/>
                <div className="margin-top">
                    <ItemPage coms={listCom} items={this.props.resListContentUISource.list}/>
                </div>
            <Footer/>
            </>
        )
    }
}

const mapStateToProps = storeState => ({
    resListContentUISource: storeState.reSource.resListContentUISource
});
const mapDispatchToProps = {
    reListContentUISource
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ClientSourceDetail);