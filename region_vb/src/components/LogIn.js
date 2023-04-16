import { useState } from 'react';
import { CgArrowRightO } from 'react-icons/cg';

function LogIn({ Login }) {
    const [details, setDetails] = useState({ id: "", password: ""});

    const submit = e => {
        e.preventDefault();

        Login(details);
    }

    return (
            <div className="position-bottom">
                <h4>Logga in</h4>
                <form>
                <label htmlFor="username">Användar-id:</label>
                <input
                    className="user-id-input"
                    type="text"
                    id="username"
                    onChange={e => setDetails({...details, id: e.target.value})}
                    value={details.id}
                    required
                />
                <label htmlFor="password">Lösenord:</label>
                <input
                    className="password-input"
                    type="password"
                    id="password"
                    onChange={e => setDetails({...details, password: e.target.value})}
                    value={details.password}
                    required
                />
                    <CgArrowRightO className="log-in-btn" onClick={submit} />
                </form>
            </div>
     );
}

export default LogIn;
