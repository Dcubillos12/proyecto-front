import './NavBar.styles.css'
function NavBar({ handleChange, handleSubmit }) {
    return (
        <div className='search-box'>
           <form onChange={handleChange}>
               <input type="search" placeholder="Busqueda" />
               <button type="submit" onClick={handleSubmit}>Buscar</button>
           </form>
        </div>
    );
}

export default NavBar