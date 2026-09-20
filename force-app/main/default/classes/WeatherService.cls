public with sharing class WeatherService {
    public static WeatherResponse getWeather(String city){
        HttpRequest req = new HttpRequest();
        req.setMethod('GET');
        req.setEndpoint(
            'callout:Tomorrow_Weather/v4/weather/realtime?location='
            + EncodingUtil.urlEncode(city, 'UTF-8')
            + '&units=metric'
        );
        Http http = new Http();
        HttpResponse res = http.send(req);
        if (res.getStatusCode() != 200) {
            if (res.getStatusCode() == 400) {
                throw new CalloutException(
                    'City not found. Please check the city name and try again.'
                );
            }
            throw new CalloutException(  'Unable to fetch weather. Please try again later.');
        }   
        WeatherResponse weather =(WeatherResponse) JSON.deserialize(res.getBody(), WeatherResponse.class);

        return weather;
    }
}