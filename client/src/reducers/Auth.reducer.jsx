const initialState = {};

export const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case "AUTH":
      localStorage.setItem("Profile", JSON.stringify({ ...action?.payload }));
      return {
        ...state,
        data: action?.payload,
      };
    default:
      break;
  }
};

export default AuthReducer;
