import { createContext, useEffect, useContext, useReducer } from "react";

export const UserContext = createContext({
  empty: true,
});

export function useUserContext() {
  return useContext(UserContext);
}

const initialState = {
  user: {},
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.payload };
    default:
      throw new Error("Unexpected Action Type");
  }
}

export function UserContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const userData = {
      name: "Jhon Doe",
      avatar: "https://randomuser.me/api/portraits/med/men/75.jpg",
    };

    dispatch({ type: "SET_USER", payload: userData });
  }, []);

  const userContextValue = [state, dispatch];

  return (
    <UserContext.Provider value={userContextValue}>
      {children}
    </UserContext.Provider>
  );
}
