import BackGroundFrame from "../component/BackgroundBox";
import styled from "styled-components";
import NavMenu from "../component/NavMenu";
import {Outlet} from "react-router";

const MainPageLayout = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  height:100vh;
  width:100vw;
`;
export default function MainPage() {
    return(
        <>
            <MainPageLayout>
                <BackGroundFrame>
                    <>
                        <NavMenu/>
                        <Outlet/>
                    </>
                </BackGroundFrame>
            </MainPageLayout>
        </>
    );
}