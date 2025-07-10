type Image = {
	url_image: string;
	title: string;
	description: string;
	alt: string;
};

function ServicesCard({ url_image, title, description, alt }: Image) {
	return (
		<li className='border-border border-2  rounded-lg bg-white'>
			<a
				href='#'
				className='flex flex-col items-center justify-start px-3 py-3'
			>
				<div>
					<img
						src={url_image}
						alt={alt}
						className='object-cover w-16 h-16'
					/>
				</div>
				<h4 className='text-base mt-2 text-primary font-bold'>{title}</h4>
				<p className='text-sm mt-2 text-center'>{description}</p>
			</a>
		</li>
	);
}

export default ServicesCard;
