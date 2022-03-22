// Project dependencies
import React from 'react';
import {Routes , Route} from 'react-router-dom';


// Styles
import "../node_modules/bootstrap/scss/bootstrap.scss";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.scss";
import "../src/assets/styles/style.scss";

// App components
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

// Pages
import Index from './pages/Index';
import NoMatch404 from './pages/NoMatch404';
import Category from "./pages/Category";

let routes = (
	<div>
		<Route path="/" element={<Index/>} />
	</div>
);

function App() {
	return (
		<div className="App">
			<div className="page-body">

				<Header/>

				<div className="container">
					<Routes>
						<Route path="/" element={<Index/>} />
						<Route path="/catalog" element={<Category/>} />
						<Route path="/catalog/:category_name" element={<Category/>} />
						<Route path="*" element={<NoMatch404/>} />
					</Routes>
				</div>

				<Footer/>

			</div>
		</div>
	);
}

export default App;
