import React from "react";

class Navigation extends React.Component {
  render() {
    return (
      <nav>
        <a href="#">Home</a>
        <a href="#" class="current">
          Products
        </a>
        <a href="#">Stores</a>
        <a href="#">Customers</a>
      </nav>
    );
  }
}

export default Navigation;
