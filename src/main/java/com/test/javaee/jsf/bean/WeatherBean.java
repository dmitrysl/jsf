package com.test.javaee.jsf.bean;

import com.test.javaee.jsf.ws.weather.*;

import javax.annotation.PostConstruct;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.RequestScoped;
import java.util.Optional;

/**
 * Created by DmitriyS on 9/20/2016.
 */
@ManagedBean(name = "weather")
@RequestScoped
public class WeatherBean {

    private String zip = "90210";

    private WeatherSoap service;
    private ArrayOfWeatherDescription weatherInfo;
    private WeatherReturn weather;
    private ForecastReturn forecast;

    public String getZip() {
        return zip;
    }

    public void setZip(String zip) {
        this.zip = zip;
    }

    public ArrayOfWeatherDescription getWeatherInfo() {
        return weatherInfo;
    }

    public void setWeatherInfo(ArrayOfWeatherDescription weatherInfo) {
        this.weatherInfo = weatherInfo;
    }

    public WeatherReturn getWeather() {
        return weather;
    }

    public void setWeather(WeatherReturn weather) {
        this.weather = weather;
    }

    public ForecastReturn getForecast() {
        return forecast;
    }

    public void setForecast(ForecastReturn forecast) {
        this.forecast = forecast;
    }

    @PostConstruct
    public void init() {
        try {
            service = new Weather().getWeatherSoap();
            // weather info i.e. icon, description http://wsf.cdyne.com/WeatherWS/Weather.asmx
            weatherInfo = service.getWeatherInformation();
            // weather for today
            weather = service.getCityWeatherByZIP(zip);
            // weather for seven days
            forecast = service.getCityForecastByZIP(zip);
        } catch (Exception e) {
            int i = 0;
        }
    }

    public WeatherDescription getWeatherDescription(short id) {
        Optional<WeatherDescription> opt = weatherInfo.getWeatherDescription()
                .stream()
                .filter(weatherDescription -> weatherDescription.getWeatherID() == id)
                .findFirst();
        return opt.isPresent() ? opt.get() : new WeatherDescription();
    }

    public WeatherReturn getCityWeather() {
        // weather for today
        return service.getCityWeatherByZIP(zip);
    }

    public ForecastReturn getCityForecast() {
        // weather for seven days
        return service.getCityForecastByZIP(zip);
    }
}
