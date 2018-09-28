import * as React from "react";
import FlipPage from "react-flip-page";
import { RESOURCE } from "../../../../config/const";
declare var $: any;
const images = [
  RESOURCE+'images/ebook/1.png',
  RESOURCE+'images/ebook/1.png',
  RESOURCE+'images/ebook/1.png',
  RESOURCE+'images/ebook/1.png',
  RESOURCE+'images/ebook/1.png',
  RESOURCE+'images/ebook/1.png',
  RESOURCE+'images/ebook/1.png'
];
const theEndStyle = {
  alignItems: "flex-end",
  backgroundColor: "#000",
  color: "#fff",
  display: "flex",
  justifyContent: "center",
  padding: 10
};
const theEnd = <div style={theEndStyle}>The End!</div>;
class EbookPreview extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount(){
    $(".ebook-preview img").addClass('img-responsive')
  }
  componentDidMount(){
    $(".ebook-preview img").addClass('img-responsive')
  }
  render() {
    return (
      <>
      <div className="col-sm-4"></div>
      <div className="col-sm-4">
        <FlipPage className="ebook-preview" showSwipeHint lastComponent={theEnd}>
          {images.map((n, i) => (
            <img key={i} src={`${n}`} />
          ))}
        </FlipPage>
      </div>
      <div className="col-sm-4"></div>
      </>
    );
  }
}

export default EbookPreview;
