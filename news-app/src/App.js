import React, { useState, useEffect } from "react";
import Menu from "./components/Menu";
import NewsGrid from "./components/NewsGrid";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  const [active, setActive] = useState(1);
  const [category, setCategory] = useState("general");

  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=57192720cf074280828f679c821ea6f3`
    ).then(res => res.json())
    .then(data => setItems(data.articles))
  })

  // useEffect(() => {
  //   fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=57192720cf074280828f679c821ea6f3`)
  //     .then((res) => res.json())
  //     .then((data) => console.log(data.articles));
    //newsapi.org/v2/top-headlines?country=us&apiKey=57192720cf074280828f679c821ea6f3
    // })
   return (
      <div className="App">
        <h1 className="title">See the Latest News</h1>
        <Menu active={active} setActive={setActive} setCategory={setCategory} />
        <NewsGrid items={items} />
      </div>
    );
}

export default App;
