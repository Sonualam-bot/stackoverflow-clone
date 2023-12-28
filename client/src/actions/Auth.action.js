import * as api from "../api/Auth.api";

export const signup = (authData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signUp(authData);
    dispatch({ type: "AUTH", payload: data });
    navigate(location?.state?.from?.pathname || "/");
  } catch (error) {
    console.error("Error during signup:", error);
  }
};

export const login = (authData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.logIn(authData);
    dispatch({ type: "AUTH", payload: data });
    navigate(location?.state?.from?.pathname || "/");
  } catch (error) {
    console.log(error);
    alert(" user Not Found");
  }
};
