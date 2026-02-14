import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AdminDashboard from "./pages/AdminDashboard";
import StaffDashboard from "./pages/StaffDashboard";
import Navbar from "./components/Navbar";
import CartPage from "./pages/CartPage";
import SubCategoryPage from "./pages/SubCategoryPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import AllCategoriesPage from "./pages/AllCategoriesPage";
import LoginModal from "./components/LoginModal";
import ProfilePage from "./pages/ProfilePage";
import MaintenanceCard from "./components/MaintenanceCard";
import "./App.css";

function App() {
  return (
    <Router>
      {/* ── Root wrapper ──────────────────────────────────
          overflow-x-hidden  → kills horizontal scroll
          min-h-screen       → page always fills viewport
          w-full             → never exceeds viewport width */}
      <div className="overflow-x-hidden min-h-screen w-full">

        <MaintenanceCard />

        {/* Navbar is fixed → all page content needs top padding */}
        <Navbar />

        <LoginModal />

        {/* ── Page content area ──────────────────────────
            pt-14  = 56px → clears fixed Navbar on mobile
            sm:pt-16 = 64px → clears taller Navbar on desktop */}
        <main className="pt-14 sm:pt-16 w-full overflow-x-hidden">
          <Routes>
            {/* Customer */}
            <Route path="/" element={<HomePage />} />
            <Route path="/profile" element={<ProfilePage />} />

            {/* Admin */}
            <Route path="/admin" element={<AdminDashboard />} />

            {/* Staff */}
            <Route path="/staff" element={<StaffDashboard />} />

            <Route path="/cart" element={<CartPage />} />
            <Route path="/categories" element={<AllCategoriesPage />} />

            {/* cn => category name, cid => categoryId, scid => subCategoryId */}
            <Route
              path="/cn/:categorySlug/:subCategorySlug/cid/:categoryId/scid/:subCategoryId"
              element={<SubCategoryPage />}
            />

            {/* pn => product name, pvid => product viewed id */}
            <Route
              path="/pn/:slug/pvid/:productId"
              element={<ProductDetailPage />}
            />
          </Routes>
        </main>

      </div>
    </Router>
  );
}

export default App;