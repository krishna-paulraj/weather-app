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
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    // Fetch weather data from OpenWeather API
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
