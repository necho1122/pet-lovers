import './Services.css';
import dogWithGlasses from '../assets/dog-with-glasses.png';

function Services() {
	return (
		<div className='services-container'>
			<div className='services-overview'>
				<div className='overview-information child'>
					<h1>
						Os <span style={{ color: '#F7B733' }}>Melhores</span>{' '}
						<span style={{ color: '#000' }}>Cuidados</span> para seus pets
					</h1>
					<div className='links-services-section'>
						<a href='#'>Banho e Tosa</a>
						<a href='#'>Consultas</a>
					</div>
				</div>
				<div className='services-image-section child'>
					<img
						src={dogWithGlasses}
						alt='dog with glasses'
					/>
				</div>
			</div>
			<div className='list-pet-services'>
				<h2>¡Clique na Cartão para Selecionar Seu Serviço Ideal!</h2>
				<ul>
					<li>
						<a href='#'>
							<div className='list-pet-services-image'>
								<img
									src='https://cdn-icons-png.flaticon.com/512/3048/3048408.png'
									alt='dog walking icon'
								/>
							</div>
							<h4>Passeio de Cães:</h4>
							<p>
								Serviço em que uma pessoa leva seu cão para passear, ajudando-o
								a fazer exercícios e a manter-se saudável.
							</p>
						</a>
					</li>
					<li>
						<a href='#'>
							<div className='list-pet-services-image'>
								<img
									src='https://cdn-icons-png.flaticon.com/512/2809/2809780.png'
									alt='pet sitting icon'
								/>
							</div>
							<h4>Cuidado de Animais em Casa:</h4>
							<p>
								Um cuidador visita sua casa para alimentar, limpar e brincar com
								seu animal de estimação enquanto você está fora.
							</p>
						</a>
					</li>
					<li>
						<a href='#'>
							<div className='list-pet-services-image'>
								<img
									src='https://cdn-icons-png.flaticon.com/512/14257/14257486.png'
									alt='pet daycare icon'
								/>
							</div>
							<h4>Creche para Animais:</h4>
							<p>
								Um lugar onde você pode deixar seu animal durante o dia enquanto
								trabalha, semelhante a uma creche infantil.
							</p>
						</a>
					</li>
					<li>
						<a href='#'>
							<div className='list-pet-services-image'>
								<img
									src='https://cdn-icons-png.flaticon.com/512/11201/11201086.png'
									alt='pet boarding icon'
								/>
							</div>
							<h4>Hospedagem para Animais:</h4>
							<p>
								Serviço de hospedagem para animais quando os donos estão
								viajando. Os animais ficam na casa do cuidador ou em uma
								instalação específica.
							</p>
						</a>
					</li>
					<li>
						<a href='#'>
							<div className='list-pet-services-image'>
								<img
									src='https://cdn-icons-png.flaticon.com/512/3048/3048404.png'
									alt='pet training icon'
								/>
							</div>
							<h4>Treinamento de Animais:</h4>
							<p>
								Treinadores profissionais ajudam a educar seu animal,
								ensinando-lhe obediência básica e outros truques.
							</p>
						</a>
					</li>
					<li>
						<a href='#'>
							<div className='list-pet-services-image'>
								<img
									src='https://cdn-icons-png.flaticon.com/512/1494/1494371.png'
									alt='pet spa icon'
								/>
							</div>
							<h4>Spa e Grooming:</h4>
							<p>
								Serviços de estética que incluem banho, corte de pelo, corte de
								unhas e limpeza de ouvidos para manter seu animal limpo e
								apresentável.
							</p>
						</a>
					</li>
					<li>
						<a href='#'>
							<div className='list-pet-services-image'>
								<img
									src='https://cdn-icons-png.flaticon.com/512/14402/14402831.png'
									alt='pet therapy icon'
								/>
							</div>
							<h4>Terapias Alternativas:</h4>
							<p>
								Serviços como massagens, acupuntura ou terapia a laser para
								animais que buscam bem-estar e alívio do estresse ou dores.
							</p>
						</a>
					</li>
					<li>
						<a href='#'>
							<div className='list-pet-services-image'>
								<img
									src='https://cdn-icons-png.flaticon.com/512/1650/1650575.png'
									alt='pet transportation icon'
								/>
							</div>
							<h4>Transporte de Animais:</h4>
							<p>
								Serviços de transporte especializado para levar seu animal ao
								veterinário, ao groomer ou a qualquer outro lugar.
							</p>
						</a>
					</li>
					<li>
						<a href='#'>
							<div className='list-pet-services-image'>
								<img
									src='https://cdn-icons-png.flaticon.com/512/4493/4493530.png'
									alt='pet photography icon'
								/>
							</div>
							<h4>Fotografia de Animais:</h4>
							<p>
								Sessões de fotos profissionais para capturar momentos especiais
								do seu animal de estimação.
							</p>
						</a>
					</li>
					<li>
						<a href='#'>
							<div className='list-pet-services-image'>
								<img
									src='https://cdn-icons-png.flaticon.com/512/8453/8453465.png'
									alt='pet event planning icon'
								/>
							</div>
							<h4>Organização de Eventos para Animais:</h4>
							<p>
								Planejamento e organização de eventos como festas de aniversário
								para animais, encontros sociais e outros eventos especiais.
							</p>
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Services;
