import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import "./app.css";
import AboutCar from "./components/AboutCar";
import OrderForm from "./components/orderForm/OrderForm";
function App() {
     return (
          <div className="app-container">
               <BrowserRouter>
                    <Routes>
                         <Route path="/" element={<Home />} />
                         <Route path="/login" element={<Login />} />
                         <Route path="/aboutcar" element={<AboutCar />} />
                         <Route path="/order" element={<OrderForm />} />
                    </Routes>
               </BrowserRouter>
          </div>
     );
}

export default App;
