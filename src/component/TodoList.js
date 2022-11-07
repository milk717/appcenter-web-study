import styled from "styled-components";
import TodoItem from "./TodoItem";
import {viewHeightCalc, viewWidthCalc} from "../utils/ViewportCalculate";

const TodoListWrap = styled.div`
  margin-top: ${viewHeightCalc(32,{})};
  margin-left: ${viewWidthCalc(52,{})};
`;

export default function TodoList(){
    const dummyTodoText = [
        {text: "컴네 과제 하기",checked: false},
        {text: "여주 공연 사회 대본 짜기",checked: true},
        {text: "과 종총 날짜 알아보기",checked: false},
    ]
    return (
        <>
            <TodoListWrap>
                {dummyTodoText.map((item)=>(
                    <TodoItem
                        title={item.text}
                        isChecked={item.checked}
                    />
                ))}
            </TodoListWrap>
        </>
    );
}