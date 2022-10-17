import styled from "styled-components";
import {viewHeightCalc, viewWidthCalc} from "../utils/ViewportCalculate";

const BackGroundBox = styled.div`
    display: flex;
    height: ${viewHeightCalc(700,{})};
    width: calc(100% - ${viewWidthCalc(500,{})});
    background: #FFFFFF;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
`;

export default function BackGroundFrame(props){
    return (
        <>
            <BackGroundBox>
                {props.children}
            </BackGroundBox>
        </>
    )
}