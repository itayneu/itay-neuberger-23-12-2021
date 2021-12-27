import http from "./httpService";
import { toast } from "react-toastify";


export async function getLocationAutocomplete(query, apikey) {
  if (query && query.length > 0) {
    try {
      const response = await http.get(
        `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?q=${query}&apikey=${apikey}`
      );
      return response.data;
    } catch (error) {
      toast.warn("Could not find locations. please try again");
    }
  } else {
    return [];
  }
    
}

export async function getCurrentWeather(locationKey, apikey) {
  try {
    const response = await http.get(
      `http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${apikey}`
    );
    return response.data;
  } catch (error) {
    toast.warn("Could not find current weather. please try again");
  }
}

export async function getFiveDayDailyForecast(locationKey, apikey) {
  try {
    const response = await http.get(
      `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?metric=true&apikey=${apikey}`
    );
    return response.data;
  } catch (error) {
    toast.warn("Could not find forecast. please try again");
  }
}
