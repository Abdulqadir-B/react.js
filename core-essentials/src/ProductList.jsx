export const ProductList = () => {
  const products = [
    { id: 1, title: "TV", price: "$100" },
    { id: 2, title: "Refrigerator", price: "$500" },
    { id: 3, title: "Toaster", price: "$50" },
  ];

  return (
    <>
      <h2>Product Catalogue</h2>
      {products.map((product) => (
        <div key={product.id}>
          <h3>Title: {product.title}</h3>
          <p>Price: {product.price}</p>
        </div>
      ))}
    </>
  );
};
