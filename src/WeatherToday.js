import React from 'react';

import ChangeToCelsii from './ChangeToCelsii';

function WeatherToday(props){
  const weather = props.weather;
  var adress = './icons/' + weather.list[0].weather[0].icon + '.png'

  return (
    <div>
      <div className="now row paddingBottom">
        {weather.city.name},{weather.city.country} 
      </div>

      <div className="now row paddingTop">
       {weather.list[0].dt_txt}
      </div>

      <div className="now row">
        <div className="now col-12 textAlignCenter">
          <img src={adress} alt='icon'></img>
        </div>

        <div className='now col-12 FontSize25px textAlignCenter'>
          <ChangeToCelsii change = {weather.list[0].main.temp}/>
        </div>
      </div>
      
    <div className="now row">
      <div className="now col textAlignCenter">
        {(weather.list[0].wind.deg).toFixed(0)}
      </div>

      <div className="now col textAlignCenter">
        {(weather.list[0].wind.speed).toFixed(0)}м/с
      </div>
    </div>

    </div>
  )
}

export default WeatherToday