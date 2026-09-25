const initialState = {
  user: {},
  creditCards: [],
  theme: "light",
  roles: [],
  addressList: [],
  language: "tr",
};

const clientReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.payload };
    case "SET_LANGUAGE":
      return { ...state, language: action.payload };
    case "SET_THEME":
      return { ...state, theme: action.payload };
    case "SET_ROLES":
      return { ...state, roles: action.payload };
    default:
      return state;
  }
};

export default clientReducer;
