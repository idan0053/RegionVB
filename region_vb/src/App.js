import { useState } from 'react';
import LogInPage from './pages/LogInPage';
import MaterialPage from './pages/MaterialPage';
import Content from './pages/ContentPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

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
    <BrowserRouter>
      <div className="App">
        {(user.id !== "") ? (
          <Content Logout={Logout}/>
        ) : (
          <LogInPage Login={Login}/>
        )}
      </div>

      <Routes>
        <Route path='/' element={<LogInPage/>}/>
        <Route path='/material' element={<MaterialPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
