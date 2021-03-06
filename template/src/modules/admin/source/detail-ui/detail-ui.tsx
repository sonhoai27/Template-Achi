import * as React from "react";
import ItemDetailUISource from "./item-detail-ui";
interface Props {
    detail: any,
    sub?: any,
    match: any
}
interface State {
    detail: any
}
class ListElementDetailUISource extends React.Component<Props, State> {
    constructor(props){
        super(props)
        this.state = {
            detail: this.props.detail
        }
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.detail != this.props.detail){
            this.setState({
                detail: nextProps.detail
            })
        }
    }
    renderListElementOfUI = ()=> {
        if(this.state.detail){
          return this.state.detail.map(element => {
              return <ItemDetailUISource
                sub={this.props.sub}
                key={element.detail_ui_random_id}
                match={this.props.match}
                detailUI={element}/>
          })
        }
        return ''
    }
    render(){
        return (
            <>
            {this.renderListElementOfUI()}
            </>
        )
    }
}

export default ListElementDetailUISource