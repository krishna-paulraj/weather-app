"use client";
import Navbar from "@/components/Navbar";
import { WeatherApiResponse } from "@/lib/types";
import Image from "next/image";
import { useState } from "react";
import { weeklyWeatherData } from "@/lib/data";

export default function AppPage() {
  const [place, setPlace] = useState("Pune");
  const [weatherData, setWeatherData] = useState<WeatherApiResponse | null>(
    null,
  );

  const getData = (data: WeatherApiResponse) => {
    setWeatherData(data);
  };

  const getPlace = (place: string) => {
    setPlace(place);
  };

  return (
    <div className="w-full flex flex-col p-5">
      <Navbar sendData={getData} setPlace={getPlace} />
      <div className="flex-grow mt-14">
        <h1 className="text-5xl">
          {place.charAt(0).toUpperCase() + place.slice(1).toLowerCase()}
        </h1>
        <h1 className="text-2xl mt-14">This Week Report</h1>
        <div className="grid grid-cols-7 gap-5 mt-3">
          {weeklyWeatherData.map((day, index) => (
            <div
              key={index}
              className="h-32 w-full border bg-yellow-500/10 rounded-lg flex flex-col items-center justify-center"
            >
              <p>{day.day}</p>
              <Image
                src={day.icon}
                alt={day.condition}
                className="size-12"
                width="50"
                height="50"
              />
              <p className="text-muted-foreground">{day.temp}°</p>
            </div>
          ))}
        </div>
        <div className="mt-20">
          <h1 className="text-2xl">Today&apos;s Highlights</h1>
          <div className="grid grid-cols-3 gap-3 mt-5">
            <div className="bg-white rounded-lg flex flex-col p-5 min-w-[150px] min-h-[200px]">
              {/* Temperature */}
              <p className="text-muted-foreground">Temperature 🌡️</p>
              <p className="font-light text-6xl m-auto">
                {weatherData ? Math.floor(weatherData.weather.main.temp) : "21"}
                <span className="text-4xl">°C</span>
              </p>
              <p className="text-center text-muted-foreground">
                {
                  weatherData
                    ? weatherData.weather.main.temp > 35
                      ? "High Temp 😥"
                      : weatherData.weather.main.temp < 10
                        ? "Low Temp 🥶"
                        : "Normal 👍"
                    : "Normal 👍" // Handle case when `weatherData` is not yet available
                }
              </p>
            </div>
            <div className="bg-white rounded-lg flex flex-col p-5 min-w-[150px] min-h-[200px]">
              {/* Wind Status */}
              <p className="text-muted-foreground">Wind Status 💨</p>
              <p className="font-light text-6xl m-auto">
                {weatherData
                  ? `${weatherData.weather.wind.speed} km/h`
                  : "2.2 km/h"}
              </p>
              <p className="text-center text-muted-foreground">
                {weatherData
                  ? weatherData.weather.wind.speed > 20
                    ? "Strong Wind 💨"
                    : "Normal Wind 🌬️"
                  : "Normal Wind 🌬️"}
              </p>
            </div>
            <div className="bg-white rounded-lg flex flex-col p-5 min-w-[150px] min-h-[200px]">
              {/* Sunrise and Sunset */}
              <p className="text-muted-foreground">Sunrise & Sunset ☀️</p>
              <div className="flex items-center mx-auto">
                <Image
                  src={"/images/clear.png"}
                  alt="weather"
                  className="size-20"
                  width="50"
                  height="50"
                />
                <p className="font-medium ml-4">
                  {weatherData
                    ? new Date(
                        weatherData.weather.sys.sunrise * 1000,
                      ).toLocaleTimeString()
                    : "6:35 AM"}
                  <br />
                  <span className="text-muted-foreground text-xs font-light">
                    - On time
                  </span>
                </p>
              </div>
              <div className="flex items-center mx-auto">
                <Image
                  src={"/images/mist.png"}
                  alt="weather"
                  className="size-20"
                  width="50"
                  height="50"
                />
                <p className="font-medium ml-4">
                  {weatherData
                    ? new Date(
                        weatherData.weather.sys.sunset * 1000,
                      ).toLocaleTimeString()
                    : "6:35 PM"}
                  <br />
                  <span className="text-muted-foreground text-xs font-light">
                    - On time
                  </span>
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg flex flex-col p-5 min-w-[150px] min-h-[200px]">
              {/* Humidity */}
              <p className="text-muted-foreground">Humidity 🌬️</p>
              <p className="font-light text-6xl m-auto">
                {weatherData ? weatherData.weather.main.humidity : "40"}
                <span className="text-4xl">%</span>
              </p>
              <p className="text-center text-muted-foreground">
                {weatherData
                  ? weatherData.weather.main.humidity > 70
                    ? "High Humidity 🥵"
                    : "Normal Humidity 🌬️"
                  : "Normal Humidity 🌬️"}
              </p>
            </div>

            <div className="bg-white rounded-lg flex flex-col p-5 min-w-[150px] min-h-[200px]">
              {/* Pressure */}
              <p className="text-muted-foreground">Pressure 😥</p>
              <p className="font-light text-6xl m-auto">
                {weatherData ? weatherData.weather.main.pressure : "1017"}
                <span className="text-2xl"> hPa</span>
              </p>
              <p className="text-center text-muted-foreground">
                {weatherData
                  ? weatherData.weather.main.pressure > 1015
                    ? "High Pressure 😥"
                    : "Normal Pressure 😌"
                  : "Normal Pressure 😌"}
              </p>
            </div>

            <div className="bg-white rounded-lg flex flex-col p-5 min-w-[150px] min-h-[200px]">
              {/* Clouds */}
              <p className="text-muted-foreground">Clouds ☁️</p>
              <p className="font-light text-6xl m-auto">
                {weatherData ? weatherData.weather.clouds.all : "54"}
                <span className="text-4xl">%</span>
              </p>
              <p className="text-center text-muted-foreground">
                {weatherData
                  ? weatherData.weather.clouds.all > 70
                    ? "Cloudy ☁️"
                    : "Partly Cloudy 🌥️"
                  : "Partly Cloudy 🌥️"}
              </p>
            </div>
          </div>
        </div>
      </div>
      <footer className="mt-5">
        <p className="text-muted-foreground text-sm">
          *All data are provided by OpenWeather API.
        </p>
      </footer>
    </div>
  );
}
