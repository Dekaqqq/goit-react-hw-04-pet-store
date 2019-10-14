import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Nav.module.css';

const Nav = () => (
    <ul className={styles.list}>
        <li className={styles.listItem}>
            <NavLink
                to="/"
                className={styles.link}
                activeClassName={styles.active}
                exact
            >
                Home
            </NavLink>
        </li>
        <li className={styles.listItem}>
            <NavLink
                to="/pets"
                className={styles.link}
                activeClassName={styles.active}
            >
                Pets
            </NavLink>
        </li>
        <li className={styles.listItem}>
            <NavLink
                to="/about"
                className={styles.link}
                activeClassName={styles.active}
            >
                About
            </NavLink>
        </li>
    </ul>
);

export default Nav;
