import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function App(props) {
  const [photos, setPhotos] = useState([]);
  const [selected, setSelected] = useState(null);
  const handleSelect = (photo) => {
    setSelected(photo);
  }
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/photos').then((res) => {
      setPhotos(res.data)
    })
    .catch((err) => {
      console.log('err', err)
    }
    )
  })
  return (
    <div className='App'>
      <h1>Hello React.</h1>
      <ul>
      {selected && (
    <div className="selected-photo">
      <img src={selected.url} alt={selected.title} />
    </div>
  )}
      {photos.slice(0,10).map(photo => {
        return (
        <li key={photo.id}>
          <img src={photo.url} alt={photo.title} onClick={()=>{
            handleSelect(photo);
          }}/>
          {photo.title}
        </li >
        )
      })}
      </ul>
    </div>
      )
}
