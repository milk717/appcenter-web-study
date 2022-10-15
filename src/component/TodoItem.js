import styled from "styled-components";
import {viewHeightCalc, viewWidthCalc} from "../utils/ViewportCalculate";

const TodoItemWrap = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: ${viewHeightCalc(16,{})}vh;
`;

const Checkbox = styled.button`
  box-sizing: border-box;
  width: 28px;
  height: 28px;
  background: white;
  border: 1px solid ${props => props.theme.color.red.redE};
  border-radius: 8px;
`;

const TodoText = styled.p`
    margin-left: ${viewWidthCalc(24,{})}vw;
`

export default function TodoItem({isChecked = true, title = '내용 없음'}){

    return (
        <TodoItemWrap>
            <Checkbox/>
            <TodoText>{title}</TodoText>
        </TodoItemWrap>
    );
}