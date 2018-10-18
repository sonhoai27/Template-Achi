import * as React from "react";
import ClientHeader from "../client-shared/Header";
import Footer from "../client-shared/Footer";
import { Helmet } from "react-helmet";
import { reListPageUI } from "../../admin/page/rePage";
import { connect } from "react-redux";
import ItemPage from "../../DynamicPage/item";
import EbookPreview from "./com/preview";
import Customer from "./com/customer";
import OptionEbook from "./com/optionEbook";
import ListSocial from "../../shared/components/social";
const IDPAGE = 5;
const listCom = {
  EBOOKPREVIEW: <EbookPreview />,
  CUSTOMER: <Customer />,
  ORDEREBOOK: <OptionEbook />,
  SOCIAL: <ListSocial/>
};
interface IProps {
  resListPageUI: any;
  reListPageUI: (id: number) => void;
}
class EbookLadingPage extends React.Component<IProps, {}> {
  constructor(props) {
    super(props);
    this.state = {
      isShowingModalOrder: false,
      currentPackage: -1,
      price: 0
    };
  }
  componentDidMount() {
    this.props.reListPageUI(IDPAGE);
  }
  componentDidUpdate(preProps){
    const myToggle = e => {
      e.target.classList.toggle("active");
      var content = e.target.nextElementSibling;
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    };
    var coll = document.getElementsByClassName("collapsible");
    var i;
    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", myToggle, false);
    }
  }
  render() {
    return (
      <>
        <Helmet>
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          />
        </Helmet>
        <ClientHeader />
        <div className="row">
          <ItemPage coms={listCom} items={this.props.resListPageUI.list} />
        </div>
        <Footer />
      </>
    );
  }
}

const mapStateToProps = storeState => ({
  resListPageUI: storeState.rePage.resListPageUI
});
const mapDispatchToProps = {
  reListPageUI
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EbookLadingPage);
