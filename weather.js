import axios from "axios";

const Weather = (app) => {
    app.get('/weather', async (req, res) => {
        try {
            const response = await axios.get("{WEATHER_API_BASE_AND_KEY}&q=London");
            const weatherData = response.data;
            res.json(weatherData);
        } catch (error) {
            res.status(500).json({ error: 'Unable to fetch weather data' });
        }
    });


};
export default Weather;