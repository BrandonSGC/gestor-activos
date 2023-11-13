import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar/NavBar.jsx"
import LoginPage from "./pages/login"
import RegisterPage from "./pages/Register.jsx"
import { AssetsPreview } from "./pages/AssetsPreview.jsx"
export const App = () => {

  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/user/assets" element={<AssetsPreview />}/>
        </Routes>
      </Router>
    </div>
  )
}