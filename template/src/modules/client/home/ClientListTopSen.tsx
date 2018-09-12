import * as React from "react";

class ClientListTopSen extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container paddingY-64 top-sen">
        <div className="row">
          <div className="col-sm-6">
            <img
              src="https://brendon.com/wp-content/uploads/2014/03/brenon-king-dalai.jpg"
              alt=""
              className="img-responsive"
            />
          </div>
          <div className="col-sm-6">
            <blockquote>
              <p>
                Brendon Burchard is one of the top motivation and marketing
                trainers in the world.
              </p>
            </blockquote>
            <div className="quote-source">– LARRY KING</div>
          </div>
        </div>
        <div className="row paddingY-16">
          <div className="col-sm-6">
            <img
              src="https://brendon.com/wp-content/uploads/2014/03/Oprah-Brendon-Burchard-motivation-online-marketing-trainer_small2.jpg"
              alt=""
              className="img-responsive"
            />
          </div>
          <div className="col-sm-6">
            <blockquote>
              <p>One of the most successful online trainers in history.</p>
            </blockquote>
            <div className="quote-source">– LARRY KING</div>
          </div>
        </div>
        <div className="row paddingY-16">
          <div className="col-sm-6">
            <img
              src="https://brendon.com/wp-content/uploads/2014/03/Emails-Thumbnails-Sept1-SuccessMagCover.jpg"
              alt=""
              className="img-responsive"
            />
          </div>
          <div className="col-sm-6">
            <blockquote>
              <p>He’s a constant student of life and business, which is at the heart of his seemingly jet-fueled success.</p>
            </blockquote>
            <div className="quote-source">– LARRY KING</div>
            <div className="get-link btn" style={{marginTop: 32, float: 'right'}}>Xem thêm</div>
          </div>
        </div>
      </div>
    );
  }
}

export default ClientListTopSen;
