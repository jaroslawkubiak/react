import { createContext, useState } from "react";
import axios from 'axios';

//wybieramy nazwę bookcontext - obojętnie jaką
const BooksContext = createContext();

function Provider({ children }) {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:3001/books");
    setBooks(response.data);
  };

  const deleteBookById = async id => {
    await axios.delete(`http://localhost:3001/books/${id}`);

    const updatedBooks = books.filter(book => {
      return book.id !== id;
    });
    setBooks(updatedBooks);
  };

  const editBookById = async (changeId, newTitle) => {
    const response = await axios.put(
      `http://localhost:3001/books/${changeId}`,
      {
        title: newTitle,
      }
    );

    const updateBooks = books.map(book => {
      if (book.id === changeId) {
        return { ...book, ...response.data };
      }
      return book;
    });
    setBooks(updateBooks);
  };

  const createBook = async title => {
    const response = await axios.post("http://localhost:3001/books", {
      title,
    });

    const updatedBooks = [...books, response.data];
    setBooks(updatedBooks);

    // const generateId = String(Math.random()).split(".");
    // const updatedBooks = [...books, { id: generateId[1], title }];
    // setBooks(updatedBooks);
  };

  const valueToShare = {
    books: books,
    deleteBookById: deleteBookById,
    editBookById,
    createBook,
    fetchBooks,
  };
  //deleteBookById: deleteBookById, TO TO SAMO CO deleteBookById. bo funkcja i object property mają taką samą nazwę

  // cokolwiek dodamy jako value prop będzie widoczne w całej aplikacji
  return <BooksContext.Provider value={valueToShare}>{children}</BooksContext.Provider>;
}

export { Provider };
export default BooksContext;
