import {v4 as uuid} from 'uuid'

const initialState = {
    text: "",
    todoList: [
        {key: uuid(), text: "연구실 미팅", checked: false},
        {key: uuid(), text: "토익 공부하기", checked: false},
        {key: uuid(), text: "node.js 공부하기", checked: false},
    ]
};

//2. 액션 타입 정의
/*
 * 액션 타입을 따로 상수로 정의하는 이유
 * 1. 액션 이름이 변경되었을 때 수정이 용이함.
 * 2. 문자열을 바로 사용하는 경우 오타가 났을 때 바로 알려주지 않아 오류 찾기가 어려움.
 */
const CHANGE_TEXT = "CHANGE_TEXT";
const CLEAR_TEXT = "CLEAR_TEXT";
const CHECK_TODO = "CHECK_TODO";
const ADD_TO_LIST = "ADD_TO_LIST";

//3. 액션 생성함수 정의
export const changeText = (text) => ({
    type: CHANGE_TEXT,
    text
});

export const clearText = () => ({
    type: CLEAR_TEXT,
});

export const checkTodo = (key) => ({
    type: CHECK_TODO,
    key
});

export const addToList = (text) => ({
    type: ADD_TO_LIST,
    text
});

//4. 리듀서 만들기
export default function todoReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_TEXT:
            return {
                ...state,
                text: action.text
            };
        case CLEAR_TEXT:
            return {
                ...state,
                text: ''
            };
        case CHECK_TODO:
            return {
                ...state,
                todoList: state.todoList.map((item) => (item.key === action.key ? {
                    ...item,
                    checked: !item.checked
                } : item))
            };
        case ADD_TO_LIST:{
            const addItem = {key: uuid(), text: action.text, checked: false};
            return {
                ...state,
                todoList: state.todoList.concat(addItem)
            };
        }
        default:
            return state;
    }
}
