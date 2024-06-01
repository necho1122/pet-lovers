import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import './Layout.css';

function Layout() {
	return (
		<div>
			<Navbar />
			<Outlet />
			<Footer />
		</div>
	);
}

export default Layout;
