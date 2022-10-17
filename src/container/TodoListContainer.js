import styled from 'styled-components'
import {viewHeightCalc, viewWidthCalc} from "../utils/ViewportCalculate";
import TodoList from "../component/TodoList";
import PageTitle from "../component/PageTitle";

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