import axios from "axios";

const Weather = (app) => {
    app.get('/api/weather', async (req, res) => {
        try {
            const response = await axios.get("http://api.weatherapi.com/v1/current.json?key=19573b9221824c89a94220852231511&q=London");
            const weatherData = response.data;
            res.json(weatherData);
        } catch (error) {
            res.status(500).json({ error: "current error"});
        }
    });
    app.get('/api/weather/search', async (req, res) => {
        try {
            const response = await axios.get("{WEATHER_API_BASE}/search.json?key={WEATHER_API_KEY}&q=London");
            const weatherData = response.data;
            res.json(weatherData);
        } catch (error) {
            res.status(500).json({ error: error.toString() });
        }
    });


};
export default Weather;