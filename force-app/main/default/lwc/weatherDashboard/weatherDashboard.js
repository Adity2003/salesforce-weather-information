import { LightningElement } from 'lwc';

export default class WeatherDashboard extends LightningElement {
    city = '';
    weatherData;
    isLoading = false;

    handleCityChange(event) {
        this.city = event.target.value;
    }

    getWeather() {
        this.isLoading = true;
        this.error = undefined;
        this.weatherData = undefined;
        if (this.city.trim()==='') {
            this.error = "Please enter a city name.";
            this.isLoading = false;
            return;
        }
        this.weatherData = {
            temperature: 28,
            condition: 'Cloudy',
            humidity: 72,
            windSpeed: 12,
            pressure: 1012
        };
        this.isLoading = false;
    }
}