import PageTitle from "../component/PageTitle";
import {ContentArea} from "./TodoListContainer";
import styled from "styled-components";
import {viewHeightCalc, viewWidthCalc} from "../utils/ViewportCalculate";
import {ReactComponent as SunIcon} from '../resource/icon/SunIcon.svg';
import {useEffect} from "react";
import ApparentCalculate from "../utils/ApparentCalculate";
import {useWeatherStore} from "../store/weatherStore";

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
    const {weatherInfo, setWeatherInfo, fetchUltraSrtNcst,fetchVilageFcst} = useWeatherStore();
    const {nowTemp, highTemp, rowTemp, windV, feelTemp} = weatherInfo;

    useEffect(() => {
        fetchUltraSrtNcst().then(() => setWeatherInfo('feelTemp',ApparentCalculate(Number(nowTemp), Number(windV))));
        fetchVilageFcst();
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
                    <p>체감 온도 : {feelTemp}</p>
                </WeatherBox>
            </ContentArea>
        </>
    );
}

