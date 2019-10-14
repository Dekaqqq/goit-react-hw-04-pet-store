import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import styles from './Pet.module.css';

const Pet = ({ pets, match, goBack }) => {
    const pet = pets.find(el => el.id === match.params.id);

    return (
        <>
            {pet && (
                <div className={styles.container}>
                    <div className={styles.btnContainer}>
                        <FontAwesomeIcon
                            icon={faArrowLeft}
                            className={styles.icon}
                        />
                        <button
                            type="button"
                            onClick={goBack}
                            className={styles.button}
                        >
                            Return
                        </button>
                    </div>
                    <h3 className={styles.headline}>
                        All about <span>{pet.name}</span>
                    </h3>
                    <div className={styles.descriptionContainer}>
                        <img
                            src={pet.image}
                            alt={pet.name}
                            className={styles.image}
                        />
                        <div>
                            <p className={styles.description}>
                                Age: <span>{pet.age}</span>
                            </p>
                            <p className={styles.description}>
                                Gender: <span>{pet.gender}</span>
                            </p>
                            <p className={styles.description}>
                                Color: <span>{pet.color}</span>
                            </p>
                            <p className={styles.description}>
                                Breed: <span>{pet.breed}</span>
                            </p>
                        </div>
                    </div>
                    <p>{pet.description}</p>
                </div>
            )}
        </>
    );
};

Pet.propTypes = {
    pets: PropTypes.array.isRequired,
    match: PropTypes.object.isRequired,
    goBack: PropTypes.func.isRequired,
};

export default Pet;
