import './Navbar.css';
import petLoversLogo from '../assets/pet-lovers-logo-vertical.png';
import { useSelector } from 'react-redux';
import { selectTotalQuantity } from '../store/cartSlice';
import { useState } from 'react';
import { ThreeBars } from './Icons';

function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false);
	const handleRedirect = () => {
		window.location.href = '/cart';
	};
	const totalQuantity = useSelector(selectTotalQuantity);

	return (
		<div className='navbar'>
			<nav>
				<div className='upper-bar upper-bar-nav'>
					<button
						className='navbar-toggle'
						onClick={() => setMenuOpen((v) => !v)}
						aria-label='Abrir menú de navegación'
					>
						<ThreeBars />
					</button>
					<a href='/'>
						<img
							className='pet-lovers-logo'
							src={petLoversLogo}
							alt='pet lovers logo'
						/>
					</a>

					<div className='input-group'>
						<input
							type='text'
							className='form-control'
							placeholder='O que procura?'
							aria-label='O que está procurando?'
							aria-describedby='button-addon2'
						/>
						<button
							className='btn-outline-secondary'
							type='button'
							id='button-addon2'
						>
							<img
								src='https://cdn-icons-png.flaticon.com/512/2811/2811806.png'
								alt='search icon'
							/>
						</button>
					</div>
					<button
						className='btn-cart'
						onClick={handleRedirect}
					>
						<img
							src='https://cdn-icons-png.flaticon.com/512/3144/3144456.png'
							alt='cart icon'
						/>
						<span className='quantity-in-cart'>{totalQuantity}</span>
					</button>
				</div>
				<ul className={`navbar-menu${menuOpen ? ' open' : ''}`}>
					<li>
						<a href='/'>
							<img
								src='https://cdn-icons-png.flaticon.com/512/2550/2550430.png'
								alt='home icon'
							/>{' '}
							<span className='menu-option'>Home</span>
						</a>
					</li>
					<li>
						<a href='/pets'>
							<img
								src='https://cdn-icons-png.flaticon.com/512/3460/3460335.png'
								alt='pets icon'
							/>{' '}
							<span className='menu-option'>Pets</span>
						</a>
					</li>
					<li>
						<a href='/products'>
							<img
								src='https://cdn-icons-png.flaticon.com/512/14427/14427467.png'
								alt='products icon'
							/>{' '}
							<span className='menu-option'>Produtos</span>
						</a>
					</li>
					<li>
						<a href='/services'>
							<img
								src='https://cdn-icons-png.flaticon.com/512/2138/2138358.png'
								alt='pets services icon'
							/>{' '}
							<span className='menu-option'>Serviços</span>
						</a>
					</li>
					<li>
						<a href='/veterinary'>
							<img
								src='https://cdn-icons-png.flaticon.com/512/3611/3611419.png'
								alt='veterinary icon'
							/>
							<span className='menu-option'>Veterinaria</span>
						</a>
					</li>
				</ul>
			</nav>
		</div>
	);
}

export default Navbar;
