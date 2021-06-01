import styles from './Title.module.css'


const Title = (props) => {
    return (
        <h1 className={styles.Title}>{props.title}</h1>
    );
}

export default Title;