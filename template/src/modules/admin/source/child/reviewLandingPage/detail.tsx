import * as React from "react";
import { connect } from "react-redux";
import ItemReviewLandingPage from './item'
import {Helmet} from "react-helmet";
interface Props {
    item: any
}
class DetailReviewLandingPage extends React.Component<Props, {}> {
    constructor(props) {
        super(props);
    }
    componentDidMount(){
        if(!this.props.item.child){
            const temp: any = document.getElementById(this.props.item.detail_ui_random_id)
            temp.innerHTML = this.props.item.content_element_data
        }
    }
    makeItem = () => {
        
        let content = React.createElement(
            this.props.item.element_tag,
            {
                class: this.props.item.element_class+' '+this.props.item.content_element_class,
                id: this.props.item.detail_ui_random_id,
                [this.props.item.content_element_attribute]: this.props.item.content_element_attribute_src
            },
            this.makeSub()
        )
        return content;
    }
    makeSub = ()=> {
        if(this.props.item.child){
            return [<ItemReviewLandingPage items={this.props.item.child} />]
        }else {
            return this.props.item.content_element_data
        }
    }
    render(){
        return (
            <>
            <Helmet
                style={[{
                "cssText": `
                ${this.props.item.detail_ui_css}`
            }]}></Helmet>
            {this.makeItem()}
            </>
        )
    }
}

const mapStateToProps = storeState => ({
});
const mapDispatchToProps = {
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DetailReviewLandingPage);