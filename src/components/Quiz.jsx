//! ---------------------------------------- Import
import { useContext } from "react";
import { UserContext } from "../contexts/QuizeContext";
import { Questions } from "./Questions";
import { Next } from "./Next";
import { Result } from "./Result";
//! ---------------------------------------- Component (Quize)
export const Quize = () => {
  const { state } = useContext(UserContext);
  return (
    <div className="w-[50%] bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-2xl">
      {/*//! --------------------------------------- Questions*/}
      <Questions />
      {/*//! --------------------------------------- Next*/}
      {state.userAnswer && <Next />}
      {/*//! --------------------------------------- Result*/}
      {state.final && <Result />}
    </div>
  );
};
