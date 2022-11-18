import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom"; 
import "./app.css"; 
import Sidebar from "./components/Sidebar";
import FirstHelp from "./pages/FirstHelp";
import { useSelector , useDispatch } from 'react-redux'
import { close } from "./rtk/slice/sidebarSlice";
import Overlay from "./pages/Overlay";

function App() {

     const active = useSelector((state) => state.sidebar.active)
     const dispatch = useDispatch()

     return (
          <div className="app-container">
               <BrowserRouter>
               <Sidebar/>
               {active ? <div onClick={() => dispatch(close())}><Overlay /> </div>  : ''}
                    <Routes>
                         <Route path="/" element={<Home />} />
                         <Route path="/birinchi-yordam" element={<FirstHelp />} />
                         {/* <Route path="/login" element={<Login />} />
                         <Route path="/aboutcar" element={<AboutCar />} />
                         <Route path="/order" element={<OrderForm />} /> */}
                    </Routes>
               </BrowserRouter>
          </div>
     );
}

export default App;
