import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AuthProvider } from "@/contexts/AuthContext"
import Navbar from "@/components/Navbar"
import ProtectedRoute from "@/components/ProtectedRoute"
import HomePage from "@/pages/HomePage"
import LoginPage from "@/pages/LoginPage"
import RegisterPage from "@/pages/RegisterPage"
import DashboardPage from "@/pages/DashboardPage"

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <div className="relative flex min-h-screen flex-col bg-background font-sans antialiased">
          <Navbar />

          <Routes>
            {/* Public */}
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />

            {/* Protected */}
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <DashboardPage />
                </ProtectedRoute>
              }
            />
          </Routes>

          {/* Footer */}
          <footer className="mt-auto border-t py-6 text-center text-sm text-muted-foreground">
            <div className="container">
              © 2026 StudyHub — FER202 Practical Exam. Built with React &amp; Supabase.
            </div>
          </footer>
        </div>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
