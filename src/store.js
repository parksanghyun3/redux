import { createStore } from 'redux';

// 초기 상태
const initialState = {
  user: null,
};

// 액션 타입 정의
const SET_USER = 'SET_USER';

// 리듀서 함수
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

// 스토어 생성
const store = createStore(reducer);

export default store;
