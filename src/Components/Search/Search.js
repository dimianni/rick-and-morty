import styles from './Search.module.scss'

function Search(props){

    return(
        <input className={styles.Search} type="search" onChange={props.onSearchChange} placeholder="Search..." />
    )

}

export default Search;