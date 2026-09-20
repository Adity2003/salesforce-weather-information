public with sharing class WeatherController {
    @AuraEnabled
    public static WeatherResponse getWeather(String city) {
        try {
            return WeatherService.getWeather(city);
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}