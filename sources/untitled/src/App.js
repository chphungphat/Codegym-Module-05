import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookList from "./component/BookList";
import BookDetails from "./component/BookDetails";
import BookAdd from "./component/BookAdd";
import BookEdit from "./component/BookEdit";

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BookList />} />
          <Route path={`/book/:bookId`} element={<BookDetails />} />
          <Route path={"/book/add"} element={<BookAdd />} />
          <Route path={`/book/edit/:bookId`} element={<BookEdit />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;