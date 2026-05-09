//! ---------------------------------------- Import
//! ---------------------------------------- Component (Questions)
export const Questions = (props) => {
  return (
    <>
      {/*//! --------------------------------------- Questions*/}
      <h1 className="text-3xl font-bold mb-6 text-center">
        🧠 Quiz Of Kings 🧠
      </h1>
      {!props.state.final && (
        <>
          <h2 className="text-xl font-semibold mb-4">
            {props.currentStep.question}
          </h2>
          <div className="grid grid-cols-1 gap-3 mb-6">
            {props.currentStep.options.map((option, idx) => (
              <button
                onClick={(event) =>
                  props.dispatch({
                    type: "Answer",
                    userAnswer: option,
                  })
                }
                key={idx}
                className={`${option === props.state.userAnswer && "bg-orange-500"} px-4 py-2 rounded-xl cursor-pointer border transition-all duration-300`}
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
