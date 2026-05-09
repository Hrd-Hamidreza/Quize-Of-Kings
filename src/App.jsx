//! ---------------------------------------- Import
import { Children, useEffect, useReducer, useRef, useState } from "react";
import { array, boolean, number } from "yup";
import { levels } from "./data/levels";
import { initialState, stateReducer } from "./reducers/stateReducer";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { LevelsList } from "./components/LevelsList";
import { Quize } from "./components/Quiz";
//! ---------------------------------------- Component (App)
export default function App() {
  //! ---------------------------------------- Use
  //? -------------------- Custom Hook
  const [setToStorage, getFromStorage] = useLocalStorage();
  //? -------------------- State
  const [disabled, setDisabled] = useState(false);
  const storage = getFromStorage();
  const [unLockedLevels, setUnLockedLevels] = useState(
    storage?.unLockedLevels || [1],
  );
  const [currentLevel, setCurrentLevel] = useState(storage?.currentLevel || 1);
  //? -------------------- Reducer
  const [state, dispatch] = useReducer(
    stateReducer,
    storage?.state || initialState,
  );
  //? -------------------- use Effect
  useEffect(() => {
    setToStorage({ unLockedLevels, currentLevel, state });
  }, [unLockedLevels, currentLevel, state]);
  //! ---------------------------------------- Variables
  //? -------------------- Current Question
  const currentQuestion = levels.find(
    (level) => level.id === currentLevel,
  ).questions;
  //? -------------------- Current Step
  const currentStep = currentQuestion[state.index];
  //! ---------------------------------------- Function
  //? -------------------- Handle Levels
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
    <div
      dir="rtl"
      className="min-h-screen w-screen bg-gradient-to-tr from-purple-900 via-indigo-900 to-blue-800 flex items-center justify-center text-white p-6"
    >
      {/*//! --------------------------------------- Levels List*/}
      <LevelsList
        {...{ levels, unLockedLevels, setCurrentLevel, dispatch, currentLevel }}
      />
      {/*//! --------------------------------------- Quize*/}
      <Quize
        {...{
          state,
          currentStep,
          dispatch,
          currentQuestion,
          handleLevels,
          levels,
          disabled,
          currentLevel,
        }}
      />
    </div>
  );
}
