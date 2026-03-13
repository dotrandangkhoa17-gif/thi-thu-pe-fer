import Navbar from "@/components/Navbar"
import HomePage from "@/pages/HomePage"

function App() {
  return (
    <div className="relative flex min-h-screen flex-col bg-background font-sans antialiased">
      <Navbar />
      <HomePage />

      {/* Footer */}
      <footer className="border-t py-6 text-center text-sm text-muted-foreground">
        <div className="container">
          © 2026 StudyHub — FER202 Practical Exam. Built with React &amp; Supabase.
        </div>
      </footer>
    </div>
  )
}

export default App
