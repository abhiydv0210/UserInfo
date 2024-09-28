

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard/page';
import Login from './pages/Login/page';
import Register from './pages/Register/page';
import UserDetails from './pages/userDetails/page';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/details/:id" element={<UserDetails />} />
      
      </Routes>
    </Router>
  );
}

export default App;