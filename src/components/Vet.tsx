import ServicesCard from './ServicesCard';

function Vet() {
	const vetServices = [
		{
			src: 'https://www.svgrepo.com/show/423334/hospital.svg',
			title: 'Consultas de Rotina',
			description:
				'Mantenha seu pet saudável com nossas consultas de rotina, onde nossa equipe dedicada oferece exames abrangentes e conselhos para o bem-estar do seu animal de estimação.',
		},
		{
			src: 'https://www.svgrepo.com/show/423336/hospital-vaccine.svg',
			title: 'Vacinação',
			description:
				'Proteja seu companheiro peludo contra doenças com nosso serviço de vacinação especializado, seguindo as melhores práticas e garantindo a saúde contínua do seu pet.',
		},
		{
			src: '/assets/pet-surgery.svg',
			title: 'Cirurgias',
			description:
				'Conte com nossa equipe experiente para procedimentos cirúrgicos seguros e eficazes, proporcionando cuidados de qualidade e recuperação tranquila para seu animal de estimação.',
		},
		{
			src: 'https://www.svgrepo.com/show/423340/hospital.svg',
			title: 'Exames de Laboratório',
			description:
				'Diagnóstico preciso é fundamental. Realizamos uma variedade de exames laboratoriais para identificar problemas de saúde e oferecer tratamentos personalizados para seu animal de estimação.',
		},
		{
			src: 'https://www.svgrepo.com/show/423339/hospital-ekg.svg',
			title: 'Radiografias e Ultrassonografias',
			description:
				'Utilizando tecnologia avançada, nossos serviços de radiografia e ultrassonografia ajudam a detectar problemas internos e orientam o tratamento adequado para o seu pet.',
		},
		{
			src: 'https://www.svgrepo.com/show/423342/hospital-ambulance.svg',
			title: 'Atendimento de Emergências',
			description:
				'Estamos aqui quando você mais precisa. Nossa equipe está disponível para atendimentos de emergência, oferecendo cuidados imediatos e salvando vidas quando necessário.',
		},
		{
			src: 'https://www.svgrepo.com/show/295711/scalpel-surgery.svg',
			title: 'Castração e Esterilização',
			description:
				'Promova uma vida longa e saudável para seu pet com nossos serviços de castração e esterilização, contribuindo para o controle populacional e prevenção de doenças.',
		},
		{
			src: 'https://www.svgrepo.com/show/385145/dental-dentist-health-healthcare-medical-teeth.svg',
			title: 'Odontologia Veterinária',
			description:
				'Cuide do sorriso do seu animal de estimação com nossos serviços especializados em odontologia veterinária, garantindo uma boca saudável e um estilo de vida mais confortável para seu pet.',
		},
	];

	return (
		<div className='max-w-7xl mx-auto'>
			<section className='bg-[#f0f5fa] py-12 px-4 md:px-16'>
				<div className='grid grid-cols-1 md:grid-cols-3 items-center gap-8'>
					<div className='md:col-span-2'>
						<h2 className='text-4xl md:text-5xl font-bold leading-tight text-slate-800'>
							Saúde e <span className='text-blue-600'>Bem-Estar</span> <br />
							para Seus Animais
						</h2>

						<p className='mt-4 text-lg text-slate-700 max-w-xl'>
							Atendimento clínico completo com profissionais qualificados.
						</p>

						<div className='mt-6 flex flex-wrap gap-4'>
							<button className='bg-blue-900 hover:bg-blue-800 text-white font-semibold py-2 px-6 rounded-md shadow transition'>
								Agendar Consulta
							</button>
							<button className='border border-blue-900 text-blue-900 hover:bg-blue-100 font-semibold py-2 px-6 rounded-md transition'>
								Emergência 24h
							</button>
						</div>
					</div>
					<div className='relative flex justify-center'>
						<img
							src='/assets/vet-min.webp'
							alt='Veterinária com cachorro'
							className='relative z-10 w-auto h-[280px] object-contain'
						/>
					</div>
				</div>
			</section>
			<div className='vet-services'>
				<h2 className='text-xl p-3 text-center text-primary font-bold'>
					¡Clique na Cartão para Selecionar Seu Serviço Veterinario Ideal!
				</h2>
				<ul
					className='grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))]
				 list-none gap-3 mx-2 bg-gray-200 rounded-xl px-4 py-6 font-family'
				>
					{vetServices.map((service, index) => (
						<ServicesCard
							key={index}
							url_image={service.src}
							title={service.title}
							description={service.description}
						/>
					))}
				</ul>
			</div>
		</div>
	);
}

export default Vet;
