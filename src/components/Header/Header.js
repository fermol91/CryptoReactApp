import React from 'react';
import './Header.css';
import img from './criptoheader.png';
import NavBar from '../NavBar/NavBar';

const Header = () => {
	return (
		<div className='Headimg'>
			<img src={img} alt='CryptoWorld' />
            <h1>CryptoWorld</h1>
			<NavBar />
            
		</div>
	);
};

export default Header;