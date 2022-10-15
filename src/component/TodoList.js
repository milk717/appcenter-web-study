import styled from "styled-components";
import TodoItem from "./TodoItem";
import {viewHeightCalc, viewWidthCalc} from "../utils/ViewportCalculate";

const TodoListWrap = styled.div`
  padding-top: ${viewHeightCalc(32,{})}vh;
`;

export default function TodoList(){
    const dummyTodoText = [
        '마인크래프트 하기',
        '시험공부 해야하는데',
        '전공시험 너무 많아요ㅜㅜ'
    ]
    return (
        <>
            <TodoListWrap>
                {dummyTodoText.map((item)=>(
                    <TodoItem
                        title={item}
                    />
                ))}

            </TodoListWrap>
        </>
    );
}