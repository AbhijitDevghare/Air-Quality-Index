const aqiService = require("../services/aqi.service");
const AppError = require("../utils/error.utils");

class AqiController {
    static async getAqiByCity(req, res, next) {
        try {
            const cityName = req.params.cityName;
            const response = await aqiService.getAqiServiceByCity(cityName);

            if (!response) {
                return res.status(404).json({
                    success: false,
                    message: "City not found or no AQI data available",
                    data: null
                });
            }

            return res.json({
                success: true,
                message: "AQI data fetched",
                data: response
            });

        } catch (error) {
            next(new AppError(error.message || "Internal server error", 500));
        }
    }

    static async getCachedCities(req, res, next) {
    try {
        const cities = AqiService.getAllCachedCities();
        return res.status(200).json({
        success: true,
        data: cities
        });
    } catch (error) {
        next(error);
    }
    }

}

module.exports = AqiController;
