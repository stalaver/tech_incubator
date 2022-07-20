import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import AddPost from "./pages/AddPost"
import Login from "./pages/Login"
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "./firebase_config";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";
    });
  };

  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/addpost">Add Post</Link>
        {!isAuth ? (
        <Link to="/login">Login</Link>
        ) : (
        <button onClick={signUserOut}>Logout</button>
      )}
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addpost" element={<AddPost />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth}/>} />
      </Routes>
    </Router>
  );
}

export default App;
