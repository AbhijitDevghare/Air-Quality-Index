# AQI Lookup – Air Quality Index Search Engine

A full-stack application that lets users search for the Air Quality Index (AQI) of any city.  
The project contains a backend service that integrates with the AQICN API and a frontend interface for displaying the results.

The main objective is to provide a fast, responsive city-based AQI lookup tool with server-side caching for better performance.

---

## 1. Overview

The application is split into two parts:

### Backend (Node.js)
- Exposes REST APIs to fetch AQI details
- Handles calls to the vendor AQICN API
- Implements server-side caching with expiry
- Normalizes the API response using DTOs
- Includes error handling and CORS setup

### Frontend (React + Vite)
- City search with debounce to avoid unnecessary API calls
- Displays AQI details in a well-structured card
- Shows recent searches using cached city data
- Built with Redux Toolkit for state management

---

## 2. API Reference

### **GET /aqi/v1/getAqi/:cityName**
Fetches AQI information for the given city.

Example:


GET http://localhost:3000/aqi/v1/getAqi/delhi

Returns a structured JSON containing:
- AQI value  
- Dominant pollutant  
- Pollutant breakdown (pm25, pm10, etc.)  
- Temperature, humidity, wind  
- City location details  

---
{
  "success": true,
  "message": "AQI data fetched",
  "data": {
    "aqi": 165,
    "city": {
      "name": "Major Dhyan Chand National Stadium, Delhi, Delhi, India",
      "geo": [
        28.612498,
        77.237388
      ]
    },
    "dominentpol": "pm25",
    "current": {
      "pm25": 165,
      "pm10": 122,
      "co": 4,
      "no2": 16,
      "so2": 12,
      "o3": 83.7,
      "temp": 22.666666666666668,
      "humidity": 41.2,
      "wind": 0.525
    },
    "time": "2025-11-25 15:00:00",
    "forecast": {
      "pm25": [
        {
          "day": "2025-11-23",
          "avg": 167
        },
        {
          "day": "2025-11-24",
          "avg": 183
        },
        {
          "day": "2025-11-25",
          "avg": 198
        },
        {
          "day": "2025-11-26",
          "avg": 165
        },
        {
          "day": "2025-11-27",
          "avg": 194
        },
        {
          "day": "2025-11-28",
          "avg": 181
        },
        {
          "day": "2025-11-29",
          "avg": 167
        },
        {
          "day": "2025-11-30",
          "avg": 169
        },
        {
          "day": "2025-12-01",
          "avg": 171
        }
      ],
      "pm10": [
        {
          "day": "2025-11-23",
          "avg": 66
        },
        {
          "day": "2025-11-24",
          "avg": 79
        },
        {
          "day": "2025-11-25",
          "avg": 88
        },
        {
          "day": "2025-11-26",
          "avg": 65
        },
        {
          "day": "2025-11-27",
          "avg": 86
        },
        {
          "day": "2025-11-28",
          "avg": 78
        },
        {
          "day": "2025-11-29",
          "avg": 68
        },
        {
          "day": "2025-11-30",
          "avg": 69
        },
        {
          "day": "2025-12-01",
          "avg": 70
        }
      ],
      "uvi": [
        {
          "day": "2025-11-25",
          "avg": 1
        },
        {
          "day": "2025-11-26",
          "avg": 1
        },
        {
          "day": "2025-11-27",
          "avg": 1
        },
        {
          "day": "2025-11-28",
          "avg": 1
        },
        {
          "day": "2025-11-29",
          "avg": 1
        },
        {
          "day": "2025-11-30",
          "avg": 0
        }
      ]
    }
  }
}


<!-- WE can also get all the cities and show into the  homepage to look page more good -->


### **GET /aqi/v1/cities**
Returns a list of cities stored in the server cache.  
These represent recent searches and are shown on the homepage as small preview cards.

---

## 3. Caching Strategy

The backend uses **node-cache** with:
- TTL: **300 seconds**  
- Maximum of **200 cached entries**



---

## 5. Running the Project

### Backend
cd Backend
npm install
npm run dev

Environment variables required:
PORT=3000
AQI_TOKEN=<your_api_token_here>
BASE_URL=https://api.waqi.info/feed

### Frontend
cd Frontend
cd AIR-QUALITY-INDEX-APP
npm install
npm run dev

VITE_BACKEND_URL=http://localhost:3000

---

## 6. Frontend Features

- Search bar with debounce  
- Full AQI card with detailed metrics  
- Small “recent search” cards for cached cities  
- Simple and clean UI  
- State handled using Redux Toolkit  


---

## 7. Technologies Used

### Backend:
- Node.js  
- Express  
- Axios  
- Node-cache  
- DTO pattern  
- CORS  

### Frontend:
- React (Vite)  
- Redux Toolkit  
- Axios  
- React Hot Toast  
- Plain CSS  

---

## 8. Notes for Reviewers

- The API design follows REST conventions (`/city/:name`, `/cities`)  
- The backend runs entirely locally  
- The response format is standardized through DTOs  
- Caching logic improves performance for repeated city lookups  
- Code is organized to easily extend features like charts or more pollutants  

---

## 9. Author

Abhijit Devghare 
Indira College of Engineering And Management Pune 
Master of Computer Applications  
Pune, India  

