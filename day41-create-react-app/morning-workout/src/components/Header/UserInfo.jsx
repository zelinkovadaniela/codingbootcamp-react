import React from "react";

class UserInfo extends React.Component {
  render() {
    return (
      <div className="user">
        <span>chell@aperture.sc</span>
        <br />
        <a href="#">logout</a>
      </div>
    );
  }
}

export default UserInfo;
