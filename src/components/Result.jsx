//! ---------------------------------------- Import
//! ---------------------------------------- Component (Result)
export const Result = (props) => {
  return (
    //! --------------------------------------- Result
    <div className="text-center">
      <h2 className="text-xl mb-4">نتیجه نهایی شما:</h2>
      <p className="text-4xl font-bold text-green-400 mb-4">{`${props.state.score}/${props.currentQuestion.length}`}</p>
      {
        <>
          <p className="mb-6">
            {props.state.score === props.currentQuestion.length
              ? "🏆💯آفرین💯🏆"
              : "میتونی دوباره امتحان کنی تا بهتر بشی 💪"}
          </p>
          {(props.currentLevel <= props.levels.length ||
            props.currentQuestion.length !== props.state.score) && (
            <button
              disabled={props.disabled}
              onClick={() =>
                props.state.score === props.currentQuestion.length
                  ? props.handleLevels()
                  : props.dispatch({ type: "FromTheTop" })
              }
              className="cursor-pointer px-6 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-xl"
            >
              {props.state.score === props.currentQuestion.length
                ? props.currentLevel !== props.levels.length
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
