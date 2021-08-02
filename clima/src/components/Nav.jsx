import React from 'react';
import Logo from '../logo.png'
import SearchBar from './SearchBar.jsx';
import estilo from './Nav.module.css';

function Nav({onSearch}) {
  return (<div>
            <div className={estilo.navHeader}>
                <nav className={estilo.nav}>
                    <p><img src={Logo} alt="logo" />&nbsp;ClimApp&nbsp;By Ciro</p>
                    <SearchBar 
                      onSearch={onSearch}
                    />
                </nav>
            </div>      
          </div>
  );
};

export default Nav;
