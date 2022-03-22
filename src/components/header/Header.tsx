// Project dependencies
import React from 'react';
import {Link} from 'react-router-dom';

function Header() {
	let link: string[] = [];

	interface link {
		name: string;
		to: string;
	}

	const navs: link[] = [
		{
			name: 'Процессоры',
			to: '/catalog/processors'
		},
		{
			name: 'Видеокарты',
			to: '/catalog/graphics_cards'
		},
		{
			name: 'Материнские карты',
			to: '/catalog/motherboards'
		},
		{
			name: 'Диски HDD\\SSD',
			to: '/catalog/drives'
		},
		{
			name: 'Оперативная память',
			to: '/catalog/rams'
		},
		{
			name: 'Блоки питания',
			to: '/catalog/power_blocks'
		},
		{
			name: 'Корпуса',
			to: '/catalog/cases'
		},
		{
			name: 'Майнинг',
			to: '/catalog/mining'
		}
	];

	let buildLinks = () => {
		let arLinks = [];
		for(let link of navs) {
			arLinks.push(
				<li className="nav-item">
					<Link className="nav-link" aria-current="page" to={link.to}>{link.name}</Link>
				</li>
			);
		}
		return arLinks;
	}

	return (
		<header>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<div className="container">

					<Link className="navbar-brand" to="/">Hardinstall.ru</Link>

					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav">
							{ buildLinks() }
						</ul>
					</div>

					<a className="btn btn-dark" href="#">Вход</a>

				</div>
			</nav>
		</header>
	);
}

export default Header;