import { Recipe } from '../context/RecipesContext';
import { useRecipes } from '../context/RecipesContext';
import { Bookmark, Clock, Users, DollarSign } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { getRecipeImageMeta } from '../data/recipeImages';

interface RecipeCardProps {
  recipe: Recipe;
  onClick: () => void;
}

export function RecipeCard({ recipe, onClick }: RecipeCardProps) {
  const { isRecipeSaved, saveRecipe, unsaveRecipe } = useRecipes();
  const saved = isRecipeSaved(recipe.id);
  const { src, alt } = getRecipeImageMeta(recipe);

  const handleSave = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (saved) {
      unsaveRecipe(recipe.id);
    } else {
      saveRecipe(recipe);
    }
  };

  return (
    <article
      onClick={onClick}
      className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden group relative"
    >
      <button
        onClick={handleSave}
        aria-label={saved ? 'Quitar de guardadas' : 'Guardar receta'}
        className={`absolute top-3 right-3 p-2 rounded-full transition-all z-10 ${
          saved ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-green-50'
        }`}
      >
        <Bookmark className={`w-5 h-5 ${saved ? 'fill-current' : ''}`} />
      </button>
      <ImageWithFallback
        src={src}
        alt={alt}
        loading="lazy"
        width={640}
        height={360}
        className="w-full h-40 sm:h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="font-bold text-lg text-gray-800 mb-2 group-hover:text-green-600 transition-colors pr-10">
          {recipe.name}
        </h3>
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">{recipe.description}</p>
        <div className="flex flex-wrap items-center justify-between gap-2 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" aria-hidden="true" />
            <span>{recipe.prepTime}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" aria-hidden="true" />
            <span>{recipe.servings}</span>
          </div>
          <div className="flex items-center gap-1">
            <DollarSign className="w-4 h-4" aria-hidden="true" />
            <span>${recipe.price}</span>
          </div>
        </div>
      </div>
    </article>
  );
}
