//! ---------------------------------------- Variables
//? -------------------- Initial State
export const initialState = {
  index: 0,
  score: 0,
  final: false,
  userAnswer: "",
};
//! ---------------------------------------- Function
export const stateReducer = (state, action) => {
  switch (action.type) {
    // ! -------------------- Case 1
    case "Answer":
      return {
        ...state,
        userAnswer: action.userAnswer,
      };
    // ! -------------------- Case 2
    case "Next":
      return {
        ...state,
        index:
          state.index < action.questions.length - 1
            ? state.index + 1
            : state.index,
        score:
          action.question.answer === state.userAnswer
            ? state.score + 1
            : state.score,
        final: action.final,
        userAnswer: "",
      };
    // ! -------------------- Case 3
    case "FromTheTop":
      return initialState;
  }
};
