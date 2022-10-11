import {navMenuText} from "../resource/strings";
import {black, red} from "../resource/colors";
import styled from "styled-components";


const VerticalBar = styled.div`
  width: 702px;
  height: 0px;
  left: 436px;
  top: 161px;
  border: 1px solid #D8D8D8;
  transform: rotate(90deg);
`
const MenuTextItem = styled.h2`
  position: absolute;
  width: 89px;
  height: 26px;
  left: 280px;
  top: 300px;

  font-family: 'Lato';
  font-style: normal;
  font-weight: ${props => props.select ? 700 : 400};
  font-size: 22px;
  line-height: 26px;
  color: ${props => props.select ? red.redE : black.black5};
`
export default function NavMenu({selectValue = 'Todo List'}) {
    return (
        <>
            {navMenuText.map((item) => (
                <MenuTextItem key={item.key} select={item.text === selectValue}>{item.text}</MenuTextItem>
            ))}
            <VerticalBar/>
        </>
    );
}