import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Pets.module.css';

const Pets = ({ pets, match }) => (
    <div>
        <h2 className={styles.headline}>Available pets</h2>
        <ul className={styles.list}>
            {pets.map(el => (
                <li key={el.id} className={styles.item}>
                    <NavLink
                        to={`${match.path}/${el.id}`}
                        className={styles.link}
                        activeClassName={styles.active}
                        exact
                    >
                        <img
                            src={el.image}
                            alt={el.name}
                            className={styles.image}
                        />
                        <span>{el.name}</span>
                    </NavLink>
                </li>
            ))}
        </ul>
    </div>
);

Pets.propTypes = {
    pets: PropTypes.array.isRequired,
    match: PropTypes.object.isRequired,
};

export default Pets;
