import './App.css';
import { useState } from 'react';
import LogInPage from './pages/LogInPage';
import MaterialPage from './pages/MaterialPage';
import Content from './pages/ContentPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const adminUser = {
    id: "Admin",
    password: "Admin"
  }

  const [user, setUser] = useState({id: ""});
  //const [errorMessage, setErrorMessage] = useState("");

  const Login = (details) => {
    if (details.id === adminUser.id && details.password === adminUser.password) {
      setUser({ id: details.id })
    }
  }

  const Logout = () => {
    setUser({ id: "" })
  }

  return (
    <Router>
      <div className="App">
        {(user.id !== "") ? (
          <Content Logout={Logout}/>
        ) : (
          <LogInPage Login={Login} /*Error={errorMessage}*//>
        )}


            <Routes>
              <Route path='/' element={<LogInPage/>}/>
              <Route path='/material' element={<MaterialPage/>}/>
            </Routes>

      </div>
    </Router>
  );
}

export default App;
