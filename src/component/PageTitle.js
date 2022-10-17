import styled from "styled-components";
import {viewHeightCalc, viewWidthCalc} from "../utils/ViewportCalculate";

const PageTitleStyle = styled.h1`
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  font-size: 31px;
  line-height: 37px;
  color: ${props=>props.theme.color.black.black0};
  margin-top: ${viewHeightCalc(32,{})};
  margin-left: ${viewWidthCalc(52,{})};
`;

export default function PageTitle(props){
    return(
        <PageTitleStyle>
            {props.children}
        </PageTitleStyle>
    );
}