"use client";
import { UserButton } from "@clerk/nextjs";
import { Switch } from "./ui/switch";
import { Input } from "./ui/input";
import { Search } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import axios from "axios";
import { WeatherApiResponse } from "@/lib/types";
import { addHistory } from "@/lib/history";

interface ChildComponentProps {
  sendData: (data: WeatherApiResponse) => void;
  setPlace: (place: string) => void;
}

const Navbar = ({ sendData, setPlace }: ChildComponentProps) => {
  const [city, setCity] = useState("Pune");

  const handleChange = async () => {
    const res = await axios.post("http://localhost:3000/api/getWeatherData", {
      city,
    });

    sendData(res.data);
    setPlace(city);
    addHistory(city);
  };

  return (
    <div className="w-full flex justify-between">
      <div className="flex gap-2">
        <Input
          type="text"
          placeholder="Search City"
          onChange={(e) => setCity(e.target.value)}
        />
        <Button onClick={() => handleChange()} className="rounded-full">
          <Search />
        </Button>
      </div>
      <div className="flex gap-3 mr-4 items-center">
        <Switch id="toggle" />
        <p className="text-muted-foreground mr-2">show in °F</p>
        <UserButton />
      </div>
    </div>
  );
};

export default Navbar;
