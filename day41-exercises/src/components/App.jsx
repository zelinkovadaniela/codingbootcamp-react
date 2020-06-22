import React from "react";
import Button from "./Button";
import Text from "./Text";

class App extends React.PureComponent {
  state = {
    showBookAlreadyRead: false,
  };
  render() {
    const books = [
      {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        alreadyRead: true,
        id: 1,
      },
      {
        title: "The Lord of the Rings",
        author: "J.R.R. Tolkien",
        alreadyRead: false,
      },
      {
        title: "Einstein",
        author: "Walter Isaacson",
        alreadyRead: false,
      },
    ];

    const booksToShow = books.filter(
      (book) => book.alreadyRead === this.state.showBookAlreadyRead
    );
    return (
      <div className="App">
        <Button
          onClick={() =>
            this.setState({
              showBookAlreadyRead: !this.state.showBookAlreadyRead,
            })
          }
        />
        {booksToShow.map((book, index) =>
          this.state.showBookAlreadyRead
            ? `I have already read ${book.title} by ${book.author}! `
            : `I still need to read ${book.title} by ${book.author}! `
        )}
      </div>
    );
  }
}

export default App;
