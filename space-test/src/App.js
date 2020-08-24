import React, { useState, useEffect } from 'react';
import { Header } from './components/Header.component';
import { Selector } from './components/Selector.component';
import './App.css';

export const App = () => {
  
  const [category, setCategory] = useState("dragons")
  const [info, setInfo] = useState([])

  useEffect(()=>{
    fetch(
      `https://api.spacexdata.com/v3/${category}`
    )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setInfo(data)
    })
  })
 
  return (
    <div className="App container">
    <Header />
    <Selector category={category} setCategory={setCategory}/>
    <p>The category is {category}</p>
      <div className="cards">
        {info.map((item, index) => (
          <div id={item.id} className="card w-50 container">
            <h1>{category === "rockets" ? item.rocket_name : item.name}</h1>
            <p>{item.description}</p>
            {item.flickr_images.map((url, index) => (
              <img id={index} src={url} className="w-100"></img>
            ))}
          </div>
        ))},
      </div>

    </div>
  );
}

export default App;
