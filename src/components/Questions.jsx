//! ---------------------------------------- Import
import { useContext } from "react";
import { UserContext } from "../contexts/QuizeContext";
//! ---------------------------------------- Component (Questions)
export const Questions = () => {
  const { currentStep, dispatch, state } = useContext(UserContext);
  return (
    <>
      {/*//! --------------------------------------- Questions*/}
      <h1 className="text-3xl font-bold mb-6 text-center">
        🧠 Quiz Of Kings 🧠
      </h1>
      {!state.final && (
        <>
          <h2 className="text-xl font-semibold mb-4">{currentStep.question}</h2>
          <div className="grid grid-cols-1 gap-3 mb-6">
            {currentStep.options.map((option, idx) => (
              <button
                onClick={(event) =>
                  dispatch({
                    type: "Answer",
                    userAnswer: option,
                  })
                }
                key={idx}
                className={`${option === state.userAnswer && "bg-orange-500"} px-4 py-2 rounded-xl cursor-pointer border transition-all duration-300`}
              >
                {option}
              </button>
            ))}
          </div>
        </>
      )}
    </>
  );
};
