import { createContext, useContext, useState, ReactNode } from 'react';

export interface Recipe {
  id: string;
  name: string;
  category: string;
  description: string;
  ingredients: string[];
  steps: string[];
  price: number;
  prepTime: string;
  servings: number;
  image?: string;
}

interface RecipesContextType {
  savedRecipes: Recipe[];
  saveRecipe: (recipe: Recipe) => void;
  unsaveRecipe: (recipeId: string) => void;
  isRecipeSaved: (recipeId: string) => boolean;
}

const RecipesContext = createContext<RecipesContextType | undefined>(undefined);

export function RecipesProvider({ children }: { children: ReactNode }) {
  const [savedRecipes, setSavedRecipes] = useState<Recipe[]>([]);

  const saveRecipe = (recipe: Recipe) => {
    setSavedRecipes((prev) => {
      if (prev.find((r) => r.id === recipe.id)) {
        return prev;
      }
      return [...prev, recipe];
    });
  };

  const unsaveRecipe = (recipeId: string) => {
    setSavedRecipes((prev) => prev.filter((r) => r.id !== recipeId));
  };

  const isRecipeSaved = (recipeId: string) => {
    return savedRecipes.some((r) => r.id === recipeId);
  };

  return (
    <RecipesContext.Provider value={{ savedRecipes, saveRecipe, unsaveRecipe, isRecipeSaved }}>
      {children}
    </RecipesContext.Provider>
  );
}

export function useRecipes() {
  const context = useContext(RecipesContext);
  if (!context) {
    throw new Error('useRecipes must be used within RecipesProvider');
  }
  return context;
}
