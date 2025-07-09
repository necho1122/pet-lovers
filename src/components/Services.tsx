import ServicesCard from './ServicesCard';

function Services() {
	const services = [
		{
			src: 'https://cdn-icons-png.flaticon.com/512/3048/3048408.png',
			title: 'Passeio de Cães:',
			description:
				'Serviço em que uma pessoa leva seu cão para passear, ajudando-o a fazer exercícios e a manter-se saudável.',
		},
		{
			src: 'https://cdn-icons-png.flaticon.com/512/2809/2809780.png',
			title: 'Cuidado de Animais em Casa:',
			description:
				'Um cuidador visita sua casa para alimentar, limpar e brincar com seu animal de estimação enquanto você está fora.',
		},
		{
			src: 'https://cdn-icons-png.flaticon.com/512/14257/14257486.png',
			title: 'Creche para Animais:',
			description:
				'Um lugar onde você pode deixar seu animal durante o dia enquanto trabalha, semelhante a uma creche infantil.',
		},
		{
			src: 'https://cdn-icons-png.flaticon.com/512/11201/11201086.png',
			title: 'Hospedagem para Animais:',
			description:
				'Serviço de hospedagem para animais quando os donos estão viajando. Os animais ficam na casa do cuidador ou em uma instalação específica.',
		},
		{
			src: 'https://cdn-icons-png.flaticon.com/512/3048/3048404.png',
			title: 'Treinamento de Animais:',
			description:
				'Treinadores profissionais ajudam a educar seu animal, ensinando-lhe obediência básica e outros truques.',
		},
		{
			src: 'https://cdn-icons-png.flaticon.com/512/1494/1494371.png',
			title: 'Spa e Grooming:',
			description:
				'Serviços de estética que incluem banho, corte de pelo, corte de unhas e limpeza de ouvidos para manter seu animal limpo e apresentável.',
		},
		{
			src: 'https://cdn-icons-png.flaticon.com/512/14402/14402831.png',
			title: 'Terapias Alternativas:',
			description:
				'Serviços como massagens, acupuntura ou terapia a laser para animais que buscam bem-estar e alívio do estresse ou dores.',
		},
		{
			src: 'https://cdn-icons-png.flaticon.com/512/1650/1650575.png',
			title: 'Transporte de Animais:',
			description:
				'Serviços de transporte especializado para levar seu animal ao veterinário, ao groomer ou a qualquer outro lugar.',
		},
		{
			src: 'https://cdn-icons-png.flaticon.com/512/4493/4493530.png',
			title: 'Fotografia de Animais:',
			description:
				'Sessões de fotos profissionais para capturar momentos especiais do seu animal de estimação.',
		},
		{
			src: 'https://cdn-icons-png.flaticon.com/512/8453/8453465.png',
			title: 'Organização de Eventos para Animais:',
			description:
				'Planejamento e organização de eventos como festas de aniversário para animais, encontros sociais e outros eventos especiais.',
		},
	];

	return (
		<div>
			<section className='bg-[#fffaf0] py-12 px-4 md:px-16'>
				<div className='grid grid-cols-1 md:grid-cols-3 items-center gap-8'>
					<div className='md:col-span-2'>
						<h1 className='text-xl sm:text-5xl font-bold leading-tight text-slate-800'>
							<span className='text-yellow-500'>Os Melhores </span>
							<span className='text-blue-900'>Cuidados </span>
							<span className='text-blue-800'>para seus pets</span>
						</h1>

						<p className='mt-4 text-base text-text max-w-xl'>
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
					<div className='flex justify-center relative'>
						<img
							src='/assets/dog-services-section.webp'
							alt='Perro con gafas'
							className='relative z-10 w-auto h-80 object-contain'
						/>
					</div>
				</div>
			</section>
			<div className=''>
				<h2 className='text-xl p-3 text-center text-primary font-bold'>
					¡Clique na Cartão para Selecionar Seu Serviço Ideal!
				</h2>
				<ul
					className='grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))]
				 list-none gap-3 mx-2 bg-gray-200 rounded-xl px-4 py-6 font-family'
				>
					{services.map((services, index) => (
						<ServicesCard
							key={index}
							url_image={services.src}
							title={services.title}
							description={services.description}
						/>
					))}
				</ul>
			</div>
		</div>
	);
}

export default Services;
