import { Redirect, Route } from "react-router-dom";
import * as React from "react";
import { BASEURL } from "./const";
export interface IPrivateRouteProps {
  component: React.ComponentClass<any> | React.StatelessComponent<any>;
  resCheckLogin: any;
  [key: string]: any;
}
export const PrivateRouter = ({
  component: Component,
  resCheckLogin: User,
  ...rest
}: IPrivateRouteProps) => {
  return (
    <Route {...rest} render={(props) => (
      User.status === 202
            ? <Component {...props} />
            : <Redirect to={BASEURL+'login'} />
    )} />
)
};
export default PrivateRouter
