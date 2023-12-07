import axios from "axios";

const Weather = (app) => {
    app.get('/weather', async (req, res) => {
        try {
            const response = await axios.get("{WEATHER_API_BASE_AND_KEY}&q=London");
            const weatherData = response.data;
            res.json(weatherData);
        } catch (error) {
            res.status(500).json({ error: "current error"});
        }
    });
    app.get('/weather/search', async (req, res) => {
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