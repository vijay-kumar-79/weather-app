import { useState,useEffect } from 'react';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [data, setData] = useState({});
  const [location, setLocation] = useState('');
  const [lat, setLat] = useState('');
  const [long, setLong] = useState('');
  const [error, setError] = useState('');
  // var lat ;
  // var long ;

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=e890998f9a9e1cdac63a2104315f77c0&units=metric`
  

  const searchLocation =(ev)=>{
    if(ev.key === 'Enter'){
      axios.get(url)
        .then(res =>{
          setData(res.data);
          setLocation('');
        })
        .catch(err =>{
          if(err.response.status == 404){
            toast.error("wrong city");
            setData({});
          }
          
        })
    }
  }

  // tried to add automatic loaction(but was unsuccesful🥲)

  // useEffect(() =>{
  //   navigator.geolocation.getCurrentPosition((position) => {
  //     setLat(position.coords.latitude.toFixed(2));
  //     setLong(position.coords.longitude.toFixed(2));
  //     console.log(lat);
  //     console.log(long);
  //   })
      
  //   axios.get(url2)
  //     .then(resp=>{
  //       setData(resp.data);
  //     })
  //   setLocation('');
  //  },[lat])


  // const url2 =`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${long}&exclude=hourly,daily&appid=e7704bc895b4a8d2dfd4a29d404285b6`

  
  
  

  return (
    <div className="App">
      <div className="search">
          <input 
          onChange={event => setLocation(event.target.value)}
          onKeyDown={searchLocation}
          placeholder='Enter City...'
          type="text"
          />
      </div>

      <div className="container">
          
        <div className="top">
          <div className="location">
            {data.name && <p>{data.name}</p>}
          </div>
          <div className="temp">
            {data.main && <h1 className='bold'>{data.main.temp.toFixed()} °C</h1>}
          </div>
          <div className="description">
            {data.weather && <p>{data.weather[0].main}</p>}
          </div>
        </div>

        {data.name != undefined &&
          <div className="bottom">
            <div className="feels-like">
              {data.main && <p className='bold'>{data.main.feels_like.toFixed()} °C</p>}
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              {data.main && <p className='bold'>{data.main.humidity}%</p>}
              <p>humidity</p>
            </div>
            <div className="wind-speed">
              {data.wind && <p className='bold'>{data.wind.speed.toFixed()} m/s</p>}
              <p>Wind Speed</p>
            </div>
          </div>
        }

      


    </div> 
    
  <ToastContainer />
    </div>
  );
}

export default App;
