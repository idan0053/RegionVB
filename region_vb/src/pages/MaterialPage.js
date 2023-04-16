import Navbar from "../components/Navbar";

function Material({Logout}) {
    return (
        <>
            <Navbar/>
            <button className='log-out-btn' onClick={Logout}>LOGGA UT</button>
        </>
     );
}

export default Material;
