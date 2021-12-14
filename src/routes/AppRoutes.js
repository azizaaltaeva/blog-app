import React from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Register from '../components/Register/Register';
import Login from '../components/Register/Login';
import BlogsPage from '../pages/BlogsPage';
import HomePage from '../pages/HomePage';
import PlacesPage from '../pages/PlacesPage';
import ProfilePage from '../pages/ProfilePage';
import Create from '../components/CRUD/Create/Create';
import Edit from '../components/CRUD/Edit/Edit';
import BlogDetailPage from '../pages/BlogDetailPage';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/blogs/:id" element={<BlogDetailPage />} />
        <Route path="/places" element={<PlacesPage />} />
        <Route path="/profile-account" element={<ProfilePage />} />
        <Route path="/create" element={<Create />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
