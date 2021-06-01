import styles from './Character.module.css'

const Character = (props) => {
    return (
        <div className={styles.Character}>
            <img className={styles.CharacterImg} src={props.image} alt="" />
            <span className={styles.CharacterName}>{props.name}</span>
        </div>
    );
}

export default Character;