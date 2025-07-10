import { ReactNode } from 'react';

interface NavItemProps {
	href: string;
	icon: ReactNode;
	label: string;
	onClick?: () => void;
}

export default function NavbarLinks({
	href,
	icon,
	label,
	onClick,
}: NavItemProps) {
	return (
		<a
			href={href}
			onClick={onClick}
			className='flex items-center gap-1 py-2 hover:text-yellow-500 transition'
		>
			{icon}
			{label}
		</a>
	);
}
