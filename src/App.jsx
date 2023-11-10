import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar/NavBar.jsx"
import LoginPage from "./pages/login"
export const App = () => {

  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/login" element={<LoginPage />} />

        </Routes>
      </Router>
    </div>
  )
}