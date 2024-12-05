interface WeatherData {
  coord: {
    lon: number;
    lat: number;
  };
  weather: Array<{
    id: number;
    main: string;
    description: string;
    icon: string;
  }>;
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level?: number; // Optional
    grnd_level?: number; // Optional
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
    gust?: number; // Optional
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export interface WeatherApiResponse {
  weather: WeatherData;
}

// Type for the main city information
interface City {
  id: number;
  name: string;
  coord: {
    lon: number;
    lat: number;
  };
  country: string;
  population: number;
  timezone: number;
}

// Type for the weather data for a single day
interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

// Type for the temperature details
interface Temp {
  day: number;
  min: number;
  max: number;
  night: number;
  eve: number;
  morn: number;
}

// Type for the feels-like temperatures
interface FeelsLike {
  day: number;
  night: number;
  eve: number;
  morn: number;
}

// Type for the main weather information for a single day
interface DailyWeather {
  dt: number;
  sunrise: number;
  sunset: number;
  temp: Temp;
  feels_like: FeelsLike;
  pressure: number;
  humidity: number;
  weather: Weather[];
  speed: number; // Wind speed
  deg: number; // Wind direction (degrees)
  gust: number; // Gust speed
  clouds: number; // Cloud percentage
  pop: number; // Probability of precipitation
  rain: number; // Amount of rain
}

// Type for the complete weather API response
export interface WeeklyWeatherApiResponse {
  city: City;
  cod: string;
  message: number;
  cnt: number;
  list: DailyWeather[];
}
