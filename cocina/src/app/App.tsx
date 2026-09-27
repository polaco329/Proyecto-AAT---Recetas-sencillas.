import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useParams } from 'react-router';
import { RecipesProvider } from './context/RecipesContext';
import { HomePage } from './pages/HomePage';
import { CategoryPage } from './pages/CategoryPage';
import { RecipeDetailPage } from './pages/RecipeDetailPage';
import { SavedRecipesPage } from './pages/SavedRecipesPage';
import { EconomicRecipesPage } from './pages/EconomicRecipesPage';
import { AdvancedSearchPage } from './pages/AdvancedSearchPage';
import { CookingTipsPage } from './pages/CookingTipsPage';
import { KidsRecipesPage } from './pages/KidsRecipesPage';
import { SupplierContactPage } from './pages/SupplierContactPage';
import { CoursePage } from './pages/CoursePage';
import { BlogPage } from './pages/BlogPage';
import { CVPage } from './pages/CVPage';
import { FAQPage } from './pages/FAQPage';
import { AboutUsPage } from './pages/AboutUsPage';

declare global {
  interface Window {
    APP_BASE_PATH?: string;
  }
}

function CategoryPageWrapper() {
  const { category } = useParams<{ category: string }>();
  return <CategoryPage category={category || ''} />;
}

function AppShell() {
  useEffect(() => {
    document.documentElement.lang = 'es';
  }, []);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-green-800"
      >
        Saltar al contenido principal
      </a>
      <div id="main-content" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/category/:category" element={<CategoryPageWrapper />} />
          <Route path="/recipe/:id" element={<RecipeDetailPage />} />
          <Route path="/saved-recipes" element={<SavedRecipesPage />} />
          <Route path="/economic-recipes" element={<EconomicRecipesPage />} />
          <Route path="/advanced-search" element={<AdvancedSearchPage />} />
          <Route path="/cooking-tips" element={<CookingTipsPage />} />
          <Route path="/kids-recipes" element={<KidsRecipesPage />} />
          <Route path="/supplier-contact" element={<SupplierContactPage />} />
          <Route path="/curso" element={<CoursePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/cv" element={<CVPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/quienes-somos" element={<AboutUsPage />} />
        </Routes>
      </div>
    </>
  );
}

export default function App() {
  return (
    <RecipesProvider>
      <BrowserRouter basename={window.APP_BASE_PATH || '/'}>
        <AppShell />
      </BrowserRouter>
    </RecipesProvider>
  );
}
