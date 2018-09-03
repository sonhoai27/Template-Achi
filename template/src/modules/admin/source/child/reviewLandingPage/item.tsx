import * as React from "react";
import { connect } from "react-redux";
import DetailReviewLandingPage from './detail'
interface Props {
    items: any
}
class ItemReviewLandingPage extends React.Component<Props, {}> {
    constructor(props) {
        super(props);
    }
    renderListElement = ()=> {
        if(this.props.items){
          return this.props.items.map(element => {
              return <DetailReviewLandingPage
                key={element.detail_ui_random_id}
                item={element}/>
          })
        }
        return ''
    }
    render(){
        return this.renderListElement()
    }
}

const mapStateToProps = storeState => ({
});
const mapDispatchToProps = {
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ItemReviewLandingPage);