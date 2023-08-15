export default function Card(props) { //props es lo que esta dentro de card en el archivo app.  es un objeto
   return ( //mi componente card es un elem jsx q retornara la sig plantilla
      <div>
         <button onClick={() => props.onClose()}>X</button>
         <h2> Nombre:{props.name}</h2>
         <h2> Status:{props.status}</h2>
         <h2>species:{props.sprecies}</h2>
         <h2> origin:{props.origin.name}</h2>
         <img src={props.image} alt= "" />
          
         
      </div>
   );
}
/* otra forma es usar discractoring .la parte de la fn queda igual 
  const {name,status,species,origin, etc}
y luego en <h2>{name}</h2> , on click={onClose}
 essoto puede ir en alt de la img 'No se encientra la de imagen del personaje ${name}'
*/