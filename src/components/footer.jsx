import { useNavigate } from 'react-router-dom';
import React from 'react';


function Footer() {
        const navigate = useNavigate();
    return (
    <footer>
        <h6>Desarrollado por Estefania Egea</h6>
        <button className="profile-button" onClick={() => navigate(-1)}>Go back</button>
    </footer>
    );
}

export default Footer;