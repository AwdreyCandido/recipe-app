import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

function FavoritesContextProvider({ children }) {
  const [favoriteMealsId, setFavoriteMealsId] = useState([]);

  function addFavorite(id) {
    setFavoriteMealsId((currentFavorites) => [...currentFavorites, id]);
  }

  function removeFavorite(id) {
    setFavoriteMealsId((currentFavorites) =>
      currentFavorites.filter((mealId) => {
        return mealId !== id;
      })
    );
  }

  return (
    <FavoritesContext.Provider
      value={{
        ids: favoriteMealsId,
        addFavorite,
        removeFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContextProvider;
