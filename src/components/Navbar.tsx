import { useSelector } from 'react-redux';
import { selectTotalQuantity } from '../store/cartSlice';
import { useState } from 'react';
import {
	FaHome,
	FaDog,
	FaBoxOpen,
	FaCut,
	FaStethoscope,
	FaShoppingCart,
	FaSearch,
	FaBars,
	FaTimes,
} from 'react-icons/fa';
import NavbarLinks from './NavbarLinks';

export default function Navbar() {
	const [search, setSearch] = useState('');
	const [menuOpen, setMenuOpen] = useState(false);
	const handleRedirect = () => {
		window.location.href = '/cart';
	};
	const totalQuantity = useSelector(selectTotalQuantity);

	return (
		<header className='bg-white shadow-md border-b border-gray-100'>
			<div className='max-w-7xl mx-auto flex flex-wrap items-center justify-between px-4 py-3'>
				<div className='flex items-center gap-2 text-2xl font-bold text-gray-800 flex-shrink-0'>
					<img
						src='/assets/logo.webp'
						alt='Pet Lovers'
						className='w-8 h-8'
					/>
					<span>
						<span className='text-yellow-500'>Pet</span> Lovers
					</span>
				</div>
				<button
					className='sm:hidden text-2xl text-gray-700 ml-auto'
					onClick={() => setMenuOpen(!menuOpen)}
					aria-label='Abrir menu'
				>
					{menuOpen ? <FaTimes /> : <FaBars />}
				</button>
				<div className='relative w-full sm:w-auto sm:flex-grow max-w-md mt-3 sm:mt-0 order-3 sm:order-none'>
					<input
						type='text'
						value={search}
						onChange={(e) => setSearch(e.target.value)}
						placeholder='O que procura?'
						className='w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400'
					/>
					<FaSearch className='absolute left-3 top-2.5 text-gray-400 text-lg' />
				</div>
				<button
					className='relative flex-shrink-0 ml-4 hover:cursor-pointer'
					onClick={handleRedirect}
				>
					<FaShoppingCart className='text-2xl text-gray-700' />
					<span className='absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 rounded-full'>
						{totalQuantity}
					</span>
				</button>
			</div>
			<nav
				className={`sm:flex ${
					menuOpen ? 'flex flex-col px-6 pb-4' : 'hidden'
				} sm:flex-row sm:justify-center sm:items-center sm:gap-6 text-blue-900 font-medium text-sm`}
			>
				<NavbarLinks
					href='/'
					icon={<FaHome className='text-lg' />}
					label='Home'
				/>
				<NavbarLinks
					href='/pets'
					icon={<FaDog className='text-lg' />}
					label='Pets'
				/>
				<NavbarLinks
					href='/products'
					icon={<FaBoxOpen className='text-lg' />}
					label='Produtos'
				/>
				<NavbarLinks
					href='/services'
					icon={<FaCut className='text-lg' />}
					label='Serviços'
				/>
				<NavbarLinks
					href='/veterinary'
					icon={<FaStethoscope className='text-lg' />}
					label='Veterinaria'
				/>
			</nav>
		</header>
	);
}
