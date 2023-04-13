import { useRef, useState, useEffect, useContext } from 'react';
import { CgArrowRightO } from 'react-icons/cg';
import Navbar from '../components/Navbar';
import AuthContext from '../context/Auth';

function LogIn() {
    const { setAuth } = useContext(AuthContext)
    const userRef = useRef();
    //const errRef = useRef();

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    //const [errorMessage, setErrorMessage] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    /*useEffect(() => {
        setErrorMessage('');
    }, [user, password])*/

    async function Submit(e) {
        e.preventDefault();
        setSuccess(true);
        setUser('');
        setPassword('');
    }


    return (
        <>
            {success ? (
                <Navbar/>
            ) : (
            <div className="position-bottom">
                <h4>Logga in</h4>
                <form onSubmit={Submit}>
                <label htmlFor="username">Användar-id:</label>
                <input
                    className="user-id-input"
                    type="text"
                    id="username"
                    ref={userRef}
                    onChange={(e) => setUser(e.target.value)}
                    value={user}
                    required
                />
                <label htmlFor="password">Lösenord:</label>
                <input
                    className="password-input"
                    type="password"
                    id="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    required
                />
                <CgArrowRightO className="log-in-btn" onClick={Submit}/>
                </form>
            </div>
            )}
        </>
     );
}

export default LogIn;
