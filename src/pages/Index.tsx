// Project dependencies
import React from 'react';
import {Link} from 'react-router-dom';

function Index() {
	return (
		<div className="pt-4 pb-4">
			<div className="teaser">
				<div className="teaser__text">
					<h1>Доска объявлений и биржа компьютерных запчастей</h1>
					<p>
						Запчасти для компьютеров стали довольно ценным ресурсом, не каждый теперь может позволить себе
						достаточно
						вычислительной мощности для себя. Этот ресурс предназначен для удобства поиска, продажи и обмена
						комплектующими для ПК.
					</p>
					<Link className="btn btn-dark btn-lg" aria-current="page" to="/catalog">Каталог предложений</Link>
					<img className="teaser__image" src="/images/Gaming-Hardware-475x276.png" alt=""/>
				</div>
			</div>

			<div className="row pt-5 features-block">
				<div className="col-4 text-center">
					<div className="features-block__container features-block__container_anim1">
						<i className="bi bi-basket"></i>
					</div>
					<h3>Покупай</h3>
				</div>
				<div className="col-4 text-center">
					<div className="features-block__container features-block__container_anim2">
						<i className="bi bi-cash-coin"></i>
					</div>
					<h3>Продавай</h3>
				</div>
				<div className="col-4 text-center">
					<div className="features-block__container features-block__container_anim3">
						<i className="bi bi-arrow-repeat"></i>
					</div>
					<h3>Меняй</h3>
				</div>
			</div>

			<div className="newProducts">
				<div className="newProducts__name">
					Свежие предложения
				</div>
				<div className="products">
					<div className="product">
						<div className="product__icons">
							<i className="bi bi-hand-thumbs-up"></i>
							<i className="bi bi-thermometer-high"></i>
						</div>
						<div className="product__image">
							<img src="/images/intel-p.jpg" alt=""/>
						</div>
						<div className="product__lot">
							623454
						</div>
						<div className="product__name">
							Intel core i7 12700k
						</div>
						<div className="product__shopping">
							<div className="product__price">
								32 000 руб.
							</div>
							<button className="btn btn-primary"><i className="bi bi-cart-plus"></i></button>
						</div>
					</div>


				</div>

			</div>
		</div>
	)
}

export default Index;