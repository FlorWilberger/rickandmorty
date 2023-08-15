//LA FUNCION ONSEARCH SE DEBE EJECTUR CUANDO SE HAGA CLICK EN EL BOTON
//SEARCHBAR NOS PERMITIRA BUSCAR Y AGREGAR PERSONAJES
export default function SearchBar(props) { //{onSearch}
  const { onSearch } = props;
   return (
      <div>
         <input type='search' />
         <button onClick={onSearch}>Agregar</button> 
      </div>
   );
}
/* exports default function SearchBar({onSearch}) {
const handleSearch = () => {    //funcion q toma el valor de un input y lo retorna 
   const valorDelInput= document.getElementById('mi input')
onSearch(valorDelInput.value)

inputSearch.value='' eso es para borrar una vez q lleno mi input 
}
 <div>
         <input id="mi input" type='search' />
         <button onClick={()=> {handleSearch()}} >Agregar</button> 
      </div>
   );
*/