import {navMenuText} from "../resource/strings";
import {black, red} from "../resource/style/theme";
import styled from "styled-components";
import {viewHeightCalc, viewWidthCalc} from "../utils/ViewportCalculate";
import {useNavigate} from "react-router";

const NavMenuWrap = styled.div`
  display: flex;
  height: 100%;
`;

const VerticalBar = styled.div`
  width: 0;
  height: 100%;
  margin-left: ${viewWidthCalc(72,{})};
  border: 1px solid #D8D8D8;
`;

const MenuListWrap = styled.div`
  display: flex;
  margin: 
          ${viewHeightCalc(140,{})}  
          0
          0 
          0;
  flex-direction: column;
`;

const MenuTextItem = styled.h2`
  margin: 0 0 ${viewHeightCalc(24,{})}  ${viewWidthCalc(52,{})};
  width: 100px;
  font-family: 'Lato';
  font-style: normal;
  font-weight: ${props => props.select ? 700 : 400};
  font-size: 22px;
  line-height: 26px;
  color: ${props => props.select ? props.theme.color.red.redE : props.theme.color.black.black5};
`
export default function NavMenu({urlPathname = 'todos'}) {
    const navigate = useNavigate();

    return (
        <>
            <NavMenuWrap>
                <MenuListWrap>
                    {navMenuText.map((item) => (
                        <MenuTextItem key={item.url} select={item.url === urlPathname}
                                      onClick={() =>{navigate(`${item.url}`)}}
                        >
                            {item.text}
                        </MenuTextItem>
                    ))}
                </MenuListWrap>
                <VerticalBar/>
            </NavMenuWrap>
        </>
    );
}