import styled from "styled-components";
import TodoItem from "./TodoItem";
import {viewHeightCalc, viewWidthCalc} from "../utils/ViewportCalculate";
import {useState} from "react";

const TodoListWrap = styled.div`
  margin-top: ${viewHeightCalc(32,{})};
  margin-left: ${viewWidthCalc(52,{})};
`;

export default function TodoList(){
    const [todoText, setTodoText] = useState([
        {key: 0, text: "컴네 과제 하기",checked: false},
        {key: 1, text: "여주 공연 사회 대본 짜기",checked: true},
        {key: 2, text: "과 종총 날짜 알아보기",checked: false},
    ]);

    const handleTodoCheck = (e, key) =>{
        console.log(key)
        setTodoText(todoText.map((item)=>(item.key === key ? {...item, checked: !item.checked} : item)))
    }

    return (
        <>
            <TodoListWrap>
                {todoText.map((item)=>(
                    <TodoItem
                        key = {item.key}
                        onClick={(e)=>handleTodoCheck(e, item.key)}
                        title={item.text}
                        isChecked={item.checked}
                    />
                ))}
            </TodoListWrap>
        </>
    );
}