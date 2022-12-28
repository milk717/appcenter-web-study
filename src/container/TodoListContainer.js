import styled from 'styled-components'
import {viewHeightCalc, viewWidthCalc} from "../utils/ViewportCalculate";
import TodoList from "../component/TodoList";
import PageTitle from "../component/PageTitle";
import {useState} from "react";
import {addToList, changeText, checkTodo, clearText} from "../modules/todoReducer";
import {useDispatch, useSelector} from "react-redux";
import uuid from "uuid";

export const ContentArea = styled.div`
  height: 100%;
  width: 100%;
`;

const TextArea = styled.input`
  height: ${viewHeightCalc(47,{})};
  width: calc(100% - ${viewWidthCalc(104,{})});
  background: ${props => props.theme.color.gray.grayF};
  border-radius: 8px;
  border: none;
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: ${props => props.theme.color.gray.grayB};
  padding-left: ${viewWidthCalc(24,{})};
  margin-top: ${viewHeightCalc(24,{})};
  margin-left: ${viewWidthCalc(52,{})};
`

export default function TodoListContainer() {
    const dispatch = useDispatch();
    const todoList = useSelector(state=>state.todoReducer.todoList);
    const inputText = useSelector(state=>state.todoReducer.text);

    const handleTodoCheck = (e, key) =>{
        dispatch(checkTodo(key));
    }

    const handleTodoInputChange = (e) =>{
        dispatch(changeText(e.target.value));
    }

    const handleTodoSubmit = (e)=>{
        if(e.key === 'Enter' && e.target.value){
            dispatch(addToList(e.target.value))
            dispatch(clearText())
        }
    }

    return(
        <>
            <ContentArea>
                <PageTitle>Todo List</PageTitle>
                <TextArea
                    placeholder = 'Todo 내용을 입력해주세요'
                    value={inputText}
                    onChange={handleTodoInputChange}
                    onKeyDown={handleTodoSubmit}
                />
                <TodoList
                    todoContentList={todoList}
                    onClick={handleTodoCheck}
                />
            </ContentArea>
        </>
    );
}