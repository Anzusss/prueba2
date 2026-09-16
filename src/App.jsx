// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';
import HomePage from '@/pages/HomePage';
import NewProductPage from '@/pages/NewProductPage';
import DetailPage from '@/pages/DetailPage';
import EditProductPage from '@/pages/EditProductPage';
import DashboardPage from '@/pages/DashboardPage'; // <--- Asegúrate de tenerlo importado

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {/* Ruta del Inventario (Proyecto 1) */}
        <Route index element={<HomePage />} />
        <Route path="nuevo" element={<NewProductPage />} />
        <Route path=":id" element={<DetailPage />} />
        <Route path="editar/:id" element={<EditProductPage />} />

        {/* Ruta del Dashboard (Proyecto 2) */}
        <Route path="dashboard" element={<DashboardPage />} />
      </Route>
    </Routes>
  );
}