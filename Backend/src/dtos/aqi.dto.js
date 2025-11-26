class AqiDTO {
    static toAqiResponse(raw) {
        return {
            aqi: raw.aqi,
            city: {
                name: raw.city.name,
                geo: raw.city.geo
            },
            dominentpol: raw.dominentpol,

            current: {
                pm25: raw.iaqi.pm25?.v,
                pm10: raw.iaqi.pm10?.v,
                co: raw.iaqi.co?.v,
                no2: raw.iaqi.no2?.v,
                so2: raw.iaqi.so2?.v,
                o3: raw.iaqi.o3?.v,
                temp: raw.iaqi.t?.v,
                humidity: raw.iaqi.h?.v,
                wind: raw.iaqi.w?.v
            },

            time: raw.time.s,

            forecast: {
                pm25: raw.forecast.daily.pm25.map(d => ({
                    day: d.day,
                    avg: d.avg
                })),
                pm10: raw.forecast.daily.pm10.map(d => ({
                    day: d.day,
                    avg: d.avg
                })),
                uvi: raw.forecast.daily.uvi.map(d => ({
                    day: d.day,
                    avg: d.avg
                }))
            }
        };
    }
}

module.exports = AqiDTO;
