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
		<div className='flex justify-center'>
			<nav className='max-w-7xl w-full'>
				<div className='flex justify-between px-2 py-1 items-center relative'>
					<button
						className='bg-transparent sm:hidden'
						onClick={() => setMenuOpen((prev) => !prev)}
						aria-label='Abrir o menu de navegaçao'
					>
						<ThreeBars />
					</button>
					<a href='/'>
						<img
							className=''
							src='/assets/pet-lovers-logo-vertical.png'
							alt='pet lovers logo'
						/>
					</a>
					<div
						className='
		absolute left-1/2 -translate-x-1/2 top-14 w-full px-4 flex justify-center
		sm:static sm:translate-x-0 sm:left-auto sm:top-auto sm:px-6 sm:flex-1 sm:justify-center
	'
					>
						<div className='w-full max-w-xl flex z'>
							<input
								id='search-input'
								type='text'
								className='flex-grow border-2 px-4 bg-white border-gray-400 rounded-tl-full rounded-bl-full h-10'
								placeholder='O que procura?'
								aria-label='O que está procurando?'
								aria-describedby='button-addon2'
							/>
							<button
								className='w-6 px-6 bg-amber-400 h-10 rounded-tr-full rounded-br-full flex justify-center items-center'
								type='button'
								id='button-addon2'
							>
								<img
									src='https://cdn-icons-png.flaticon.com/512/2811/2811806.png'
									alt='search icon'
									className='max-w-8 max-h-8'
								/>
							</button>
						</div>
					</div>

					<div>
						<button
							className='w-11 relative rounded-full p-2'
							onClick={handleRedirect}
						>
							<img
								src='https://cdn-icons-png.flaticon.com/512/3144/3144456.png'
								alt='cart icon'
							/>
							<span className='absolute top-0 right-0 rounded-full bg-red-400 w-5 h-5 text-xs font-bold flex items-center justify-center'>
								{totalQuantity}
							</span>
						</button>
					</div>
				</div>
				<ul
					className={`
		absolute top-14 w-full bg-gray-800 z-20
		flex flex-col items-center gap-4 py-4
		sm:flex sm:flex-row sm:static sm:translate-y-0 sm:opacity-100 sm:scale-y-100 sm:pointer-events-auto sm:transition-none
		sm:justify-between sm:px-4 sm:bg-transparent

		transition-all duration-300 ease-in-out origin-top
		${menuOpen ? 'opacity-100 translate-y-0 scale-y-100 pointer-events-auto' : 'opacity-0 -translate-y-4 scale-y-95 pointer-events-none'}
	`}
				>
					<li>
						<a
							href='/'
							className='flex flex-row gap-4 items-center
							sm:gap-2
							'
						>
							<img
								src='https://cdn-icons-png.flaticon.com/512/2550/2550430.png'
								alt='home icon'
								className='w-7'
							/>{' '}
							<span
								className='text-amber-50 hover:text-amber-400 font-bold
							 sm:text-primary sm:text-lg 
							'
							>
								Home
							</span>
						</a>
					</li>
					<li>
						<a
							className='flex flex-row gap-4 items-center
							sm:gap-2
							'
						>
							<img
								src='https://cdn-icons-png.flaticon.com/512/3460/3460335.png'
								alt='pets icon'
								className='w-7'
							/>{' '}
							<span
								className='text-amber-50 hover:text-amber-400 font-bold
							 sm:text-primary sm:text-lg 
							'
							>
								Pets
							</span>
						</a>
					</li>
					<li>
						<a
							href='/products'
							className='flex flex-row gap-4 items-center
							sm:gap-2
							'
						>
							<img
								src='https://cdn-icons-png.flaticon.com/512/14427/14427467.png'
								alt='products icon'
								className='w-7'
							/>{' '}
							<span
								className='text-amber-50 hover:text-amber-400 font-bold
							 sm:text-primary sm:text-lg 
							'
							>
								Produtos
							</span>
						</a>
					</li>
					<li>
						<a
							href='/services'
							className='flex flex-row gap-4 items-center
							sm:gap-2
							'
						>
							<img
								src='https://cdn-icons-png.flaticon.com/512/2138/2138358.png'
								alt='pets services icon'
								className='w-7'
							/>{' '}
							<span
								className='text-amber-50 hover:text-amber-400 font-bold
							 sm:text-primary sm:text-lg 
							'
							>
								Serviços
							</span>
						</a>
					</li>
					<li>
						<a
							href='/veterinary'
							className='flex flex-row gap-4 items-center
							sm:gap-2
							'
						>
							<img
								src='https://cdn-icons-png.flaticon.com/512/3611/3611419.png'
								alt='veterinary icon'
								className='w-7'
							/>
							<span
								className='text-amber-50 hover:text-amber-400 font-bold
							 sm:text-primary sm:text-lg 
							'
							>
								Veterinaria
							</span>
						</a>
					</li>
				</ul>
			</nav>
		</div>
	);
}

export default Navbar;
