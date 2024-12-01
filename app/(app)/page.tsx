import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function AppPage() {
  return (
    <div className="w-full flex flex-col p-5">
      <Navbar />
      <div className="flex-grow mt-14">
        <h1 className="text-5xl">Pune</h1>
        <div className="grid grid-cols-7 gap-5 mt-20">
          <div className="h-32 w-full border bg-white rounded-lg flex flex-col items-center justify-center">
            <p>Sun</p>
            <Image
              src={"/images/clear.png"}
              alt="weather"
              className="size-12"
              width="50"
              height="50"
            />
            <p className="text-muted-foreground">32°</p>
          </div>
          <div className="h-32 w-full border bg-white rounded-lg flex flex-col items-center justify-center">
            <p>Sun</p>
            <Image
              src={"/images/clouds.png"}
              alt="weather"
              className="size-12"
              width="50"
              height="50"
            />
            <p className="text-muted-foreground">32°</p>
          </div>
          <div className="h-32 w-full border bg-white rounded-lg flex flex-col items-center justify-center">
            <p>Sun</p>
            <Image
              src={"/images/clouds.png"}
              alt="weather"
              className="size-12"
              width="50"
              height="50"
            />
            <p className="text-muted-foreground">32°</p>
          </div>
          <div className="h-32 w-full border bg-white rounded-lg flex flex-col items-center justify-center">
            <p>Sun</p>
            <Image
              src={"/images/clouds.png"}
              alt="weather"
              className="size-12"
              width="50"
              height="50"
            />
            <p className="text-muted-foreground">32°</p>
          </div>
          <div className="h-32 w-full border bg-white rounded-lg flex flex-col items-center justify-center">
            <p>Sun</p>
            <Image
              src={"/images/clouds.png"}
              alt="weather"
              className="size-12"
              width="50"
              height="50"
            />
            <p className="text-muted-foreground">32°</p>
          </div>
          <div className="h-32 w-full border bg-white rounded-lg flex flex-col items-center justify-center">
            <p>Sun</p>
            <Image
              src={"/images/clouds.png"}
              alt="weather"
              className="size-12"
              width="50"
              height="50"
            />
            <p className="text-muted-foreground">32°</p>
          </div>
          <div className="h-32 w-full border bg-white rounded-lg flex flex-col items-center justify-center">
            <p>Sun</p>
            <Image
              src={"/images/clouds.png"}
              alt="weather"
              className="size-12"
              width="50"
              height="50"
            />
            <p className="text-muted-foreground">32°</p>
          </div>
        </div>
        <div className="mt-20">
          <h1 className="text-2xl">Today&apos;s Highlights</h1>
          <div className="grid grid-cols-3 gap-3 mt-5">
            <div className="bg-white rounded-lg flex flex-col p-5  min-w-[150px] min-h-[200px]">
              {/* Temperature */}
              <p className="text-muted-foreground">Temperature 🌡️</p>
              <p className="font-light text-6xl m-auto">
                21°<span className="text-4xl">C</span>
              </p>
              <p className="text-center text-muted-foreground">Normal 👍</p>
            </div>
            <div className="bg-white rounded-lg flex flex-col p-5  min-w-[150px] min-h-[200px]">
              {/* Wind Status*/}
              <p className="text-muted-foreground">Wind Status 💨</p>
              <p className="font-light text-6xl m-auto">
                2.2<span className="text-xl"> km/h</span>
              </p>
              <p className="text-center text-muted-foreground">Normal 👍</p>
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
                  6:35 AM
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
                  6:35 AM
                  <br />
                  <span className="text-muted-foreground text-xs font-light">
                    - On time
                  </span>
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg flex flex-col p-5  min-w-[150px] min-h-[200px]">
              {/* Humidity */}
              <p className="text-muted-foreground">Humidity 🌬️</p>
              <p className="font-light text-6xl m-auto">
                40<span className="text-4xl">%</span>
              </p>
              <p className="text-center text-muted-foreground">Unhealthy 👎</p>
            </div>

            <div className="bg-white rounded-lg flex flex-col p-5  min-w-[150px] min-h-[200px]">
              {/* Pressure */}
              <p className="text-muted-foreground">Pressure 😥</p>
              <p className="font-light text-6xl m-auto">
                1017<span className="text-2xl">hPa</span>
              </p>
              <p className="text-center text-muted-foreground">
                High Atmos Pressure
              </p>
            </div>

            <div className="bg-white rounded-lg flex flex-col p-5  min-w-[150px] min-h-[200px]">
              {/* Cloads*/}
              <p className="text-muted-foreground">Clouds ☁️</p>
              <p className="font-light text-6xl m-auto">
                54<span className="text-4xl">%</span>
              </p>
              <p className="text-center text-muted-foreground">Cloudy ☁</p>
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
