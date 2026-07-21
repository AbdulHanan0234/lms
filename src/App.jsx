import { LoginPage } from './pages/LoginPage';
import DashBoard from './components/DashBoard';
import './App.css';
import { HashRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<DashBoard />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
