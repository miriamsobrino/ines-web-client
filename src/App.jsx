import { Routes, Route } from 'react-router-dom';
import './App.css';
import AppLayout from './layouts/AppLayout';
import BlogArticles from './pages/BlogArticles';
import BlogDetail from './pages/BlogDetail';
import Admin from './pages/Admin';
import AdminEdit from './pages/AdminEdit';
import AdminCreate from './pages/AdminCreate';
import Home from './pages/Home';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path='/' element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path='blog/articles' element={<BlogArticles />} />
          <Route path='blog/articles/:id' element={<BlogDetail />} />
        </Route>
        <Route path='admin' element={<Admin />} />
        <Route path='admin/edit' element={<AdminEdit />} />
        <Route path='admin/create' element={<AdminCreate />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
