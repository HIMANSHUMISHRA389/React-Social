import { useContext } from "react";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import { BrowserRouter as Router,Route,Routes, redirect } from "react-router-dom";
import { AuthContext } from "./components/context/AuthContexts";
import { Navigate} from "react-router-dom";
function App() {
  // const navigate=useNavigate()
  const { user } = useContext(AuthContext);
  console.log(user)
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={user?._id ? <Home /> : <Register />} />
        <Route
          exact
          path="/register"
          element={user?._id ? <Navigate to="/" replace /> : <Register />}
        />
        <Route
          path="/login"
          element={user?._id ? <Navigate to="/" replace /> : <Login />}
        />
        <Route exact path="/profile/:username" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
