import { LightningElement } from 'lwc';

export default class WeatherDashboard extends LightningElement {
    city = '';
    weatherData;

    handleCityChange(event) {
        this.city = event.target.value;
    }

    getWeather() {
        if (this.city=='') {
            return;
        }
        console.log('Fetching weather data for city:', this.city);
        this.weatherData = {
            temperature: 28,
            condition: 'Cloudy',
            humidity: 72,
            windSpeed: 12,
            pressure: 1012
        };
    }
    
    // error = "Not available";
}