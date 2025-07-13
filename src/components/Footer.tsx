function Footer() {
	return (
		<footer className='bg-surface text-text mt-12 border-t border-border'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
					{/* Logo y descripción */}
					<div className='flex flex-col items-start justify-between'>
						<div className='flex items-center  gap-2 text-2xl font-bold text-gray-800 flex-shrink-0'>
							<img
								src='/assets/logo.webp'
								alt='Pet Lovers'
								className='w-8 h-8'
							/>
							<span>
								<span className='text-yellow-500'>Pet</span> Lovers
							</span>
						</div>
						<p className='text-sm text-muted max-w-xs'>
							Cuidamos do seu pet como parte da família. Produtos, carinho e
							responsabilidade em cada detalhe.
						</p>
					</div>

					{/* Links de navegación */}
					<div>
						<h4 className='text-lg font-semibold text-primary mb-4'>
							Navegação
						</h4>
						<ul className='space-y-2 text-sm'>
							<li>
								<a
									href='/'
									className='hover:text-primary transition'
								>
									🏠 Home
								</a>
							</li>
							<li>
								<a
									href='/contact'
									className='hover:text-primary transition'
								>
									📞 Contato
								</a>
							</li>
							<li>
								<a
									href='#'
									className='hover:text-primary transition'
								>
									ℹ️ Sobre
								</a>
							</li>
							<li>
								<a
									href='#'
									className='hover:text-primary transition'
								>
									🌐 Site
								</a>
							</li>
						</ul>
					</div>

					{/* Redes sociais */}
					<div>
						<h4 className='text-lg font-semibold text-primary mb-4'>
							Siga-nos
						</h4>
						<div className='flex items-center gap-4 text-xl'>
							<a
								href='#'
								className='hover:text-blue-600 transition'
							>
								<i className='fab fa-facebook-f' />
							</a>
							<a
								href='#'
								className='hover:text-sky-500 transition'
							>
								<i className='fab fa-twitter' />
							</a>
							<a
								href='#'
								className='hover:text-pink-500 transition'
							>
								<i className='fab fa-instagram' />
							</a>
							<a
								href='#'
								className='hover:text-blue-700 transition'
							>
								<i className='fab fa-linkedin-in' />
							</a>
						</div>
					</div>

					{/* Criador */}
					<div>
						<h4 className='text-lg font-semibold text-primary mb-4'>
							Criado por
						</h4>
						<p className='text-sm mb-3'>
							<i className='fa-solid fa-screwdriver-wrench mr-1' />
							<span className='font-medium'>Nelson, Dev</span>
						</p>
						<div className='flex items-center gap-4'>
							<a
								href='https://github.com/necho1122'
								target='_blank'
								rel='noopener noreferrer'
								className='hover:opacity-80 transition'
							>
								<img
									src='https://cdn-icons-png.flaticon.com/512/25/25231.png'
									alt='GitHub'
									className='w-6 h-6'
								/>
							</a>
							<a
								href='https://wa.me/5554981156815'
								target='_blank'
								rel='noopener noreferrer'
								className='hover:opacity-80 transition'
							>
								<img
									src='https://cdn-icons-png.flaticon.com/512/160/160200.png'
									alt='WhatsApp'
									className='w-6 h-6'
								/>
							</a>
						</div>
					</div>
				</div>

				<hr className='my-8 border-border' />
				<p className='text-center text-sm text-muted'>
					&copy; {new Date().getFullYear()} Pet Lovers. Todos os direitos
					reservados.
				</p>
			</div>
		</footer>
	);
}

export default Footer;
