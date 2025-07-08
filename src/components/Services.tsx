import './Services.css';

function Services() {
	return (
		<div className='services-container'>
			<section className='bg-[#fffaf0] py-12 px-4 md:px-16'>
				<div className='grid grid-cols-1 md:grid-cols-3 items-center gap-8'>
					{/* Texto y botones */}
					<div className='md:col-span-2'>
						<h1 className='text-4xl md:text-5xl font-bold leading-tight text-slate-800'>
							<span className='text-yellow-500'>Os Melhores </span>
							<span className='text-blue-900'>Cuidados </span>
							<span className='text-blue-800'>para seus pets</span>
						</h1>

						<p className='mt-4 text-lg text-slate-700 max-w-xl'>
							Profissionais dedicados ao bem-estar do seu pet com atendimento em
							domicílio ou na clínica.
						</p>

						<div className='mt-6 flex flex-wrap gap-4'>
							<button className='flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 px-5 rounded-full shadow-md transition'>
								🛁 Banho e Tosa
							</button>
							<button className='flex items-center gap-2 bg-blue-900 hover:bg-blue-800 text-white font-semibold py-2 px-5 rounded-full shadow-md transition'>
								💉 Consultas
							</button>
						</div>
					</div>

					{/* Imagen del perro */}
					<div className='flex justify-center relative'>
						<div className='w-[240px] h-[240px] md:w-[300px] md:h-[300px] rounded-full bg-blue-100 absolute top-0 -z-10'></div>
						<img
							src='/assets/dog-services-section.webp'
							alt='Perro con gafas'
							className='relative z-10 w-auto h-80 object-contain'
						/>
					</div>
				</div>
			</section>
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
