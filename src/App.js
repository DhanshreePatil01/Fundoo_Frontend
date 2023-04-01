import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import Takenoteone from './components/takenoteone/takenoteone';
import Signup from './pages/signup/signup';
import SignIn from './pages/signin/signin';
import Takenotetwo from './components/takenotetwo/takenotetwo';
import Dashboard from './pages/Dashboard/dashboard';
import Takenotethree from './components/takenotethree/takenotethree';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { signIn } from './services/userservice';
import ProtectedRoute from './Routes/ProtectedRoutes';
import AuthRoute from './Routes/AuthRoute';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<AuthRoute><SignIn /></AuthRoute>} />
        <Route path="/signup" element={<AuthRoute><Signup /></AuthRoute>} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />

      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
