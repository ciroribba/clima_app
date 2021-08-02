import React from 'react';
//import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import estilo from './Nav.module.css';

function Nav({onSearch}) {
  return (<div>
            <div className={estilo.navHeader}>
                <nav className={estilo.nav}>
                    <p><img src={Logo} alt="logo" /> ClimApp</p>
                    <SearchBar 
                      onSearch={onSearch}
                    />
                </nav>
            </div>      
          </div>
  );
};

export default Nav;
