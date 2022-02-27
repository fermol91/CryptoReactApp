import './NavBar.css';
import { Link } from 'react-router-dom';


const NavBar = () => {
	return (
		<nav className='Navigation'>
			<ul>
				<Link to='/' className='Link'>
					Home
				</Link>
				<Link to='/About' className='Link'>
					About
				</Link>
				<Link to='/Contact' className='Link'>
					Contact
				</Link>
			</ul>
			
		</nav>
	);
};

export default NavBar;
