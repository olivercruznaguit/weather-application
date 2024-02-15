import axios from 'axios';
import { WeatherData } from './schema';

export const fetchWeatherDataRequest = async (location: string): Promise<WeatherData> => {
  try {
      const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=c9d85ace0743471da9e142853241202&q=${location}&aqi=no`);
      return response.data as WeatherData;
  } catch (error) {
      throw new Error('Failed to fetch weather data');
  }
};


export const fetchWeatherForecastDataRequest = async (location: string): Promise<any> => {
  try {
      const response = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=c9d85ace0743471da9e142853241202&q=${location}&aqi=no`);
      return response.data as JSON;
  } catch (error) {
      throw new Error('Failed to fetch weather data');
  }
};
