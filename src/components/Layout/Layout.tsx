import { Outlet, useLocation } from 'react-router-dom';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { useAuthStore } from '../../stores/authStore';
import { Navigate } from 'react-router-dom';

export const Layout = () => {
  const { isAuthenticated } = useAuthStore();
  const location = useLocation();

  if (!isAuthenticated && !['/login', '/register'].includes(location.pathname)) {
    return <Navigate to="/login" />;
  }

  const isAuthPage = ['/login', '/register'].includes(location.pathname);

  if (isAuthPage) {
    return <Outlet />;
  }

  return (
    <div className="min-h-screen bg-bg-dark text-white">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 lg:ml-64 pt-16 p-6 md:p-10">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
