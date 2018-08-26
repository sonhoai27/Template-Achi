import * as React from "react";
import Header from "./shared/header";
import Photo from "../shared/photo";

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
                <Photo/>
            </>
        )
    }
}

export default Home