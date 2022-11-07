import styled from "styled-components";
import {viewHeightCalc, viewWidthCalc} from "../utils/ViewportCalculate";

const TodoItemWrap = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${viewHeightCalc(16, {})};
`;

const Checkbox = styled.button`
  box-sizing: border-box;
  width: 28px;
  height: 28px;
  background: white;
  border: 1px solid ${props => props.theme.color.red.redE};
  border-radius: 8px;
  ${props => props.isChecked &&
          `&::after{
       content: url('http://localhost:3000/Check.svg');
    }`
  }

`;

const TodoText = styled.p`
  margin-left: ${viewWidthCalc(24, {})};
  text-decoration: ${props=>props.isChecked ? 'line-through' : 'none'};
`

export default function TodoItem({isChecked = false, title = '내용 없음'}) {

    return (
        <TodoItemWrap>
            <Checkbox isChecked={isChecked}/>
            <TodoText isChecked={isChecked}>{title}</TodoText>
        </TodoItemWrap>
    );
}