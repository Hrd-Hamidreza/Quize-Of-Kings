//! ---------------------------------------- Local Storage
const STORAGE_KEY = "QuizeOfKings";
//! ---------------------------------------- Custom Hook
export const useLocalStorage = () => {
  //? -------------------- Set Storage
  const setToStorage = (data) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  };
  //? -------------------- Get Storage
  const getFromStorage = () => {
    const finalVersion = localStorage.getItem(STORAGE_KEY);
    if (finalVersion) {
      return JSON.parse(finalVersion);
    }
  };
  return [setToStorage, getFromStorage];
};
