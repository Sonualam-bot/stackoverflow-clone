export const AuthReducer = (state = null, action) => {
  switch (action.type) {
    case "AUTH":
      localStorage.setItem("Profile", JSON.stringify({ ...action?.payload }));
      return {
        ...state,
        data: action?.payload,
      };
    default:
      return state;
  }
};

export default AuthReducer;
