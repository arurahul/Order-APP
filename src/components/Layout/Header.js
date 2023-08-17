import React, { Fragment } from 'react';
import image from '../../assets/meals.jpg'
import HeaderCartButton from './HeaderCartButton';
import classes from './Header.module.css';
function Header(props) {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>ORDER KHANA</h1>
                <HeaderCartButton />
            </header>
            <div className={classes['main-image']}>
                <img src={image} alt='A table full of delicious food!' />
            </div>
        </Fragment>
    );
}

export default Header;