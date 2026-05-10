//! ---------------------------------------- Import
import { useContext } from "react";
import { UserContext } from "../contexts/QuizeContext";
//! ---------------------------------------- Component (Result)
export const Result = () => {
  const {
    dispatch,
    state,
    currentQuestion,
    currentLevel,
    levels,
    disabled,
    handleLevels,
  } = useContext(UserContext);
  return (
    //! --------------------------------------- Result
    <div className="text-center">
      <h2 className="text-xl mb-4">نتیجه نهایی شما:</h2>
      <p className="text-4xl font-bold text-green-400 mb-4">{`${state.score}/${currentQuestion.length}`}</p>
      {
        <>
          <p className="mb-6">
            {state.score === currentQuestion.length
              ? "🏆💯آفرین💯🏆"
              : "میتونی دوباره امتحان کنی تا بهتر بشی 💪"}
          </p>
          {(currentLevel <= levels.length ||
            currentQuestion.length !== state.score) && (
            <button
              disabled={disabled}
              onClick={() =>
                state.score === currentQuestion.length
                  ? handleLevels()
                  : dispatch({ type: "FromTheTop" })
              }
              className="cursor-pointer px-6 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-xl"
            >
              {state.score === currentQuestion.length
                ? currentLevel !== levels.length
                  ? "🔓 باز کردن سطح بعدی 🔓"
                  : "شروع از گام اول"
                : "شروع مجدد آزمون 🔁"}
            </button>
          )}
          {/* 🏆🥇🥈🥉🏅🎖️🔓🚀🚩 */}
        </>
      }
    </div>
  );
};
