import * as React from "react";
import Header from "./shared/header";

class Home extends React.Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
        var body = document.body;
        body.classList.add("fix-header");
    }
    render(){
        return(
            <>
                <Header/>
            </>
        )
    }
}

export default Home