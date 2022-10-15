import styled from "styled-components";

const PageTitleStyle = styled.h1`
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  font-size: 31px;
  line-height: 37px;
  color: #000000;
`;

export default function PageTitle(props){
    return(
        <PageTitleStyle>
            {props.children}
    </PageTitleStyle>
    );
}