import * as React from "react";

class ClientHomeBlog extends React.Component {
  render() {
    return (
      <>
        <div className="row section-heading">
          <div className="container">
            <div className="row">
              <div className="col-sm-3">
                <h2 style={{ marginBottom: 0, fontWeight: 600, color: "#fff" }}>
                  Blog
                </h2>
              </div>
              <div className="col-sm-9">
                <h2 className="text-center" style={{ marginBottom: 0, fontWeight: 600, color: "#fff" }}>
                  Featured Posts by Brendon Burchard
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container list-blog" style={{marginTop: 64, marginBottom: 64}}>
          <div className="row">
            <div className="item col-sm-4">
              <div className="social-callout">
                <img
                  src="https://brendon.com/wp-content/uploads/2018/08/24-Scared-To-Start-My-Dream-Thumbnail-01-500x281.png"
                  alt=""
                  className="img-responsive"
                />
                <h3>Scared to Start My Dream</h3>
              </div>
            </div>
            <div className="item col-sm-4">
              <div className="social-callout">
                <img
                  src="https://brendon.com/wp-content/uploads/2018/08/24-Scared-To-Start-My-Dream-Thumbnail-01-500x281.png"
                  alt=""
                  className="img-responsive"
                />
                <h3>Scared to Start My Dream</h3>
              </div>
            </div>
            <div className="item col-sm-4">
              <div className="social-callout">
                <img
                  src="https://brendon.com/wp-content/uploads/2018/08/24-Scared-To-Start-My-Dream-Thumbnail-01-500x281.png"
                  alt=""
                  className="img-responsive"
                />
                <h3>Scared to Start My Dream</h3>
              </div>
            </div>
            <div className="item col-sm-4">
              <div className="social-callout">
                <img
                  src="https://brendon.com/wp-content/uploads/2018/08/24-Scared-To-Start-My-Dream-Thumbnail-01-500x281.png"
                  alt=""
                  className="img-responsive"
                />
                <h3>Scared to Start My Dream</h3>
              </div>
            </div>
            <div className="item col-sm-4">
              <div className="social-callout">
                <img
                  src="https://brendon.com/wp-content/uploads/2018/08/24-Scared-To-Start-My-Dream-Thumbnail-01-500x281.png"
                  alt=""
                  className="img-responsive"
                />
                <h3>Scared to Start My Dream</h3>
              </div>
            </div>
            <div className="item col-sm-4">
              <div className="social-callout">
                <img
                  src="https://brendon.com/wp-content/uploads/2018/08/24-Scared-To-Start-My-Dream-Thumbnail-01-500x281.png"
                  alt=""
                  className="img-responsive"
                />
                <h3>Scared to Start My Dream</h3>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ClientHomeBlog;
