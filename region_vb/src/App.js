import './App.css';
import { useState } from 'react';
import LogInPage from './pages/LogInPage'
import Content from './pages/ContentPage'

function App() {
  const adminUser = {
    id: "admin",
    password: "lösenord"
  }

  const [user, setUser] = useState({id: ""});
  const [errorMessage, setErrorMessage] = useState("");

  const Login = details => {
    console.log(details);
  }

  /*const Logout = () => {
    console.log("Logout");
  }*/

  return (
    <div className="App">
      {(user.id !== "") ? (
        <Content/>
      ) : (
        <LogInPage Login={Login} Error={errorMessage}/>
      )}
    </div>
  );
}

export default App;
