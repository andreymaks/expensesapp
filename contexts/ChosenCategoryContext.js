import { createContext, useState } from "react";

export const ChosenCategoryContext = createContext({
  chosenCategory: null,
  setChosenCategory: () => {},
});

function ChosenCategoryProvider({ children }) {
  const [chosenCategory, setChosenCategory] = useState(null);

  return (
    <ChosenCategoryContext.Provider
      value={{ chosenCategory, setChosenCategory }}
    >
      {children}
    </ChosenCategoryContext.Provider>
  );
}

export default ChosenCategoryProvider;
