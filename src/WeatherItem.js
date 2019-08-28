import React from 'react';

import ChangeToCelsii from './ChangeToCelsii';

function WeatherItem(props){
const icon = props.weather[0].icon;
var adress = './icons/' + icon + '.png'
  return (
    <div>
      <div className="padding row">
        <div className="col align-self-center textAlignLeft">
        {props.dt_txt}
        </div>

        <div className="col textAlignCenter">
          <img src={adress} alt='icon'></img>
        </div>

        <div className="col align-self-center textAlignRight">
          <ChangeToCelsii change = {props.main.temp}/>
        </div>
      </div>
    </div>
  )

}

export default WeatherItem
