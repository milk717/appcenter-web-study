import BackGroundFrame from "../component/BackgroundBox";
import styled from "styled-components";
import NavMenu from "../component/NavMenu";
import {Outlet, useLocation, useNavigate, useParams} from "react-router";

const MainPageLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;
export default function MainPage() {
    const location = useLocation();

    return (
        <>
            <MainPageLayout>
                <BackGroundFrame>
                    <>
                        <NavMenu urlPathname={location.pathname}/>
                        <Outlet/>
                    </>
                </BackGroundFrame>
            </MainPageLayout>
        </>
    );
}