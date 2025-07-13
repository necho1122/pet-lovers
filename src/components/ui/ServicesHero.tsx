type DatosItem = {
	item: string;
	label: string;
	img: string;
	color: string;
};

type ChildProp = {
	onFilter: (filter: string) => void;
	bgImage: string;
	alt: string;
	datos: DatosItem[];
	title: string;
};

function ServicesHero({ onFilter, bgImage, alt, datos, title }: ChildProp) {
	return (
		<div className='flex justify-between items-center'>
			<div className='w-full h-80 relative flex flex-col justify-center items-center overflow-hidden'>
				<img
					src={bgImage}
					alt={alt}
					className='w-full h-full object-cover rounded-md absolute -z-10 opacity-80 brightness-50'
				/>
				<h1 className='text-white font-extrabold text-3xl px-4 text-center'>
					{title}
				</h1>

				<div className='flex flex-row justify-center items-center p-4 gap-2 sm:gap-4'>
					{datos.map(({ item, label, img, color }, index) => (
						<a
							key={index}
							href='#'
							onClick={(e) => {
								e.preventDefault();
								onFilter(item);
							}}
							className={`no-underline text-text text-base font-bold px-4 sm:py-4 rounded-md border-2 border-border ${color} flex flex-col justify-center items-center w-28 py-2`}
						>
							<img
								src={img}
								alt={`${label} icon`}
								className='sm:w-12 sm:h-12 w-9 h-9'
							/>
							{label}
						</a>
					))}
				</div>
			</div>
		</div>
	);
}

export default ServicesHero;
