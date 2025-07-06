import { Item } from "./item"

export function ItemList({ items }) {
  return (
    <div className="container mt-4">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
        {items.map((art) => (
          <div className="col" key={art.id}>
            <Item art={art} />
          </div>
        ))}
      </div>
    </div>
  )
}
