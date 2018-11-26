import * as React from "react";
import Helmet from 'react-helmet'
import { RESOURCE, BASEURLADMIN } from "../../../config/const";
import { connect } from "react-redux";
import { reUserLogin } from "../../../reducers/init";
import { Storage } from "../../../utils/storage-util";
import { BASEURL } from './../../../config/const';
interface IState {
  user: {
    user_name: string;
    user_password: string;
  },
  token: string;
}
interface IProps {
  resUserLogin: any;
  reUserLogin: (form: any)=> void;
}
class Login extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        user_name: '',
        user_password: ''
      },
      token: ""
    }
  }
  onChange = (e)=> {
    //@ts-ignore
    this.setState({
      ...this.state,
      user: {
        ...this.state.user,
        [e.target.name]: e.target.value
      }
    })
  }
  login = ()=> {
    this.props.reUserLogin(this.state.user)
  }
  componentDidUpdate(preProps){
    if(preProps.resUserLogin != this.props.resUserLogin){
      if(this.props.resUserLogin.status === 202){
        Storage.local.set('user_token', this.props.resUserLogin.token)
        this.setState({
          token: this.props.resUserLogin.token
        }, ()=> {
          window.location.href = BASEURLADMIN
        })
      }else {
        window.location.href = BASEURL+'login'
      }
    }
  }
  render() {
    return (
      <>
        <Helmet>
          <link rel="stylesheet" href={RESOURCE + "css/custom.css"} />
        </Helmet>
        <section
          id="wrapper"
          className="login-register"
          style={{ height: "100vh" }}
        >
          <div className="login-box login-sidebar">
            <div className="white-box">
              <a className="text-center db">
                <h1>Nguyen Minh Chi</h1>
              </a>
              <div className="form-group m-t-40">
                <div className="col-xs-12">
                  <input
                    onChange={this.onChange}
                    className="form-control"
                    type="text"
                    name="user_name"
                    required
                    placeholder="User Name"
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="col-xs-12">
                  <input
                    onChange={this.onChange}
                    className="form-control"
                    name="user_password"
                    type="password"
                    required
                    placeholder="Password"
                  />
                </div>
              </div>
              <div className="form-group text-center m-t-20">
                <div className="col-xs-12">
                  <button
                    onClick={this.login}
                    className="btn btn-info btn-lg btn-block text-uppercase waves-effect waves-light"
                  >
                    Log In
                  </button>
                </div>
              </div>
              <div className="form-group text-center m-t-20" style={{display: 'inline-block'}}>
              <div className="col-xs-12">
                Quên mật khẩu?, liên hệ <a href="" target="_blank">admin</a>
              </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
const mapStateToProps = storeState => ({
  resUserLogin: storeState.reInit.resUserLogin
});
const mapDispatchToProps = {
  reUserLogin
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
