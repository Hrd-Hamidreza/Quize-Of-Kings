//! ---------------------------------------- Import
import { useContext } from "react";
import { UserContext } from "../contexts/QuizeContext";
//! ---------------------------------------- Component (Levels List)
export const LevelsList = () => {
  const { unLockedLevels, setCurrentLevel, levels, currentLevel } =
    useContext(UserContext);
  return (
    //! --------------------------------------- Levels*/
    <div className="w-[10%] absolute top-[50px] start-[20px] pr-6">
      <h2 className="text-xl font-bold mb-4">سطوح 🧩</h2>
      <ul className="space-y-3">
        {levels.map((level, idx) => {
          return (
            <li key={level.id}>
              <button
                disabled={!unLockedLevels.includes(level.id)}
                onClick={() => {
                  dispatch({ type: "FromTheTop" });
                  setCurrentLevel(level.id);
                }}
                className={`w-full px-4 py-2 rounded-xl transition-all duration-300 text-right font-semibold ${unLockedLevels.includes(level.id) ? "cursor-pointer" : "cursor-no-drop"}
                   ${
                     level.id === currentLevel
                       ? "bg-indigo-500"
                       : unLockedLevels.includes(level.id)
                         ? "bg-white/10 hover:bg-white/20"
                         : "bg-gray-500"
                   }
                   `}
              >
                {level.title}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
