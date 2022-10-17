import { useUserContext } from "../../context/UserContext";

export default function InputName() {
  const [state, dispatch] = useUserContext();

  return (
    <input
      type="text"
      placeholder="Change Name"
      value={state.user.name}
      onChange={(e) =>
        dispatch({
          type: "SET_USER",
          payload: { ...state.user, name: e.target.value },
        })
      }
    />
  );
}
