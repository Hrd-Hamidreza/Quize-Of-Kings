//! ---------------------------------------- Import
import { createContext, useEffect, useReducer, useRef, useState } from "react";
import { levels } from "../data/levels";
import { initialState, stateReducer } from "../reducers/stateReducer";
import { useLocalStorage } from "../hooks/useLocalStorage";
//! ---------------------------------------- Variable
export const UserContext = createContext();
//! ---------------------------------------- Component (QuizeContext)
export function QuizeContext({ children }) {
  //! ---------------------------------------- Use
  //Todo -------------------- Custom Hook
  const [setToStorage, getFromStorage] = useLocalStorage();
  //? -------------------- State
  const [disabled, setDisabled] = useState(false);
  const storage = getFromStorage();
  const [unLockedLevels, setUnLockedLevels] = useState(
    storage?.unLockedLevels || [1],
  );
  const [currentLevel, setCurrentLevel] = useState(storage?.currentLevel || 1);
  //Todo -------------------- Reducer
  const [state, dispatch] = useReducer(
    stateReducer,
    storage?.state || initialState,
  );
  //Todo -------------------- use Effect
  useEffect(() => {
    setToStorage({ unLockedLevels, currentLevel, state });
  }, [unLockedLevels, currentLevel, state]);
  //! ---------------------------------------- Variables
  //Todo -------------------- Current Question
  const currentQuestion = levels.find(
    (level) => level.id === currentLevel,
  ).questions;
  //Todo -------------------- Current Step
  const currentStep = currentQuestion[state.index];
  //! ---------------------------------------- Function
  //Todo -------------------- Handle Levels
  const handleLevels = () => {
    if (currentLevel === levels.length) {
      setDisabled(true);
      localStorage.removeItem("QuizeOfKings");
      window.location.reload();
    } else {
      //Todo -------------------- CallBack
      setCurrentLevel((pre) => pre + 1);
      dispatch({ type: "FromTheTop" });
      //Todo -------------------- Condition
      if (!unLockedLevels.includes(currentLevel + 1)) {
        setUnLockedLevels([...unLockedLevels, currentLevel + 1]);
      }
    }
  };
  //! ---------------------------------------- Return
  return (
    <UserContext.Provider
      value={{
        state,
        currentStep,
        dispatch,
        currentQuestion,
        handleLevels,
        levels,
        disabled,
        currentLevel,
        unLockedLevels,
        setCurrentLevel,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
