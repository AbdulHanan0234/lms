import { LoginPage } from './pages/LoginPage';
import './App.css';
import { HashRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
