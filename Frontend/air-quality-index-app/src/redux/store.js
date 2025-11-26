import { configureStore } from '@reduxjs/toolkit'
import AQISlice from './slices/AQISlice'

const store = configureStore({
        reducer:{
            aqi:AQISlice
        },
         devTools:true
})

export default store