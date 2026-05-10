//! ---------------------------------------- Import
import { useContext } from "react";
import { UserContext } from "../contexts/QuizeContext";
//! ---------------------------------------- Component (Next)
export const Next = () => {
  const { dispatch, currentQuestion, state, currentStep } =
    useContext(UserContext);
  return (
    //! --------------------------------------- Next
    <div className="flex justify-end">
      <button
        onClick={() =>
          dispatch({
            type: "Next",
            final: currentQuestion.length - 1 === state.index ? true : false,
            question: currentStep,
            questions: currentQuestion,
          })
        }
        disabled={!state.userAnswer || state.index === currentQuestion.length}
        className="cursor-pointer px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-xl"
      >
        {state.index === currentQuestion.length - 1 ? "تمام" : "سوال بعدی"}
      </button>
    </div>
  );
};
