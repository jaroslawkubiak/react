import { useEffect, useContext } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList.js";
import BooksContext from './context/books';

function App() {
  // sięgamy po cały obiekt do Bookscontext, ale bierzemy tylko funkcję fetch books
  const { fetchBooks } = useContext(BooksContext);

  //drugi argument funkcji, mówi kiedy funkcja ma być wykonana
  useEffect(() => {
    fetchBooks();
  }, []);


  return (
    <div>
      {/* nazwa onSubmit to wymyślona przez nas nazwa */}
      <div className="app">
        <h1>Reading List</h1>
        <BookList />
        <BookCreate />
      </div>
    </div>
  );
}

export default App;
