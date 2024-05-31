// export const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case SET_USER:
//       return {
//         ...state,
//         user: action.payload,
//       };
//     default:
//       return state;
//   }
// };


// 메인페이지에서 새로고침시 증발 때문에 로컬스토리지 형태로 변경
import { SET_USER } from './actions';

const userData = () => {
  const user = localStorage.getItem('user');
  // 리턴 안해주면 login정보 휘발됨
  return JSON.parse(user);
};

const initialState = {
  user: userData(),
};

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

