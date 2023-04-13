import LogIn from '../components/LogIn';

function Welcome() {
    return (
        <div className="login">
            <div className="welcome-content-container">
                <div className="welcome-left-wrapper">
                    <h1>Välkommen till lärplattformen!</h1>
                    <p className="welcome-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div className="welcome-right-wrapper">
                    <LogIn/>
                </div>
            </div>
            <img className="background-design" src="background_design.png" alt="background" />
        </div>
     );
}

export default Welcome;
