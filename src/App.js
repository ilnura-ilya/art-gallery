import { useState } from 'react';
import { data } from './data';
import './App.css';

function App() {

  const [art, setArt] = useState(0);

  const {id, artist, image, name, year} = data[art];
  
  const previousItem = () => {
    setArt ((art => {
      art--;
      if (art < 0){
        return data.length -1;
      }
      return art;
    }))
  }

  const nextItem = () => {
    setArt ((art => {
      art++;
      if (art > data.length - 1){
        art = 0;
      }
      return art;
    }))
  }

  return (
    <div className="App">
      <div className='container'>
        <h1>КАРТИНЫ</h1>
      </div>
      <div className='container'>
        <h1>{id} - {artist}</h1>
      </div>
      <div className='container imageDiv'>
        <img src={image} alt="artImage" width="400px"/>
      </div>
      <div className='container'>
        <h2>{name} ,{year} г.</h2>
      </div>
      <div  className='buttons'>
      <button className="btn" onClick={previousItem}>НАЗАД</button>
      <button className="btn" onClick={nextItem}>ВПЕРЁД</button>
      </div>
    </div>
  );
}

export default App;
