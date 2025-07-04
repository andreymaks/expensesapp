import "react-native-get-random-values";
import { createContext, useState } from "react";
import { v4 as uuid } from "uuid";

export const CategoriesContext = createContext({
  categories: [],
  addCategory: (name, icon) => {},
  removeCategory: (id) => {},
});

function CategoriesContextProvider({ children }) {
  const dummyCategories = [
    { id: uuid(), name: "Airplane", icon: "airplane" },
    { id: uuid(), name: "Shopping", icon: "basket" },
    { id: uuid(), name: "Transport", icon: "car" },
    { id: uuid(), name: "Calendar", icon: "calendar" },
    { id: uuid(), name: "Desktop", icon: "desktop" },
    { id: uuid(), name: "Football", icon: "football" },
    { id: uuid(), name: "Gift", icon: "gift" },
    { id: uuid(), name: "Bag", icon: "bag" },
  ];

  const [categories, setCategories] = useState(dummyCategories);
  // const [categories, setCategories] = useState([]);

  function createCategory(name, icon) {
    const category = {
      id: uuid(),
      name: name,
      icon: icon,
    };

    return category;
  }

  function addCategory(name, icon) {
    setCategories((prev) => [...prev, createCategory(name, icon)]);
  }

  function removeCategory(id) {
    setCategories(categories.filter((category) => category.id != id));
  }

  const value = {
    categories: categories,
    addCategory: addCategory,
    removeCategory: removeCategory,
  };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
}

export default CategoriesContextProvider;
