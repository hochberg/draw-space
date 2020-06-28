import React from 'react';
import { Link } from "react-router-dom";
import './style.css';

const HomePage = () => {

    return (
        <div className="wrapper">
            <div className="header" />
            <div className="title">
                <h1>
                    Draw-Space
                </h1>
                <h2>
                    Space for all your drawings
                </h2>
            </div>
            <div className="footer">
                <h2>
                    <Link className="footer-link" to="/easel">
                        Login to start drawing
                    </Link>
                </h2>
            </div>
        </div>
    );
}

export default HomePage;