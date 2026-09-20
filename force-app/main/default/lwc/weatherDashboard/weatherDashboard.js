import { LightningElement } from 'lwc';
import getWeather from '@salesforce/apex/WeatherController.getWeather';

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
        getWeather({ city: this.city })
            .then((result) => {
                console.log('Apex Result:', JSON.stringify(result));
                this.weatherData = result;
            })
            .catch((error) => {
                this.error = error.body?.message || 'Something went wrong. Please try again.';
            })
            .finally(() => {
                this.isLoading = false;
            });
    }
}