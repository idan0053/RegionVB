import './App.css';
import { useState } from 'react';
import LogInPage from './pages/LogInPage'
import Content from './pages/ContentPage'

function App() {
  const adminUser = {
    id: "Admin",
    password: "Admin"
  }

  const [user, setUser] = useState({id: ""});
  //const [errorMessage, setErrorMessage] = useState("");

  const Login = details => {
    console.log(details);
    if (details.id === adminUser.id && details.password === adminUser.password) {
      setUser({ id: details.id })
    }
  }

  const Logout = () => {
    console.log("Logout");
    setUser({ id: "" })
  }

  return (
    <div className="App">
      {(user.id !== "") ? (
        <Content Logout={Logout}/>
      ) : (
        <LogInPage Login={Login} /*Error={errorMessage}*//>
      )}
    </div>
  );
}

export default App;
