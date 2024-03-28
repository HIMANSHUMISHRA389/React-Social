import { useContext } from "react";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import Chat from "./pages/chats/MainChat";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthContext } from "./components/context/AuthContexts";
import { Navigate } from "react-router-dom";

function App() {
  // const navigate=useNavigate()
  const { user } = useContext(AuthContext);
  console.log(user)
  const isAuthenticated = !!localStorage.getItem("token");
  const userId = localStorage.getItem("userId");
  console.log(userId);
  console.log(isAuthenticated);
  


  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={isAuthenticated ? <Home /> : <Register />}
        />
        <Route
          exact
          path="/register"
          element={isAuthenticated ? <Navigate to="/" replace /> : <Register />}
        />
        <Route
          path="/login"
          element={isAuthenticated ? <Navigate to="/" replace /> : <Login />}
        />
        <Route exact path="/profile/:username" element={<Profile />} />
        <Route
          exact
          path="/chat"
          element={isAuthenticated ? <Chat /> : <Login />}
        />
      </Routes>
    </Router>
  );
}

export default App;
