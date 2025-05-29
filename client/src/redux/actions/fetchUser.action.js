import axiosInstance from "../../axios"

export const fetchUser = () => {
  return async (dispatch) => {
    try {
      const res = await axiosInstance.get('/auth/me')
      dispatch({ type: "SET_USER", payload: res.data.user })
    } catch (err) {
      console.log(err);

      dispatch({ type: "LOGOUT" })
    }
  }
}