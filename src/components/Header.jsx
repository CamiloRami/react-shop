import { useState, useContext } from 'react';
import { AppContext } from '@context/AppContext';
import { Menu } from '@components/Menu.jsx';
import { MyOrder } from '@containers/MyOrder.jsx';
import '@styles/Header.scss';
import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import shoppingCart from '@icons/icon_shopping_cart.svg';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openOrders, setOpenOrders] = useState(false);
  const { state } = useContext(AppContext);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }
  const toggleOrders = () => {
    setOpenOrders(!openOrders);
  }

	return (
		<nav>
			<img src={menu} alt="menu" className="menu" />
			<div className="navbar-left">
				<img src={logo} alt="logo" className="nav-logo" />
				<ul>
					<li>
						<a href="/">All</a>
					</li>
					<li>
						<a href="/">Clothes</a>
					</li>
					<li>
						<a href="/">Electronics</a>
					</li>
					<li>
						<a href="/">Furnitures</a>
					</li>
					<li>
						<a href="/">Toys</a>
					</li>
					<li>
						<a href="/">Others</a>
					</li>
				</ul>
			</div>
			<div className="navbar-right">
				<ul>
					<li className="navbar-email" onClick={toggleMenu}>
            platzi@example.com
          </li>
					<li className="navbar-shopping-cart" onClick={toggleOrders}>
						<img src={shoppingCart} alt="shopping cart" />
						{(state.cart.length > 0 && state.cart.length < 10)  && <div>{ state.cart.length }</div>}
            {state.cart.length >= 10 && <div>+9</div>}
					</li>
				</ul>
			</div>
      {menuOpen && <Menu />}
      {openOrders && <MyOrder />}
		</nav>
	);
}

export { Header };
