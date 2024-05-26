const initialState = {
  user: null,
};

// 액션 타입 정의
export const SET_USER = 'SET_USER';

// 리듀서 함수
export const reducer = (state = initialState, action) => {
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
