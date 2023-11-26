import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar/NavBar.jsx"
import LoginPage from "./pages/Login"
import RegisterPage from "./pages/Register.jsx"
import ModifyUserPage from "./pages/ModifyUser.jsx"
import { AssetsPreview } from "./pages/AssetsPreview.jsx"
import { AssetDetail } from "./pages/AssetDetail.jsx"
import { AdminRequests } from "./pages/AdminRequests.jsx"
import { TransitWarehouse } from "./pages/TransitWarehouse.jsx"
import { WasteWarehouse } from "./pages/WasteWarehouse.jsx"
export const App = () => {

  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/modify-user" element={<ModifyUserPage />} />
          <Route path="/assets" element={<AssetsPreview />} />
          <Route path="/assets/transit" element={<TransitWarehouse />} />
          <Route path="/assets/waste" element={<WasteWarehouse />} />
          <Route path="/assets/:id" element={<AssetDetail />} />
          <Route path="/admin/requests" element={<AdminRequests />} />
          <Route path="/*" element={<LoginPage />} />
        </Routes>
      </Router>
    </div>
  )
}