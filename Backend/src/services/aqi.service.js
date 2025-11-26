const AqiDTO = require("../dtos/aqi.dto");
const axiosInstance = require("../utils/axiosInstance");
const AppError = require("../utils/error.utils");
const NodeCache = require("node-cache")

const cache = new NodeCache({ stdTTL: 300 ,maxKeys: 200}); 

class AqiService {
    static async getAqiServiceByCity(cityName) {
        try {

            const cachedData = cache.get(cityName);
            if (cachedData) 
            {
                    return cachedData
            };

            const axiosResponse = await axiosInstance.get(`/${cityName}/`, {
                params: {
                    token: "474bac326db258bcf3d4497e06e829ac7ac1b09d"
                }
            });


            if (axiosResponse.data.status === "error") {
                return null; 
            }

            const dtoObject =  AqiDTO.toAqiResponse(axiosResponse.data.data);
            cache.set(cityName, dtoObject);

            return dtoObject;

        } catch (err) {
            throw new AppError("Failed to fetch AQI data", 500);
        }
    }

    static getAllCachedCities() {
        const keys = cache.keys();
        const values = cache.mget(keys);
        return Object.values(values);
    }
}

module.exports = AqiService;
