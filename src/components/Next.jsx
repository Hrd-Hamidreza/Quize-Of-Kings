//! ---------------------------------------- Import
//! ---------------------------------------- Component (Next)
export const Next = (props) => {
  return (
    //! --------------------------------------- Next
    <div className="flex justify-end">
      <button
        onClick={() =>
          props.dispatch({
            type: "Next",
            final:
              props.currentQuestion.length - 1 === props.state.index
                ? true
                : false,
            question: props.currentStep,
            questions: props.currentQuestion,
          })
        }
        disabled={
          !props.state.userAnswer ||
          props.state.index === props.currentQuestion.length
        }
        className="cursor-pointer px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-xl"
      >
        {props.state.index === props.currentQuestion.length - 1
          ? "تمام"
          : "سوال بعدی"}
      </button>
    </div>
  );
};
