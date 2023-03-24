import React, {useState} from "react";

function PlantCard({name, image, price}) {

const [inStock, setInStock] = useState(true)

function handleInStock() {
  setInStock(inStock => !inStock)
}
return (
  <li className="card">
<img src={image} alt={"plant name"} />
<h4>{name}</h4>
<p>Price: {price}</p>
{inStock ? (
  <button onClick={handleInStock} className="primary">In Stock</button>
) : (
  <button onClick={handleInStock}>Out of Stock</button>
  )}
</li>
);
}

export default PlantCard;
