import styles from './List.module.css';
import Character from '../Character/Character'


const List = (props) => {

    // function shuffle(arr) {
    //     for (let i = arr.length - 1; i > 0; i--) {
    //         const el = arr[i]
    //         const random = Math.floor(Math.random() * (i + 1))
    //         arr[i] = arr[random];
    //         arr[random] = el;
    //     }
    // }
    // shuffle(props.characters)

    const characters = props.characters.map((char, i) => {
        return <Character key={i} name={char.name} image={char.image} />
    })

    return (
        <section className={styles.Characters}>
            <div className={styles.CharactersWrapper}>
                {characters}
            </div>
        </section>
    );

}

export default List;