import styles from './Search.module.scss';

export const Search = ({setSearch, ListaEESSPrecio}) => {
   
    return (
        <form className="d-flex justify-content-center gap-4 mb-5">
            <input placeholder="Buscar por Municipio o Codigo Postal" type="text" className={styles.input}
            onChange={(e) => {setSearch(e.target.value)
            }}
            />
            <button className={`${styles.btn} btn btn-primary fs-5`}>Buscar</button>
        </form>
    );
};


export default Search;