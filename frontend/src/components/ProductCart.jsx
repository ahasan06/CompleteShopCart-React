
import { useContext } from 'react';
import { CartContext } from '../context/Cart';
const ProductCart = ({ product }) => {

	const { dispatch } = useContext(CartContext);

	return (
		<div className="ingredient">
			<div className="ingredient__image">
				<figure>
					<img src={product.image} alt={product.title} />
				</figure>
			</div>
			<div className="ingredient__title">
				<h3>{product.title}</h3>
			</div>
			<div className="ingredient__desc">
				<h3>{product.description}</h3>
			</div>
			<div className="ingredient__content">
				<p className="price">
					<span>${product.price}</span>
				</p>
			</div>
			<div className="ingredient__btn">
				<button onClick={() => dispatch({
					type: "ADD_TO_CART",
					payload: product,
				})} className="btn-white">ADD TO CART</button>
			</div>

		</div>
	);
};

export default ProductCart;

