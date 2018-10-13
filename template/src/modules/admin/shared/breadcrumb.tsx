import * as React from "react";

interface Props {
  title: string;
  uri: any;
}
class BreadCrumd extends React.Component<Props, {}> {
  constructor(props) {
    super(props);
  }
  renderListUri = () => {
    return this.props.uri.map(element => {
      return (
            <li key={element.title} className={element.active ? 'active' : ''}>
                {element.active ? element.title : <a href={element.uri}>{element.title}</a>}
            </li>
      )
    });
  };
  render() {
    return (
      <div className="row bg-title">
        <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
          <h4 className="page-title">{this.props.title}</h4>{" "}
        </div>
        <div className="col-lg-9 col-sm-8 col-md-8 col-xs-12">
          <ol className="breadcrumb">
            {this.renderListUri()}
          </ol>
        </div>
        {/* /.col-lg-12 */}
      </div>
    );
  }
}
export default BreadCrumd;
