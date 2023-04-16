import Navbar from "../components/Navbar";

function Material({Logout}) {
    return (
        <>
            <Navbar/>
            <button className='log-out-btn' onClick={Logout}>LOGGA UT</button>
            <header className="content-header">
                <div className="heading-wrapper">
                    <h1>Rubrik</h1>
                </div>
            </header>
        </>
     );
}

export default Material;
