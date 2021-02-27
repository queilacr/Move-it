
import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile(){
    const {level}= useContext(ChallengesContext);
    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/queilacr.png" alt="Queila Rodrigues"/>
            <div>
                <strong>Queila Rodrigues</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level {level}
                </p>
            </div>
        </div>
    )
}