import * as React from "react";
import ItemDetailUI from "./item-detail-ui";
interface Props {
    detail: any,
    sub?: any
}
class ListElementOnDetailUI extends React.Component<Props, {}> {
    constructor(props){
        super(props)
    }
    renderListElementOfUI = ()=> {
        if(this.props.detail){
          return this.props.detail.map(element => {
              return <ItemDetailUI sub={this.props.sub} key={element.detail_ui_random_id} detailUI={element}/>
          })
        }
        return ''
    }
    render(){
        return this.renderListElementOfUI()
    }
}

export default ListElementOnDetailUI