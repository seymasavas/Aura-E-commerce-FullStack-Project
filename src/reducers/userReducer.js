const initialState = {
  user: {},
  token: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return { ...state, isLoading: true, error: null };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token,
      };
    case "LOGIN_FAILURE":
      return { ...state, isLoading: false, error: action.payload };
    case "LOGOUT":
      return { ...initialState };
    default:
      return state;
  }
};
export default userReducer;
