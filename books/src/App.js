import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList.js";

function App() {
  const [books, setBooks] = useState([]);

  const deleteBookById = id => {
    const updatedBooks = books.filter(book => {
      return book.id !== id;
    });
    setBooks(updatedBooks);
  };

  const editBookById = (changeId, newTitle) => {
    console.log(newTitle);
    const updateBooks = books.map(book => {
      if (book.id === changeId) {
        return {...book, title: newTitle};
      }  
      return book;
    });
    setBooks(updateBooks);
  };

  const createBook = title => {
    const generateId = String(Math.random()).split(".");
    const updatedBooks = [...books, { id: generateId[1], title }];
    setBooks(updatedBooks);
  };

  return (
    <div>
      {/* nazwa onSubmit to wymyślona przez nas nazwa */}
      <div className="app">
        <h1>Reading List</h1>
        <BookList
          books={books}
          onDelete={deleteBookById}
          onEdit={editBookById}
        />
        <BookCreate onCreate={createBook} />
      </div>
    </div>
  );
}

export default App;
