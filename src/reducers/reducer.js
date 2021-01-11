import userActions from '../actions/userActions';

export const initialState = {
  user: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case userActions.SET_USER:
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export default reducer;
