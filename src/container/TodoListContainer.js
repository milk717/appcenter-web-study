import styled from 'styled-components'
import {viewHeightCalc, viewWidthCalc} from "../utils/ViewportCalculate";
import TodoList from "../component/TodoList";
import PageTitle from "../component/PageTitle";
import {useState} from "react";

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
    const [todoText, setTodoText] = useState([
        {key: 0, text: "컴네 과제 하기",checked: false},
        {key: 1, text: "여주 공연 사회 대본 짜기",checked: true},
        {key: 2, text: "과 종총 날짜 알아보기",checked: false},
    ]);
    const [todoTextInput, setTodoTextInput] = useState('')

    const handleTodoCheck = (e, key) =>{
        setTodoText(todoText.map((item)=>(item.key === key ? {...item, checked: !item.checked} : item)))
    }

    const handleTodoInputChange = (e) =>{
        console.log(e.target.value)
        setTodoTextInput(e.target.value)
    }

    const handleTodoSubmit = (e)=>{
        console.log(e.target.value)
        if(e.key === 'Enter' && e.target.value){
            setTodoText(todoText.concat({key: todoText.length, text: e.target.value, checked: false}))
            setTodoTextInput('')
        }
    }

    return(
        <>
            <ContentArea>
                <PageTitle>Todo List</PageTitle>
                <TextArea
                    placeholder = 'Todo 내용을 입력해주세요'
                    value={todoTextInput}
                    onChange={handleTodoInputChange}
                    onKeyDown={handleTodoSubmit}
                />
                <TodoList
                    todoContentList={todoText}
                    onClick={handleTodoCheck}
                />
            </ContentArea>
        </>
    );
}