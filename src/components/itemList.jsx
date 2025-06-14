export function ItemList({items}){
return (
    <div>
        {items.map(art =>(
        <div key={art.id}>
            <img src={art.imagen} alt={art.name}/>
            <p>{art.name}</p>
            <p>{art.description}</p>
            <p>{art.price}</p>
        </div>
        ))}
    </div>
)
}

