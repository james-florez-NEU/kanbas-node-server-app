import axios from "axios";
import "dotenv/config";

const WEATHER_API_BASE = process.env.WEATHER_API_BASE;
const WEATHER_API_KEY = process.env.WEATHER_API_KEY;

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
    app.get('/api/weather/current', async (req, res) => {
        const api_string = WEATHER_API_BASE + 'current.json?key=' + WEATHER_API_KEY + '&q=London';
        console.log(api_string);
        try {

            const response = await axios.get(api_string);

            const weatherData = response.data;
            res.json(weatherData);
        } catch (error) {
            res.status(500).json({ error: "current error"});
        }
    });
    app.get('/api/weather/search', async (req, res) => {
        const api_string = WEATHER_API_BASE + 'search.json?key=' + WEATHER_API_KEY + '&q=London';
        try {
            const response = await axios.get(api_string);
            const weatherData = response.data;
            res.json(weatherData);
        } catch (error) {
            res.status(500).json({ error: error.toString() });
        }
    });


};
export default Weather;