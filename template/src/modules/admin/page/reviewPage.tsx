import * as React from "react";
import { connect } from "react-redux";


interface IProps {

}
interface IState {

}
class ReviewPage extends React.Component<IProps, IState> {
  constructor(props){
    super(props)
  }
  render(){
    return (
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
)(ReviewPage);
