import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import ForgotPassword from "./pages/ForgotPassword";
import FormPage from "./pages/FormPage";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
         
         
          <Route path="/FormPage" element={<FormPage />} />
        

          <Route path="/forgotpassword" element={<ForgotPassword/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
