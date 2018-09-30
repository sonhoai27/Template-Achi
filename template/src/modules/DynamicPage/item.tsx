import * as React from "react";
import { connect } from "react-redux";
import DetailPage from './detail'
interface Props {
    items: any;
    coms?: any; //list ds neu muont hem cac component vao,json object, key viet in hoa
}

class ItemPage extends React.Component<Props, {}> {
    constructor(props) {
        super(props);
    }

    renderListElement = ()=> {
        if(this.props.items){
          return this.props.items.map(element => {
              return <DetailPage
                coms={this.props.coms}
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
const mapStateToProps = storeState => ({});
const mapDispatchToProps = {};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ItemPage);