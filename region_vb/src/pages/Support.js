import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";

function Support() {

    const [support, setSupport] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => response.json())
        .then((result) => {
            setSupport(result.body)
        })
},[])


    return (
        <>
            <Navbar/>
            <header className="content-header">
                <div className="heading-wrapper">
                    <h1>Rubrik</h1>
                    <p>{support}</p>
                </div>
            </header>
        </>
     );
}

export default Support;
