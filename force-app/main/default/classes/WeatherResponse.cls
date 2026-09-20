public with sharing class WeatherResponse {

    @AuraEnabled
    public Data data;

    @AuraEnabled
    public Location location;

    public class Data {

        @AuraEnabled
        public Values values;
    }

    public class Values {

        @AuraEnabled
        public Decimal temperature;

        @AuraEnabled
        public Decimal humidity;

        @AuraEnabled
        public Decimal windSpeed;

        @AuraEnabled
        public Decimal pressureSurfaceLevel;
    }

    public class Location {

        @AuraEnabled
        public String name;
    }
}