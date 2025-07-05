function Footer() {
	return (
		<footer className='footer'>
			<div className='footer__container'>
				<div className='footer__page-information'>
					<div className='footer__logo'>
						<img
							src='/assets/pet-lovers-logo-vertical.png'
							alt='Logo'
						/>
					</div>
					<div className='footer__links'>
						<a href='/contact'>
							<img
								src='https://cdn-icons-png.flaticon.com/512/1067/1067617.png'
								alt='contact icon'
							/>{' '}
							<span>Contato</span>
						</a>
						<a href='/'>
							<i className='fas fa-home'></i> Home
						</a>
						<a href='#'>
							<i className='fas fa-info-circle'></i> Acerca de
						</a>
						<a href='/'>
							<i className='fas fa-globe'></i> Site
						</a>
					</div>
					<div className='footer__social'>
						<a href='#'>
							<i className='fab fa-facebook-f'></i>
						</a>
						<a href='#'>
							<i className='fab fa-twitter'></i>
						</a>
						<a href='#'>
							<i className='fab fa-instagram'></i>
						</a>
						<a href='#'>
							<i className='fab fa-linkedin-in'></i>
						</a>
					</div>
				</div>
				<div className='footer__creator'>
					<p>
						<i className='fa-solid fa-screwdriver-wrench'></i> Criado por{' '}
						<span>[Nelson, Dev]</span>
					</p>
					<a
						href='https://github.com/necho1122'
						target='_blank'
					>
						<img
							src='https://cdn-icons-png.flaticon.com/512/25/25231.png'
							alt='github icon'
						/>
					</a>
					<a
						href='https://wa.me/5554981156815'
						target='_blank'
					>
						<img
							src='https://cdn-icons-png.flaticon.com/512/160/160200.png'
							alt='whatsapp icon'
						/>
					</a>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
