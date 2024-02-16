import React from 'react'
import { useState, useEffect } from 'react';
import './App.css'

function App() {

  const [endPoint, setEndPoint] = useState('');
  const [container, setContainer] = useState([]);
  const [finalPoint, setFinalPoint] = useState('');

  useEffect(() => {
    fetchMe();
  }, [finalPoint])

  const fetchMe = () => {

    fetch(`https://online-movie-database.p.rapidapi.com/auto-complete?q=+${endPoint}`, {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'a7e41c2623mshb353819d86a6136p103996jsnadf6bdaa133b',
        'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
      }
    })

      .then(response => {
        return response.json();
      })
      .then(data => {
        setContainer(data.d)
      })
      .catch(err => {
        console.log(err);
      });
  }

  const handleSearch = (e) => {
    setEndPoint(e.target.value)
  }
  const submitHandler = e => {
    e.preventDefault();
    setFinalPoint(endPoint);
  }

  return (
    <>
      <div className='App'>

        <form onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="Search for a movie..."
            value={endPoint}
            onChange={handleSearch}
          />
          <button type="submit">Search</button>
        </form>

        <div className='element'>
          {container.map((item, index) => {
            return (
              <div key={index} className='element-div'>
                <h2>{item.l}</h2>
                <img src={item.i.imageUrl} alt="movie" />
                <p>Starring:</p>
                <p>{item.s}</p>
              </div>
            )
          })}
        </div>

      </div>
    </>
  )
}

export default App
