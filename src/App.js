import React, {Component} from 'react';

import axios from 'axios'
import WeatherToday from './WeatherToday';
import WeatherOther from './WeatherOther';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      weather: {},
      isLoaded: false,
    }
  }

  componentDidMount(){
    axios('http://api.openweathermap.org/data/2.5/forecast?q=Minsk,by&APPID=16610e15b595396f10beff503fec1c30')
    .then(response =>{
      console.log(response.data)
        this.setState({
          weather: response.data,
          isLoaded:true
        })
    })
  }

  render(){
    const weather = this.state.weather;
    const isLoaded = this.state.isLoaded

    if(!isLoaded){
      return <div>Загружается...</div>
    } else {
      return (
        <div className="myconteiner">
          <WeatherToday weather={this.state.weather} />
          <WeatherOther weather={this.state.weather} /> 
        </div>
      )
    }
  }
}

export default App