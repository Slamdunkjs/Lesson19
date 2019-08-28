import React from 'react'

import WeatherItem from './WeatherItem';

function WeatherOther(props){
  const weatherItems = props.weather.list;
  const copy = [];
  for (var i = 0; i < weatherItems.length; i += 8){
    copy.push(weatherItems[i])
  }

  return (
    <div>
      {copy.map(item => <WeatherItem key = {item.dt} {...item}/>)}
    </div>
  )
}

export default WeatherOther
