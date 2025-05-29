const initialState = {
  user: null,
  isAuth: false,
  loading: false,
  error: null
}

export const userReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SET_USER":
      return {
        ...state,
        user: payload,
        isAuth: true
      }

    case "LOGOUT":
      return initialState
    default:
      return state;
  }
}