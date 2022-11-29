import PageTitle from "../component/PageTitle";
import {ContentArea} from "./TodoListContainer";
import styled from "styled-components";
import {viewHeightCalc, viewWidthCalc} from "../utils/ViewportCalculate";
import {ReactComponent as SunIcon} from '../resource/icon/SunIcon.svg';
import {getUltraSrtNcst, getVilageFcst} from "../api/weather";
import {useEffect, useState} from "react";
import axios from "axios";
import ApparentCalculate from "../utils/ApparentCalculate";

const LocationWrap = styled.div`
  margin-top: ${viewHeightCalc(52, {})};
  margin-left: ${viewWidthCalc(52, {})};
`;
const AreaLocationText = styled.h1`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 42px;
  line-height: 51px;
  color: ${props => props.theme.color.black.black1};
`;
const LocationText = styled.h2`
  margin-top: ${viewHeightCalc(12, {})};
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: ${props => props.theme.color.gray.grayD};
`;
const WeatherBox = styled.div`
  width: calc(100% - ${viewWidthCalc(104, {})});
  height: 273px;
  margin-left: ${viewWidthCalc(52, {})};
  margin-top: ${viewHeightCalc(52, {})};
  background: ${props => props.theme.color.gray.grayF3};
  border-radius: 14px;
`
const Svg = styled(SunIcon)`
  width: ${viewHeightCalc(90, {})};
  height: ${viewHeightCalc(90, {})};
  margin-top: ${viewHeightCalc(52, {})};
  margin-left: ${viewWidthCalc(52, {})};
`

export default function WeatherContainer() {

    const [nowTemp, setNowTemp] = useState('');
    const [windV, setWindV] = useState('');
    const [rowTemp, setRowTemp] = useState('');
    const [highTemp, setHighTemp] = useState('');


    useEffect(() => {
        getUltraSrtNcst()
            .then(res => {
                const items = res.response.body.items.item
                const currentTemperature = items.filter(item => item.category === 'T1H')[0].obsrValue
                const wind = items.filter(item => item.category === 'WSD')[0].obsrValue
                setWindV(wind)
                setNowTemp(currentTemperature)
            })
            .catch(e => console.log(e));

        getVilageFcst()
            .then(res => {
                const items = res.response.body.items.item
                const rowTemperature = items.filter(item => item.category === 'TMN')[0].fcstValue
                const highTemperature = items.filter(item => item.category === 'TMX')[0].fcstValue
                setRowTemp(rowTemperature)
                setHighTemp(highTemperature)
            })
            .catch(e => console.log(e));
    }, [])

    return (
        <>
            <ContentArea>
                <PageTitle>Weather</PageTitle>
                <LocationWrap>
                    <AreaLocationText>송도동</AreaLocationText>
                    <LocationText>대한민국, 인천광역시</LocationText>
                </LocationWrap>
                <WeatherBox>
                    <Svg/>
                    <p>현재 기온 : {nowTemp} </p>
                    <p>최저 / 최고 : {rowTemp} / {highTemp}</p>
                    <p>체감 온도 : {ApparentCalculate(Number(nowTemp), Number(windV))}</p>
                </WeatherBox>
            </ContentArea>
        </>
    );
}

