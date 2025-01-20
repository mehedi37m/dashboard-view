import { Route, Routes } from "react-router-dom";
import OverviewPage from "./pages/OverviewPage";
import ProductPage from "./pages/Productpage";
import Sidebar from "./components/Sidebar";


function App() {
  return (
    <div className="flex h-screen bg-gray-900 text-gray-100 overflow-hidden">

      {/* bg */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80"></div>
        <div className="absolute inset-0 backdrop-blur-sm"></div>   
              
    </div>

     <Sidebar></Sidebar>
      <Routes>
        <Route path="/" element={<OverviewPage />}></Route>
        <Route path="/products" element={<ProductPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
