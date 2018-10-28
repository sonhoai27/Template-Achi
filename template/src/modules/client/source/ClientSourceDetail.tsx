import * as React from "react";
import {connect} from "react-redux";
import Footer from "../client-shared/Footer";
import ClientHeader from "../client-shared/Header";
import { reListContentUISource } from "../../admin/source/reSource";
import ItemPage from '../../DynamicPage/source/item'
import MainSche from './../../DynamicPage/sche/MainSche';
import { reSetCurrentMatch } from "../../../reducers/init";
import SXDFooter from "../../shared/components/SXDFooter";
import Customer from "../ebook/com/customer";
import {LoadingPage} from "../client-shared/LoadingPage"
const listCom = {
    TKB: <MainSche />,
    SXDFOOTER: <SXDFooter/>,
    HOCVIEN: <Customer/>
  };
interface IProps {
    match: any;
    resListContentUISource: any;
    reListContentUISource: (idUI: number, idSource: number)=> void;
    reSetCurrentMatch: (match: any)=> void;
}
interface IState {
    isLoading: boolean;
}
class ClientSourceDetail extends React.Component<IProps, IState> {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: false
        }
    }
    componentDidMount(){
        window.scrollTo(0,0)
        const url = this.props.match.params.idSource
        const tempArr = url.split('-')
        const idUI = tempArr[tempArr.length - 2]
        const idSource = tempArr[tempArr.length - 1]
        this.props.reListContentUISource(idUI, idSource)
        this.props.reSetCurrentMatch(this.props.match)
    }
    componentDidUpdate(preProps){
        if(this.props.resListContentUISource != preProps.resListContentUISource){
            this.setState({
                isLoading: !this.state.isLoading
            })
        }
    }
    render() {
        return (
            <>
            <ClientHeader/>
                <div className="margin-top">
                    <ItemPage coms={listCom} items={this.props.resListContentUISource.list}/>
                </div>
            <Footer/>
            {
                !this.state.isLoading ? <LoadingPage/> : ''
            }
            </>
        )
    }
}

const mapStateToProps = storeState => ({
    resListContentUISource: storeState.reSource.resListContentUISource
});
const mapDispatchToProps = {
    reListContentUISource,
    reSetCurrentMatch
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ClientSourceDetail);