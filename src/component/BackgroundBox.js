import styled from "styled-components";
import NavMenu from "./NavMenu";

const BackGroundBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 983px;
    height: 702px;
    margin: 50px 0 50px 0;
    background: #FFFFFF;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
`;

export default function BackGroundFrame({props}){
    return (
        <>
            <BackGroundBox>
                <NavMenu/>
                {props}
            </BackGroundBox>
        </>
    )
}