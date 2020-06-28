import React from "react";

function Footer(){
    let currentYear = new Date();
    return (
        <footer>
            <p>Copyright © {currentYear.getFullYear()}</p>
        </footer>
    )
}


export default Footer;