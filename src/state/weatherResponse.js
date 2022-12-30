import {atom, selector} from "recoil";
import {getUltraSrtNcst, getVilageFcst} from "../api/weather";


export const countState = atom({
    key: 'countState',
    default: 0
})

export const weatherResponseSelector = selector({
    key: 'weatherResponseSelector',
    get: ({get}) => {
        let resValue = {
            nowTemp: 0,
            highTemp: 0,
            rowTemp: 0,
            windV: 0,
        }
        getUltraSrtNcst()
            .then(res => {
                const items = res.response.body?.items?.item
                const currentTemperature = items.filter(item => item.category === 'T1H')[0].obsrValue
                const wind = items.filter(item => item.category === 'WSD')[0].obsrValue
                resValue = {...resValue, nowTemp: currentTemperature, windV: wind}
            }).catch(err => {throw err})
        return getVilageFcst()
            .then(res => {
                const items = res.response.body.items.item
                const rowTemperature = items.filter(item => item.category === 'TMN')[0].fcstValue
                const highTemperature = items.filter(item => item.category === 'TMX')[0].fcstValue
                return {...resValue, rowTemp: rowTemperature,highTemp: highTemperature}
            }).catch(err => {throw err})
    },
});