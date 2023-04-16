import Navbar from "../components/Navbar";
import React from "react";
import { withRouter } from "react-router-dom";

function Material({Logout, props}) {

    const { location } = props;
  const material = location.state.clickedMaterial;
  console.log(material);

    return (
        <>
            <Navbar/>
            <button className='log-out-btn' onClick={Logout}>LOGGA UT</button>
            <header className="content-header">
                <div className="heading-wrapper">
                    <h1>{material.name}</h1>
                </div>
            </header>
        </>
     );
}

export default Material;
