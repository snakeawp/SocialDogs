import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Footer from './Componentes/Footer/Footer'
import Header from './Componentes/Header/Header'
import ProtectedRoute from './Componentes/Helper/ProtectedRoute';
import Home from './Componentes/Home/Home';
import Login from './Componentes/Login/Login';
import User from './Componentes/User/User';
import { UserStorage } from './UserContext'


function App() {
  return (
    <div>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login/*" element={<Login />} />
            <ProtectedRoute path="conta/*" element={<User />} />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
