import React, { useState, useEffect } from 'react';
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
    <Selector 
      category={category} 
      setCategory={setCategory}
    />
    <p>
      The category is {category}
    </p>
    <CardSection 
      info={info} 
      category={category} 
    />
    </div>
  );
}

export const Header = (props) => {
  return (
    "Hello World!"
  );
} 

export const Selector = (props) => {
  return (
    <select id="drop-down" onChange={e => props.setCategory(e.target.value)}>
      <option value="dragons">dragons</option>
      <option value="rockets">rockets</option>
    </select>
  ); 
}

export const CardSection = (props) => {

  return (
    <div className="cards">
      {props.info.map((item) => (
        <div id={item.id} className="card container">
          <h1>{props.category === "rockets" ? item.rocket_name : item.name}</h1>
          <p>{item.description}</p>
          {item.flickr_images.map((url, index) => (
            <img 
              id={index} src={url}
              className="w-100"
            ></img>
          ))}
        </div>
      ))},
    </div>
  );
}

export default App;
