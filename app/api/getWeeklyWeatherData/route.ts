export async function POST(request: Request) {
  try {
    // Parse the request body
    const { city } = await request.json();

    if (!city) {
      return new Response(JSON.stringify({ error: "City name is required." }), {
        status: 400,
      });
    }

    const apiKey = process.env.OPENWEATHER_API_KEY;

    // Fetch the city weather data to get coordinates (latitude and longitude)
    const position = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`,
    );

    if (!position.ok) {
      const errorData = await position.json();
      return new Response(
        JSON.stringify({
          error: "Failed to fetch city data",
          details: errorData,
        }),
        { status: position.status },
      );
    }

    const cityData = await position.json();

    // Extract latitude and longitude
    const { lat, lon } = cityData.coord;

    // Fetch the 7-day weather forecast for the city
    const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&units=metric&appid=${apiKey}`;

    // Fetch the weekly weather data
    const res = await fetch(apiUrl);

    if (!res.ok) {
      const errorData = await res.json();
      return new Response(
        JSON.stringify({
          error: "Failed to fetch weather data",
          details: errorData,
        }),
        { status: res.status },
      );
    }

    const weather = await res.json();

    // Return the weather data as JSON
    return new Response(JSON.stringify({ weather }), { status: 200 });
  } catch (error) {
    console.error("Error in fetching weather data:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
}
