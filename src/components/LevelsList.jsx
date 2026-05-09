//! ---------------------------------------- Import
//! ---------------------------------------- Component (Levels List)
export const LevelsList = (prop) => {
  return (
    //! --------------------------------------- Levels*/
    <div className="w-[10%] absolute top-[50px] start-[20px] pr-6">
      <h2 className="text-xl font-bold mb-4">سطوح 🧩</h2>
      <ul className="space-y-3">
        {prop.levels.map((level, idx) => {
          return (
            <li key={level.id}>
              <button
                disabled={!prop.unLockedLevels.includes(level.id)}
                onClick={() => {
                  prop.dispatch({ type: "FromTheTop" });
                  prop.setCurrentLevel(level.id);
                }}
                className={`w-full px-4 py-2 rounded-xl transition-all duration-300 text-right font-semibold ${prop.unLockedLevels.includes(level.id) ? "cursor-pointer" : "cursor-no-drop"}
                   ${
                     level.id === prop.currentLevel
                       ? "bg-indigo-500"
                       : prop.unLockedLevels.includes(level.id)
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
