import React from 'react';
import Logo from '../../Images/logo-movies.png';
import './index.css';
import { observer } from "mobx-react-lite";

interface Iprops {
    setFilterTitle(title: string): void;
}

const Header: React.FC<Iprops> = (props) => {
    const handleChangeFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.setFilterTitle(e.target.value);
    }
    
    return(
        <>
            <div className="header" >
                <img alt="logo" src={Logo} className="Logo-img" />
                <input className="search-input" onChange={handleChangeFilter} placeholder="Pesquisar" />
            </div>
        </>
    )
}

export default observer(Header);