const axios = require("axios")

const BASE_URL = process.env.AQI_BASE_URL || "http://api.waqi.info/feed/"

const axiosInstance=axios.create()

axiosInstance.defaults.baseURL=BASE_URL

module.exports= axiosInstance