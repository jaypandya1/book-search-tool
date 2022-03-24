import "./App.css";
import axios from "axios";
import { useState } from "react";

function App() {
  const [book, setBook] = useState("");
  const [result, setResult] = useState([]);

  const handleChange = (event) => {
    const book = event.target.value;
    setBook(book);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.get(`https://openlibrary.org/search.json?title=${book}`).then((data) => {
      setResult(data.data.docs);
    });
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Search For Books"
            onChange={handleChange}
          />
          <button>Search</button>
        </div>
      </form>

      {result.map((book) => {
       
          return (
            <div className="container">
              <li>
                <h3>{book.title}</h3>
                <img
                  src={`http://covers.openlibrary.org/b/isbn/${book.isbn}-M.jpg`}
                  alt={"jay"}
                />
                <h4>{book.author_name}</h4>
                <h4>{book.isbn}</h4>
                <h4>{book.publish_date}</h4>
              </li>
            </div>
          );
        
      })}
    </div>
  );
}

export default App;
