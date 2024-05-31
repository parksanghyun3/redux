// export const setUser = (user) => ({
//   type: 'SET_USER',
//   payload: user,
// });

export const SET_USER = 'SET_USER';

export const setUser = (user) => {
  saveUserData(user);
  return {
    type: SET_USER,
    payload: user,
  };
};

const saveUserData = (user) => {
  localStorage.setItem('user', JSON.stringify(user));
};
