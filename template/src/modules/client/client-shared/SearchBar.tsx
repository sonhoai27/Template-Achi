import * as React from "react";

class SearchBar extends React.Component {
  render() {
    return (
      <>
        <div className="hidden-search" style={{ display: "block" }}>
          <h3>What can we help you find?</h3>
          <div className="search-bar">
            <div className="content-search">
              <input type="text" placeholder="Bạn muốn tìm gì?" />
              <i className="fa fa-search" />
            </div>
          </div>
          <div className="hot-blog">
            <ul>
              <li>Kỹ năng sống</li>
              <li>Ca hát</li>
              <li>Tiếng anh</li>
              <li>Phát triển bản thân</li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default SearchBar;
