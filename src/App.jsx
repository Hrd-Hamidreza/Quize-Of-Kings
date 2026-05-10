//! ---------------------------------------- Import
import { LevelsList } from "./components/LevelsList";
import { Quize } from "./components/Quiz";
import { QuizeContext } from "./contexts/QuizeContext";
//! ---------------------------------------- Variable
//! ---------------------------------------- Component (App)
//! ---------------------------------------- Variable
export default function App() {
  //! ---------------------------------------- Return
  return (
    <QuizeContext>
      <div
        dir="rtl"
        className="min-h-screen w-screen bg-gradient-to-tr from-purple-900 via-indigo-900 to-blue-800 flex items-center justify-center text-white p-6"
      >
        {/*//! --------------------------------------- Levels List*/}
        <LevelsList />
        {/*//! --------------------------------------- Quize*/}
        <Quize />
      </div>
    </QuizeContext>
  );
}
