import { useEffect, useState } from 'react';

export default function useScreenSize() {
	const [width, setWidth] = useState(
		typeof window !== 'undefined' ? window.innerWidth : 1024
	);

	useEffect(() => {
		const handleResize = () => setWidth(window.innerWidth);
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return width;
}
