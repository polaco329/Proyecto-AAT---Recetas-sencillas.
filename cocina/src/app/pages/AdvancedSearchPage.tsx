import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Search } from 'lucide-react';
import { RecipeCard } from '../components/RecipeCard';
import { allRecipes } from '../data/recipes';
import { PageFooter } from '../components/PageFooter';
import { PageHeader } from '../components/PageHeader';
import { PageSEO } from '../components/PageSEO';

export function AdvancedSearchPage() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todas');

  const categories = ['Todas', 'Postres', 'Carnes', 'Vegano', 'Rápido', 'Desayuno', 'Merienda'];

  const filteredRecipes = allRecipes.filter((recipe) => {
    const matchesSearch = recipe.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recipe.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recipe.ingredients.some((ing) => ing.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesCategory = selectedCategory === 'Todas' || recipe.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-green-50">
      <PageSEO
        title="Búsqueda Avanzada de Recetas"
        description="Encuentra recetas sencillas por nombre, ingrediente o categoría. Busca postres, carnes, vegano, desayunos y más en segundos."
        path="/advanced-search"
      />
      <PageHeader
        title="Búsqueda Avanzada"
        subtitle="Encuentra recetas por nombre, ingrediente o categoría"
      />

      <div className="container mx-auto px-4 py-8">
        <main>
          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl text-green-800 mb-4 border-b-2 border-green-300 pb-2">
              Filtrar recetas sencillas
            </h2>
          </section>

          <div className="bg-white rounded-xl shadow-md p-4 sm:p-6 mb-8">
            <div className="mb-4">
              <label htmlFor="search-recipes" className="block text-sm font-medium text-gray-700 mb-2">
                Buscar por nombre, ingrediente o descripción
              </label>
              <div className="relative">
                <input
                  id="search-recipes"
                  type="search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Ej: chocolate, pollo, vegano..."
                  className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" aria-hidden="true" />
              </div>
            </div>

            <div>
              <fieldset>
                <legend className="block text-sm font-medium text-gray-700 mb-2">Categoría</legend>
                <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrar por categoría">
                  {categories.map((category) => (
                    <button
                      key={category}
                      type="button"
                      onClick={() => setSelectedCategory(category)}
                      aria-pressed={selectedCategory === category}
                      className={`px-3 sm:px-4 py-2 rounded-lg transition-colors text-sm sm:text-base ${
                        selectedCategory === category
                          ? 'bg-green-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </fieldset>
            </div>
          </div>

          <div className="mb-4">
            <p className="text-gray-600">
              {filteredRecipes.length} {filteredRecipes.length === 1 ? 'receta encontrada' : 'recetas encontradas'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRecipes.map((recipe) => (
              <RecipeCard
                key={recipe.id}
                recipe={recipe}
                onClick={() => navigate(`/recipe/${recipe.id}`)}
              />
            ))}
          </div>

          {filteredRecipes.length === 0 && (
            <div className="text-center py-12 bg-white rounded-xl shadow-md px-4">
              <div className="text-6xl mb-4" aria-hidden="true">🔍</div>
              <h2 className="text-gray-800 mb-2">No se encontraron recetas</h2>
              <p className="text-gray-600">Intenta con otros términos de búsqueda</p>
            </div>
          )}
        </main>
      </div>
      <PageFooter currentPage="/advanced-search" />
    </div>
  );
}
