export const signupUser = (user, navigate) => {
  return async function (dispatch) {
    dispatch({ type: "loading/user" });
    const response = await fetch("http://localhost:3000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json", "withCredentials": true },

      body: JSON.stringify(user),
    });
    const data = await response.json();

    if (response.ok) {
      dispatch({ type: "signup/user", payload: data });
      localStorage.setItem("session", data[1].session_id);
      
      navigate("/chatroom");
      console.log(data);
    } else {
      dispatch({ type: "error/user", payload: data.errors });
    }
  };
};

const initailState = {
  user: {},
  status: "idle",
  errors: [],
};

export const signupReducer = (state = initailState, action) => {
  switch (action.type) {
    case "loading/user":
      return {
        ...state,
        status: "loading",
      };

    case "signup/user":
      return {
        ...state,
        user: action.payload,
        status: "idle",
      };

    case "error/user":
      return {
        ...state,
        errors: action.payload,
        status: "idle",
      };

    default:
      return state;
  }
};
