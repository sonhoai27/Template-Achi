import * as React from "react";

class ClientFollow extends React.Component {
  render() {
    return (
      <div className="container follow paddingY-64">
        <div className="row">
          <div className="col-sm-2" />
          <div className="col-sm-4">
            <div className="social-callout">
              <h3 className="text-center">Get Daily Motivation</h3>
              <iframe
                src="//www.facebook.com/plugins/like.php?href=http%3A%2F%2Fwww.facebook.com%2Fpages%2FBrendon-Burchard-Live-Love-Matter%2F141502009216768&amp;layout=standard&amp;show_faces=false&amp;width=200&amp;action=like&amp;colorscheme=light&amp;height=30"
                style={{border:'none', overflow:'hidden', width:'200px', height:'30px'}}
              />
            </div>
          </div>
          <div className="col-sm-4">
            <div className="social-callout">
              <h3 className="text-center">Watch Brendon's Show</h3>
              <iframe  style={{position: 'static', top: 0, width: 123, margin: 0, borderStyle: 'none', left: 0, visibility: 'visible', height: 24}} tabIndex={0} width="100%" id="I0_1536682088055" name="I0_1536682088055"
              src="https://www.youtube.com/subscribe_embed?usegapi=1&channel=BrendonBurchard&origin=https%3A%2F%2Fbrendon.com&gsrc=3p&ic=1&jsh=m%3B%2F_%2Fscs%2Fapps-static%2F_%2Fjs%2Fk%3Doz.gapi.vi.ersgHZm_IgE.O%2Fam%3DwQ%2Frt%3Dj%2Fd%3D1%2Frs%3DAGLTcCMduhp3YkUaSrrUHYCwgzlg4Y8r_w%2Fm%3D__features__#_methods=onPlusOne%2C_ready%2C_close%2C_open%2C_resizeMe%2C_renderstart%2Concircled%2Cdrefresh%2Cerefresh%2Conload&id=I0_1536682088055&_gfid=I0_1536682088055&parent=https%3A%2F%2Fbrendon.com&pfname=&rpctoken=21758127" data-gapiattached="true" />
            </div>
          </div>
          <div className="col-sm-2" />
        </div>
      </div>
    );
  }
}

export default ClientFollow;
