import React from 'react';
import Logo from '../../Images/logo-movies.png';
import './index.css';

const Header: React.FC = () => {
    return(
        <>
            <div className="header" >
                <img alt="logo" src={Logo} className="Logo-img" />
                <input className="search-input" placeholder="Pesquisar" />
            </div>
        </>
    )
}

export default Header;