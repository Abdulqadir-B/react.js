export const Product = ({ title, price, inStock, categories }) => {
  return (
    <>
      <h2>Title : {title} </h2>
      <p>Price : ${price} </p>
      <p> {inStock ? "Yes" : "No"} </p>
      <p>Categories : {categories.join(", ")} </p>
    </>
  );
};

// use object destructing while using props in the components for good readability