import CardProduct from "../components/Fragments/CardProduct";

const products = [
  {
    id: 1,
    name: "Shoes 1",
    price: "Rp. 120.000",
    image: "images/shoes-1.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, quae.",
  },
  {
    id: 2,
    name: "Shoes 2",
    price: "Rp. 150.000",
    image: "images/shoes-2.jpg",
    description: "Lorem ipsum dolor sit amet consectetur.",
  },
];

const ProductsPage = () => {
  return (
    <div className="flex justify-center py-5">
      {products.map((product) => (
        <CardProduct key={product.id}>
          <CardProduct.Header image={product.image} />
          <CardProduct.Body name={product.name}>
            {product.description}
          </CardProduct.Body>
          <CardProduct.Footer price={product.price} />
        </CardProduct>
      ))}
    </div>
  );
};

export default ProductsPage;
