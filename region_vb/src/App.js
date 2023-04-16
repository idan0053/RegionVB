import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LogInPage from './pages/LogInPage';
import Content from './pages/ContentPage';
import MaterialPage from './pages/MaterialPage';
import Support from './pages/Support'



function App() {

  const adminUser = {
    id: "Admin",
    password: "Admin"
  }

  const [user, setUser] = useState({id: ""});

  const Login = (details) => {
    if (details.id === adminUser.id && details.password === adminUser.password) {
      setUser({ id: details.id })
    }
  }

  const Logout = () => {
    setUser({ id: "" })
  }

  return (

        <>
          {(user.id !== "") ? (
            <Content Logout={Logout}/>
          ) : (
            <Router>
            <Routes>
            <Route path='/' element= {<LogInPage Login={Login} />} />
            <Route path="/Läromedel" element={<Content />} />
            <Route path="/Support" element={<Support />} />
            <Route path="/Material" element={<MaterialPage />} />
            </Routes>
          </Router>
          )}

      </>

  );
}

export default App;
