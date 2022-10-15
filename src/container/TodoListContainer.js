import styled from 'styled-components'
import {viewHeightCalc, viewWidthCalc} from "../utils/ViewportCalculate";
import TodoList from "../component/TodoList";
import PageTitle from "../component/PageTitle";

const ContentArea = styled.div`
  width: 100%;
  height: 100%;
  padding: ${viewHeightCalc(24,{})}vh ${viewWidthCalc(52,{})}vw 0 ${viewWidthCalc(52,{})}vw;
`;

const TextArea = styled.input`
  height: ${viewWidthCalc(47,{})}vh;
  width: calc(100% - ${viewWidthCalc(52,{})}vw);
  background: ${props => props.theme.color.gray.grayF};
  border-radius: 8px;
  border: none;
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: ${props => props.theme.color.gray.grayB};
  padding-left: ${viewWidthCalc(24,{})}vw;
  margin-top: ${viewHeightCalc(24,{})}vh;
`

export default function TodoListContainer() {

    return(
        <>
            <ContentArea>
                <PageTitle>Todo List</PageTitle>
                <TextArea placeholder = 'Todo 내용을 입력해주세요'/>
                <TodoList></TodoList>
            </ContentArea>
        </>
    );
}