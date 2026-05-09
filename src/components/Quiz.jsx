//! ---------------------------------------- Import
import { Questions } from "./Questions";
import { Next } from "./Next";
import { Result } from "./Result";
//! ---------------------------------------- Component (Quize)
export const Quize = (props) => {
  return (
    <div className="w-[50%] bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-2xl">
      {/*//! --------------------------------------- Questions*/}
      <Questions {...props} />
      {/*//! --------------------------------------- Next*/}
      {props.state.userAnswer && <Next {...props} />}
      {/*//! --------------------------------------- Result*/}
      {props.state.final && <Result {...props} />}
    </div>
  );
};
