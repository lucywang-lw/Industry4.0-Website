import React from 'react';
import '../../App.css'
import About from '../About';

function Home() {
    return(
        <>
        <h1>HOME PAGE</h1>
        <p>1. Logo/name</p>
        <p>2. About Us</p>
        <p>3. Mission/Values?</p>
        <p>4. Sponsors</p>
        <br />
        <About />
        </>
    );
}

export default Home