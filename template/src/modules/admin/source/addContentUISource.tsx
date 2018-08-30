import * as React from "react";
import { connect } from "react-redux";

class AddContentUISource extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <>
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
  )(AddContentUISource);