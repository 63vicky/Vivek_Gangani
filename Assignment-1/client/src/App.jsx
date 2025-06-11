import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { store } from '@/store/store';
import { AuthProvider } from '@/components/auth/auth-provider';
import { ProtectedRoute } from '@/components/auth/protected-route';
import { LoginPage } from '@/components/auth/login-page';
import { RegisterPage } from '@/components/auth/register-page';
import { TaskDashboard } from '@/components/tasks/task-dashboard';
import { Navigation } from '@/components/layout/navigation';
import { Toaster } from '@/components/ui/sonner';

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <AuthProvider>
          <div className="min-h-screen bg-background">
            <Navigation />
            <main className="container mx-auto px-4 py-8">
              <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route
                  path="/dashboard"
                  element={
                    <ProtectedRoute>
                      <TaskDashboard />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/"
                  element={<Navigate to="/dashboard" replace />}
                />
                <Route
                  path="*"
                  element={<Navigate to="/dashboard" replace />}
                />
              </Routes>
            </main>
            <Toaster richColors position="top-center" />
          </div>
        </AuthProvider>
      </Router>
    </Provider>
  );
}
