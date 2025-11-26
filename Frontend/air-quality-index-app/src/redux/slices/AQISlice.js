import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
import axiosInstance from "../../helpers/axiosInstance";

const initialState = {
  City: {},
  Cities: []
};

export const getCityAQI = createAsyncThunk(
  "/getCityAQI",
  async (city, thunkAPI) => {
    try {
      const response = await axiosInstance.get(
        `/getAqi/${city}`
      );
      console.log("REQUEST :", response);
      return response.data;
    } catch (error) {
      toast.error("Failed to fetch AQI data");
      return thunkAPI.rejectWithValue(error.response?.data || "Error");
    }
  }
);


export const getAllCitiesAQI = createAsyncThunk(
  "/getAllCitiesAQI",
  async (_, thunkAPI) => {
    try {
      const response = await axiosInstance.get("/cities");
      console.log("ALL CITIES RESPONSE :", response);
      return response.data;
    } catch (error) {
      toast.error("Failed to fetch recent cities");
      return thunkAPI.rejectWithValue(error.response?.data || "Error");
    }
  }
);

const AQISlice = createSlice({
  name: "aqi",
  initialState,
  reducers: {
    clearCity: (state) => {
      state.City = {};
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCityAQI.fulfilled, (state, action) => {
        if (!action?.payload?.data) {
          state.City = {};
          return;
        }
        state.City = action.payload.data;
      })
      .addCase(getCityAQI.rejected, (state, action) => {
        state.City = {};
      })
      .addCase(getAllCitiesAQI.fulfilled, (state, action) => {
        if (!action?.payload?.data) return;
        state.Cities = action.payload.data;
      });
  }
});

export const { clearCity } = AQISlice.actions;

export default AQISlice.reducer;
