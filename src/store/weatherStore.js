import create from "zustand";

export const useWeatherStore = create((set)=>({
    weatherInfo:{
        nowTemp: 0,
        highTemp: 0,
        rowTemp: 0,
        windV: 0,
    },
    setWeatherInfo: (key, value) => {
        set((state)=>({
            weatherInfo: {
                ...state.weatherInfo,
                [key]: value,
            }
        }));
    },
}))