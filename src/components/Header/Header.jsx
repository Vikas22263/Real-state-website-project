import React from "react";
import './Header.css'
const Header = () => {
    return (
        <section className="h-wrapper">
            <div className="h-contanier flexCenter paddings innerWidth">
                <img src="./logo.png" alt="log" width={100} />
                <div className="flexCenter h-menu">
                    <a href="">residency</a>
                    <a href="">values</a>
                    <a href="">contact us</a>
                    <a href="">get satrted</a>

                    <button className="button">

                        <a href="">conatact</a>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Header;
