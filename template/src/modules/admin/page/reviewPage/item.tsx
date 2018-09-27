import * as React from "react";
import { connect } from "react-redux";
import DetailReviewPage from './detail'
interface Props {
    items: any
}
class ItemReviewPage extends React.Component<Props, {}> {
    constructor(props) {
        super(props);
    }
    renderListElement = ()=> {
        if(this.props.items){
          return this.props.items.map(element => {
              return <DetailReviewPage
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
)(ItemReviewPage);