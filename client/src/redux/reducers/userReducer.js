const initialState = {
  user: null,
  isAuth: false,
  loading: false,
  error: null
}

export const userReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "LOGIN_REQUSET":
      return {
        ...state,
        loading: true,
        error: null
      }

    case "LOGIN_SUCCESS":
      return {
        ...state,
        loading: false,
        user: payload,
        isAuth: true,
      }

    case "LOGIN_FAILURE":
      return {
        ...state,
        loading: false,
        error: payload
      }
    default:
      return state;
  }
}