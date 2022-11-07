import styled from "styled-components";
import TodoItem from "./TodoItem";
import {viewHeightCalc, viewWidthCalc} from "../utils/ViewportCalculate";
import {useState} from "react";

const TodoListWrap = styled.div`
  margin-top: ${viewHeightCalc(32,{})};
  margin-left: ${viewWidthCalc(52,{})};
`;

export default function TodoList({onClick, todoContentList}){


    return (
        <>
            <TodoListWrap>
                {todoContentList.map((item)=>(
                    <TodoItem
                        key = {item.key}
                        onClick={(e)=>onClick(e, item.key)}
                        title={item.text}
                        isChecked={item.checked}
                    />
                ))}
            </TodoListWrap>
        </>
    );
}