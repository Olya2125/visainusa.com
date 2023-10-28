import Register from './components/Register';
import Login from './components/Login';
import Layout from './components/Layout';
import Admin from './components/Admin';
import Missing from './components/Missing';
import Unauthorized from './components/Unauthorized';
import RequireAuth from './components/RequireAuth';
import { Routes, Route } from 'react-router-dom';
import Level1 from './components/Level1';
import Index from './pages/Index';

const ROLES = {
  'User': 2001,
  'Admin': 5150
}

const LEVELS = {
  'Level 1': 1,
  'Level 2': 2,
  'Level 3': 3,
  'Level 4': 4,
  'Level 5': 5
}

function App() {
  console.log("Rendered!")
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/unauthorized" element={<Unauthorized />} />

        {/* we want to protect these routes */}
        {/* <Route element={<RequireAuth allowedRoles={[ROLES.User]} allowedLevel={0}/>}>
          <Route path="/" element={<Home />} />
        </Route> */}
        <Route element={<RequireAuth allowedRoles={[ROLES.User]} allowedLevel={[LEVELS['Level 1']]} />}>
          <Route path="/level1" element={<Level1 />} />
        </Route>

        <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
          <Route path="/admin" element={<Admin />} />
        </Route>

        {/* catch all */}
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
}

export default App;