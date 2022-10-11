import BackGroundFrame from "../component/BackgroundBox";
import styled from "styled-components";

const MainPageLayout = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
export default function MainPage() {
    return(
        <MainPageLayout>
            <BackGroundFrame>

            </BackGroundFrame>
        </MainPageLayout>
    );
}