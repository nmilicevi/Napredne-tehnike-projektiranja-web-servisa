import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wheather',
  templateUrl: './wheather.component.html',
  styleUrls: ['./wheather.component.css']
})
export class WheatherComponent implements OnInit {
  weatherData:any;
  weatherData1:any;
  weatherData2:any;

  constructor() { }

  ngOnInit() {
    this.weatherData = {
      main : {},
      isDay: true
    };
    this.getWeatherData();
    console.log(this.weatherData);

    this.weatherData1 = {
      main : {},
      isDay: true
    };
    this.getWeatherData1();
    console.log(this.weatherData1);

    this.weatherData2 = {
      main : {},
      isDay: true
    };
    this.getWeatherData2();
    console.log(this.weatherData2);
  }


  getWeatherData(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q=london&appid=ff1bc4683fc7325e9c57e586c20cc03e')
    .then(response=>response.json())
    .then(data=>{this.setWeatherData(data);
    })
  }
  getWeatherData1(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q=zagreb&appid=ff1bc4683fc7325e9c57e586c20cc03e')
    .then(response=>response.json())
    .then(data1=>{this.setWeatherData1(data1);
    })
  }
  getWeatherData2(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q=paris&appid=ff1bc4683fc7325e9c57e586c20cc03e')
    .then(response=>response.json())
    .then(data2=>{this.setWeatherData2(data2);
    })
  } 


  setWeatherData(data: any){
  this.weatherData=data;
  const sunsetTime = new Date(this.weatherData.sys.sunset * 1000);
  this.weatherData.sunset_time= sunsetTime.toLocaleTimeString();
  const currentDate = new Date();
  this.weatherData.isDay=(currentDate.getTime()< sunsetTime.getTime());
  this.weatherData.temp_celcius = (this.weatherData.main.temp - 273.15).toFixed(0);
    this.weatherData.temp_min = (this.weatherData.main.temp_min - 273.15).toFixed(0);
    this.weatherData.temp_max = (this.weatherData.main.temp_max - 273.15).toFixed(0);
    this.weatherData.temp_feels_like = (this.weatherData.main.feels_like - 273.15).toFixed(0);

  }
  setWeatherData1(data1: any){
    this.weatherData1=data1;
    const sunsetTime = new Date(this.weatherData1.sys.sunset * 1000);
    this.weatherData1.sunset_time= sunsetTime.toLocaleTimeString();
    const currentDate = new Date();
    this.weatherData1.isDay=(currentDate.getTime()< sunsetTime.getTime());
    this.weatherData1.temp_celcius = (this.weatherData1.main.temp - 273.15).toFixed(0);
        this.weatherData1.temp_min = (this.weatherData1.main.temp_min - 273.15).toFixed(0);
        this.weatherData1.temp_max = (this.weatherData1.main.temp_max - 273.15).toFixed(0);
        this.weatherData1.temp_feels_like = (this.weatherData1.main.feels_like - 273.15).toFixed(0);
    
      }
      setWeatherData2(data2: any){
        this.weatherData2=data2;
        const sunsetTime = new Date(this.weatherData2.sys.sunset * 1000);
        this.weatherData2.sunset_time= sunsetTime.toLocaleTimeString();
        const currentDate = new Date();
        this.weatherData2.isDay=(currentDate.getTime()< sunsetTime.getTime());
        this.weatherData2.temp_celcius = (this.weatherData2.main.temp - 273.15).toFixed(0);
            this.weatherData2.temp_min = (this.weatherData2.main.temp_min - 273.15).toFixed(0);
            this.weatherData2.temp_max = (this.weatherData2.main.temp_max - 273.15).toFixed(0);
            this.weatherData2.temp_feels_like = (this.weatherData2.main.feels_like - 273.15).toFixed(0);
        
          }

}
