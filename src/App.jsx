import { LoginPage } from './pages/LoginPage';
import { HomePage } from './pages/HomePage';
import './App.css';
import { HashRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
