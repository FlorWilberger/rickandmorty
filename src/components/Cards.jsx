import Card from './Card';

export default function Cards(props) { //direc puedo usar discractoring y no crear el const de abajo . es decir en vez de props {characters}
const{characters}=props
     return(
     <div>
{ characters.map((personaje) => 
<Card
id={personaje.id}
key={personaje.id}
name={personaje.name}
status={personaje.status}
species={personaje.species}
gender={personaje.gender}
origin={personaje.origin.name}
image={personaje.image}
onClose={() => window.alert('Emulamos que se cierra la card')}
 />
)}
</div>
)
  
  
          


}
