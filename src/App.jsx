// src/App.jsx
import { Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from '@/components/layouts/MainLayout';
import HomePage from '@/components/pages/HomePage';
import NewProductPage from '@/components/pages/NewProductPage';
import DetailPage from '@/components/pages/DetailPage';
import EditProductPage from '@/components/pages/EditProductPage';
import DashboardPage from '@/components/pages/DashBoardPage';
import LoginPage from '@/components/pages/LoginPage';
import { Toaster } from 'react-hot-toast';

export default function App() {
  return (
    <>
      <Toaster position="bottom-right" />
      <Routes>
        {/* 1. Mueve el login a su propia ruta */}
        <Route path="/login" element={<LoginPage />} />

        {/* 2. El layout principal agrupa las rutas de la app */}
        <Route path="/" element={<MainLayout />}>
          {/* Redirigir la raíz al inventario por defecto */}
          <Route index element={<Navigate to="/inventario" replace />} />
          <Route path="inventario" element={<HomePage />} />
          <Route path="nuevo" element={<NewProductPage />} />
          <Route path="inventario/:id" element={<DetailPage />} />
          <Route path="editar/:id" element={<EditProductPage />} />
          <Route path="dashboard" element={<DashboardPage />} />
        </Route>
      </Routes>
    </>
  );
}