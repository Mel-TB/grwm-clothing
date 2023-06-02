import { useContext } from 'react';
import Button from '../button/button.component';

import CartItem from '../cart-item/cart-item.component';
import { CartContext } from '../../context/cart.context';

import './cart-dropdown.styles.scss';
const CartDropdown = () => {
	const { cartItems } = useContext(CartContext);
	return (
		<div className="cart-dropdown-container">
			<div className="cart-items">
				{cartItems.length ? (
					cartItems.map((cartItem) => (
						<CartItem key={cartItem.id} cartItem={cartItem} />
					))
				) : (
					<span>Your cart is empty </span>
				)}
			</div>
			<Button buttonType="inverted">Check Out</Button>
		</div>
	);
};

export default CartDropdown;